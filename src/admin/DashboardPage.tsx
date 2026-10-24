import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { getStats } from "../lib/supabase";
import { APPLICATION_STATUS_LABELS, PARTNER_STATUS_LABELS } from "./labels";

type AppRow = {
  status: string;
  country: string;
  duration: string;
  source: string;
  lang: string;
  field: string | null;
};

type Stats = {
  totals: { applications: number; partners: number };
  applications: AppRow[];
  partners: { status: string }[];
};

const FUNNEL = [
  { id: "applications", label: "Candidatures", match: (_s: string) => true },
  {
    id: "qualified",
    label: "Candidatures qualifiées",
    match: (s: string) => !["new", "refused"].includes(s),
  },
  {
    id: "interview",
    label: "Entretiens",
    match: (s: string) =>
      ["interview", "chosen", "partner_validation", "preparation", "arrived", "completed"].includes(s),
  },
  {
    id: "selected",
    label: "Sélections",
    match: (s: string) =>
      ["chosen", "partner_validation", "preparation", "arrived", "completed"].includes(s),
  },
  {
    id: "hosted",
    label: "Volontaires accueillis",
    match: (s: string) => ["arrived", "completed"].includes(s),
  },
] as const;

function sumBy(rows: AppRow[], key: keyof AppRow) {
  const map = new Map<string, number>();
  for (const row of rows) {
    const label = String(row[key] || "—");
    map.set(label, (map.get(label) || 0) + 1);
  }
  return [...map.entries()].sort((a, b) => b[1] - a[1]);
}

export default function DashboardPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    getStats()
      .then(setStats)
      .catch((err: Error) => setError(err.message));
  }, []);

  const byCountry = useMemo(() => (stats ? sumBy(stats.applications, "country").slice(0, 8) : []), [stats]);
  const byLang = useMemo(() => (stats ? sumBy(stats.applications, "lang") : []), [stats]);
  const bySource = useMemo(() => (stats ? sumBy(stats.applications, "source").slice(0, 8) : []), [stats]);
  const byField = useMemo(() => (stats ? sumBy(stats.applications, "field").slice(0, 8) : []), [stats]);
  const byDuration = useMemo(() => (stats ? sumBy(stats.applications, "duration") : []), [stats]);
  const byStatus = useMemo(() => (stats ? sumBy(stats.applications, "status") : []), [stats]);

  if (error) return <p style={{ color: "var(--color-warm)" }}>{error}</p>;
  if (!stats) return <p>Chargement…</p>;

  const partnerByStatus = new Map<string, number>();
  for (const row of stats.partners) {
    partnerByStatus.set(row.status, (partnerByStatus.get(row.status) || 0) + 1);
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>
        Tableau de bord
      </h1>
      <p className="text-sm mb-8" style={{ color: "var(--color-muted)" }}>
        Entonnoir du cahier des charges : candidatures → qualification → entretien → sélection → accueil.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-8">
        {FUNNEL.map((step) => {
          const n = stats.applications.filter((row) => step.match(row.status)).length;
          return (
            <Link
              key={step.id}
              to="/admin/applications"
              className="p-4 bg-white"
              style={{ borderTop: "3px solid var(--color-green)" }}
            >
              <p className="text-[11px] uppercase mb-2" style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}>
                {step.label}
              </p>
              <p className="text-3xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                {n}
              </p>
            </Link>
          );
        })}
      </div>
      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        <Link to="/admin/applications" className="p-6 bg-white" style={{ borderTop: "3px solid var(--color-green)" }}>
          <p className="text-xs uppercase mb-2" style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}>
            Total candidatures
          </p>
          <p className="text-4xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
            {stats.totals.applications}
          </p>
        </Link>
        <Link to="/admin/partners" className="p-6 bg-white" style={{ borderTop: "3px solid var(--color-blue)" }}>
          <p className="text-xs uppercase mb-2" style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}>
            Demandes partenaires
          </p>
          <p className="text-4xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
            {stats.totals.partners}
          </p>
        </Link>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <StatCard title="Par statut" rows={byStatus.map(([k, n]) => [APPLICATION_STATUS_LABELS[k] || k, n])} />
        <StatCard title="Par pays" rows={byCountry} />
        <StatCard title="Par langue" rows={byLang.map(([k, n]) => [k.toUpperCase(), n])} />
        <StatCard title="Par source / campagne" rows={bySource} />
        <StatCard title="Par métier / domaine" rows={byField} />
        <StatCard title="Par durée souhaitée" rows={byDuration.map(([k, n]) => [`${k} mois`, n])} />
        <StatCard
          title="Partenaires par statut"
          rows={[...partnerByStatus.entries()].map(([status, n]) => [
            PARTNER_STATUS_LABELS[status] || status,
            n,
          ])}
        />
      </div>
    </div>
  );
}

function StatCard({ title, rows }: { title: string; rows: [string, number][] }) {
  return (
    <section className="p-5 bg-white">
      <h2 className="text-sm uppercase mb-4" style={{ fontFamily: "var(--font-mono)", color: "var(--color-blue)" }}>
        {title}
      </h2>
      {rows.length === 0 ? (
        <p className="text-sm" style={{ color: "var(--color-muted)" }}>
          Pas encore de données.
        </p>
      ) : (
        <ul className="space-y-2 text-sm">
          {rows.map(([label, n]) => (
            <li key={label} className="flex justify-between gap-4">
              <span>{label}</span>
              <strong>{n}</strong>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
