import { useEffect, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { listPartners } from "../lib/supabase";
import { downloadCsv } from "./csv";
import { PARTNER_STATUS_LABELS, formatDate } from "./labels";

type Item = {
  id: string;
  created_at: string;
  status: string;
  org: string;
  country: string;
  email: string;
  type: string;
  contact: string;
};

export default function PartnersAdminPage() {
  const [items, setItems] = useState<Item[]>([]);
  const [q, setQ] = useState("");
  const [status, setStatus] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState("");

  const load = async () => {
    const data = await listPartners({ q, status, country });
    setItems(data);
  };

  useEffect(() => {
    load().catch((err: Error) => setError(err.message));
  }, []);

  const onFilter = (event: FormEvent) => {
    event.preventDefault();
    load().catch((err: Error) => setError(err.message));
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <h1 className="text-3xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
          Partenaires
        </h1>
        <button
          type="button"
          onClick={() => void downloadCsv("partners").catch((err: Error) => setError(err.message))}
          className="text-xs uppercase tracking-widest px-4 py-2 text-white"
          style={{ background: "var(--color-blue)", fontFamily: "var(--font-mono)" }}
        >
          Export Excel / CSV
        </button>
      </div>
      <form onSubmit={onFilter} className="grid md:grid-cols-4 gap-3 mb-6">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Organisation, pays, email"
          className="px-3 py-2 text-sm bg-white border"
          style={{ borderColor: "var(--color-rule)" }}
        />
        <input
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Pays"
          className="px-3 py-2 text-sm bg-white border"
          style={{ borderColor: "var(--color-rule)" }}
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="px-3 py-2 text-sm bg-white border"
          style={{ borderColor: "var(--color-rule)" }}
        >
          <option value="">Tous les statuts</option>
          {Object.entries(PARTNER_STATUS_LABELS).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="px-4 text-xs uppercase text-white"
          style={{ background: "var(--color-green)", fontFamily: "var(--font-mono)" }}
        >
          Filtrer
        </button>
      </form>
      {error ? <p className="mb-4" style={{ color: "var(--color-warm)" }}>{error}</p> : null}
      <div className="overflow-x-auto bg-white">
        <table className="w-full text-sm">
          <thead style={{ fontFamily: "var(--font-mono)", color: "var(--color-muted)" }}>
            <tr className="text-left text-[11px] uppercase tracking-wider">
              <th className="p-3">Date</th>
              <th className="p-3">Organisation</th>
              <th className="p-3">Pays</th>
              <th className="p-3">Statut</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} style={{ borderTop: "1px solid var(--color-rule)" }}>
                <td className="p-3">{formatDate(item.created_at)}</td>
                <td className="p-3">
                  <Link to={`/admin/partners/${item.id}`} style={{ color: "var(--color-blue)" }}>
                    {item.org}
                  </Link>
                  <div className="text-xs" style={{ color: "var(--color-muted)" }}>
                    {item.contact} · {item.email}
                  </div>
                </td>
                <td className="p-3">{item.country}</td>
                <td className="p-3">{PARTNER_STATUS_LABELS[item.status] || item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {items.length === 0 ? (
          <p className="p-6 text-sm" style={{ color: "var(--color-muted)" }}>
            Aucune demande.
          </p>
        ) : null}
      </div>
    </div>
  );
}
