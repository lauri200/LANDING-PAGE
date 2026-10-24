-- Emails automatiques de statut + rendez-vous (candidats et partenaires)
-- 1) Créez un compte gratuit sur https://resend.com → API Keys → Create
-- 2) Remplacez la valeur re_REMPLACEZ_MOI ci-dessous
-- 3) Collez tout le fichier dans Supabase → SQL Editor → Run
--
-- Test : Resend n'envoie qu'à l'email du compte tant que le domaine n'est pas vérifié.
-- Production : Settings → Domains → ajouter aptic-r.org, puis mail_from = APTIC-R <bonjour@aptic-r.org>

create extension if not exists pg_net;

alter table public.applications add column if not exists appointment_at timestamptz;
alter table public.applications add column if not exists appointment_mode text;
alter table public.applications add column if not exists appointment_place text;
alter table public.applications add column if not exists appointment_note text;

alter table public.partners add column if not exists appointment_at timestamptz;
alter table public.partners add column if not exists appointment_mode text;
alter table public.partners add column if not exists appointment_place text;
alter table public.partners add column if not exists appointment_note text;

create table if not exists public.app_config (
  key text primary key,
  value text not null
);

alter table public.app_config enable row level security;
revoke all on table public.app_config from public, anon, authenticated;

insert into public.app_config (key, value) values
  ('resend_api_key', 're_REMPLACEZ_MOI'),
  ('mail_from', 'APTIC-R <beth.t@example.com>')
on conflict (key) do nothing;

create or replace function public.html_escape(t text)
returns text
language sql
immutable
as $$
  select replace(replace(replace(replace(coalesce(t, ''), '&', '&amp;'), '<', '&lt;'), '>', '&gt;'), '"', '&quot;');
$$;

create or replace function public.mail_is_configured()
returns boolean
language plpgsql
stable
security definer
set search_path = public
as $$
declare
  api_key text;
begin
  if not public.is_admin() then
    return false;
  end if;
  select value into api_key from public.app_config where key = 'resend_api_key';
  return api_key is not null
    and api_key not like 're_REMPLACEZ%'
    and length(api_key) > 12;
end;
$$;

grant execute on function public.mail_is_configured() to authenticated;

create or replace function public.send_resend_email(
  to_email text,
  subject text,
  html text,
  ics text default null
)
returns bigint
language plpgsql
security definer
set search_path = public, net
as $$
declare
  api_key text;
  mail_from text;
  body jsonb;
  request_id bigint;
begin
  if to_email is null or position('@' in to_email) = 0 then
    return null;
  end if;

  select value into api_key from public.app_config where key = 'resend_api_key';
  select value into mail_from from public.app_config where key = 'mail_from';

  if api_key is null or api_key like 're_REMPLACEZ%' or length(api_key) < 12 then
    raise log 'APTIC-R: clé Resend non configurée, email non envoyé';
    return null;
  end if;

  body := jsonb_build_object(
    'from', coalesce(mail_from, 'APTIC-R <beth.t@example.com>'),
    'to', jsonb_build_array(to_email),
    'subject', subject,
    'html', html
  );

  if ics is not null and length(ics) > 20 then
    body := body || jsonb_build_object(
      'attachments', jsonb_build_array(
        jsonb_build_object(
          'filename', 'rendez-vous-aptic-r.ics',
          'content', encode(convert_to(ics, 'UTF8'), 'base64'),
          'content_type', 'text/calendar; charset=utf-8; method=REQUEST'
        )
      )
    );
  end if;

  request_id := null;
  begin
    select net.http_post(
      url := 'https://api.resend.com/emails',
      headers := jsonb_build_object(
        'Authorization', 'Bearer ' || api_key,
        'Content-Type', 'application/json'
      ),
      body := body
    ) into request_id;
  exception when others then
    raise log 'APTIC-R: envoi Resend impossible (%)', sqlerrm;
    return null;
  end;

  return request_id;
end;
$$;

revoke all on function public.send_resend_email(text, text, text, text) from public, anon, authenticated;

