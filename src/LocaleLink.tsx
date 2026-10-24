import {
  Link,
  NavLink,
  useLocation,
  useNavigate,
  type LinkProps,
  type NavLinkProps,
} from "react-router-dom";
import { useI18n } from "./context";
import type { Lang } from "./i18n";
import { track } from "./lib/analytics";
import { localize } from "./lib/locale";

export function LocaleLink({ to, ...props }: LinkProps) {
  const { lang } = useI18n();
  const href = typeof to === "string" ? localize(lang, to) : to;
  return <Link to={href} {...props} />;
}

export function LocaleNavLink({ to, ...props }: NavLinkProps) {
  const { lang } = useI18n();
  const href = typeof to === "string" ? localize(lang, to) : to;
  return <NavLink to={href} {...props} />;
}

export function useLangSwitch() {
  const { lang, setLang } = useI18n();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (next: Lang) => {
    if (next === lang) return;
    setLang(next);
    track("language_switch", { lang: next });
    navigate(localize(next, pathname));
  };
}
