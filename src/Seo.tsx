import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useI18n } from "./context";
import { dictionary, type Lang } from "./i18n";
import { homePath, stripLocale } from "./lib/locale";
import { SITE, siteOrigin } from "./lib/site";

const PAGE_META: Record<
  string,
  Record<Lang, { title: string; description: string }>
> = {
  "/": {
    fr: {
      title: "Volontariat au Togo | Volontaires internationaux d'APTIC-R",
      description:
        "Rejoignez APTIC-R au Togo pour une mission de 6 à 12 mois : innovation numérique, agriculture low-tech et développement rural.",
    },
    en: {
      title: "Volunteer in Togo | APTIC-R International Volunteers",
      description:
        "Join APTIC-R in Togo for a 6–12 month volunteer mission in digital innovation, low-tech agriculture and rural development.",
    },
    de: {
      title: "Freiwilligendienst in Togo | APTIC-R International Volunteers",
      description:
        "Komm zu APTIC-R in Togo für einen 6- bis 12-monatigen Einsatz in digitaler Innovation, Low-Tech-Landwirtschaft und ländlicher Entwicklung.",
    },
  },
  "/about": {
    fr: { title: "À propos d'APTIC-R | Volontariat au Togo", description: "APTIC-R accueille des volontaires à Agbélouvé pour concevoir des outils numériques avec les communautés rurales." },
    en: { title: "About APTIC-R | Volunteer in Togo", description: "APTIC-R hosts volunteers in Agbélouvé to design digital tools with rural communities." },
    de: { title: "Über APTIC-R | Freiwilligendienst Togo", description: "APTIC-R nimmt Freiwillige in Agbélouvé auf, um digitale Werkzeuge mit ländlichen Gemeinschaften zu entwickeln." },
  },
  "/mission": {
    fr: { title: "La mission | APTIC-R International Volunteers", description: "Diagnostic terrain, hackathons ruraux, prototypage low-tech, formation et documentation open source." },
    en: { title: "The mission | APTIC-R International Volunteers", description: "Field diagnosis, rural hackathons, low-tech prototyping, training and open-source documentation." },
    de: { title: "Die Mission | APTIC-R International Volunteers", description: "Felddiagnose, ländliche Hackathons, Low-Tech-Prototypen, Schulung und Open-Source-Dokumentation." },
  },
  "/activities": {
    fr: { title: "Activités | APTIC-R", description: "Une semaine type à Agbélouvé : innovation, terrain, prototypage, formation et vie culturelle." },
    en: { title: "Activities | APTIC-R", description: "A typical week in Agbélouvé: innovation, field visits, prototyping, training and cultural life." },
    de: { title: "Aktivitäten | APTIC-R", description: "Eine typische Woche in Agbélouvé: Innovation, Feld, Prototyping, Schulung und Kultur." },
  },
  "/life": {
    fr: { title: "Vie au Togo | APTIC-R", description: "Agbélouvé, conditions d'accueil, hébergement et ce qui est inclus dans la mission." },
    en: { title: "Life in Togo | APTIC-R", description: "Agbélouvé, hosting conditions, accommodation and what the mission includes." },
    de: { title: "Leben in Togo | APTIC-R", description: "Agbélouvé, Aufnahmebedingungen, Unterkunft und Leistungen der Mission." },
  },
  "/apply": {
    fr: { title: "Candidature volontaire | APTIC-R", description: "Postulez pour une mission de volontariat de 6 à 12 mois avec APTIC-R au Togo." },
    en: { title: "Volunteer application | APTIC-R", description: "Apply for a 6–12 month volunteer mission with APTIC-R in Togo." },
    de: { title: "Bewerbung | APTIC-R", description: "Bewerbe dich für einen 6- bis 12-monatigen Freiwilligeneinsatz mit APTIC-R in Togo." },
  },
  "/eligibility": {
    fr: { title: "Éligibilité | APTIC-R", description: "Vérifiez si le programme de volontariat international APTIC-R correspond à votre profil." },
    en: { title: "Eligibility | APTIC-R", description: "Check whether the APTIC-R international volunteer programme fits your profile." },
    de: { title: "Eignung | APTIC-R", description: "Prüfe, ob das internationale Freiwilligenprogramm von APTIC-R zu dir passt." },
  },
  "/guide": {
    fr: { title: "Guide du volontaire | APTIC-R", description: "Guide pratique : mission, vie à Agbélouvé, processus de candidature et préparation." },
    en: { title: "Volunteer guide | APTIC-R", description: "Practical guide: mission, life in Agbélouvé, application process and preparation." },
    de: { title: "Freiwilligenleitfaden | APTIC-R", description: "Praxisleitfaden: Mission, Leben in Agbélouvé, Bewerbung und Vorbereitung." },
  },
  "/faq": {
    fr: { title: "FAQ | Volontariat APTIC-R au Togo", description: "Visa, logement, durée, langue, sécurité et déroulement après la candidature." },
    en: { title: "FAQ | APTIC-R volunteering in Togo", description: "Visa, housing, duration, language, safety and what happens after you apply." },
    de: { title: "FAQ | APTIC-R Freiwilligendienst Togo", description: "Visum, Wohnen, Dauer, Sprache, Sicherheit und Ablauf nach der Bewerbung." },
  },
  "/partners": {
    fr: { title: "Partenaires européens | APTIC-R", description: "Organisations d'envoi : devenez partenaire du programme de volontariat APTIC-R au Togo." },
    en: { title: "European partners | APTIC-R", description: "Sending organisations: partner with APTIC-R's volunteer programme in Togo." },
    de: { title: "Europäische Partner | APTIC-R", description: "Entsendeorganisationen: werden Sie Partner des APTIC-R-Freiwilligenprogramms in Togo." },
  },
  "/privacy": {
    fr: { title: "Politique de confidentialité | APTIC-R", description: "Données collectées, cookies, analytics et droits des personnes." },
    en: { title: "Privacy policy | APTIC-R", description: "Collected data, cookies, analytics and your rights." },
    de: { title: "Datenschutz | APTIC-R", description: "Erhobene Daten, Cookies, Analytics und Ihre Rechte." },
  },
};

