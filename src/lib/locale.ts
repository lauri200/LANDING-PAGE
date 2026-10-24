import type { Lang } from "../i18n";

export const LANGS: Lang[] = ["fr", "en", "de"];

export const HOME_SLUG: Record<Lang, string> = {
  fr: "volontaires-internationaux",
  en: "international-volunteers",
  de: "internationale-freiwillige",
};

export const HOME_SLUGS = new Set(Object.values(HOME_SLUG));

export function isLang(value: string | undefined): value is Lang {
  return value === "fr" || value === "en" || value === "de";
}

export function homePath(lang: Lang) {
  return `/${lang}/${HOME_SLUG[lang]}`;
}

export function stripLocale(pathname: string) {
  const parts = pathname.split("/").filter(Boolean);
  if (isLang(parts[0])) parts.shift();
  if (parts[0] && HOME_SLUGS.has(parts[0])) parts.shift();
  return parts.length ? `/${parts.join("/")}` : "/";
}

export function langFromPath(pathname: string): Lang | null {
  const first = pathname.split("/").filter(Boolean)[0];
  return isLang(first) ? first : null;
}

export function localize(lang: Lang, to: string) {
  if (!to || to.startsWith("http") || to.startsWith("mailto") || to.startsWith("tel:")) return to;
  const hashIndex = to.indexOf("#");
  const hash = hashIndex >= 0 ? to.slice(hashIndex) : "";
  const path = hashIndex >= 0 ? to.slice(0, hashIndex) : to;
  const stripped = stripLocale(path);
  const localized = stripped === "/" ? homePath(lang) : `/${lang}${stripped}`;
  return `${localized}${hash}`;
}
