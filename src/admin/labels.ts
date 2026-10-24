export const APPLICATION_STATUS_LABELS: Record<string, string> = {
  new: "Nouveau",
  review: "Révision",
  selected: "Sélectionné",
  interview: "Entretien",
  chosen: "Choisi",
  partner_validation: "Validation partenaires",
  preparation: "Préparation",
  arrived: "Arrivé",
  completed: "Terminé",
  refused: "Refusé",
};

export const APPLICATION_STATUS_ORDER = [
  "new",
  "review",
  "selected",
  "interview",
  "chosen",
  "partner_validation",
  "preparation",
  "arrived",
  "completed",
] as const;

export const PARTNER_STATUS_LABELS: Record<string, string> = {
  new: "Nouveau",
  review: "Révision",
  discussion: "Discussion",
  accepted: "Accepté",
  declined: "Refusé",
};

export const APPOINTMENT_MODE_LABELS: Record<string, string> = {
  visio: "Visioconférence",
  phone: "Téléphone",
  onsite: "Sur place",
};

export function toDatetimeLocal(value?: string | null) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

export function fromDatetimeLocal(value: string) {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return date.toISOString();
}

export function formatDate(value?: string) {
  if (!value) return "—";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleString("fr-FR", { dateStyle: "medium", timeStyle: "short" });
}
