import { Link } from 'react-router';
import { ArrowUpRight, Briefcase, Palette, TrendingUp } from 'lucide-react';
import CountUp from '../reactbits/CountUp';
import { CERTIFICATIONS, PROJECTS } from '../../data/content';
import './hire.css';

const REASONS = [
  {
    icon: Palette,
    title: 'I design before I code',
    text: 'I plan layouts, spacing and user flows in Figma first, so what I build is clear and easy to use.',
  },
  {
    icon: Briefcase,
    title: 'Experience with real projects',
    text: 'Client work, group projects and on-the-job training at CIAC taught me to build for real users and deadlines.',
  },
  {
    icon: TrendingUp,
    title: 'Always improving',
    text: 'I keep adding skills, from React and Supabase to cloud and analytics certifications.',
  },
];

const STATS = [
  { value: PROJECTS.length, label: 'Projects completed' },
  { value: 4, label: 'Happy clients' },
  { value: CERTIFICATIONS.length, label: 'Certifications' },
];

export default function HireMe() {
  return (
    <section className="hire" aria-labelledby="hire-heading">
      <div className="hire-panel">
        <div className="container hire-grid">
          <div className="hire-visual">
            <svg className="hire-rings" viewBox="0 0 800 800" aria-hidden="true" focusable="false">
              <circle cx="400" cy="400" r="255" />
              <circle cx="400" cy="400" r="320" />
              <circle cx="400" cy="400" r="385" />
            </svg>
            <img src="/images/shannen-image2.png" alt="Portrait of Shannen Pascual" width="500" height="500" />
          </div>

          <div className="hire-copy">
            <h2 id="hire-heading" className="section-title">
              Why <span className="accent">Hire me</span>?
            </h2>
            <p className="hire-lead">
              I may still be learning, but I bring dedication, creativity, and a strong willingness to grow with every
              project I take on.
            </p>

            <ul className="hire-reasons">
              {REASONS.map(({ icon: Icon, title, text }) => (
                <li key={title}>
                  <span className="hire-reason-icon" aria-hidden="true">
                    <Icon size={22} />
                  </span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <dl className="hire-stats">
              {STATS.map(stat => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="hire-num">
                    <CountUp to={stat.value} duration={1.6} />+
                  </dd>
                  <dd className="hire-label" aria-hidden="true">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="hire-status">
              <span className="hire-dot" aria-hidden="true" />
              Open to internships and freelance work
            </p>

            <div className="hire-actions">
              <Link to="/contact" className="btn btn-primary">
                Hire me <ArrowUpRight size={20} aria-hidden="true" />
              </Link>
              <Link to="/projects" className="btn btn-outline">
                See my work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}