create or replace function public.appointment_ics(
  uid text,
  summary text,
  description text,
  location text,
  starts_at timestamptz
)
returns text
language plpgsql
immutable
as $$
declare
  nl text := E'\r\n';
  ends_at timestamptz;
begin
  if starts_at is null then
    return null;
  end if;
  ends_at := starts_at + interval '45 minutes';
  return 'BEGIN:VCALENDAR' || nl
    || 'VERSION:2.0' || nl
    || 'PRODID:-//APTIC-R//Volontariat//FR' || nl
    || 'METHOD:REQUEST' || nl
    || 'CALSCALE:GREGORIAN' || nl
    || 'BEGIN:VEVENT' || nl
    || 'UID:' || uid || '@aptic-r.org' || nl
    || 'DTSTAMP:' || to_char(timezone('UTC', now()), 'YYYYMMDD"T"HH24MISS"Z"') || nl
    || 'DTSTART:' || to_char(timezone('UTC', starts_at), 'YYYYMMDD"T"HH24MISS"Z"') || nl
    || 'DTEND:' || to_char(timezone('UTC', ends_at), 'YYYYMMDD"T"HH24MISS"Z"') || nl
    || 'SUMMARY:' || replace(coalesce(summary, 'APTIC-R'), E'\n', ' ') || nl
    || 'DESCRIPTION:' || replace(coalesce(description, ''), E'\n', '\n') || nl
    || 'LOCATION:' || replace(coalesce(location, ''), E'\n', ' ') || nl
    || 'END:VEVENT' || nl
    || 'END:VCALENDAR';
end;
$$;

create or replace function public.status_email_copy(p_kind text, p_status text, p_lang text)
returns table(subject text, body text)
language plpgsql
stable
as $$
declare
  lang text := case when p_lang in ('en', 'de') then p_lang else 'fr' end;
