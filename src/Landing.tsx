import { useState } from "react";
import { useI18n } from "./context";
import {
  PrimaryButton,
  Reveal,
  SecondaryButton,
  SectionLabel,
} from "./ui";

const HERO_IMG =
  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1800&h=1200&fit=crop&auto=format";
const ABOUT_IMG =
  "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=900&h=700&fit=crop&auto=format";
const BUILD_IMGS = [
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=700&h=480&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=700&h=480&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=700&h=480&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h=480&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700&h=480&fit=crop&auto=format",
];
const LIFE_IMGS = [
  "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&h=600&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&h=600&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1606189934846-a527add8a77b?w=800&h=600&fit=crop&auto=format",
];
const STORY_IMGS = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&auto=format",
];

export function Hero() {
  const { t } = useI18n();
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end pb-16 pt-28 px-6 lg:px-16 overflow-hidden"
      style={{ background: "var(--color-blue)" }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={HERO_IMG}
          alt="Collaboration entre volontaire et communaute rurale"
          className="w-full h-full object-cover opacity-30"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, var(--color-blue) 22%, rgba(27,58,92,0.55) 100%)",
          }}
        />
      </div>
      <div className="relative z-10 max-w-4xl">
        <p
          className="font-mono text-xs tracking-[0.25em] uppercase mb-6"
          style={{ color: "var(--color-green-light)", fontFamily: "var(--font-mono)" }}
        >
          {t.hero.kicker}
        </p>
        <h1
          className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] mb-5 whitespace-pre-line"
          style={{ fontFamily: "var(--font-display)", color: "#fff" }}
        >
          {t.hero.title}
        </h1>
        <p
          className="text-sm tracking-[0.18em] uppercase mb-5"
          style={{ color: "var(--color-green-mid)", fontFamily: "var(--font-mono)" }}
        >
          {t.hero.subtitle}
        </p>
        <p
          className="text-base sm:text-lg max-w-2xl leading-relaxed mb-10"
          style={{ color: "#E8EFF7" }}
        >
          {t.hero.body}
        </p>
        <div className="flex flex-wrap gap-4">
          <PrimaryButton to="/apply">{t.hero.cta}</PrimaryButton>
          <SecondaryButton light to="/mission">
            {t.hero.ctaSecondary}
          </SecondaryButton>
        </div>
      </div>
    </section>
  );
}

export function About() {
  const { t } = useI18n();
  return (
    <Reveal id="about" className="px-6 lg:px-16 py-24 lg:py-32">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <SectionLabel>{t.about.kicker}</SectionLabel>
          <h2
            className="text-4xl lg:text-5xl font-bold leading-tight mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.about.title}
          </h2>
          <p
            className="text-sm tracking-wide uppercase mb-6"
            style={{ color: "var(--color-blue)", fontFamily: "var(--font-mono)" }}
          >
            {t.about.org}
          </p>
          <p className="text-base leading-loose" style={{ color: "var(--color-muted)" }}>
            {t.about.body}
          </p>
        </div>
        <div className="overflow-hidden" style={{ background: "var(--color-blue-light)" }}>
          <img
            src={ABOUT_IMG}
            alt="Travail collectif en communaute"
            className="w-full h-80 lg:h-[420px] object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </Reveal>
  );
}

