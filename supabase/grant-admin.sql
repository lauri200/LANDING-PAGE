-- Donne le rôle admin à olgaafangnigan@gmail.com
-- À coller dans Supabase → SQL Editor, puis Run.

create table if not exists public.admin_users (
  user_id uuid primary key references auth.users (id) on delete cascade,
  email text,
  created_at timestamptz not null default now()
);

alter table public.admin_users enable row level security;

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

drop policy if exists admin_users_select_self on public.admin_users;
create policy admin_users_select_self
  on public.admin_users for select to authenticated
  using (user_id = auth.uid());

drop policy if exists applications_admin_all on public.applications;
create policy applications_admin_all
  on public.applications for all to authenticated
  using (public.is_admin())
  with check (public.is_admin());

drop policy if exists partners_admin_all on public.partners;
create policy partners_admin_all
  on public.partners for all to authenticated
  using (public.is_admin())
  with check (public.is_admin());

drop policy if exists uploads_select_admin on storage.objects;
create policy uploads_select_admin
  on storage.objects for select to authenticated
  using (bucket_id = 'uploads' and public.is_admin());

insert into public.admin_users (user_id, email)
select id, email
from auth.users
where lower(email) = lower('olgaafangnigan@gmail.com')
on conflict (user_id) do update
set email = excluded.email;

-- Vérification : une ligne doit apparaître
select user_id, email, created_at
from public.admin_users
where lower(email) = lower('olgaafangnigan@gmail.com');
