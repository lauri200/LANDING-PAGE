import { useI18n } from "../context";

export default function PrivacyPage() {
  const { t } = useI18n();
  return (
    <div className="pt-[72px] px-6 lg:px-16 py-24">
      <div className="max-w-3xl mx-auto">
        <h1
          className="text-4xl lg:text-5xl font-bold mb-8"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-ink)" }}
        >
          {t.privacy.title}
        </h1>
        <div className="flex flex-col gap-4">
          {t.privacy.body.map((p) => (
            <p key={p} className="text-base leading-relaxed" style={{ color: "var(--color-muted)" }}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
