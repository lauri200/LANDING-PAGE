import { Link } from "react-router-dom";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { useI18n } from "./context";
import { track } from "./lib/analytics";
import { localize, stripLocale } from "./lib/locale";

export function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function useInView(threshold = 0.12) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export function SectionLabel({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className="font-mono text-xs tracking-[0.2em] uppercase mb-4"
      style={{
        color: light ? "rgba(255,255,255,0.7)" : "var(--color-green)",
        fontFamily: "var(--font-mono)",
      }}
    >
      {children}
    </p>
  );
}

export function Reveal({
  children,
  className = "",
  id,
  style,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
}) {
  return (
    <section id={id} className={className} style={style}>
      {children}
    </section>
  );
}

export function PrimaryButton({
  children,
  onClick,
  type = "button",
  color = "green",
  to,
  disabled,
}: {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  color?: "green" | "blue" | "warm";
  to?: string;
  disabled?: boolean;
}) {
  const bg =
    color === "blue"
      ? "var(--color-blue)"
      : color === "warm"
        ? "var(--color-warm)"
        : "var(--color-green)";
  const { lang } = useI18n();
  const className =
    "inline-block px-8 py-4 text-sm font-bold tracking-widest uppercase text-white transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-60";
  const style = { background: bg, fontFamily: "var(--font-mono)" as const };
  if (to) {
    return (
      <Link
        to={localize(lang, to)}
        className={className}
        style={style}
        onClick={() => {
          if (stripLocale(to) === "/apply") track("apply_now_click");
        }}
      >
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={className} style={style}>
      {children}
    </button>
  );
}

export function SecondaryButton({
  children,
  onClick,
  light = false,
  to,
}: {
  children: ReactNode;
  onClick?: () => void;
  light?: boolean;
  to?: string;
}) {
  const { lang } = useI18n();
  const className = "inline-block px-8 py-4 text-sm font-medium tracking-wide border transition-all hover:bg-white/10";
  const style = {
    borderColor: light ? "rgba(255,255,255,0.45)" : "var(--color-rule)",
    color: light ? "#fff" : "var(--color-ink)",
    fontFamily: "var(--font-body)" as const,
  };
  if (to) {
    return (
      <Link
        to={localize(lang, to)}
        className={className}
        style={style}
        onClick={() => {
          if (stripLocale(to) === "/apply") track("apply_now_click");
        }}
      >
        {children}
      </Link>
    );
  }
  return (
    <button type="button" onClick={onClick} className={className} style={style}>
      {children}
    </button>
  );
}

export function FieldLabel({
  children,
  required,
}: {
  children: ReactNode;
  required?: boolean;
}) {
  return (
    <label
      className="text-xs font-medium tracking-wide uppercase"
      style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}
    >
      {children}
      {required ? <span style={{ color: "var(--color-warm)" }}> *</span> : null}
    </label>
  );
}

const fieldStyle: CSSProperties = {
  borderColor: "var(--color-rule)",
  color: "var(--color-ink)",
  fontFamily: "var(--font-body)",
};

export function InputField({
  label,
  type = "text",
  required,
  value,
  onChange,
  name,
}: {
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  name?: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <FieldLabel required={required}>{label}</FieldLabel>
      <input
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2.5 text-sm bg-white border outline-none transition-colors"
        style={fieldStyle}
        onFocus={(e) => (e.target.style.borderColor = "var(--color-blue)")}
        onBlur={(e) => (e.target.style.borderColor = "var(--color-rule)")}
      />
    </div>
  );
}

export function SelectField({
  label,
  required,
  value,
  onChange,
  options,
  name,
}: {
  label: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  name?: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <FieldLabel required={required}>{label}</FieldLabel>
      <select
        name={name}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2.5 text-sm bg-white border appearance-none outline-none cursor-pointer"
        style={fieldStyle}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export function TextAreaField({
  label,
  required,
  value,
  onChange,
  rows = 5,
}: {
  label: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  rows?: number;
}) {
  return (
    <div className="flex flex-col gap-1">
      <FieldLabel required={required}>{label}</FieldLabel>
      <textarea
        required={required}
        rows={rows}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2.5 text-sm bg-white border outline-none resize-y min-h-[120px]"
        style={fieldStyle}
        onFocus={(e) => (e.target.style.borderColor = "var(--color-blue)")}
        onBlur={(e) => (e.target.style.borderColor = "var(--color-rule)")}
      />
    </div>
  );
}

export function FileField({
  label,
  required,
  accept,
  onChange,
}: {
  label: string;
  required?: boolean;
  accept?: string;
  onChange: (file: File | null) => void;
}) {
  return (
    <div className="flex flex-col gap-1">
      <FieldLabel required={required}>{label}</FieldLabel>
      <input
        type="file"
        required={required}
        accept={accept}
        className="text-sm py-2"
        style={{ color: "var(--color-muted)" }}
        onChange={(e) => onChange(e.target.files?.[0] ?? null)}
      />
    </div>
  );
}