export function Why() {
  const { t } = useI18n();
  return (
    <Reveal className="px-6 lg:px-16 py-24" style={{ background: "white" }}>
      <div className="max-w-6xl mx-auto">
        <SectionLabel>{t.why.kicker}</SectionLabel>
        <h2
          className="text-4xl lg:text-5xl font-bold mb-12 max-w-3xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {t.why.title}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.why.cards.map((card, i) => (
            <article
              key={card.title}
              className="p-6 border-t-2"
              style={{ borderColor: "var(--color-green)", background: "var(--color-canvas)" }}
            >
              <p
                className="font-mono text-xs tracking-widest mb-3"
                style={{ color: "var(--color-green)", fontFamily: "var(--font-mono)" }}
              >
                0{i + 1}
              </p>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export function Challenge() {
  const { t } = useI18n();
  const cols = [
    { title: t.challenge.problem, body: t.challenge.problemBody },
    { title: t.challenge.innovation, body: t.challenge.innovationBody },
    { title: t.challenge.impact, body: t.challenge.impactBody },
  ];
  return (
    <Reveal
      id="mission"
      className="px-6 lg:px-16 py-24 lg:py-32"
      style={{ background: "var(--color-blue)" }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionLabel light>{t.challenge.kicker}</SectionLabel>
        <h2
          className="text-4xl lg:text-5xl font-bold text-white mb-8 max-w-3xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {t.challenge.title}
        </h2>
        <p className="text-base leading-relaxed max-w-3xl mb-4" style={{ color: "#E8EFF7" }}>
          {t.challenge.p1}
        </p>
        <p className="text-base leading-relaxed max-w-3xl mb-12" style={{ color: "rgba(232,239,247,0.8)" }}>
          {t.challenge.p2}
        </p>
        <div className="grid md:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.12)" }}>
          {cols.map((col, i) => (
            <div key={col.title} className="p-8" style={{ background: "rgba(27,58,92,0.85)" }}>
              <p
                className="text-xs tracking-widest uppercase mb-3"
                style={{ color: "var(--color-green-mid)", fontFamily: "var(--font-mono)" }}
              >
                {String(i + 1).padStart(2, "0")} · {col.title}
              </p>
              <p className="text-lg text-white leading-snug" style={{ fontFamily: "var(--font-display)" }}>
                {col.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export function Mission() {
  const { t } = useI18n();
  return (
    <Reveal id="activities" className="px-6 lg:px-16 py-24 lg:py-32">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>{t.mission.kicker}</SectionLabel>
        <h2
          className="text-4xl lg:text-5xl font-bold mb-12"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {t.mission.title}
        </h2>
        <div className="flex flex-col">
          {t.mission.steps.map((step) => (
            <div
              key={step.num}
              className="grid md:grid-cols-[120px_1fr] gap-4 py-6 border-t"
              style={{ borderColor: "var(--color-rule)" }}
            >
              <p
                className="text-2xl font-bold"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-green)" }}
              >
                {step.num}
              </p>
              <div>
                <h3 className="text-xl font-semibold mb-1" style={{ fontFamily: "var(--font-display)" }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export function Build() {
  const { t } = useI18n();
  return (
    <Reveal className="px-6 lg:px-16 py-24" style={{ background: "white" }}>
      <div className="max-w-6xl mx-auto">
        <SectionLabel>{t.build.kicker}</SectionLabel>
        <h2
          className="text-4xl lg:text-5xl font-bold mb-12"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {t.build.title}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.build.items.map((item, i) => (
            <article key={item.title} className="overflow-hidden" style={{ background: "var(--color-canvas)" }}>
              <img
                src={BUILD_IMGS[i]}
                alt={item.title}
                className="w-full h-44 object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "var(--font-display)" }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
                  {item.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export function Profiles() {
  const { t } = useI18n();
  return (
    <Reveal className="px-6 lg:px-16 py-24 lg:py-32">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>{t.who.kicker}</SectionLabel>
        <h2
          className="text-4xl lg:text-5xl font-bold mb-12"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {t.who.title}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.who.groups.map((group) => (
            <article
              key={group.title}
              className="p-6 border"
              style={{ borderColor: "var(--color-rule)", background: "white" }}
            >
              <h3
                className="text-lg font-semibold mb-4"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-blue)" }}
              >
                {group.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm" style={{ color: "var(--color-muted)" }}>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export function NotExpert() {
  const { t } = useI18n();
  return (
    <Reveal className="px-6 lg:px-16 py-24" style={{ background: "var(--color-green)" }}>
      <div className="max-w-6xl mx-auto">
        <SectionLabel light>{t.expert.kicker}</SectionLabel>
        <h2
          className="text-4xl lg:text-5xl font-bold text-white mb-4 max-w-3xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {t.expert.title}
        </h2>
        <p className="text-lg mb-4 max-w-2xl" style={{ color: "rgba(255,255,255,0.85)" }}>
          {t.expert.subtitle}
        </p>
        <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>
          {t.expert.intro}
        </p>
        <div className="flex flex-wrap gap-2">
          {t.expert.traits.map((trait) => (
            <span
              key={trait}
              className="px-4 py-2 text-sm border"
              style={{ borderColor: "rgba(255,255,255,0.3)", color: "#fff" }}
            >
              {trait}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export function Week() {
  const { t } = useI18n();
  return (
    <Reveal className="px-6 lg:px-16 py-24" style={{ background: "var(--color-ink)" }}>
      <div className="max-w-6xl mx-auto">
        <SectionLabel light>{t.week.kicker}</SectionLabel>
        <h2
          className="text-4xl lg:text-5xl font-bold text-white mb-12"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {t.week.title}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-7 gap-px" style={{ background: "rgba(255,255,255,0.08)" }}>
          {t.week.days.map((d) => (
            <div key={d.day} className="p-5" style={{ background: "rgba(26,26,24,0.9)" }}>
              <p
                className="text-xs tracking-widest uppercase mb-3"
                style={{ color: "var(--color-green-mid)", fontFamily: "var(--font-mono)" }}
              >
                {d.day}
              </p>
              <p className="text-sm text-white leading-relaxed">{d.activity}</p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export function LifeTogo() {
  const { t } = useI18n();
  return (
    <Reveal id="life" className="px-6 lg:px-16 py-24 lg:py-32">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>{t.life.kicker}</SectionLabel>
        <h2
          className="text-4xl lg:text-5xl font-bold mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {t.life.title}
        </h2>
        <p
          className="text-xl italic mb-10"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-blue)" }}
        >
          {t.life.subtitle}
        </p>
        <div className="flex flex-wrap gap-2 mb-10">
          {t.life.items.map((item) => (
            <span
              key={item}
              className="px-4 py-2 text-sm"
              style={{ background: "var(--color-blue-light)", color: "var(--color-blue)" }}
            >
              {item}
            </span>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {LIFE_IMGS.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={t.life.items[i] ?? "Togo"}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export function Agbelouve() {
  const { t } = useI18n();
  return (
    <Reveal className="px-6 lg:px-16 py-24" style={{ background: "white" }}>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <SectionLabel>{t.agb.kicker}</SectionLabel>
          <h2
            className="text-4xl lg:text-5xl font-bold italic mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.agb.title}
          </h2>
          <p className="text-base leading-loose mb-8" style={{ color: "var(--color-muted)" }}>
            {t.agb.body}
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {t.agb.facts.map((fact) => (
              <div
                key={fact.label}
                className="px-4 py-3"
                style={{ background: "var(--color-green-light)", borderLeft: "3px solid var(--color-green)" }}
              >
                <p
                  className="text-[10px] tracking-widest uppercase mb-1"
                  style={{ color: "var(--color-green)", fontFamily: "var(--font-mono)" }}
                >
                  {fact.label}
                </p>
                <p className="text-sm" style={{ color: "var(--color-ink)" }}>
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="min-h-[360px] border" style={{ borderColor: "var(--color-rule)" }}>
          <iframe
            title="Carte Agbelouve, Togo"
            className="w-full h-full min-h-[360px]"
            loading="lazy"
            src="https://www.openstreetmap.org/export/embed.html?bbox=0.95%2C6.40%2C1.42%2C6.75&layer=mapnik&marker=6.55%2C1.18"
          />
        </div>
      </div>
    </Reveal>
  );
}

export function Support() {
  const { t } = useI18n();
  return (
    <Reveal className="px-6 lg:px-16 py-24 lg:py-32">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>{t.support.kicker}</SectionLabel>
        <h2
          className="text-4xl lg:text-5xl font-bold mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {t.support.title}
        </h2>
        <p className="text-sm mb-10 max-w-2xl" style={{ color: "var(--color-muted)" }}>
          {t.support.note}
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.support.items.map((item) => (
            <article
              key={item.title}
              className="p-5 border"
              style={{ borderColor: "var(--color-rule)", background: "white" }}
            >
              <h3 className="font-semibold mb-2" style={{ fontFamily: "var(--font-display)" }}>
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export function Included() {
  const { t } = useI18n();
  return (
    <Reveal className="px-6 lg:px-16 py-24" style={{ background: "white" }}>
      <div className="max-w-3xl mx-auto">
        <SectionLabel>{t.included.kicker}</SectionLabel>
        <h2
          className="text-4xl lg:text-5xl font-bold mb-10"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {t.included.title}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr style={{ borderBottom: "2px solid var(--color-ink)" }}>
                <th className="py-3 pr-4 font-medium" style={{ fontFamily: "var(--font-mono)" }}>
                  {t.included.colItem}
                </th>
                <th className="py-3 font-medium" style={{ fontFamily: "var(--font-mono)" }}>
                  {t.included.colInfo}
                </th>
              </tr>
            </thead>
            <tbody>
              {t.included.rows.map((row) => (
                <tr key={row.item} style={{ borderBottom: "1px solid var(--color-rule)" }}>
                  <td className="py-3 pr-4 font-semibold">{row.item}</td>
                  <td className="py-3" style={{ color: "var(--color-muted)" }}>
                    {row.info}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Reveal>
  );
}

export function Process() {
  const { t } = useI18n();
  return (
    <Reveal id="application" className="px-6 lg:px-16 py-24" style={{ background: "var(--color-blue-light)" }}>
      <div className="max-w-6xl mx-auto">
        <SectionLabel>{t.process.kicker}</SectionLabel>
        <h2
          className="text-4xl lg:text-5xl font-bold mb-12"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {t.process.title}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {t.process.steps.map((step, i) => (
            <article key={step.title} className="p-5 bg-white">
              <p
                className="text-xs tracking-widest mb-3"
                style={{ color: "var(--color-green)", fontFamily: "var(--font-mono)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="font-semibold mb-2" style={{ fontFamily: "var(--font-display)" }}>
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
                {step.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export function Testimonials() {
  const { t } = useI18n();
  return (
    <Reveal className="px-6 lg:px-16 py-24 lg:py-32">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>{t.stories.kicker}</SectionLabel>
        <h2
          className="text-4xl lg:text-5xl font-bold mb-12"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {t.stories.title}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {t.stories.items.map((story, i) => (
            <article
              key={story.name}
              className="p-6"
              style={{ background: "white", borderTop: "3px solid var(--color-green)" }}
            >
              <img
                src={STORY_IMGS[i]}
                alt={story.name}
                className="w-16 h-16 object-cover mb-4"
                loading="lazy"
              />
              <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--color-muted)" }}>
                {story.quote}
              </p>
              <p className="font-semibold" style={{ fontFamily: "var(--font-display)" }}>
                {story.flag} {story.name} — {story.country}
              </p>
              <p className="text-xs mt-1" style={{ color: "var(--color-muted)" }}>
                {story.role}
              </p>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderColor: "var(--color-rule)" }} className="border-t">
      <button
        type="button"
        className="w-full py-5 flex items-start justify-between gap-4 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-semibold" style={{ fontFamily: "var(--font-display)" }}>
          {q}
        </span>
        <span
          className="shrink-0 text-xl transition-transform"
          style={{ color: "var(--color-green)", transform: open ? "rotate(45deg)" : "none" }}
        >
          +
        </span>
      </button>
      {open ? (
        <p className="pb-5 text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
          {a}
        </p>
      ) : null}
    </div>
  );
}

export function FAQ() {
  const { t } = useI18n();
  return (
    <Reveal id="faq" className="px-6 lg:px-16 py-24" style={{ background: "white" }}>
      <div className="max-w-3xl mx-auto">
        <SectionLabel>{t.faq.kicker}</SectionLabel>
        <h2
          className="text-4xl lg:text-5xl font-bold mb-10"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {t.faq.title}
        </h2>
        <div style={{ borderBottom: "1px solid var(--color-rule)" }}>
          {t.faq.items.map((item) => (
            <FaqItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export function FinalCTA() {
  const { t } = useI18n();
  return (
    <Reveal className="px-6 lg:px-16 py-24 lg:py-32" style={{ background: "var(--color-blue)" }}>
      <div className="max-w-3xl mx-auto text-center">
        <h2
          className="text-4xl lg:text-6xl font-bold text-white mb-8"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {t.cta.title}
        </h2>
        <p className="text-base leading-relaxed mb-3" style={{ color: "#E8EFF7" }}>
          {t.cta.p1}
        </p>
        <p className="text-base leading-relaxed mb-3" style={{ color: "#E8EFF7" }}>
          {t.cta.p2}
        </p>
        <p className="text-base leading-relaxed mb-10" style={{ color: "var(--color-green-light)" }}>
          {t.cta.p3}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <PrimaryButton to="/apply">{t.cta.apply}</PrimaryButton>
          <SecondaryButton light to="/partners">
            {t.cta.partner}
          </SecondaryButton>
        </div>
      </div>
    </Reveal>
  );
}

