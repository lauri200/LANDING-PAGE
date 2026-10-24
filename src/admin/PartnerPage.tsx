import { useEffect, useState, type FormEvent } from "react";
import { Link, useParams } from "react-router-dom";
import {
  adminSendMail,
  getPartner,
  mailIsConfigured,
  patchPartner,
  signedFileUrl,
  asNotes,
  type Partner,
} from "../lib/supabase";
import AppointmentCard from "./AppointmentCard";
import { PARTNER_STATUS_LABELS, formatDate } from "./labels";

export default function PartnerPage() {
  const { id } = useParams();
  const [item, setItem] = useState<Partner | null>(null);
  const [status, setStatus] = useState("");
  const [note, setNote] = useState("");
  const [subject, setSubject] = useState("APTIC-R — votre demande de partenariat");
  const [emailBody, setEmailBody] = useState("");
  const [message, setMessage] = useState("");
  const [mailReady, setMailReady] = useState<boolean | null>(null);
  const [savingStatus, setSavingStatus] = useState(false);
  const [sendingMail, setSendingMail] = useState(false);

  const load = () => getPartner(id!).then(setItem);

  useEffect(() => {
    if (!id) return;
    load().catch((err: Error) => setMessage(err.message));
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

  const saveStatus = async (event: FormEvent) => {
    event.preventDefault();
    setSavingStatus(true);
    setMessage("");
    try {
      const data = await patchPartner(item.id, { status });
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
    const data = await patchPartner(item.id, { note });
    setItem(data);
    setNote("");
  };

  const sendMail = async (event: FormEvent) => {
    event.preventDefault();
    const body = emailBody.trim();
    if (!body) return;
    setSendingMail(true);
    try {
      await adminSendMail("partner", item.id, subject, body);
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
      <Link to="/admin/partners" className="text-sm" style={{ color: "var(--color-blue)" }}>
        ← Partenaires
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
            {item.org}
          </h1>
          <p className="text-sm" style={{ color: "var(--color-muted)" }}>
            {formatDate(item.created_at)} · {item.lang.toUpperCase()}
          </p>
        </div>
        <form onSubmit={saveStatus} className="flex flex-wrap items-center gap-2">
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="px-3 py-2 text-sm bg-white border"
            style={{ borderColor: "var(--color-rule)" }}
          >
            {Object.entries(PARTNER_STATUS_LABELS).map(([value, label]) => (
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
        <section className="lg:col-span-2 p-5 bg-white space-y-2 text-sm">
          <p><strong>Contact :</strong> {item.contact}</p>
          <p><strong>Email :</strong> {item.email}</p>
          <p><strong>Pays :</strong> {item.country}</p>
          <p><strong>Type :</strong> {item.type}</p>
          <p><strong>Site :</strong> {item.website || "—"}</p>
          <p><strong>Volontaires :</strong> {item.volunteers || "—"}</p>
          <p><strong>Pays concernés :</strong> {item.countries || "—"}</p>
          <p><strong>Programme :</strong> {item.program || "—"}</p>
          <p className="whitespace-pre-wrap pt-4">{item.message}</p>
        </section>
        <aside className="space-y-5">
          <section className="p-5 bg-white">
            <h2 className="text-xs uppercase mb-3" style={{ fontFamily: "var(--font-mono)", color: "var(--color-blue)" }}>
              Document
            </h2>
            {item.document_key ? (
              <button
                type="button"
                className="underline text-sm"
                style={{ color: "var(--color-blue)" }}
                onClick={() => {
                  void signedFileUrl(item.document_key!).then((url) => window.open(url, "_blank"));
                }}
              >
                Télécharger
              </button>
            ) : (
              <p className="text-sm" style={{ color: "var(--color-muted)" }}>—</p>
            )}
          </section>
          <AppointmentCard
            appointmentAt={item.appointment_at}
            appointmentMode={item.appointment_mode}
            appointmentPlace={item.appointment_place}
            appointmentNote={item.appointment_note}
            hint="Pour une discussion : date, visio ou téléphone, puis envoyer. L'organisation reçoit l'email avec un fichier calendrier."
            onSave={async (appointment) => {
              const data = await patchPartner(item.id, {
                status: appointment.at && item.status !== "discussion" ? "discussion" : undefined,
                appointment,
              });
              setItem(data);
              setStatus(data.status);
              setMessage(`Rendez-vous enregistré. Un email a été envoyé à ${data.email}.`);
            }}
          />
          <section className="p-5 bg-white">
            <h2 className="text-xs uppercase mb-3" style={{ fontFamily: "var(--font-mono)", color: "var(--color-blue)" }}>
              Notes
            </h2>
            <ul className="space-y-3 mb-4">
              {notes.map((entry) => (
                <li key={entry.at + entry.text} className="text-sm">
                  <div className="text-[11px]" style={{ color: "var(--color-muted)" }}>
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
          </section>
          <section className="p-5 bg-white">
            <h2 className="text-xs uppercase mb-3" style={{ fontFamily: "var(--font-mono)", color: "var(--color-blue)" }}>
              Email libre
            </h2>
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
          </section>
        </aside>
      </div>
    </div>
  );
}
