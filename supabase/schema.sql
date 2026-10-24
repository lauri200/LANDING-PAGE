-- APTIC-R : tables, stockage et RLS pour Vercel + GitHub
-- À exécuter dans Supabase → SQL Editor (une fois).
-- Pas d'extension custom : gen_random_uuid() est déjà disponible sur Supabase.

create table if not exists public.applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  status text not null default 'new',
  lang text not null default 'fr',
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text not null,
  country text not null,
  city text not null,
  birth_date date not null,
  education text not null,
  field text not null,
  profession text,
  experience text not null,
  digital text,
  skills jsonb not null default '[]'::jsonb,
  arrival date not null,
  duration text not null,
  motivation text not null,
  project text not null,
  source text not null,
  cv_key text,
  letter_key text,
  portfolio_key text,
  appointment_at timestamptz,
  appointment_mode text,
  appointment_place text,
  appointment_note text,
  notes jsonb not null default '[]'::jsonb
);

create table if not exists public.partners (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  status text not null default 'new',
  lang text not null default 'fr',
  org text not null,
  country text not null,
  website text,
  contact text not null,
  email text not null,
  type text not null,
  volunteers text,
  countries text,
  program text,
  message text not null,
  document_key text,
  appointment_at timestamptz,
  appointment_mode text,
  appointment_place text,
  appointment_note text,
  notes jsonb not null default '[]'::jsonb
);

create index if not exists applications_status_idx on public.applications (status);
create index if not exists applications_created_idx on public.applications (created_at desc);
create index if not exists applications_country_idx on public.applications (country);
create index if not exists partners_status_idx on public.partners (status);

create table if not exists public.admin_users (
  user_id uuid primary key references auth.users (id) on delete cascade,
  email text,
  created_at timestamptz not null default now()
);

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.admin_users
    where user_id = auth.uid()
  );
$$;

grant execute on function public.is_admin() to anon, authenticated;

alter table public.applications enable row level security;
alter table public.partners enable row level security;
alter table public.admin_users enable row level security;

drop policy if exists applications_insert_anon on public.applications;
create policy applications_insert_anon
  on public.applications for insert to anon
  with check (status = 'new');

drop policy if exists applications_insert_authenticated on public.applications;
create policy applications_insert_authenticated
  on public.applications for insert to authenticated
  with check (status = 'new');

drop policy if exists applications_admin_all on public.applications;
create policy applications_admin_all
  on public.applications for all to authenticated
  using (public.is_admin())
  with check (public.is_admin());

drop policy if exists partners_insert_anon on public.partners;
create policy partners_insert_anon
  on public.partners for insert to anon
  with check (status = 'new');

drop policy if exists partners_insert_authenticated on public.partners;
create policy partners_insert_authenticated
  on public.partners for insert to authenticated
  with check (status = 'new');

drop policy if exists partners_admin_all on public.partners;
create policy partners_admin_all
  on public.partners for all to authenticated
  using (public.is_admin())
  with check (public.is_admin());

drop policy if exists admin_users_select_self on public.admin_users;
create policy admin_users_select_self
  on public.admin_users for select to authenticated
  using (user_id = auth.uid());

insert into storage.buckets (id, name, public)
values ('uploads', 'uploads', false)
on conflict (id) do nothing;

drop policy if exists uploads_insert_anon on storage.objects;
create policy uploads_insert_anon
  on storage.objects for insert to anon
  with check (
    bucket_id = 'uploads'
    and (name like 'applications/%' or name like 'partners/%')
  );

drop policy if exists uploads_insert_authenticated on storage.objects;
create policy uploads_insert_authenticated
  on storage.objects for insert to authenticated
  with check (
    bucket_id = 'uploads'
    and (name like 'applications/%' or name like 'partners/%')
  );

drop policy if exists uploads_select_admin on storage.objects;
create policy uploads_select_admin
  on storage.objects for select to authenticated
  using (bucket_id = 'uploads' and public.is_admin());

-- Emails de statut et rendez-vous : exécuter aussi supabase/status-emails.sql
