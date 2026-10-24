import { Link } from "react-router-dom";
import { useI18n } from "./context";
import { getConsent, setConsent } from "./lib/analytics";
import { localize } from "./lib/locale";
import { useEffect, useState } from "react";

export default function CookieBanner() {
  const { t, lang } = useI18n();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(getConsent() === null);
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[60] px-4 py-4"
      style={{ background: "var(--color-ink)" }}
      role="dialog"
      aria-label={t.cookies.title}
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-4 lg:items-center">
        <p className="text-sm leading-relaxed flex-1" style={{ color: "rgba(255,255,255,0.78)" }}>
          {t.cookies.body}{" "}
          <Link to={localize(lang, "/privacy")} className="underline" style={{ color: "var(--color-green-mid)" }}>
            {t.footer.privacy}
          </Link>
        </p>
        <div className="flex flex-wrap gap-2 shrink-0">
          <button
            type="button"
            className="px-4 py-2 text-xs uppercase tracking-widest"
            style={{ color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-mono)" }}
            onClick={() => {
              setConsent("essential");
              setOpen(false);
            }}
          >
            {t.cookies.essential}
          </button>
          <button
            type="button"
            className="px-4 py-2 text-xs uppercase tracking-widest text-white"
            style={{ background: "var(--color-green)", fontFamily: "var(--font-mono)" }}
            onClick={() => {
              setConsent("all");
              setOpen(false);
            }}
          >
            {t.cookies.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
