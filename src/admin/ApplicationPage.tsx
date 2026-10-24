import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { Link, useParams } from "react-router-dom";
import {
  adminSendMail,
  getApplication,
  mailIsConfigured,
  patchApplication,
  signedFileUrl,
  asNotes,
  type Application,
} from "../lib/supabase";
import AppointmentCard from "./AppointmentCard";
import { APPLICATION_STATUS_LABELS, formatDate } from "./labels";

function asSkills(value: string[] | string | null | undefined): string[] {
  if (Array.isArray(value)) return value;
  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value) as string[];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }
  return [];
}

export default function ApplicationPage() {
  const { id } = useParams();
  const [item, setItem] = useState<Application | null>(null);
  const [status, setStatus] = useState("");
  const [note, setNote] = useState("");
  const [subject, setSubject] = useState("APTIC-R — votre candidature");
  const [emailBody, setEmailBody] = useState("");
  const [message, setMessage] = useState("");
  const [mailReady, setMailReady] = useState<boolean | null>(null);
  const [savingStatus, setSavingStatus] = useState(false);
  const [sendingMail, setSendingMail] = useState(false);

  const load = () => getApplication(id!).then(setItem);

  useEffect(() => {
    if (id) load().catch((err: Error) => setMessage(err.message));
  }, [id]);

  useEffect(() => {
    if (item) setStatus(item.status);
  }, [item?.id, item?.status]);

  useEffect(() => {
    mailIsConfigured()
      .then(setMailReady)
      .catch(() => setMailReady(false));
  }, []);

  if (!item) return <p>{message || "Chargement…"}</p>;

  const notes = asNotes(item.notes);
  const skills = asSkills(item.skills);

  const saveStatus = async (event: FormEvent) => {
    event.preventDefault();
    setSavingStatus(true);
    setMessage("");
    try {
      const data = await patchApplication(item.id, { status });
      setItem(data);
      setMessage(
        mailReady === false
          ? "Statut enregistré. Configurez Resend pour que l'intéressé le reçoive par email."
          : `Statut enregistré. Un email a été envoyé à ${data.email}.`,
      );
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "Statut non enregistré");
    } finally {
      setSavingStatus(false);
    }
  };

  const addNote = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const data = await patchApplication(item.id, { note });
      setItem(data);
      setNote("");
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "Note non enregistrée");
    }
  };

  const sendMail = async (event: FormEvent) => {
    event.preventDefault();
    const body = emailBody.trim();
    if (!body) return;
    setSendingMail(true);
    setMessage("");
    try {
      await adminSendMail("application", item.id, subject, body);
      await load();
      setEmailBody("");
      setMessage(`Email envoyé à ${item.email}.`);
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "Email non envoyé");
    } finally {
      setSendingMail(false);
    }
  };

  return (
    <div>
      <Link to="/admin/applications" className="text-sm" style={{ color: "var(--color-blue)" }}>
        ← Candidatures
      </Link>
      {mailReady === false ? (
        <p className="mt-4 text-sm" style={{ color: "var(--color-warm)" }}>
          Les emails ne partent pas encore. Dans Supabase, exécutez `supabase/status-emails.sql` et
          remplacez `re_REMPLACEZ_MOI` par une clé Resend.
        </p>
      ) : null}
      <div className="flex flex-wrap items-start justify-between gap-4 mt-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
            {item.first_name} {item.last_name}
          </h1>
          <p className="text-sm" style={{ color: "var(--color-muted)" }}>
            {formatDate(item.created_at)} · {item.lang.toUpperCase()} · {item.source}
          </p>
        </div>
        <form onSubmit={saveStatus} className="flex flex-wrap items-center gap-2">
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="px-3 py-2 text-sm bg-white border"
            style={{ borderColor: "var(--color-rule)" }}
          >
            {Object.entries(APPLICATION_STATUS_LABELS).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
          <button
            type="submit"
            disabled={savingStatus || status === item.status}
            className="text-xs uppercase tracking-widest px-3 py-2 text-white disabled:opacity-50"
            style={{ background: "var(--color-blue)" }}
          >
            {savingStatus ? "Envoi…" : "Enregistrer et prévenir"}
          </button>
        </form>
      </div>
      {message ? (
        <p className="text-sm mb-6" style={{ color: "var(--color-muted)" }}>
          {message}
        </p>
      ) : null}

      <div className="grid lg:grid-cols-3 gap-6">
        <section className="lg:col-span-2 space-y-5">
          <Card title="Identité">
            <Row label="Email" value={item.email} />
            <p className="text-xs mb-2">
              <button
                type="button"
                className="underline"
                style={{ color: "var(--color-blue)" }}
                onClick={() => void navigator.clipboard.writeText(item.email)}
              >
                Copier l'email
              </button>
            </p>
            <Row label="Téléphone" value={item.phone} />
            <Row label="Pays / ville" value={`${item.country} · ${item.city}`} />
            <Row label="Naissance" value={item.birth_date} />
          </Card>
          <Card title="Profil">
            <Row label="Formation" value={item.education} />
            <Row label="Domaine" value={item.field} />
            <Row label="Profession" value={item.profession} />
            <Row label="Expérience" value={item.experience} />
            <Row label="Numérique" value={item.digital} />
            <Row label="Compétences" value={skills.join(", ") || "—"} />
            <Row label="Arrivée" value={item.arrival} />
            <Row label="Durée" value={`${item.duration} mois`} />
          </Card>
          <Card title="Motivation">
            <p className="whitespace-pre-wrap text-sm leading-relaxed">{item.motivation}</p>
          </Card>
          <Card title="Projet">
            <p className="whitespace-pre-wrap text-sm leading-relaxed">{item.project}</p>
          </Card>
        </section>
        <aside className="space-y-5">
          <Card title="Documents">
            <FileLink label="CV" fileKey={item.cv_key} />
            <FileLink label="Lettre" fileKey={item.letter_key} />
            <FileLink label="Portfolio" fileKey={item.portfolio_key} />
          </Card>
          <AppointmentCard
            appointmentAt={item.appointment_at}
            appointmentMode={item.appointment_mode}
            appointmentPlace={item.appointment_place}
            appointmentNote={item.appointment_note}
            hint="Pour un entretien : date, visio ou téléphone, puis envoyer. La personne reçoit l'email avec un fichier calendrier."
            onSave={async (appointment) => {
              const data = await patchApplication(item.id, {
                status: appointment.at && item.status !== "interview" ? "interview" : undefined,
                appointment,
              });
              setItem(data);
              setStatus(data.status);
              setMessage(`Rendez-vous enregistré. Un email a été envoyé à ${data.email}.`);
            }}
          />
          <Card title="Notes">
            <ul className="space-y-3 mb-4">
              {notes.map((entry) => (
                <li key={entry.at + entry.text} className="text-sm">
                  <div className="text-[11px] uppercase" style={{ color: "var(--color-muted)" }}>
                    {formatDate(entry.at)}
                  </div>
                  {entry.text}
                </li>
              ))}
            </ul>
            <form onSubmit={addNote}>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                required
                rows={3}
                className="w-full px-3 py-2 text-sm border mb-2"
                style={{ borderColor: "var(--color-rule)" }}
              />
              <button
                type="submit"
                className="text-xs uppercase tracking-widest px-3 py-2 text-white"
                style={{ background: "var(--color-green)" }}
              >
                Ajouter
              </button>
            </form>
          </Card>
          <Card title="Email libre">
            <form onSubmit={sendMail} className="space-y-2">
              <input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-3 py-2 text-sm border"
                style={{ borderColor: "var(--color-rule)" }}
              />
              <textarea
                value={emailBody}
                onChange={(e) => setEmailBody(e.target.value)}
                required
                rows={5}
                className="w-full px-3 py-2 text-sm border"
                style={{ borderColor: "var(--color-rule)" }}
              />
              <button
                type="submit"
                disabled={sendingMail}
                className="text-xs uppercase tracking-widest px-3 py-2 text-white"
                style={{ background: "var(--color-blue)" }}
              >
                {sendingMail ? "Envoi…" : "Envoyer à la personne"}
              </button>
            </form>
          </Card>
        </aside>
      </div>
    </div>
  );
}

