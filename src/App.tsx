import { useEffect } from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import AdminShell from "./admin/AdminShell";
import ApplicationPage from "./admin/ApplicationPage";
import ApplicationsPage from "./admin/ApplicationsPage";
import DashboardPage from "./admin/DashboardPage";
import AdminHelpPage from "./admin/HelpPage";
import LoginPage from "./admin/LoginPage";
import PartnerPage from "./admin/PartnerPage";
import PartnersAdminPage from "./admin/PartnersAdminPage";
import { useI18n, LangProvider } from "./context";
import { HOME_SLUGS, homePath, isLang, localize } from "./lib/locale";
import type { Lang } from "./i18n";
import Layout from "./Layout";
import AboutPage from "./pages/AboutPage";
import ActivitiesPage from "./pages/ActivitiesPage";
import ApplyPage from "./pages/ApplyPage";
import EligibilityPage from "./pages/EligibilityPage";
import FaqPage from "./pages/FaqPage";
import GuidePage from "./pages/GuidePage";
import Home from "./pages/Home";
import LifePage from "./pages/LifePage";
import MissionPage from "./pages/MissionPage";
import NotFoundPage from "./pages/NotFoundPage";
import PartnersPage from "./pages/PartnersPage";
import PrivacyPage from "./pages/PrivacyPage";

const LEGACY_PATHS = [
  "/about",
  "/mission",
  "/activities",
  "/life",
  "/apply",
  "/eligibility",
  "/guide",
  "/faq",
  "/partners",
  "/privacy",
];

function RedirectToLocale() {
  const { lang } = useI18n();
  const location = useLocation();
  return (
    <Navigate
      to={`${localize(lang, location.pathname)}${location.search}${location.hash}`}
      replace
    />
  );
}

function LangGate() {
  const { lang: param } = useParams();
  const { lang, setLang } = useI18n();

  useEffect(() => {
    if (isLang(param) && param !== lang) setLang(param);
  }, [param, lang, setLang]);

  if (!isLang(param)) return <NotFoundPage />;
  return <Outlet />;
}

function HomeIndexRedirect() {
  const { lang } = useParams();
  return <Navigate to={homePath(lang as Lang)} replace />;
}

function HomeGate() {
  const { slug } = useParams();
  if (!slug || !HOME_SLUGS.has(slug)) return <NotFoundPage />;
  return <Home />;
}

export default function App() {
  const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

  return (
    <LangProvider>
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/admin/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminShell />}>
            <Route index element={<DashboardPage />} />
            <Route path="applications" element={<ApplicationsPage />} />
            <Route path="applications/:id" element={<ApplicationPage />} />
            <Route path="partners" element={<PartnersAdminPage />} />
            <Route path="partners/:id" element={<PartnerPage />} />
            <Route path="help" element={<AdminHelpPage />} />
          </Route>
          <Route element={<Layout />}>
            <Route path="/" element={<RedirectToLocale />} />
            {LEGACY_PATHS.map((path) => (
              <Route key={path} path={path} element={<RedirectToLocale />} />
            ))}
            <Route path="/:lang" element={<LangGate />}>
              <Route index element={<HomeIndexRedirect />} />
              <Route path=":slug" element={<HomeGate />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="mission" element={<MissionPage />} />
              <Route path="activities" element={<ActivitiesPage />} />
              <Route path="life" element={<LifePage />} />
              <Route path="apply" element={<ApplyPage />} />
              <Route path="eligibility" element={<EligibilityPage />} />
              <Route path="guide" element={<GuidePage />} />
              <Route path="faq" element={<FaqPage />} />
              <Route path="partners" element={<PartnersPage />} />
              <Route path="privacy" element={<PrivacyPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LangProvider>
  );
}
