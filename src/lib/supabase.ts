import { createClient, type SupabaseClient } from "@supabase/supabase-js";

export type Note = { at: string; text: string };

export type Application = {
  id: string;
  created_at: string;
  updated_at: string;
  status: string;
  lang: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  birth_date: string;
  education: string;
  field: string;
  profession: string | null;
  experience: string;
  digital: string | null;
  skills: string[];
  arrival: string;
  duration: string;
  motivation: string;
  project: string;
  source: string;
  cv_key: string | null;
  letter_key: string | null;
  portfolio_key: string | null;
  appointment_at: string | null;
  appointment_mode: string | null;
  appointment_place: string | null;
  appointment_note: string | null;
  notes: Note[];
};

export type Partner = {
  id: string;
  created_at: string;
  updated_at: string;
  status: string;
  lang: string;
  org: string;
  country: string;
  website: string | null;
  contact: string;
  email: string;
  type: string;
  volunteers: string | null;
  countries: string | null;
  program: string | null;
  message: string;
  document_key: string | null;
  appointment_at: string | null;
  appointment_mode: string | null;
  appointment_place: string | null;
  appointment_note: string | null;
  notes: Note[];
};

let client: SupabaseClient | null = null;

export function asNotes(value: unknown): Note[] {
  if (Array.isArray(value)) {
    return value.filter(
      (item): item is Note =>
        Boolean(item) && typeof item === "object" && typeof (item as Note).text === "string",
    );
  }
  if (typeof value === "string") {
    try {
      return asNotes(JSON.parse(value));
    } catch {
      return [];
    }
  }
  return [];
}

function sanitizeFilter(value: string) {
  return value.replace(/[%_,()]/g, " ").trim().slice(0, 80);
}

export function isSupabaseConfigured() {
  return Boolean(import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY);
}

export function getSupabase() {
  if (client) return client;
  const url = import.meta.env.VITE_SUPABASE_URL;
  const key = import.meta.env.VITE_SUPABASE_ANON_KEY;
  if (!url || !key) {
    throw new Error(
      "Supabase n'est pas configuré. Ajoutez VITE_SUPABASE_URL et VITE_SUPABASE_ANON_KEY.",
    );
  }
  client = createClient(url, key);
  return client;
}

function throwIf(error: { message: string } | null) {
  if (error) throw new Error(error.message);
}

function fileName(file: File) {
  return file.name.replace(/[^a-zA-Z0-9._-]+/g, "-").slice(0, 80) || "fichier";
}

async function upload(path: string, file: File) {
  const { error } = await getSupabase().storage.from("uploads").upload(path, file, {
    upsert: false,
    contentType: file.type || "application/octet-stream",
  });
  throwIf(error);
  return path;
}

export async function submitApplication(input: {
  lang: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  birthDate: string;
  education: string;
  field: string;
  profession: string;
  experience: string;
  digital: string;
  skills: string[];
  arrival: string;
  duration: string;
  motivation: string;
  project: string;
  source: string;
  cv: File;
  letter: File;
  portfolio: File | null;
}) {
  const supabase = getSupabase();
  const id = crypto.randomUUID();
  const cvKey = await upload(`applications/${id}/cv-${fileName(input.cv)}`, input.cv);
  const letterKey = await upload(`applications/${id}/letter-${fileName(input.letter)}`, input.letter);
  const portfolioKey = input.portfolio
    ? await upload(`applications/${id}/portfolio-${fileName(input.portfolio)}`, input.portfolio)
    : null;

  const { error } = await supabase.from("applications").insert({
    id,
    status: "new",
    lang: input.lang,
    first_name: input.firstName,
    last_name: input.lastName,
    email: input.email,
    phone: input.phone,
    country: input.country,
    city: input.city,
    birth_date: input.birthDate,
    education: input.education,
    field: input.field,
    profession: input.profession || null,
    experience: input.experience,
    digital: input.digital || null,
    skills: input.skills,
    arrival: input.arrival,
    duration: input.duration,
    motivation: input.motivation,
    project: input.project,
    source: input.source,
    cv_key: cvKey,
    letter_key: letterKey,
    portfolio_key: portfolioKey,
  });
  throwIf(error);
  return id;
}