function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="p-5 bg-white">
      <h2 className="text-xs uppercase tracking-widest mb-4" style={{ fontFamily: "var(--font-mono)", color: "var(--color-blue)" }}>
        {title}
      </h2>
      {children}
    </section>
  );
}

function Row({ label, value }: { label: string; value?: string | null }) {
  return (
    <p className="text-sm mb-2">
      <span className="block text-[11px] uppercase" style={{ color: "var(--color-muted)" }}>
        {label}
      </span>
      {value || "—"}
    </p>
  );
}

function FileLink({ label, fileKey }: { label: string; fileKey: string | null }) {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  if (!fileKey) {
    return (
      <p className="text-sm mb-2" style={{ color: "var(--color-muted)" }}>
        {label} : —
      </p>
    );
  }
  return (
    <p className="text-sm mb-2">
      <button
        type="button"
        className="underline"
        style={{ color: "var(--color-blue)" }}
        disabled={loading}
        onClick={() => {
          setError("");
          setLoading(true);
          void signedFileUrl(fileKey)
            .then((url) => window.open(url, "_blank"))
            .catch((err: Error) => setError(err.message))
            .finally(() => setLoading(false));
        }}
      >
        {loading ? "Ouverture…" : `Télécharger ${label}`}
      </button>
      {error ? (
        <span className="block text-xs" style={{ color: "var(--color-warm)" }}>
          {error}
        </span>
      ) : null}
    </p>
  );
}
