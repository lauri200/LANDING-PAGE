import { useEffect, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { listApplications, type ApplicationListItem } from "../lib/supabase";
import { downloadCsv } from "./csv";
import { APPLICATION_STATUS_LABELS, formatDate } from "./labels";

const inputClass = "px-3 py-2 text-sm bg-white border";
const inputStyle = { borderColor: "var(--color-rule)" };

export default function ApplicationsPage() {
  const [items, setItems] = useState<ApplicationListItem[]>([]);
  const [q, setQ] = useState("");
  const [status, setStatus] = useState("");
  const [country, setCountry] = useState("");
  const [duration, setDuration] = useState("");
  const [skill, setSkill] = useState("");
  const [lang, setLang] = useState("");
  const [source, setSource] = useState("");
  const [field, setField] = useState("");
  const [arrivalFrom, setArrivalFrom] = useState("");
  const [arrivalTo, setArrivalTo] = useState("");
  const [error, setError] = useState("");
  const [exporting, setExporting] = useState(false);

  const load = async () => {
    setError("");
    const data = await listApplications({
      q,
      status,
      country,
      duration,
      skill,
      lang,
      source,
      field,
      arrivalFrom,
      arrivalTo,
    });
    setItems(data);
  };

  useEffect(() => {
    load().catch((err: Error) => setError(err.message));
  }, []);

  const onFilter = (event: FormEvent) => {
    event.preventDefault();
    load().catch((err: Error) => setError(err.message));
  };

  const onExport = async () => {
    setExporting(true);
    try {
      await downloadCsv("applications");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Export impossible");
    } finally {
      setExporting(false);
    }
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <h1 className="text-3xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
          Candidatures
        </h1>
        <button
          type="button"
          onClick={() => void onExport()}
          disabled={exporting}
          className="text-xs uppercase tracking-widest px-4 py-2 text-white"
          style={{ background: "var(--color-blue)", fontFamily: "var(--font-mono)" }}
        >
          {exporting ? "Export…" : "Export Excel / CSV"}
        </button>
      </div>
      <form onSubmit={onFilter} className="grid md:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Nom, email, téléphone" className={inputClass} style={inputStyle} />
        <select value={status} onChange={(e) => setStatus(e.target.value)} className={inputClass} style={inputStyle}>
          <option value="">Tous les statuts</option>
          {Object.entries(APPLICATION_STATUS_LABELS).map(([value, label]) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
        <input value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Pays" className={inputClass} style={inputStyle} />
        <select value={duration} onChange={(e) => setDuration(e.target.value)} className={inputClass} style={inputStyle}>
          <option value="">Durée (disponibilité)</option>
          <option value="6">6 mois</option>
          <option value="9">9 mois</option>
          <option value="12">12 mois</option>
        </select>
        <input value={skill} onChange={(e) => setSkill(e.target.value)} placeholder="Compétence" className={inputClass} style={inputStyle} />
        <input value={field} onChange={(e) => setField(e.target.value)} placeholder="Métier / domaine" className={inputClass} style={inputStyle} />
        <input value={source} onChange={(e) => setSource(e.target.value)} placeholder="Source / campagne" className={inputClass} style={inputStyle} />
        <select value={lang} onChange={(e) => setLang(e.target.value)} className={inputClass} style={inputStyle}>
          <option value="">Langue</option>
          <option value="fr">FR</option>
          <option value="en">EN</option>
          <option value="de">DE</option>
        </select>
        <label className="text-xs" style={{ color: "var(--color-muted)" }}>
          Arrivée du
          <input type="date" value={arrivalFrom} onChange={(e) => setArrivalFrom(e.target.value)} className={`${inputClass} mt-1 w-full`} style={inputStyle} />
        </label>
        <label className="text-xs" style={{ color: "var(--color-muted)" }}>
          Arrivée au
          <input type="date" value={arrivalTo} onChange={(e) => setArrivalTo(e.target.value)} className={`${inputClass} mt-1 w-full`} style={inputStyle} />
        </label>
        <button type="submit" className="px-4 text-xs uppercase text-white" style={{ background: "var(--color-green)", fontFamily: "var(--font-mono)" }}>
          Filtrer
        </button>
      </form>
      <p className="text-xs mb-3" style={{ color: "var(--color-muted)" }}>
        {items.length} dossier{items.length > 1 ? "s" : ""}
      </p>
      {error ? <p className="mb-4" style={{ color: "var(--color-warm)" }}>{error}</p> : null}
      <div className="overflow-x-auto bg-white">
        <table className="w-full text-sm">
          <thead style={{ fontFamily: "var(--font-mono)", color: "var(--color-muted)" }}>
            <tr className="text-left text-[11px] uppercase tracking-wider">
              <th className="p-3">Date</th>
              <th className="p-3">Nom</th>
              <th className="p-3">Pays</th>
              <th className="p-3">Disponibilité</th>
              <th className="p-3">Métier</th>
              <th className="p-3">Statut</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} style={{ borderTop: "1px solid var(--color-rule)" }}>
                <td className="p-3">{formatDate(item.created_at)}</td>
                <td className="p-3">
                  <Link to={`/admin/applications/${item.id}`} style={{ color: "var(--color-blue)" }}>
                    {item.first_name} {item.last_name}
                  </Link>
                  <div className="text-xs" style={{ color: "var(--color-muted)" }}>
                    {item.email} · {(item.lang || "").toUpperCase()}
                  </div>
                </td>
                <td className="p-3">{item.country}</td>
                <td className="p-3">
                  {item.duration} mois
                  <div className="text-xs" style={{ color: "var(--color-muted)" }}>
                    {item.arrival || "—"}
                  </div>
                </td>
                <td className="p-3">{item.field || "—"}</td>
                <td className="p-3">{APPLICATION_STATUS_LABELS[item.status] || item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {items.length === 0 ? (
          <p className="p-6 text-sm" style={{ color: "var(--color-muted)" }}>
            Aucune candidature.
          </p>
        ) : null}
      </div>
    </div>
  );
}
