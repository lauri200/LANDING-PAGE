import { fetchAllForExport } from "../lib/supabase";
import { APPLICATION_STATUS_LABELS, APPOINTMENT_MODE_LABELS, PARTNER_STATUS_LABELS } from "./labels";

function csvEscape(value: unknown) {
  let text = String(value ?? "");
  if (Array.isArray(value) || (value && typeof value === "object")) {
    text = JSON.stringify(value);
  }
  if (/^\s*[=+\-@]/.test(text)) text = `'${text}`;
  return `"${text.replace(/"/g, '""')}"`;
}

const APPLICATION_COLUMNS: [string, string][] = [
  ["created_at", "Date"],
  ["status", "Statut"],
  ["first_name", "Prénom"],
  ["last_name", "Nom"],
  ["email", "Email"],
  ["phone", "Téléphone"],
  ["country", "Pays"],
  ["city", "Ville"],
  ["lang", "Langue"],
  ["field", "Métier / domaine"],
  ["profession", "Profession"],
  ["education", "Formation"],
  ["experience", "Expérience"],
  ["skills", "Compétences"],
  ["arrival", "Arrivée"],
  ["duration", "Durée (mois)"],
  ["appointment_at", "Rendez-vous"],
  ["appointment_mode", "Modalité rendez-vous"],
  ["appointment_place", "Lieu / lien"],
  ["source", "Source / campagne"],
  ["motivation", "Motivation"],
  ["project", "Projet"],
];

const PARTNER_COLUMNS: [string, string][] = [
  ["created_at", "Date"],
  ["status", "Statut"],
  ["org", "Organisation"],
  ["country", "Pays"],
  ["website", "Site"],
  ["contact", "Contact"],
  ["email", "Email"],
  ["type", "Type"],
  ["volunteers", "Volontaires"],
  ["countries", "Pays concernés"],
  ["program", "Programme"],
  ["appointment_at", "Rendez-vous"],
  ["appointment_mode", "Modalité rendez-vous"],
  ["appointment_place", "Lieu / lien"],
  ["message", "Message"],
  ["lang", "Langue"],
];

function cell(type: "applications" | "partners", key: string, row: Record<string, unknown>) {
  if (key === "status") {
    const raw = String(row.status ?? "");
    return type === "partners"
      ? PARTNER_STATUS_LABELS[raw] || raw
      : APPLICATION_STATUS_LABELS[raw] || raw;
  }
  if (key === "appointment_mode") {
    const raw = String(row.appointment_mode ?? "");
    return APPOINTMENT_MODE_LABELS[raw] || raw;
  }
  return row[key];
}

export async function downloadCsv(type: "applications" | "partners") {
  const rows = (await fetchAllForExport(type)) as Record<string, unknown>[];
  const columns = type === "partners" ? PARTNER_COLUMNS : APPLICATION_COLUMNS;
  const header = columns.map(([, label]) => csvEscape(label)).join(";");
  const lines = [
    header,
    ...rows.map((row) => columns.map(([key]) => csvEscape(cell(type, key, row))).join(";")),
  ];
  const blob = new Blob([`\uFEFF${lines.join("\r\n")}`], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = type === "partners" ? "aptic-r-partenaires.csv" : "aptic-r-candidatures.csv";
  link.click();
  URL.revokeObjectURL(url);
}