export async function submitPartner(input: {
  lang: string;
  org: string;
  country: string;
  website: string;
  contact: string;
  email: string;
  type: string;
  volunteers: string;
  countries: string;
  program: string;
  message: string;
  document: File | null;
}) {
  const supabase = getSupabase();
  const id = crypto.randomUUID();
  const documentKey = input.document
    ? await upload(`partners/${id}/document-${fileName(input.document)}`, input.document)
    : null;

  const { error } = await supabase.from("partners").insert({
    id,
    status: "new",
    lang: input.lang,
    org: input.org,
    country: input.country,
    website: input.website || null,
    contact: input.contact,
    email: input.email,
    type: input.type,
    volunteers: input.volunteers || null,
    countries: input.countries || null,
    program: input.program || null,
    message: input.message,
    document_key: documentKey,
  });
  throwIf(error);
  return id;
}

export async function getSession() {
  const { data, error } = await getSupabase().auth.getSession();
  throwIf(error);
  return data.session;
}

export async function signIn(email: string, password: string) {
  const { error } = await getSupabase().auth.signInWithPassword({ email, password });
  throwIf(error);
}

export async function signOut() {
  await getSupabase().auth.signOut();
}

export async function checkIsAdmin() {
  const { data, error } = await getSupabase().rpc("is_admin");
  throwIf(error);
  return data === true;
}

export async function requireAdminSession() {
  const session = await getSession();
  if (!session) return null;
  try {
    const admin = await checkIsAdmin();
    if (!admin) {
      await signOut();
      return null;
    }
  } catch {
    await signOut();
    return null;
  }
  return session;
}

export type ApplicationListItem = Pick<
  Application,
  | "id"
  | "created_at"
  | "status"
  | "first_name"
  | "last_name"
  | "email"
  | "country"
  | "city"
  | "duration"
  | "arrival"
  | "source"
  | "lang"
  | "field"
  | "skills"
>;

export async function listApplications(filters: {
  q?: string;
  status?: string;
  country?: string;
  duration?: string;
  skill?: string;
  lang?: string;
  source?: string;
  field?: string;
  arrivalFrom?: string;
  arrivalTo?: string;
}) {
  let query = getSupabase()
    .from("applications")
    .select(
      "id, created_at, status, first_name, last_name, email, country, city, duration, arrival, experience, source, lang, field, skills",
    )
    .order("created_at", { ascending: false })
    .limit(500);

  if (filters.status) query = query.eq("status", filters.status);
  if (filters.country) query = query.ilike("country", `%${sanitizeFilter(filters.country)}%`);
  if (filters.duration) query = query.eq("duration", filters.duration);
  if (filters.lang) query = query.eq("lang", filters.lang);
  if (filters.source) query = query.ilike("source", `%${sanitizeFilter(filters.source)}%`);
  if (filters.field) query = query.ilike("field", `%${sanitizeFilter(filters.field)}%`);
  if (filters.arrivalFrom) query = query.gte("arrival", filters.arrivalFrom);
  if (filters.arrivalTo) query = query.lte("arrival", filters.arrivalTo);
  if (filters.q) {
    const q = sanitizeFilter(filters.q);
    if (q) {
      query = query.or(
        `first_name.ilike.%${q}%,last_name.ilike.%${q}%,email.ilike.%${q}%,country.ilike.%${q}%,field.ilike.%${q}%,phone.ilike.%${q}%`,
      );
    }
  }

  const { data, error } = await query;
  throwIf(error);
  const items = (data || []) as ApplicationListItem[];
  if (!filters.skill) return items;
  const skill = filters.skill.toLowerCase();
  return items.filter((row) => JSON.stringify(row.skills || []).toLowerCase().includes(skill));
}

export async function getApplication(id: string) {
  const { data, error } = await getSupabase().from("applications").select("*").eq("id", id).single();
  throwIf(error);
  return data as Application;
}

export type AppointmentPatch = {
  at: string | null;
  mode: string;
  place: string;
  note: string;
};

function appointmentPayload(appointment: AppointmentPatch) {
  return {
    appointment_at: appointment.at || null,
    appointment_mode: appointment.mode || null,
    appointment_place: appointment.place.trim() || null,
    appointment_note: appointment.note.trim() || null,
  };
}

