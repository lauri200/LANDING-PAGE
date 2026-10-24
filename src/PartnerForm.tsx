import { useState, type FormEvent } from "react";
import { useI18n } from "./context";
import { track } from "./lib/analytics";
import { submitPartner } from "./lib/supabase";
import {
  FileField,
  InputField,
  PrimaryButton,
  Reveal,
  SectionLabel,
  SelectField,
  TextAreaField,
} from "./ui";

export default function PartnerForm() {
  const { t, lang } = useI18n();
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [document, setDocument] = useState<File | null>(null);
  const [form, setForm] = useState({
    org: "",
    country: "",
    website: "",
    contact: "",
    email: "",
    type: "",
    volunteers: "",
    countries: "",
    program: "",
    message: "",
  });

  const set = (key: keyof typeof form) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setSending(true);
    try {
      await submitPartner({
        lang,
        org: form.org,
        country: form.country,
        website: form.website,
        contact: form.contact,
        email: form.email,
        type: form.type,
        volunteers: form.volunteers,
        countries: form.countries,
        program: form.program,
        message: form.message,
        document,
      });
      setSent(true);
      track("partner_request", { type: form.type || "unknown" });
    } catch (err) {
      setError(err instanceof Error ? err.message : t.success.error);
    } finally {
      setSending(false);
    }
  };

  return (
    <Reveal id="partners" className="px-6 lg:px-16 py-24" style={{ background: "white" }}>
      <div className="max-w-3xl mx-auto">
        <SectionLabel>{t.partner.kicker}</SectionLabel>
        <h2
          className="text-4xl lg:text-5xl font-bold mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {t.partner.title}
        </h2>
        <p className="text-base leading-relaxed mb-10" style={{ color: "var(--color-muted)" }}>
          {t.partner.intro}
        </p>

        {sent ? (
          <div className="py-16 text-center" style={{ border: "2px solid var(--color-blue)" }}>
            <p
              className="text-2xl font-bold mb-2"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-blue)" }}
            >
              {t.success.partnerTitle}
            </p>
            <p style={{ color: "var(--color-muted)" }}>{t.success.partnerBody}</p>
          </div>
        ) : (
          <form className="flex flex-col gap-5" onSubmit={onSubmit}>
            <div className="grid sm:grid-cols-2 gap-5">
              <InputField label={t.partner.org} required value={form.org} onChange={set("org")} />
              <InputField label={t.partner.country} required value={form.country} onChange={set("country")} />
              <InputField label={t.partner.website} type="url" value={form.website} onChange={set("website")} />
              <InputField label={t.partner.contact} required value={form.contact} onChange={set("contact")} />
              <InputField label={t.partner.email} type="email" required value={form.email} onChange={set("email")} />
              <SelectField
                label={t.partner.type}
                required
                value={form.type}
                onChange={set("type")}
                options={[
                  { value: "", label: t.partner.typeOpt },
                  { value: "uni", label: t.partner.type1 },
                  { value: "ngo", label: t.partner.type2 },
                  { value: "sending", label: t.partner.type3 },
                  { value: "other", label: t.partner.type4 },
                ]}
              />
              <InputField label={t.partner.volunteers} value={form.volunteers} onChange={set("volunteers")} />
              <InputField label={t.partner.countries} value={form.countries} onChange={set("countries")} />
            </div>
            <InputField label={t.partner.program} value={form.program} onChange={set("program")} />
            <TextAreaField
              label={t.partner.message}
              required
              value={form.message}
              onChange={set("message")}
            />
            <FileField label={t.partner.document} accept=".pdf,.doc,.docx" onChange={setDocument} />
            {error ? (
              <p className="text-sm" style={{ color: "var(--color-warm)" }}>
                {error}
              </p>
            ) : null}
            <p className="text-xs" style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}>
              * {t.partner.required}
            </p>
            <PrimaryButton type="submit" color="warm" disabled={sending}>
              {sending ? t.success.sending : t.partner.submit}
            </PrimaryButton>
          </form>
        )}
      </div>
    </Reveal>
  );
}