begin
  -- Candidatures
  if p_kind = 'application' then
    if p_status = 'new' then
      if lang = 'en' then
        return query select 'APTIC-R — we received your application',
          'Hello {{name}},' || E'\n\n' || 'We have received your application for the international volunteer programme. We will review it and write to you at each step.';
      elsif lang = 'de' then
        return query select 'APTIC-R — wir haben Ihre Bewerbung erhalten',
          'Guten Tag {{name}},' || E'\n\n' || 'Wir haben Ihre Bewerbung für das internationale Freiwilligenprogramm erhalten. Wir prüfen sie und schreiben Ihnen bei jedem Schritt.';
      else
        return query select 'APTIC-R — nous avons bien reçu votre candidature',
          'Bonjour {{name}},' || E'\n\n' || 'Nous avons bien reçu votre candidature au programme de volontariat international. Nous l''examinons et nous vous écrivons à chaque étape.';
      end if;
    elsif p_status = 'review' then
      if lang = 'en' then
        return query select 'APTIC-R — your application is under review',
          'Hello {{name}},' || E'\n\n' || 'Your application is now under review by the APTIC-R team.';
      elsif lang = 'de' then
        return query select 'APTIC-R — Ihre Bewerbung wird geprüft',
          'Guten Tag {{name}},' || E'\n\n' || 'Ihre Bewerbung wird derzeit vom APTIC-R-Team geprüft.';
      else
        return query select 'APTIC-R — votre candidature est en cours d''examen',
          'Bonjour {{name}},' || E'\n\n' || 'Votre candidature est désormais en cours d''examen par l''équipe APTIC-R.';
      end if;
    elsif p_status = 'selected' then
      if lang = 'en' then
        return query select 'APTIC-R — you have been shortlisted',
          'Hello {{name}},' || E'\n\n' || 'You have been shortlisted. The next step may be an interview.';
      elsif lang = 'de' then
        return query select 'APTIC-R — Sie sind in der engeren Auswahl',
          'Guten Tag {{name}},' || E'\n\n' || 'Sie sind in der engeren Auswahl. Der nächste Schritt kann ein Gespräch sein.';
      else
        return query select 'APTIC-R — vous êtes présélectionné(e)',
          'Bonjour {{name}},' || E'\n\n' || 'Vous avez été présélectionné(e). La prochaine étape peut être un entretien.';
      end if;
    elsif p_status = 'interview' then
      if lang = 'en' then
        return query select 'APTIC-R — interview invitation',
          'Hello {{name}},' || E'\n\n' || 'We would like to invite you to an interview for the volunteer programme.';
      elsif lang = 'de' then
        return query select 'APTIC-R — Einladung zum Gespräch',
          'Guten Tag {{name}},' || E'\n\n' || 'Wir laden Sie zu einem Gespräch über das Freiwilligenprogramm ein.';
      else
        return query select 'APTIC-R — invitation à un entretien',
          'Bonjour {{name}},' || E'\n\n' || 'Nous vous invitons à un entretien dans le cadre du programme de volontariat.';
      end if;
    elsif p_status = 'chosen' then
      if lang = 'en' then
        return query select 'APTIC-R — you have been selected',
          'Hello {{name}},' || E'\n\n' || 'Congratulations: you have been selected for the mission. We will now prepare the next steps with you.';
      elsif lang = 'de' then
        return query select 'APTIC-R — Sie wurden ausgewählt',
          'Guten Tag {{name}},' || E'\n\n' || 'Herzlichen Glückwunsch: Sie wurden für den Einsatz ausgewählt. Wir bereiten die nächsten Schritte mit Ihnen vor.';
      else
        return query select 'APTIC-R — vous avez été retenu(e)',
          'Bonjour {{name}},' || E'\n\n' || 'Félicitations : vous avez été retenu(e) pour la mission. Nous préparons maintenant les prochaines étapes avec vous.';
      end if;
    elsif p_status = 'partner_validation' then
      if lang = 'en' then
        return query select 'APTIC-R — partner validation',
          'Hello {{name}},' || E'\n\n' || 'Your file is being reviewed with our European partners.';
      elsif lang = 'de' then
        return query select 'APTIC-R — Partnerprüfung',
          'Guten Tag {{name}},' || E'\n\n' || 'Ihr Dossier wird derzeit mit unseren europäischen Partnern geprüft.';
      else
        return query select 'APTIC-R — validation partenaires',
          'Bonjour {{name}},' || E'\n\n' || 'Votre dossier est en cours de validation auprès de nos partenaires européens.';
      end if;
    elsif p_status = 'preparation' then
      if lang = 'en' then
        return query select 'APTIC-R — mission preparation',
          'Hello {{name}},' || E'\n\n' || 'Preparation for your arrival in Togo has started. We will share practical details with you.';
      elsif lang = 'de' then
        return query select 'APTIC-R — Vorbereitung des Einsatzes',
          'Guten Tag {{name}},' || E'\n\n' || 'Die Vorbereitung Ihrer Ankunft in Togo hat begonnen. Wir teilen Ihnen die praktischen Informationen mit.';
      else
        return query select 'APTIC-R — préparation de la mission',
          'Bonjour {{name}},' || E'\n\n' || 'La préparation de votre arrivée au Togo a commencé. Nous vous communiquerons les informations pratiques.';
      end if;
    elsif p_status = 'arrived' then
      if lang = 'en' then
        return query select 'APTIC-R — welcome to Togo',
          'Hello {{name}},' || E'\n\n' || 'Welcome to Agbélouvé. We are happy to start this mission with you.';
      elsif lang = 'de' then
        return query select 'APTIC-R — willkommen in Togo',
          'Guten Tag {{name}},' || E'\n\n' || 'Willkommen in Agbélouvé. Wir freuen uns, diesen Einsatz mit Ihnen zu beginnen.';
      else
        return query select 'APTIC-R — bienvenue au Togo',
          'Bonjour {{name}},' || E'\n\n' || 'Bienvenue à Agbélouvé. Nous sommes heureux de commencer cette mission avec vous.';
      end if;
    elsif p_status = 'completed' then
      if lang = 'en' then
        return query select 'APTIC-R — your mission is complete',
          'Hello {{name}},' || E'\n\n' || 'Your volunteer mission with APTIC-R is complete. Thank you for your commitment.';
      elsif lang = 'de' then
        return query select 'APTIC-R — Ihr Einsatz ist abgeschlossen',
          'Guten Tag {{name}},' || E'\n\n' || 'Ihr Freiwilligeneinsatz bei APTIC-R ist abgeschlossen. Danke für Ihr Engagement.';
      else
        return query select 'APTIC-R — votre mission est terminée',
          'Bonjour {{name}},' || E'\n\n' || 'Votre mission de volontariat avec APTIC-R est terminée. Merci pour votre engagement.';
      end if;
    elsif p_status = 'refused' then
      if lang = 'en' then
        return query select 'APTIC-R — update on your application',
          'Hello {{name}},' || E'\n\n' || 'Thank you for your application. We are unable to take it further this time. We wish you all the best.';
      elsif lang = 'de' then
        return query select 'APTIC-R — Entscheidung zu Ihrer Bewerbung',
          'Guten Tag {{name}},' || E'\n\n' || 'Vielen Dank für Ihre Bewerbung. Wir können sie diesmal nicht weiterverfolgen. Wir wünschen Ihnen alles Gute.';
      else
        return query select 'APTIC-R — décision concernant votre candidature',
          'Bonjour {{name}},' || E'\n\n' || 'Merci pour votre candidature. Nous ne pouvons pas y donner suite cette fois. Nous vous souhaitons le meilleur.';
      end if;
    end if;
  end if;

  -- Partenaires
  if p_kind = 'partner' then
    if p_status = 'new' then
      if lang = 'en' then
        return query select 'APTIC-R — we received your partnership request',
          'Hello {{name}},' || E'\n\n' || 'We have received your partnership request and will get back to you.';
      elsif lang = 'de' then
        return query select 'APTIC-R — wir haben Ihre Partnerschaftsanfrage erhalten',
          'Guten Tag {{name}},' || E'\n\n' || 'Wir haben Ihre Partnerschaftsanfrage erhalten und melden uns bei Ihnen.';
      else
        return query select 'APTIC-R — nous avons bien reçu votre demande de partenariat',
          'Bonjour {{name}},' || E'\n\n' || 'Nous avons bien reçu votre demande de partenariat et nous revenons vers vous.';
      end if;
    elsif p_status = 'review' then
      if lang = 'en' then
        return query select 'APTIC-R — your request is under review',
          'Hello {{name}},' || E'\n\n' || 'Your partnership request is being reviewed.';
      elsif lang = 'de' then
        return query select 'APTIC-R — Ihre Anfrage wird geprüft',
          'Guten Tag {{name}},' || E'\n\n' || 'Ihre Partnerschaftsanfrage wird geprüft.';
      else
        return query select 'APTIC-R — votre demande est en cours d''examen',
          'Bonjour {{name}},' || E'\n\n' || 'Votre demande de partenariat est en cours d''examen.';
      end if;
    elsif p_status = 'discussion' then
      if lang = 'en' then
        return query select 'APTIC-R — meeting invitation',
          'Hello {{name}},' || E'\n\n' || 'We would like to schedule a meeting to discuss a possible partnership.';
      elsif lang = 'de' then
        return query select 'APTIC-R — Einladung zu einem Gespräch',
          'Guten Tag {{name}},' || E'\n\n' || 'Wir möchten ein Gespräch vereinbaren, um eine mögliche Partnerschaft zu besprechen.';
      else
        return query select 'APTIC-R — invitation à un rendez-vous',
          'Bonjour {{name}},' || E'\n\n' || 'Nous souhaitons convenir d''un rendez-vous pour discuter d''un partenariat.';
      end if;
    elsif p_status = 'accepted' then
      if lang = 'en' then
        return query select 'APTIC-R — partnership accepted',
          'Hello {{name}},' || E'\n\n' || 'We are pleased to move forward with a partnership.';
      elsif lang = 'de' then
        return query select 'APTIC-R — Partnerschaft angenommen',
          'Guten Tag {{name}},' || E'\n\n' || 'Wir freuen uns, die Partnerschaft weiterzuführen.';
      else
        return query select 'APTIC-R — partenariat accepté',
          'Bonjour {{name}},' || E'\n\n' || 'Nous sommes heureux d''avancer ensemble dans ce partenariat.';
      end if;
    elsif p_status = 'declined' then
      if lang = 'en' then
        return query select 'APTIC-R — update on your partnership request',
          'Hello {{name}},' || E'\n\n' || 'Thank you for your interest. We are unable to move forward with a partnership at this time.';
      elsif lang = 'de' then
        return query select 'APTIC-R — Entscheidung zu Ihrer Anfrage',
          'Guten Tag {{name}},' || E'\n\n' || 'Vielen Dank für Ihr Interesse. Eine Partnerschaft ist derzeit nicht möglich.';
      else
        return query select 'APTIC-R — décision concernant votre demande',
          'Bonjour {{name}},' || E'\n\n' || 'Merci pour votre intérêt. Nous ne pouvons pas donner suite à un partenariat pour le moment.';
      end if;
    end if;
  end if;

  if lang = 'en' then
    return query select 'APTIC-R — update',
      'Hello {{name}},' || E'\n\n' || 'There is an update on your file.';
  elsif lang = 'de' then
    return query select 'APTIC-R — Aktualisierung',
      'Guten Tag {{name}},' || E'\n\n' || 'Es gibt eine Aktualisierung zu Ihrem Dossier.';
  else
    return query select 'APTIC-R — mise à jour de votre dossier',
      'Bonjour {{name}},' || E'\n\n' || 'Votre dossier a été mis à jour.';
  end if;
