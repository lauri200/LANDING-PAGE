import { useEffect, useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { checkIsAdmin, getSession, signIn, signOut } from "../lib/supabase";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getSession()
      .then(async (session) => {
        if (!session) return;
        const admin = await checkIsAdmin().catch(() => false);
        if (admin) navigate("/admin", { replace: true });
      })
      .catch(() => undefined);
  }, [navigate]);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    try {
      await signIn(email, password);
      const admin = await checkIsAdmin();
      if (!admin) {
        await signOut();
        throw new Error("Ce compte n'a pas le rôle administrateur. Exécutez supabase/grant-admin.sql.");
      }
      navigate("/admin", { replace: true });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Connexion impossible");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-full flex items-center justify-center px-5"
      style={{ background: "var(--color-canvas)" }}
    >
      <form
        onSubmit={onSubmit}
        className="w-full max-w-sm p-8 bg-white"
        style={{ borderTop: "3px solid var(--color-blue)" }}
      >
        <p
          className="text-xs tracking-widest uppercase mb-3"
          style={{ color: "var(--color-blue)", fontFamily: "var(--font-mono)" }}
        >
          Back-office
        </p>
        <h1 className="text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
          APTIC-R Admin
        </h1>
        <label className="block text-xs uppercase mb-2" style={{ color: "var(--color-muted)" }}>
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="username"
          className="w-full px-3 py-2.5 text-sm bg-white border mb-4"
          style={{ borderColor: "var(--color-rule)" }}
        />
        <label className="block text-xs uppercase mb-2" style={{ color: "var(--color-muted)" }}>
          Mot de passe
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
          className="w-full px-3 py-2.5 text-sm bg-white border mb-4"
          style={{ borderColor: "var(--color-rule)" }}
        />
        {error ? (
          <p className="text-sm mb-4" style={{ color: "var(--color-warm)" }}>
            {error}
          </p>
        ) : null}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 text-sm font-semibold tracking-widest uppercase text-white"
          style={{ background: "var(--color-blue)", fontFamily: "var(--font-mono)" }}
        >
          {loading ? "Connexion…" : "Entrer"}
        </button>
      </form>
    </div>
  );
}
