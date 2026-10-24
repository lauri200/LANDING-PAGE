import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { dictionary, type Dict, type Lang } from "./i18n";

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dict;
};

const LangContext = createContext<LangContextValue | null>(null);

function readSavedLang(): Lang {
  try {
    const saved = localStorage.getItem("aptic-lang");
    if (saved === "fr" || saved === "en" || saved === "de") return saved;
    const browser = navigator.language?.slice(0, 2);
    if (browser === "en" || browser === "de") return browser;
  } catch {
    /* ignore */
  }
  return "fr";
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(readSavedLang);

  useEffect(() => {
    localStorage.setItem("aptic-lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(
    () => ({ lang, setLang, t: dictionary[lang] }),
    [lang],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useI18n must be used within LangProvider");
  return ctx;
}