end;
$$;

create or replace function public.appointment_block(
  p_lang text,
  p_at timestamptz,
  p_mode text,
  p_place text,
  p_note text
)
returns text
language plpgsql
stable
as $$
declare
  lang text := case when p_lang in ('en', 'de') then p_lang else 'fr' end;
  mode_label text;
  when_label text;
  title text;
  missing text;
  html text := '';
begin
  if p_at is null and coalesce(p_place, '') = '' and coalesce(p_note, '') = '' then
    if lang = 'en' then
      missing := 'Practical details for the meeting will follow shortly.';
    elsif lang = 'de' then
      missing := 'Die praktischen Angaben zum Termin folgen in Kürze.';
    else
      missing := 'Les informations pratiques du rendez-vous vous seront communiquées rapidement.';
    end if;
    return '<p style="margin:16px 0 0">' || missing || '</p>';
  end if;

  mode_label := case p_mode
    when 'visio' then case lang when 'en' then 'Video call' when 'de' then 'Videogespräch' else 'Visioconférence' end
    when 'phone' then case lang when 'en' then 'Phone' when 'de' then 'Telefon' else 'Téléphone' end
    when 'onsite' then case lang when 'en' then 'In person' when 'de' then 'Vor Ort' else 'Sur place' end
    else coalesce(p_mode, '')
  end;

  if lang = 'en' then
    title := 'Your appointment';
  elsif lang = 'de' then
    title := 'Ihr Termin';
  else
    title := 'Votre rendez-vous';
  end if;

  html := '<div style="margin:24px 0;padding:16px;background:#F8F4EE;border-left:4px solid #2A6247">'
    || '<p style="margin:0 0 8px;font-weight:700;color:#1B3A5C">' || title || '</p>';

  if p_at is not null then
    when_label := to_char(timezone('Africa/Lome', p_at), 'DD/MM/YYYY à HH24:MI')
      || case lang
        when 'en' then ' (Togo time, GMT)'
        when 'de' then ' (Togo-Zeit, GMT)'
        else ' (heure du Togo, GMT)'
      end;
    html := html || '<p style="margin:0 0 6px"><strong>'
      || case lang when 'en' then 'Date' when 'de' then 'Datum' else 'Date' end
      || ' :</strong> ' || public.html_escape(when_label) || '</p>';
  end if;

  if mode_label <> '' then
    html := html || '<p style="margin:0 0 6px"><strong>'
      || case lang when 'en' then 'Format' when 'de' then 'Art' else 'Modalité' end
      || ' :</strong> ' || public.html_escape(mode_label) || '</p>';
  end if;

  if coalesce(p_place, '') <> '' then
    html := html || '<p style="margin:0 0 6px"><strong>'
      || case lang when 'en' then 'Place / link' when 'de' then 'Ort / Link' else 'Lieu / lien' end
      || ' :</strong> ' || public.html_escape(p_place) || '</p>';
  end if;

  if coalesce(p_note, '') <> '' then
    html := html || '<p style="margin:8px 0 0;white-space:pre-wrap">' || public.html_escape(p_note) || '</p>';
  end if;

  html := html || '</div>';
  return html;