const OG_LOCALE: Record<Lang, string> = {
  fr: "fr_FR",
  en: "en_US",
  de: "de_DE",
};

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  const selector = attr === "name" ? `meta[name="${key}"]` : `meta[property="${key}"]`;
  let el = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;
  let el = document.head.querySelector(selector) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    if (hreflang) el.setAttribute("hreflang", hreflang);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function upsertJsonLd(id: string, data: unknown) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export default function Seo() {
  const { pathname } = useLocation();
  const { lang } = useI18n();
  const page = stripLocale(pathname);
  const meta = PAGE_META[page] || PAGE_META["/"];
  const { title, description } = meta[lang];
  const origin = siteOrigin();

  useEffect(() => {
    document.title = title;
    document.documentElement.lang = lang;
    upsertMeta("name", "description", description);
    upsertMeta("name", "keywords", dictionary[lang].seo.keywords);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:locale", OG_LOCALE[lang]);
    upsertMeta("property", "og:site_name", "APTIC-R International Volunteers");
    upsertMeta("property", "og:image", `${origin}/images/og-cover.jpg`);
    upsertMeta("property", "og:image:width", "1200");
    upsertMeta("property", "og:image:height", "630");
    upsertMeta("name", "twitter:image", `${origin}/images/og-cover.jpg`);
    const canonicalPath = page === "/" ? homePath(lang) : `/${lang}${page}`;
    const canonical = `${origin}${canonicalPath}`;
    upsertLink("canonical", canonical);
    upsertMeta("property", "og:url", canonical);
    (["fr", "en", "de"] as Lang[]).forEach((item) => {
      const href = page === "/" ? `${origin}${homePath(item)}` : `${origin}/${item}${page}`;
      upsertLink("alternate", href, item);
    });
    upsertLink("alternate", `${origin}${homePath("en")}`, "x-default");
    upsertJsonLd("aptic-jsonld", {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "NGO",
          name: "APTIC-R",
          alternateName: "Association pour la Promotion des TIC en milieu Rural au Togo",
          url: SITE.url,
          email: SITE.email,
          areaServed: "Togo",
        },
        {
          "@type": "WebPage",
          name: title,
          description,
          url: canonical,
          inLanguage: lang,
        },
      ],
    });
  }, [title, description, lang, page, origin]);

  return null;
}

