import { Suspense, useEffect, useRef } from 'react';
import { Outlet, ScrollRestoration, useLocation } from 'react-router';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import './layout.css';

const SITE = 'Shannen Pascual';
const TITLES = {
  '/': `${SITE} — Front-End Developer & UI/UX Designer`,
  '/about': `About · ${SITE}`,
  '/projects': `Projects · ${SITE}`,
  '/resume': `Resume · ${SITE}`,
  '/contact': `Contact · ${SITE}`,
};

function PageFallback() {
  return (
    <div className="page-loading" role="status">
      <span className="page-loading-dot" aria-hidden="true" />
      <span className="sr-only">Loading page…</span>
    </div>
  );
}

export default function Layout() {
  const { pathname } = useLocation();
  const mainRef = useRef(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    document.title = TITLES[pathname] ?? `Page not found · ${SITE}`;
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    // Move focus to the new page for keyboard and screen-reader users
    mainRef.current?.focus({ preventScroll: true });
  }, [pathname]);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main" ref={mainRef} tabIndex={-1} className="page" key={pathname}>
        <Suspense fallback={<PageFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  );
}
