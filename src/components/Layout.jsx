import { useEffect } from "react";
import { NavLink, Link, Outlet, useLocation } from "react-router-dom";

import Sprig from "./Sprig";
import { pages, tones } from "../data/pages";

export default function Layout() {
  const { pathname } = useLocation();
  const tone = tones[pathname] || "cream";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.dataset.tone = tone;

    return () => {
      delete document.documentElement.dataset.tone;
    };
  }, [tone]);

  return (
    <div className="shell">
      <a className="skip" href="#main">
        Skip to content
      </a>

      {pathname !== "/" && (
        <Link className="home-mark hand" to="/">
          ♡ home
        </Link>
      )}

      <main id="main" key={pathname} className="page">
        <Outlet />
      </main>

      <footer className="site-footer">
        <Sprig className="foot-sprig" />

        <p className="hand">still choosing you, bubu.</p>

        <nav aria-label="All pages" className="index">
          {pages.map(([to, label]) => (
            <NavLink key={to} to={to} end>
              {label}
            </NavLink>
          ))}
        </nav>
      </footer>
    </div>
  );
}