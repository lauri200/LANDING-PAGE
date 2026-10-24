import { useEffect, useId, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useI18n } from "./context";
import type { Lang } from "./i18n";
import { useLangSwitch } from "./LocaleLink";
import { trackApplyClick } from "./lib/analytics";
import { localize } from "./lib/locale";

const NAV = [
  { to: "/about", key: "about" },
  { to: "/mission", key: "mission" },
  { to: "/activities", key: "activities" },
  { to: "/life", key: "life" },
  { to: "/apply", key: "application" },
  { to: "/faq", key: "faq" },
  { to: "/partners", key: "partners" },
] as const;

const MOBILE_NAV = [
  { to: "/", key: "home" as const, end: true },
  { to: "/about", key: "about" as const, end: false },
  { to: "/mission", key: "mission" as const, end: false },
  { to: "/activities", key: "activities" as const, end: false },
  { to: "/life", key: "life" as const, end: false },
  { to: "/faq", key: "faq" as const, end: false },
  { to: "/partners", key: "partners" as const, end: false },
];

export default function Header() {
  const { lang, t } = useI18n();
  const switchLang = useLangSwitch();
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const menuId = useId();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 lg:px-8 py-3.5"
        style={{
          background: "rgba(248,244,238,0.94)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--color-rule)",
        }}
      >
        <Link to={localize(lang, "/")} onClick={close} className="flex items-center gap-2.5" aria-label="APTIC-R">
          <img src="/favicon.svg" alt="" className="w-8 h-8" />
          <span
            className="text-xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-blue)" }}
          >
            APTIC-R
          </span>
          <span
            className="hidden sm:block text-[10px] tracking-widest uppercase"
            style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}
          >
            Togo
          </span>
        </Link>

        <nav
          className="hidden xl:flex items-center gap-5 text-[11px] tracking-widest uppercase"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={localize(lang, item.to)}
              className="transition-opacity hover:opacity-60"
              style={({ isActive }) => ({
                color: isActive ? "var(--color-green)" : "var(--color-ink)",
              })}
            >
              {t.nav[item.key]}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div
            className="hidden sm:flex items-center text-xs border overflow-hidden"
            style={{ borderColor: "var(--color-rule)" }}
          >
            {(["fr", "en", "de"] as Lang[]).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => switchLang(l)}
                className="px-2.5 py-1.5 uppercase"
                style={{
                  background: lang === l ? "var(--color-blue)" : "transparent",
                  color: lang === l ? "#fff" : "var(--color-muted)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {l}
              </button>
            ))}
          </div>

          <Link
            to={localize(lang, "/apply")}
            onClick={trackApplyClick}
            className="hidden lg:block px-4 py-2 text-xs font-semibold tracking-widest uppercase text-white hover:opacity-90"
            style={{ background: "var(--color-green)", fontFamily: "var(--font-mono)" }}
          >
            {t.nav.apply}
          </Link>

          <button
            type="button"
            className="xl:hidden relative z-50 -mr-1 w-11 h-11 flex items-center justify-center"
            aria-label={open ? t.nav.close : t.nav.menu}
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="relative block w-[22px] h-[14px]" aria-hidden="true">
              <span
                className="absolute left-0 top-0 h-[2px] w-full rounded-full"
                style={{
                  background: "var(--color-ink)",
                  transform: open ? "translateY(6px) rotate(45deg)" : "none",
                  transition: "transform 0.2s ease",
                }}
              />
              <span
                className="absolute left-0 top-[6px] h-[2px] w-full rounded-full"
                style={{
                  background: "var(--color-ink)",
                  opacity: open ? 0 : 1,
                  transition: "opacity 0.2s ease",
                }}
              />
              <span
                className="absolute left-0 top-[12px] h-[2px] w-full rounded-full"
                style={{
                  background: "var(--color-ink)",
                  transform: open ? "translateY(-6px) rotate(-45deg)" : "none",
                  transition: "transform 0.2s ease",
                }}
              />
            </span>
          </button>
        </div>
      </header>

      {open ? (
        <nav
          id={menuId}
          className="fixed inset-0 z-40 xl:hidden flex flex-col overflow-y-auto pt-[4.75rem] px-6 pb-8"
          style={{ background: "var(--color-canvas)" }}
          aria-label={t.nav.menu}
        >
          <div className="flex gap-2 mb-6 sm:hidden">
            {(["fr", "en", "de"] as Lang[]).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => switchLang(l)}
                className="flex-1 py-2 text-sm uppercase border"
                style={{
                  borderColor: "var(--color-rule)",
                  background: lang === l ? "var(--color-blue)" : "transparent",
                  color: lang === l ? "#fff" : "var(--color-muted)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {l}
              </button>
            ))}
          </div>

          {MOBILE_NAV.map((item) => (
            <NavLink
              key={item.to}
              to={localize(lang, item.to)}
              end={item.end}
              onClick={close}
              className="py-3.5 text-left text-xl border-b"
              style={({ isActive }) => ({
                borderColor: "var(--color-rule)",
                fontFamily: "var(--font-display)",
                color: isActive ? "var(--color-green)" : "var(--color-ink)",
              })}
            >
              {t.nav[item.key]}
            </NavLink>
          ))}

          <Link
            to={localize(lang, "/apply")}
            onClick={() => {
              trackApplyClick();
              close();
            }}
            className="mt-auto pt-8 block w-full py-3.5 text-center text-sm font-semibold tracking-widest uppercase text-white"
            style={{ background: "var(--color-green)", fontFamily: "var(--font-mono)" }}
          >
            {t.nav.apply}
          </Link>
        </nav>
      ) : null}
    </>
  );
}