end;
$$;

create or replace function public.wrap_status_email(p_body text, p_appointment_html text)
returns text
language sql
immutable
as $$
  select '<div style="font-family:Georgia,serif;font-size:16px;line-height:1.55;color:#1B3A5C;max-width:640px">'
    || '<p style="letter-spacing:.18em;text-transform:uppercase;font-size:12px;color:#2A6247">APTIC-R</p>'
    || '<div style="white-space:pre-wrap">' || p_body || '</div>'
    || coalesce(p_appointment_html, '')
    || '<p style="margin-top:28px">APTIC-R · Agbélouvé, Togo</p>'
    || '</div>';
$$;

create or replace function public.queue_status_email(
  p_kind text,
  p_id uuid,
  p_to text,
  p_lang text,
  p_name text,
  p_status text,
  p_appointment_at timestamptz,
  p_appointment_mode text,
  p_appointment_place text,
  p_appointment_note text
)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  copy_subject text;
  copy_body text;
  html_body text;
  include_appointment boolean;
  appointment_html text := '';
  ics text;
  request_id bigint;
begin
  select s.subject, s.body
  into copy_subject, copy_body
  from public.status_email_copy(p_kind, p_status, p_lang) as s;

  html_body := replace(public.html_escape(copy_body), '{{name}}', public.html_escape(p_name));
  html_body := replace(html_body, E'\n', '<br/>');

  include_appointment := p_status in ('interview', 'discussion')
    or p_appointment_at is not null
    or coalesce(p_appointment_place, '') <> '';

  if include_appointment then
    appointment_html := public.appointment_block(
      p_lang, p_appointment_at, p_appointment_mode, p_appointment_place, p_appointment_note
    );
    ics := public.appointment_ics(
      p_id::text,
      copy_subject,
      copy_body,
      coalesce(p_appointment_place, ''),
      p_appointment_at
    );
  end if;

  request_id := public.send_resend_email(
    p_to,
    copy_subject,
    public.wrap_status_email(html_body, appointment_html),
    ics
  );

  return request_id is not null;
