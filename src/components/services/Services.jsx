import { ArrowUpRight } from 'lucide-react';
import SpotlightCard from '../reactbits/SpotlightCard';
import AnimatedContent from '../reactbits/AnimatedContent';
import { SERVICES } from '../../data/content';
import './services.css';

export default function Services() {
  return (
    <section className="services" aria-labelledby="services-heading">
      <div className="services-panel">
        <div className="services-decor" aria-hidden="true">
          <svg className="services-waves" viewBox="0 0 1440 900" preserveAspectRatio="none">
            <path d="M-60 180 C 280 60, 520 340, 900 230 S 1300 120, 1520 280" />
            <path d="M-60 300 C 240 190, 560 460, 960 350 S 1360 250, 1520 400" />
            <path className="is-accent" d="M-60 430 C 300 330, 540 560, 940 470 S 1340 380, 1520 520" />
            <path d="M-60 560 C 260 450, 580 680, 980 590 S 1380 500, 1520 640" />
            <path className="is-accent" d="M-60 690 C 320 600, 560 790, 920 710 S 1320 640, 1520 760" />
            <path d="M-60 820 C 280 730, 600 880, 1000 810 S 1380 750, 1520 860" />
          </svg>
          <span className="services-blob services-blob--left" />
          <span className="services-blob services-blob--top" />
          <span className="services-blob services-blob--right" />
        </div>

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