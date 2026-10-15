import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import Magnet from '../reactbits/Magnet';
import './cta-band.css';

/**
 * Rose call-to-action strip closing each inner page.
 * @param {{ title?: string, text?: string, to?: string, label?: string }} props
 */
export default function CtaBand({
  title = "Let's Design Together!",
  text = "I'm always excited to collaborate on projects that challenge me and help me grow. Reach out, and let's create something meaningful.",
  to = '/contact',
  label = 'Contact Me',
}) {
  return (
    <section className="cta-band" aria-labelledby="cta-band-heading">
      <div className="container">
        <div className="cta-band-panel">
          <svg className="cta-band-swirl" viewBox="0 0 200 200" aria-hidden="true">
            <circle cx="100" cy="100" r="70" />
            <circle cx="100" cy="100" r="88" />
            <circle cx="100" cy="100" r="52" />
          </svg>
          <div className="cta-band-copy">
            <h2 id="cta-band-heading">{title}</h2>
            <p>{text}</p>
          </div>
          <Magnet padding={40} magnetStrength={4}>
            <Link to={to} className="btn cta-band-btn">
              {label} <ArrowUpRight size={20} aria-hidden="true" />
            </Link>
          </Magnet>
        </div>
      </div>
    </section>
  );
}
