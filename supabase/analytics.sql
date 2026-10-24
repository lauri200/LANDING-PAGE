-- Mesure des performances (CDC §35–36)
-- À coller dans Supabase → SQL Editor → Run.

create table if not exists public.analytics_events (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  lang text,
  path text
);

alter table public.analytics_events
  drop constraint if exists analytics_events_name_check;

alter table public.analytics_events
  add constraint analytics_events_name_check check (
    name in (
      'page_view',
      'apply_now_click',
      'application_started',
      'application_submitted',
      'partner_request',
      'volunteer_guide_download',
      'language_switch',
      'contact_click'
    )
  );

create index if not exists analytics_events_name_idx on public.analytics_events (name, created_at desc);

alter table public.analytics_events enable row level security;

drop policy if exists analytics_insert_public on public.analytics_events;
create policy analytics_insert_public
  on public.analytics_events for insert to anon, authenticated
  with check (true);

drop policy if exists analytics_select_admin on public.analytics_events;
create policy analytics_select_admin
  on public.analytics_events for select to authenticated
  using (public.is_admin());

create or replace function public.analytics_summary()
returns table(name text, n bigint)
language plpgsql
stable
security definer
set search_path = public
as $$
begin
  if not public.is_admin() then
    raise exception 'Non autorisé';
  end if;
  return query
    select e.name, count(*)::bigint
    from public.analytics_events e
    where e.created_at > now() - interval '180 days'
    group by e.name
    order by count(*) desc;
end;
$$;

grant execute on function public.analytics_summary() to authenticated;
