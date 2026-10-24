import { useI18n } from "../context";
import { FinalCTA, Hero } from "../Landing";
import { PrimaryButton, SecondaryButton } from "../ui";

export default function Home() {
  const { t } = useI18n();
  return (
    <>
      <Hero />
      <section className="px-6 lg:px-16 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <article
            className="p-8"
            style={{ background: "white", borderTop: "3px solid var(--color-green)" }}
          >
            <p
              className="text-xs tracking-widest uppercase mb-3"
              style={{ color: "var(--color-green)", fontFamily: "var(--font-mono)" }}
            >
              {t.apply.kicker}
            </p>
            <h2
              className="text-2xl font-bold mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t.apply.title}
            </h2>
            <PrimaryButton to="/apply">{t.nav.apply}</PrimaryButton>
          </article>
          <article
            className="p-8"
            style={{ background: "white", borderTop: "3px solid var(--color-blue)" }}
          >
            <p
              className="text-xs tracking-widest uppercase mb-3"
              style={{ color: "var(--color-blue)", fontFamily: "var(--font-mono)" }}
            >
              {t.partner.kicker}
            </p>
            <h2
              className="text-2xl font-bold mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t.partner.title}
            </h2>
            <SecondaryButton to="/partners">{t.cta.partner}</SecondaryButton>
          </article>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
