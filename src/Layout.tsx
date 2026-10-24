import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import CookieBanner from "./CookieBanner";
import Footer from "./Footer";
import Header from "./Header";
import { track } from "./lib/analytics";
import Seo from "./Seo";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function PageTracker() {
  const { pathname, search } = useLocation();
  useEffect(() => {
    track("page_view");
  }, [pathname, search]);
  return null;
}

export default function Layout() {
  return (
    <div className="min-h-full" style={{ background: "var(--color-canvas)" }}>
      <ScrollToTop />
      <PageTracker />
      <Seo />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
