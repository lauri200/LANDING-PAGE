import { useI18n } from "../context";
import { track } from "../lib/analytics";
import { PrimaryButton, SecondaryButton } from "../ui";

export default function GuidePage() {
  const { t, lang } = useI18n();

  const download = () => {
    track("volunteer_guide_download");
    const blob = new Blob(
      [
        `${t.guide.title}\nAPTIC-R — Agbélouvé, Togo\n\n`,
        ...t.guide.sections.map((section) => `${section.title}\n${section.body}\n\n`),
        t.guide.footer,
      ],
      { type: "text/plain;charset=utf-8" },
    );
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download =
      lang === "de" ? "leitfaden-freiwillig-aptic-r.txt" : lang === "en" ? "aptic-r-volunteer-guide.txt" : "guide-volontaire-aptic-r.txt";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="pt-[72px] px-6 lg:px-16 py-24">
      <article className="max-w-3xl mx-auto">
        <p
          className="text-xs tracking-widest uppercase mb-4"
          style={{ color: "var(--color-green)", fontFamily: "var(--font-mono)" }}
        >
          {t.guide.kicker}
        </p>
        <h1 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
          {t.guide.title}
        </h1>
        <p className="text-base leading-relaxed mb-8" style={{ color: "var(--color-muted)" }}>
          {t.guide.intro}
        </p>
        <div className="flex flex-wrap gap-3 mb-12">
          <button
            type="button"
            className="px-6 py-3 text-xs uppercase tracking-widest text-white"
            style={{ background: "var(--color-green)", fontFamily: "var(--font-mono)" }}
            onClick={download}
          >
            {t.guide.download}
          </button>
          <SecondaryButton to="/eligibility">{t.nav.eligibility}</SecondaryButton>
        </div>
        <div className="space-y-8">
          {t.guide.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-display)" }}>
                {section.title}
              </h2>
              <p className="text-base leading-relaxed whitespace-pre-line" style={{ color: "var(--color-muted)" }}>
                {section.body}
              </p>
            </section>
          ))}
        </div>
        <p className="text-sm mt-12 mb-8" style={{ color: "var(--color-muted)" }}>
          {t.guide.footer}
        </p>
        <PrimaryButton to="/apply">{t.nav.apply}</PrimaryButton>
      </article>
    </div>
  );
}
