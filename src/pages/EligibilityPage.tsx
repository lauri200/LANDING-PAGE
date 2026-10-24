import { useMemo, useState } from "react";
import { useI18n } from "../context";
import { PrimaryButton, SecondaryButton } from "../ui";

export default function EligibilityPage() {
  const { t } = useI18n();
  const questions = t.eligibility.questions;
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const done = Object.keys(answers).length === questions.length;
  const yesCount = useMemo(
    () => questions.filter((_, i) => answers[i] === true).length,
    [answers, questions],
  );
  const eligible = done && yesCount === questions.length;

  return (
    <div className="pt-[72px] px-6 lg:px-16 py-24">
      <div className="max-w-3xl mx-auto">
        <p
          className="text-xs tracking-widest uppercase mb-4"
          style={{ color: "var(--color-green)", fontFamily: "var(--font-mono)" }}
        >
          {t.eligibility.kicker}
        </p>
        <h1 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
          {t.eligibility.title}
        </h1>
        <p className="text-base leading-relaxed mb-10" style={{ color: "var(--color-muted)" }}>
          {t.eligibility.intro}
        </p>
        <ol className="space-y-5 mb-10">
          {questions.map((question, index) => (
            <li key={question} className="p-5 bg-white">
              <p className="font-semibold mb-4">{question}</p>
              <div className="flex gap-3">
                <button
                  type="button"
                  className="px-4 py-2 text-xs uppercase tracking-widest"
                  style={{
                    background: answers[index] === true ? "var(--color-green)" : "transparent",
                    color: answers[index] === true ? "#fff" : "var(--color-ink)",
                    border: "1px solid var(--color-rule)",
                    fontFamily: "var(--font-mono)",
                  }}
                  onClick={() => setAnswers((prev) => ({ ...prev, [index]: true }))}
                >
                  {t.eligibility.yes}
                </button>
                <button
                  type="button"
                  className="px-4 py-2 text-xs uppercase tracking-widest"
                  style={{
                    background: answers[index] === false ? "var(--color-warm)" : "transparent",
                    color: answers[index] === false ? "#fff" : "var(--color-ink)",
                    border: "1px solid var(--color-rule)",
                    fontFamily: "var(--font-mono)",
                  }}
                  onClick={() => setAnswers((prev) => ({ ...prev, [index]: false }))}
                >
                  {t.eligibility.no}
                </button>
              </div>
            </li>
          ))}
        </ol>
        {done ? (
          <div className="p-6 mb-8" style={{ background: eligible ? "var(--color-green-light)" : "white", borderTop: `3px solid ${eligible ? "var(--color-green)" : "var(--color-warm)"}` }}>
            <p className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-display)" }}>
              {eligible ? t.eligibility.okTitle : t.eligibility.koTitle}
            </p>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--color-muted)" }}>
              {eligible ? t.eligibility.okBody : t.eligibility.koBody}
            </p>
            <PrimaryButton to="/apply">{t.eligibility.cta}</PrimaryButton>
          </div>
        ) : (
          <p className="text-sm mb-8" style={{ color: "var(--color-muted)" }}>
            {t.eligibility.pending}
          </p>
        )}
        <SecondaryButton to="/guide">{t.eligibility.guide}</SecondaryButton>
      </div>
    </div>
  );
}
