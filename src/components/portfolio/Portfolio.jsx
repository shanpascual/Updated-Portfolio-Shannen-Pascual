import { useRef, useState } from 'react';
import { Link } from 'react-router';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../../data/content';
import './portfolio.css';

export default function Portfolio() {
  const [active, setActive] = useState(0);
  const trackRef = useRef(null);
  const project = PROJECTS[active];

  const select = index => {
    const next = (index + PROJECTS.length) % PROJECTS.length;
    setActive(next);
    const track = trackRef.current;
    const card = track?.children[next];
    if (track && card) track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: 'smooth' });
  };

  return (
    <section className="section portfolio" aria-labelledby="portfolio-heading">
      <div className="container">
        <header className="portfolio-head">
          <h2 id="portfolio-heading" className="section-title">
            Let's have a look at
            <br />
            my <span className="accent">Portfolio</span>
          </h2>
          <Link to="/projects" className="btn btn-primary">
            See All
          </Link>
        </header>

        <div className="portfolio-track" ref={trackRef} role="list">
          {PROJECTS.map((p, i) => (
            <button
              key={p.title}
              type="button"
              role="listitem"
              className={`portfolio-card${i === active ? ' is-active' : ''}`}
              onClick={() => select(i)}
              aria-pressed={i === active}
              aria-label={`Show details for ${p.title}`}
            >
              <img src={p.img} alt="" loading="lazy" width="1200" height="800" />
              <span className="portfolio-card-name" aria-hidden="true">
                {p.short}
              </span>
              <span className="portfolio-card-type">{p.type}</span>
            </button>
          ))}
        </div>

        <div className="portfolio-controls">
          <button type="button" className="round-btn" onClick={() => select(active - 1)} aria-label="Previous project">
            <ArrowLeft size={20} />
          </button>
          <div className="portfolio-dots" role="tablist" aria-label="Choose project">
            {PROJECTS.map((p, i) => (
              <button
                key={p.title}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={p.title}
                className={`dot${i === active ? ' is-active' : ''}`}
                onClick={() => select(i)}
              />
            ))}
          </div>
          <button type="button" className="round-btn" onClick={() => select(active + 1)} aria-label="Next project">
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="portfolio-detail" aria-live="polite" key={project.title}>
          <ul className="portfolio-tags" aria-label="Tools and focus areas">
            {project.tools.map(tool => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
          <h3 className="portfolio-title">
            {project.title}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-open"
              aria-label={`Open ${project.title} (opens in new tab)`}
            >
              <ArrowUpRight size={22} aria-hidden="true" />
            </a>
          </h3>
          <p className="portfolio-desc">{project.description}</p>
        </div>
      </div>
    </section>
  );
}
