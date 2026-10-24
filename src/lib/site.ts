export const SITE = {
  email: "contact@aptic-r.org",
  phone: "",
  url: "https://aptic-r.org",
  social: {
    Facebook: "https://www.facebook.com",
    LinkedIn: "https://www.linkedin.com",
    Instagram: "https://www.instagram.com",
    YouTube: "https://www.youtube.com",
  },
};

export const ANALYTICS_EVENTS = [
  "page_view",
  "apply_now_click",
  "application_started",
  "application_submitted",
  "partner_request",
  "volunteer_guide_download",
  "language_switch",
  "contact_click",
] as const;

export type AnalyticsEventName = (typeof ANALYTICS_EVENTS)[number];

export function siteOrigin() {
  const fromEnv = String(import.meta.env.VITE_SITE_URL || "").replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  if (typeof window !== "undefined" && window.location.origin) return window.location.origin;
  return SITE.url;
}
