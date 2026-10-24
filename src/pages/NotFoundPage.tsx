import { Link } from "react-router-dom";
import { useI18n } from "../context";
import { localize } from "../lib/locale";

export default function NotFoundPage() {
  const { t, lang } = useI18n();
  return (
    <div className="pt-[72px] px-6 py-32 text-center">
      <h1
        className="text-4xl font-bold mb-6"
        style={{ fontFamily: "var(--font-display)" }}
      >
        404
      </h1>
      <Link
        to={localize(lang, "/")}
        className="text-sm tracking-widest uppercase"
        style={{ color: "var(--color-green)", fontFamily: "var(--font-mono)" }}
      >
        {t.footer.org}
      </Link>
    </div>
  );
}