export async function patchApplication(
  id: string,
  patch: { status?: string; note?: string; appointment?: AppointmentPatch },
) {
  const current = await getApplication(id);
  const notes = asNotes(current.notes);
  if (patch.note?.trim()) notes.push({ at: new Date().toISOString(), text: patch.note.trim() });
  const payload: Record<string, unknown> = {
    notes,
    updated_at: new Date().toISOString(),
  };
  if (patch.status && patch.status !== current.status) {
    payload.status = patch.status;
    notes.push({ at: new Date().toISOString(), text: `Statut : ${current.status} → ${patch.status}` });
  }
  if (patch.appointment) Object.assign(payload, appointmentPayload(patch.appointment));
  const { data, error } = await getSupabase()
    .from("applications")
    .update(payload)
    .eq("id", id)
    .select("*")
    .single();
  throwIf(error);
  return data as Application;
}

export async function listPartners(filters: { q?: string; status?: string; country?: string }) {
  let query = getSupabase()
    .from("partners")
    .select("id, created_at, status, org, country, email, type, contact, lang")
    .order("created_at", { ascending: false })
    .limit(500);
  if (filters.status) query = query.eq("status", filters.status);
  if (filters.country) query = query.ilike("country", `%${sanitizeFilter(filters.country)}%`);
  if (filters.q) {
    const q = sanitizeFilter(filters.q);
    if (q) {
      query = query.or(
        `org.ilike.%${q}%,email.ilike.%${q}%,country.ilike.%${q}%,contact.ilike.%${q}%`,
      );
    }
  }
  const { data, error } = await query;
  throwIf(error);
  return (data || []) as Pick<
    Partner,
    "id" | "created_at" | "status" | "org" | "country" | "email" | "type" | "contact"
  >[];
}

export async function getPartner(id: string) {
  const { data, error } = await getSupabase().from("partners").select("*").eq("id", id).single();
  throwIf(error);
  return data as Partner;
}

export async function patchPartner(
  id: string,
  patch: { status?: string; note?: string; appointment?: AppointmentPatch },
) {
  const current = await getPartner(id);
  const notes = asNotes(current.notes);
  if (patch.note?.trim()) notes.push({ at: new Date().toISOString(), text: patch.note.trim() });
  const payload: Record<string, unknown> = {
    notes,
    updated_at: new Date().toISOString(),
  };
  if (patch.status && patch.status !== current.status) {
    payload.status = patch.status;
    notes.push({ at: new Date().toISOString(), text: `Statut : ${current.status} → ${patch.status}` });
  }
  if (patch.appointment) Object.assign(payload, appointmentPayload(patch.appointment));
  const { data, error } = await getSupabase()
    .from("partners")
    .update(payload)
    .eq("id", id)
    .select("*")
    .single();
  throwIf(error);
  return data as Partner;
}

export async function mailIsConfigured() {
  const { data, error } = await getSupabase().rpc("mail_is_configured");
  throwIf(error);
  return data === true;
}

export async function adminSendMail(
  kind: "application" | "partner",
  id: string,
  subject: string,
  body: string,
) {
  const { error } = await getSupabase().rpc("admin_send_mail", {
    p_kind: kind,
    p_id: id,
    p_subject: subject,
    p_body: body,
  });
  throwIf(error);
}

export async function getStats() {
  const supabase = getSupabase();
  const applications = await supabase
    .from("applications")
    .select("status, country, duration, source, lang, field");
  throwIf(applications.error);
  const partners = await supabase.from("partners").select("status");
  throwIf(partners.error);
  return {
    totals: {
      applications: applications.data?.length || 0,
      partners: partners.data?.length || 0,
    },
    applications: applications.data || [],
    partners: partners.data || [],
  };
}

export async function signedFileUrl(key: string) {
  const { data, error } = await getSupabase().storage.from("uploads").createSignedUrl(key, 600);
  throwIf(error);
  if (!data?.signedUrl) throw new Error("Fichier introuvable.");
  return data.signedUrl;
}

export async function fetchAllForExport(type: "applications" | "partners") {
  const { data, error } = await getSupabase().from(type).select("*").order("created_at", {
    ascending: false,
  });
  throwIf(error);
  return data || [];
}
