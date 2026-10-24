import { getSupabase, isSupabaseConfigured } from "./supabase";
import type { AnalyticsEventName } from "./site";

const CONSENT_KEY = "aptic-consent";

type Consent = "all" | "essential" | null;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function getConsent(): Consent {
  try {
    const value = localStorage.getItem(CONSENT_KEY);
    if (value === "all" || value === "essential") return value;
  } catch {
    /* ignore */
  }
  return null;
}

export function setConsent(value: "all" | "essential") {
  localStorage.setItem(CONSENT_KEY, value);
  if (value === "all") loadGa();
}

function loadGa() {
  const id = import.meta.env.VITE_GA_ID;
  if (!id || document.getElementById("aptic-ga4")) return;
  const script = document.createElement("script");
  script.id = "aptic-ga4";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(script);
  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args: unknown[]) => {
    window.dataLayer?.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", id);
}

export function initAnalytics() {
  if (getConsent() === "all") loadGa();
}

export function track(name: AnalyticsEventName, extra?: Record<string, string>) {
  const path = `${window.location.pathname}${window.location.search}`;
  const lang = document.documentElement.lang || "fr";

  if (getConsent() === "all" && window.gtag) {
    window.gtag("event", name, { page_path: path, language: lang, ...extra });
  }

  if (!isSupabaseConfigured()) return;
  const sessionKey = `aptic-ev:${name}:${path}`;
  if (name === "page_view") {
    try {
      if (sessionStorage.getItem(sessionKey)) return;
      sessionStorage.setItem(sessionKey, "1");
    } catch {
      /* ignore */
    }
  }

  void getSupabase()
    .from("analytics_events")
    .insert({ name, lang, path })
    .then(({ error }) => {
      if (error && import.meta.env.DEV) console.warn(error.message);
    });
}

export function trackApplyClick() {
  track("apply_now_click");
}
