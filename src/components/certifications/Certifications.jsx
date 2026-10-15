import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import AnimatedContent from '../reactbits/AnimatedContent';
import { CERTIFICATIONS } from '../../data/content';
import './certifications.css';

/**
 * @param {{ limit?: number, seeAllTo?: string, id?: string }} props
 */
export default function Certifications({ limit, seeAllTo, id }) {
  const certs = limit ? CERTIFICATIONS.slice(0, limit) : CERTIFICATIONS;
  return (
    <section id={id} className="section certs" aria-labelledby="certs-heading">
      <div className="container">
        <header className="certs-head">
          <h2 id="certs-heading" className="section-title">
            Certifications &amp;
            <br />
            <span className="accent">Achievements</span>
          </h2>
          <div className="certs-side">
            <p>
              Specialized training and industry-recognized certifications in design, development, and IT fundamentals.
            </p>
            {seeAllTo && (
              <Link to={seeAllTo} className="btn btn-primary">
                See All
              </Link>
            )}
          </div>
        </header>

        <ul className="certs-grid">
          {certs.map((cert, i) => (
            <AnimatedContent key={cert.title} as="li" distance={40} delay={(i % 4) * 0.06} className="cert">
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">
                <div className="cert-media">
                  <img src={cert.img} alt="" loading="lazy" width="800" height="600" />
                  <span className="icon-btn cert-arrow" aria-hidden="true">
                    <ArrowUpRight size={24} />
                  </span>
                </div>
                <span className="cert-issuer">{cert.issuer}</span>
                <h3 className="cert-title">
                  {cert.title}
                  <span className="sr-only"> — view certificate (opens in new tab)</span>
                </h3>
              </a>
            </AnimatedContent>
          ))}
        </ul>
      </div>
    </section>
  );
}
