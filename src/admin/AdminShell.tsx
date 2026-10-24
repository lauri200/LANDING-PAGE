import { useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { requireAdminSession, signOut } from "../lib/supabase";

const LINKS = [
  { to: "/admin", label: "Tableau de bord", end: true },
  { to: "/admin/applications", label: "Candidatures", end: false },
  { to: "/admin/partners", label: "Partenaires", end: false },
  { to: "/admin/help", label: "Aide", end: false },
];

export default function AdminShell() {
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    requireAdminSession()
      .then((session) => {
        if (!session) navigate("/admin/login", { replace: true });
        else {
          setEmail(session.user.email || "");
          setReady(true);
        }
      })
      .catch(() => navigate("/admin/login", { replace: true }));
  }, [navigate]);

  const logout = async () => {
    await signOut().catch(() => undefined);
    navigate("/admin/login", { replace: true });
  };

  if (!ready) {
    return (
      <div className="min-h-full p-8" style={{ background: "var(--color-canvas)" }}>
        Chargement…
      </div>
    );
  }

  return (
    <div className="min-h-full" style={{ background: "var(--color-canvas)" }}>
      <header
        className="flex items-center justify-between px-5 lg:px-8 py-4 gap-4"
        style={{ borderBottom: "1px solid var(--color-rule)", background: "rgba(248,244,238,0.96)" }}
      >
        <div className="flex items-center gap-6 min-w-0">
          <span
            className="text-lg font-bold shrink-0"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-blue)" }}
          >
            APTIC-R
          </span>
          <nav className="flex flex-wrap gap-4 text-sm">
            {LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className="py-1"
                style={({ isActive }) => ({
                  color: isActive ? "var(--color-green)" : "var(--color-ink)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                })}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="hidden sm:block text-xs" style={{ color: "var(--color-muted)" }}>
            {email}
          </span>
          <button
            type="button"
            onClick={() => void logout()}
            className="text-xs uppercase"
            style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}
          >
            Déconnexion
          </button>
        </div>
      </header>
      <main className="px-5 lg:px-8 py-8 max-w-6xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
}
