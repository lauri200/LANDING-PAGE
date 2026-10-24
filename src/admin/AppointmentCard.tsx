import { useEffect, useState, type FormEvent } from "react";
import type { AppointmentPatch } from "../lib/supabase";
import { APPOINTMENT_MODE_LABELS, fromDatetimeLocal, toDatetimeLocal } from "./labels";

const fieldClass = "w-full px-3 py-2 text-sm border bg-white";
const fieldStyle = { borderColor: "var(--color-rule)" };

type Props = {
  appointmentAt?: string | null;
  appointmentMode?: string | null;
  appointmentPlace?: string | null;
  appointmentNote?: string | null;
  hint: string;
  onSave: (appointment: AppointmentPatch) => Promise<void>;
};

export default function AppointmentCard({
  appointmentAt,
  appointmentMode,
  appointmentPlace,
  appointmentNote,
  hint,
  onSave,
}: Props) {
  const [at, setAt] = useState(toDatetimeLocal(appointmentAt));
  const [mode, setMode] = useState(appointmentMode || "visio");
  const [place, setPlace] = useState(appointmentPlace || "");
  const [note, setNote] = useState(appointmentNote || "");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setAt(toDatetimeLocal(appointmentAt));
    setMode(appointmentMode || "visio");
    setPlace(appointmentPlace || "");
    setNote(appointmentNote || "");
  }, [appointmentAt, appointmentMode, appointmentPlace, appointmentNote]);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setSaving(true);
    setError("");
    try {
      await onSave({
        at: fromDatetimeLocal(at),
        mode,
        place,
        note,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Rendez-vous non enregistré");
    } finally {
      setSaving(false);
    }
  };

  return (
    <section className="p-5 bg-white">
      <h2
        className="text-xs uppercase tracking-widest mb-2"
        style={{ fontFamily: "var(--font-mono)", color: "var(--color-blue)" }}
      >
        Rendez-vous
      </h2>
      <p className="text-xs mb-4" style={{ color: "var(--color-muted)" }}>
        {hint}
      </p>
      <form onSubmit={submit} className="space-y-2">
        <label className="block text-[11px] uppercase" style={{ color: "var(--color-muted)" }}>
          Date et heure
          <input
            type="datetime-local"
            value={at}
            onChange={(e) => setAt(e.target.value)}
            className={`${fieldClass} mt-1`}
            style={fieldStyle}
          />
        </label>
        <label className="block text-[11px] uppercase" style={{ color: "var(--color-muted)" }}>
          Modalité
          <select
            value={mode}
            onChange={(e) => setMode(e.target.value)}
            className={`${fieldClass} mt-1`}
            style={fieldStyle}
          >
            {Object.entries(APPOINTMENT_MODE_LABELS).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-[11px] uppercase" style={{ color: "var(--color-muted)" }}>
          Lieu ou lien (Zoom, Meet…)
          <input
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            className={`${fieldClass} mt-1`}
            style={fieldStyle}
            placeholder="https://… ou adresse"
          />
        </label>
        <label className="block text-[11px] uppercase" style={{ color: "var(--color-muted)" }}>
          Message joint à l'email
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={3}
            className={`${fieldClass} mt-1`}
            style={fieldStyle}
          />
        </label>
        <button
          type="submit"
          disabled={saving}
          className="text-xs uppercase tracking-widest px-3 py-2 text-white"
          style={{ background: "var(--color-green)" }}
        >
          {saving ? "Envoi…" : "Enregistrer et envoyer le rendez-vous"}
        </button>
        {error ? (
          <p className="text-xs" style={{ color: "var(--color-warm)" }}>
            {error}
          </p>
        ) : null}
      </form>
    </section>
  );
}
