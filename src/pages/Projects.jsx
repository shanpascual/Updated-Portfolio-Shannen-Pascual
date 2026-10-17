import { useSearchParams } from 'react-router';
import { ArrowUpRight, Check } from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';
import CtaBand from '../components/layout/CtaBand';
import AnimatedContent from '../components/reactbits/AnimatedContent';
import { PROJECTS } from '../data/content';
import './projects.css';

const ALL = 'All';
const FILTERS = [ALL, ...new Set(PROJECTS.map(p => p.category))];
const FILTER_LABELS = { 'UI/UX': 'UI/UX Design', Web: 'Websites', Mobile: 'Mobile Apps' };

function ProjectRow({ project, index }) {
  const number = String(index + 1).padStart(2, '0');
  const isFlipped = index % 2 === 1;
  const [primary, secondary] = project.gallery;

  return (
    <li className={`project-row${isFlipped ? ' is-flipped' : ''}${project.category === 'Mobile' ? ' is-mobile-app' : ''}`}>
      <AnimatedContent
        direction="horizontal"
        reverse={!isFlipped}
        distance={60}
        className="project-visual"
      >
        <span className="project-num" aria-hidden="true">
          {number}
        </span>
        <div className="project-blob" aria-hidden="true" />
        <img className="project-shot project-shot--main" src={primary} alt={`${project.title} — main screen`} loading="lazy" width="1200" height="800" />
        <img className="project-shot project-shot--alt" src={secondary} alt="" loading="lazy" width="800" height="600" />
      </AnimatedContent>

      <AnimatedContent distance={40} delay={0.1} className="project-info">
        <span className="project-type">{project.type} · {project.date}</span>
        <h2 className="project-title">{project.title}</h2>
        <p className="project-desc">{project.description}</p>

        <ul className="project-tools" aria-label="Tools">
          {project.tools.map(tool => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>

        <ul className="project-features" aria-label="Highlights">
          {project.features.map(feature => (
            <li key={feature}>
              <Check size={18} aria-hidden="true" /> {feature}
            </li>
          ))}
        </ul>

        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary project-cta">
            Explore Project <ArrowUpRight size={20} aria-hidden="true" />
            <span className="sr-only">(opens in new tab)</span>
          </a>
        )}
      </AnimatedContent>
    </li>
  );
}

export default function Projects() {
  const [params, setParams] = useSearchParams();
  const requested = params.get('filter');
  const active = FILTERS.includes(requested) ? requested : ALL;
  const visible = active === ALL ? PROJECTS : PROJECTS.filter(p => p.category === active);

  const selectFilter = filter => {
    setParams(filter === ALL ? {} : { filter }, { replace: true, preventScrollReset: true });
  };

  return (
    <>
      <PageHeader
        title="My"
        accent="Projects"
        crumb="Projects"
        intro="Client work, class projects and design concepts — each one a step in how I think about layout, usability and clean front-end code."
      />

      <section className="section projects" aria-label="Project list">
        <div className="container">
          <div className="project-filters" role="group" aria-label="Filter projects by type">
            {FILTERS.map(filter => {
              const count = filter === ALL ? PROJECTS.length : PROJECTS.filter(p => p.category === filter).length;
              return (
                <button
                  key={filter}
                  type="button"
                  className={`filter-chip${filter === active ? ' is-active' : ''}`}
                  aria-pressed={filter === active}
                  onClick={() => selectFilter(filter)}
                >
                  {FILTER_LABELS[filter] ?? filter}
                  <span className="filter-count">{count}</span>
                </button>
              );
            })}
          </div>

          <p className="sr-only" aria-live="polite">
            Showing {visible.length} {visible.length === 1 ? 'project' : 'projects'}
          </p>

          <ol className="project-list" key={active}>
            {visible.map((project, i) => (
              <ProjectRow key={project.title} project={project} index={i} />
            ))}
          </ol>
        </div>
      </section>

      <CtaBand title="Have a project in mind?" text="Let's turn your idea into a clean, user-friendly experience." label="Start a Project" />
    </>
  );
}