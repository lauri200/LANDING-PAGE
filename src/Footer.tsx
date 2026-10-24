import { Link } from "react-router-dom";
import { useI18n } from "./context";
import type { Lang } from "./i18n";
import { useLangSwitch } from "./LocaleLink";
import { track } from "./lib/analytics";
import { localize } from "./lib/locale";
import { SITE } from "./lib/site";

const SOCIALS = ["Facebook", "LinkedIn", "Instagram", "YouTube"] as const;

export default function Footer() {
  const { lang, t } = useI18n();
  const switchLang = useLangSwitch();
  const links = [
    ["/", t.footer.org],
    ["/about", t.footer.about],
    ["/mission", t.footer.mission],
    ["/activities", t.nav.activities],
    ["/life", t.nav.life],
    ["/eligibility", t.nav.eligibility],
    ["/guide", t.nav.guide],
    ["/apply", t.footer.apply],
    ["/partners", t.footer.partners],
    ["/faq", t.footer.faq],
  ] as const;

  return (
    <footer
      className="px-6 lg:px-16 py-14"
      style={{ background: "var(--color-ink)", borderTop: "4px solid var(--color-green)" }}
    >
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p
            className="text-2xl font-bold mb-2"
            style={{ fontFamily: "var(--font-display)", color: "#fff" }}
          >
            {t.footer.org}
          </p>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            {t.footer.tagline}
          </p>
        </div>

        <div>
          <p
            className="text-xs tracking-widest uppercase mb-4"
            style={{ color: "var(--color-green-mid)", fontFamily: "var(--font-mono)" }}
          >
            {t.footer.navLabel}
          </p>
          <div className="flex flex-col gap-2">
            {links.map(([to, label]) => (
              <Link
                key={to}
                to={localize(lang, to)}
                className="text-left text-sm hover:text-white"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p
            className="text-xs tracking-widest uppercase mb-4"
            style={{ color: "var(--color-green-mid)", fontFamily: "var(--font-mono)" }}
          >
            {t.footer.social}
          </p>
          <div className="flex flex-col gap-2 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
            {SOCIALS.map((name) => (
              <a
                key={name}
                href={SITE.social[name]}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
                onClick={() => track("contact_click", { channel: name.toLowerCase() })}
              >
                {name}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p
            className="text-xs tracking-widest uppercase mb-4"
            style={{ color: "var(--color-green-mid)", fontFamily: "var(--font-mono)" }}
          >
            {t.footer.contact}
          </p>
          <div className="flex flex-col gap-2 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
            <a
              href={`mailto:${t.footer.email}`}
              style={{ color: "var(--color-green-mid)" }}
              onClick={() => track("contact_click", { channel: "email" })}
            >
              {t.footer.email}
            </a>
            <span>{t.footer.phone}</span>
            <span>{t.footer.location}</span>
          </div>
        </div>
      </div>

      <div
        className="max-w-6xl mx-auto mt-10 pt-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between"
        style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
      >
        <div className="flex items-center gap-2">
          {(["fr", "en", "de"] as Lang[]).map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => switchLang(l)}
              className="px-3 py-1.5 text-xs uppercase border"
              style={{
                borderColor: lang === l ? "var(--color-green)" : "rgba(255,255,255,0.15)",
                color: lang === l ? "var(--color-green)" : "rgba(255,255,255,0.4)",
                fontFamily: "var(--font-mono)",
              }}
            >
              {l}
            </button>
          ))}
        </div>
        <Link
          to={localize(lang, "/privacy")}
          className="text-xs underline"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          {t.footer.privacy}
        </Link>
        <p
          className="text-xs"
          style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-mono)" }}
        >
          © 2026 {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
