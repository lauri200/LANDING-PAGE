-- Corrige l'erreur : new row violates row-level security policy
-- À coller dans Supabase → SQL Editor, puis Run.

-- Le formulaire public doit pouvoir envoyer un dossier même si
-- une session admin est ouverte dans le même navigateur.

drop policy if exists applications_insert_authenticated on public.applications;
create policy applications_insert_authenticated
  on public.applications for insert to authenticated
  with check (status = 'new');

drop policy if exists partners_insert_authenticated on public.partners;
create policy partners_insert_authenticated
  on public.partners for insert to authenticated
  with check (status = 'new');

drop policy if exists uploads_insert_authenticated on storage.objects;
create policy uploads_insert_authenticated
  on storage.objects for insert to authenticated
  with check (
    bucket_id = 'uploads'
    and (name like 'applications/%' or name like 'partners/%')
  );