end;
$$;

revoke all on function public.queue_status_email(text, uuid, text, text, text, text, timestamptz, text, text, text)
  from public, anon, authenticated;

create or replace function public.applications_notify_status()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if TG_OP = 'UPDATE'
    and NEW.status is not distinct from OLD.status
    and NEW.appointment_at is not distinct from OLD.appointment_at
    and NEW.appointment_mode is not distinct from OLD.appointment_mode
    and NEW.appointment_place is not distinct from OLD.appointment_place
    and NEW.appointment_note is not distinct from OLD.appointment_note
  then
    return NEW;
  end if;

  begin
    if public.queue_status_email(
      'application',
      NEW.id,
      NEW.email,
      NEW.lang,
      trim(both from coalesce(NEW.first_name, '') || ' ' || coalesce(NEW.last_name, '')),
      NEW.status,
      NEW.appointment_at,
      NEW.appointment_mode,
      NEW.appointment_place,
      NEW.appointment_note
    ) then
      NEW.notes := coalesce(NEW.notes, '[]'::jsonb) || jsonb_build_array(
        jsonb_build_object(
          'at', to_json(now()) #>> '{}',
          'text', 'Email envoyé à ' || NEW.email || ' — statut ' || NEW.status
        )
      );
    end if;
  exception when others then
    raise log 'APTIC-R: email candidature non envoyé (%)', sqlerrm;
  end;

  return NEW;
