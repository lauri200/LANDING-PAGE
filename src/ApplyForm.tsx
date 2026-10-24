import { useRef, useState, type FormEvent } from "react";
import { useI18n } from "./context";
import { track } from "./lib/analytics";
import { submitApplication } from "./lib/supabase";
import {
  FileField,
  InputField,
  PrimaryButton,
  Reveal,
  SectionLabel,
  SelectField,
  TextAreaField,
} from "./ui";

export default function ApplyForm() {
  const { t, lang } = useI18n();
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [skills, setSkills] = useState<string[]>([]);
  const [cv, setCv] = useState<File | null>(null);
  const [letter, setLetter] = useState<File | null>(null);
  const [portfolio, setPortfolio] = useState<File | null>(null);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    birthDate: "",
    education: "",
    field: "",
    profession: "",
    experience: "",
    digital: "",
    arrival: "",
    duration: "",
    motivation: "",
    project: "",
    source: "",
  });

  const startedRef = useRef(false);
  const markStarted = () => {
    if (startedRef.current) return;
    startedRef.current = true;
    track("application_started");
  };

  const set = (key: keyof typeof form) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const toggleSkill = (skill: string) => {
    setSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill],
    );
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setSending(true);
    try {
      if (!cv || !letter) throw new Error(t.success.error);
      await submitApplication({
        lang,
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        phone: form.phone,
        country: form.country,
        city: form.city,
        birthDate: form.birthDate,
        education: form.education,
        field: form.field,
        profession: form.profession,
        experience: form.experience,
        digital: form.digital,
        skills,
        arrival: form.arrival,
        duration: form.duration,
        motivation: form.motivation,
        project: form.project,
        source: form.source,
        cv,
        letter,
        portfolio,
      });
      setSent(true);
      track("application_submitted", { source: form.source || "unknown" });
    } catch (err) {
      setError(err instanceof Error ? err.message : t.success.error);
    } finally {
      setSending(false);
    }
  };

  return (
    <Reveal id="apply" className="px-6 lg:px-16 py-24" style={{ background: "var(--color-canvas)" }}>
      <div className="max-w-3xl mx-auto">
        <SectionLabel>{t.apply.kicker}</SectionLabel>
        <h2
          className="text-4xl lg:text-5xl font-bold mb-10"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {t.apply.title}
        </h2>

        {sent ? (
          <div className="py-16 text-center" style={{ border: "2px solid var(--color-green)" }}>
            <p
              className="text-2xl font-bold mb-2"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-green)" }}
            >
              {t.success.applyTitle}
            </p>
            <p style={{ color: "var(--color-muted)" }}>{t.success.applyBody}</p>
          </div>
        ) : (
          <form className="flex flex-col gap-8" onSubmit={onSubmit} onFocusCapture={markStarted}>
            <fieldset className="flex flex-col gap-5">
              <legend
                className="text-xs tracking-widest uppercase mb-2"
                style={{ color: "var(--color-blue)", fontFamily: "var(--font-mono)" }}
              >
                {t.apply.identity}
              </legend>
              <div className="grid sm:grid-cols-2 gap-5">
                <InputField label={t.apply.firstName} required value={form.firstName} onChange={set("firstName")} />
                <InputField label={t.apply.lastName} required value={form.lastName} onChange={set("lastName")} />
                <InputField label={t.apply.email} type="email" required value={form.email} onChange={set("email")} />
                <InputField label={t.apply.phone} type="tel" required value={form.phone} onChange={set("phone")} />
                <InputField label={t.apply.country} required value={form.country} onChange={set("country")} />
                <InputField label={t.apply.city} required value={form.city} onChange={set("city")} />
                <InputField label={t.apply.birthDate} type="date" required value={form.birthDate} onChange={set("birthDate")} />
              </div>
            </fieldset>

            <fieldset className="flex flex-col gap-5">
              <legend
                className="text-xs tracking-widest uppercase mb-2"
                style={{ color: "var(--color-blue)", fontFamily: "var(--font-mono)" }}
              >
                {t.apply.profile}
              </legend>
              <div className="grid sm:grid-cols-2 gap-5">
                <InputField label={t.apply.education} required value={form.education} onChange={set("education")} />
                <InputField label={t.apply.field} required value={form.field} onChange={set("field")} />
                <InputField label={t.apply.profession} value={form.profession} onChange={set("profession")} />
                <SelectField
                  label={t.apply.experience}
                  required
                  value={form.experience}
                  onChange={set("experience")}
                  options={[
                    { value: "", label: t.apply.experience },
                    { value: "student", label: t.apply.expStudent },
                    { value: "graduate", label: t.apply.expGraduate },
                    { value: "pro", label: t.apply.expPro },
                  ]}
                />
                <InputField label={t.apply.digital} value={form.digital} onChange={set("digital")} />
              </div>
            </fieldset>

            <fieldset>
              <legend
                className="text-xs tracking-widest uppercase mb-4"
                style={{ color: "var(--color-blue)", fontFamily: "var(--font-mono)" }}
              >
                {t.apply.skills}
              </legend>
              <div className="grid sm:grid-cols-2 gap-2">
                {t.apply.skillList.map((skill) => (
                  <label key={skill} className="flex items-center gap-2 text-sm" style={{ color: "var(--color-ink)" }}>
                    <input
                      type="checkbox"
                      checked={skills.includes(skill)}
                      onChange={() => toggleSkill(skill)}
                    />
                    {skill}
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset className="flex flex-col gap-5">
              <legend
                className="text-xs tracking-widest uppercase mb-2"
                style={{ color: "var(--color-blue)", fontFamily: "var(--font-mono)" }}
              >
                {t.apply.availability}
              </legend>
              <div className="grid sm:grid-cols-2 gap-5">
                <InputField label={t.apply.arrival} type="date" required value={form.arrival} onChange={set("arrival")} />
                <SelectField
                  label={t.apply.duration}
                  required
                  value={form.duration}
                  onChange={set("duration")}
                  options={[
                    { value: "", label: t.apply.duration },
                    { value: "6", label: t.apply.duration6 },
                    { value: "9", label: t.apply.duration9 },
                    { value: "12", label: t.apply.duration12 },
                  ]}
                />
              </div>
            </fieldset>

            <TextAreaField
              label={t.apply.motivation}
              required
              rows={6}
              value={form.motivation}
              onChange={set("motivation")}
            />
            <TextAreaField
              label={t.apply.project}
              required
              rows={5}
              value={form.project}
              onChange={set("project")}
            />

            <fieldset className="flex flex-col gap-5">
              <legend
                className="text-xs tracking-widest uppercase mb-2"
                style={{ color: "var(--color-blue)", fontFamily: "var(--font-mono)" }}
              >
                {t.apply.documents}
              </legend>
              <FileField label={t.apply.cv} required accept=".pdf" onChange={setCv} />
              <FileField label={t.apply.letter} required accept=".pdf,.doc,.docx" onChange={setLetter} />
              <FileField label={t.apply.portfolio} accept=".pdf,.zip,image/*" onChange={setPortfolio} />
            </fieldset>

            <SelectField
              label={t.apply.source}
              required
              value={form.source}
              onChange={set("source")}
              options={[
                { value: "", label: t.apply.source },
                ...t.apply.sourceList.map((s) => ({ value: s, label: s })),
              ]}
            />

            <p className="text-xs" style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}>
              * {t.apply.required}
            </p>
            {error ? (
              <p className="text-sm" style={{ color: "var(--color-warm)" }}>
                {error}
              </p>
            ) : null}
            <PrimaryButton type="submit" color="blue" disabled={sending}>
              {sending ? t.success.sending : t.apply.submit}
            </PrimaryButton>
          </form>
        )}
      </div>
    </Reveal>
  );
}
