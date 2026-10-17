import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { Download, Menu, X } from 'lucide-react';
import { NAV_LEFT, NAV_RIGHT, CV_PDF } from '../../data/content';
import './navbar.css';

const ALL_LINKS = [...NAV_LEFT, ...NAV_RIGHT];

// Compact 'CV' in the desktop bar keeps both sides the same width; the mobile menu has room for the full label
function ResumeCta({ isBlock = false }) {
  return (
    <li>
      <a
      href={CV_PDF}
      download="Shannen-Pascual-CV.pdf"
      className={`nav-cta${isBlock ? ' nav-cta--block' : ''}`}
      aria-label="Download CV (PDF)"
      >
        <Download size={18} aria-hidden="true" /> {isBlock ? 'Download CV' : 'CV'}
      </a>
    </li>
  );
}

function NavItem({ link }) {
  return (
    <li>
      <NavLink to={link.to} end={link.to === '/'} className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}>
        {link.label}
      </NavLink>
    </li>
  );
}

export default function Navbar() {
  const { pathname } = useLocation();
  const [openPath, setOpenPath] = useState(null);
  // Menu closes itself whenever the route changes, since it is tied to the path it was opened on
  const isOpen = openPath === pathname;

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = e => e.key === 'Escape' && setOpenPath(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  return (
    <header className="nav-wrap">
      <nav className="nav container" aria-label="Main navigation">
        <div className="nav-pill">
          <ul className="nav-list">
            {NAV_LEFT.map(link => (
              <NavItem key={link.label} link={link} />
            ))}
          </ul>

          <Link to="/" className="nav-logo" aria-label="Shannen Pascual — home">
            <span className="nav-logo-mark">
            <img src="/images/Personal_Logo-removebg-preview.png" alt="" />
            </span>
            <span className="nav-logo-text">SHANNEN</span>
          </Link>

          <ul className="nav-list">
            {NAV_RIGHT.map(link => (
              <NavItem key={link.label} link={link} />
            ))}
            <ResumeCta />
          </ul>

          <button
            type="button"
            className="nav-toggle"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setOpenPath(isOpen ? null : pathname)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <ul id="mobile-menu" className={`nav-mobile${isOpen ? ' is-open' : ''}`} hidden={!isOpen}>
          {ALL_LINKS.map(link => (
            <NavItem key={link.label} link={link} />
          ))}
          <ResumeCta isBlock />
        </ul>
      </nav>
    </header>
  );
}