end;
$$;

create or replace function public.partners_notify_status()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if TG_OP = 'UPDATE'
    and NEW.status is not distinct from OLD.status
    and NEW.appointment_at is not distinct from OLD.appointment_at
    and NEW.appointment_mode is not distinct from OLD.appointment_mode
    and NEW.appointment_place is not distinct from OLD.appointment_place
    and NEW.appointment_note is not distinct from OLD.appointment_note
  then
    return NEW;
  end if;

  begin
    if public.queue_status_email(
      'partner',
      NEW.id,
      NEW.email,
      NEW.lang,
      coalesce(NEW.contact, NEW.org),
      NEW.status,
      NEW.appointment_at,
      NEW.appointment_mode,
      NEW.appointment_place,
      NEW.appointment_note
    ) then
      NEW.notes := coalesce(NEW.notes, '[]'::jsonb) || jsonb_build_array(
        jsonb_build_object(
          'at', to_json(now()) #>> '{}',
          'text', 'Email envoyé à ' || NEW.email || ' — statut ' || NEW.status
        )
      );
    end if;
  exception when others then
    raise log 'APTIC-R: email partenaire non envoyé (%)', sqlerrm;
  end;

  return NEW;
end;
$$;

drop trigger if exists applications_notify_status on public.applications;
create trigger applications_notify_status
  before insert or update on public.applications
  for each row
  execute procedure public.applications_notify_status();

drop trigger if exists partners_notify_status on public.partners;
create trigger partners_notify_status
  before insert or update on public.partners
  for each row
  execute procedure public.partners_notify_status();

create or replace function public.admin_send_mail(
  p_kind text,
  p_id uuid,
  p_subject text,
  p_body text
)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  to_email text;
  html text;
begin
  if not public.is_admin() then
    raise exception 'Non autorisé';
  end if;
  if p_subject is null or length(trim(p_subject)) < 3 or p_body is null or length(trim(p_body)) < 3 then
    raise exception 'Sujet ou message trop court';
  end if;

  if p_kind = 'application' then
    select email into to_email from public.applications where id = p_id;
    update public.applications
      set notes = coalesce(notes, '[]'::jsonb) || jsonb_build_array(
        jsonb_build_object(
          'at', to_json(now()) #>> '{}',
          'text', 'Email manuel — ' || trim(p_subject) || E'\n' || trim(p_body)
        )
      ),
      updated_at = now()
    where id = p_id;
  elsif p_kind = 'partner' then
    select email into to_email from public.partners where id = p_id;
    update public.partners
      set notes = coalesce(notes, '[]'::jsonb) || jsonb_build_array(
        jsonb_build_object(
          'at', to_json(now()) #>> '{}',
          'text', 'Email manuel — ' || trim(p_subject) || E'\n' || trim(p_body)
        )
      ),
      updated_at = now()
    where id = p_id;
  else
    raise exception 'Type inconnu';
  end if;

  if to_email is null then
    raise exception 'Dossier introuvable';
  end if;

  html := public.wrap_status_email(
    replace(public.html_escape(trim(p_body)), E'\n', '<br/>'),
    null
  );

  perform public.send_resend_email(to_email, trim(p_subject), html, null);
  return true;
end;
$$;

grant execute on function public.admin_send_mail(text, uuid, text, text) to authenticated;

-- Pour mettre à jour la clé plus tard :
-- update public.app_config set value = 're_VOTRE_CLE' where key = 'resend_api_key';
-- update public.app_config set value = 'APTIC-R <bonjour@aptic-r.org>' where key = 'mail_from';
