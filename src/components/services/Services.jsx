import { ArrowUpRight } from 'lucide-react';
import SpotlightCard from '../reactbits/SpotlightCard';
import AnimatedContent from '../reactbits/AnimatedContent';
import { SERVICES } from '../../data/content';
import './services.css';

export default function Services() {
  return (
    <section className="services" aria-labelledby="services-heading">
      <div className="services-panel">
        <div className="services-glow" aria-hidden="true" />
        <div className="container">
          <header className="services-head">
            <h2 id="services-heading" className="section-title">
              My <span className="accent">Services</span>
            </h2>
            <p>
              I focus on developing practical front-end skills while continuously improving my design and usability
              knowledge.
            </p>
          </header>

          <ul className="services-grid">
            {SERVICES.map((service, i) => (
              <AnimatedContent key={service.title} as="li" distance={60} delay={i * 0.08} duration={0.7}>
                <SpotlightCard className="service-card" spotlightColor="rgba(214, 65, 108, 0.45)" theme="dark">
                  <h3 className="service-title">{service.title}</h3>
                  <div className="service-media">
                    <img src={service.img} alt="" loading="lazy" width="640" height="420" />
                  </div>
                  <a
                    href={service.link}
                    className="icon-btn service-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${service.title} project (opens in new tab)`}
                  >
                    <ArrowUpRight size={26} aria-hidden="true" />
                  </a>
                </SpotlightCard>
              </AnimatedContent>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
