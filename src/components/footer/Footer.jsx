import { Link } from 'react-router';
import { ArrowUpRight, Download } from 'lucide-react';
import SocialIcon from '../ui/SocialIcon';
import { CONTACT, NAV_LEFT, NAV_RIGHT, RESUME_PDF, SOCIALS } from '../../data/content';
import './footer.css';

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <h2 className="footer-cta-title">Let's Connect there</h2>
          <Link to="/contact" className="btn btn-primary">
            Hire me <ArrowUpRight size={20} aria-hidden="true" />
          </Link>
        </div>

        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="nav-logo-mark">SP</span> SHANNEN PASCUAL
            </Link>
            <p>
              Aspiring front-end developer and UI/UX designer from {CONTACT.address}, passionate about visually engaging,
              user-friendly digital experiences.
            </p>
            <ul className="footer-socials">
              {SOCIALS.map(s => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                    <SocialIcon name={s.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer navigation">
            <h3 className="footer-heading">Navigation</h3>
            <ul className="footer-links">
              {[...NAV_LEFT, ...NAV_RIGHT].map(link => (
                <li key={link.label}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="footer-heading">Contact</h3>
            <ul className="footer-links">
              <li>
                <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </li>
              <li>{CONTACT.address}</li>
            </ul>
          </div>

          <div>
            <h3 className="footer-heading">Get my Resume</h3>
            <p className="footer-note">The full story — education, skills and certifications — in one PDF.</p>
            <a href={RESUME_PDF} download className="footer-resume">
              <Download size={18} aria-hidden="true" /> Download Resume
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright © {YEAR} Shannen Pascual. All Rights Reserved.</p>
          <button type="button" className="footer-top-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
