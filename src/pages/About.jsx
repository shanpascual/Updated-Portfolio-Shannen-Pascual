import { useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, MotionConfig } from 'motion/react';
import { Code2, Download, HeartHandshake, PenTool, Wrench } from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';
import CtaBand from '../components/layout/CtaBand';
import SpotlightCard from '../components/reactbits/SpotlightCard';
import AnimatedContent from '../components/reactbits/AnimatedContent';
import CountUp from '../components/reactbits/CountUp';
import Certifications from '../components/certifications/Certifications';
import Testimonials from '../components/testimonials/Testimonials';
import { RESUME_PDF } from '../data/content';
import { EXPERIENCE_LEVELS, QUICK_FACTS, SKILL_GROUPS } from '../data/profile';
import './about.css';

const SKILL_ICONS = [Code2, PenTool, Wrench, HeartHandshake];

function useScrollToHash() {
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [hash]);
}

function Intro() {
  return (
    <section className="section about-intro" aria-labelledby="about-intro-heading">
      <div className="container about-intro-grid">
        <AnimatedContent direction="horizontal" reverse distance={70} className="about-portrait">
          <img
            src="/images/shannen-image3.png"
            alt="Shannen holding a laptop, framed by rose rings"
            width="500"
            height="500"
          />
        </AnimatedContent>

        <div className="about-intro-copy">
          <p className="eyebrow">Who I am</p>
          <h2 id="about-intro-heading" className="section-title">
            I'm <span className="accent">more</span> than just a designer.
          </h2>
          <p className="about-lead">
            I'm a problem solver who enjoys turning ideas into functional and user-friendly solutions. My work reflects
            not only creativity but also continuous learning, collaboration, and a passion for building experiences that
            connect with people.
          </p>
          <dl className="about-facts">
            {QUICK_FACTS.map(fact => (
              <div key={fact.label} className="about-fact">
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section about-skills" aria-labelledby="skills-heading">
      <div className="container">
        <header className="about-section-head">
          <h2 id="skills-heading" className="section-title">
            What I'm <span className="accent">Actively Learning</span>
            <br />
            Every Day
          </h2>
        </header>
        <ul className="skills-grid">
          {SKILL_GROUPS.map((group, i) => {
            const Icon = SKILL_ICONS[i % SKILL_ICONS.length];
            return (
              <AnimatedContent key={group.title} as="li" distance={50} delay={i * 0.07}>
                <SpotlightCard className="skill-card" theme="light" spotlightColor="rgba(214, 65, 108, 0.35)">
                  <span className="skill-icon" aria-hidden="true">
                    <Icon size={26} />
                  </span>
                  <h3>{group.title}</h3>
                  <ul className="skill-chips">
                    {group.items.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </SpotlightCard>
              </AnimatedContent>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="about-exp" aria-labelledby="exp-heading">
      <div className="about-exp-panel">
        <div className="container about-exp-grid">
          <div>
            <h2 id="exp-heading" className="section-title">
              Design &amp; Development <span className="accent">Experience</span>
            </h2>
            <p className="about-exp-text">
              I'm gaining experience in UX, web, app, and graphic design through hands-on projects and continuous
              practice. My UX work focuses on understanding user needs, organizing content clearly, and creating
              wireframes that support an intuitive user flow.
            </p>
          </div>

          <MotionConfig reducedMotion="user">
            <ul className="exp-bars">
              {EXPERIENCE_LEVELS.map((level, i) => (
                <li key={level.label}>
                  <div className="exp-bar-label">
                    <span id={`exp-${i}`}>{level.label}</span>
                    <span>
                      <CountUp to={level.value} duration={1.4} />%
                    </span>
                  </div>
                  <div
                    className="exp-track"
                    role="progressbar"
                    aria-labelledby={`exp-${i}`}
                    aria-valuenow={level.value}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <motion.span
                      className="exp-fill"
                      style={{ width: `${level.value}%` }}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </MotionConfig>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  useScrollToHash();
  return (
    <>
      <PageHeader
        title="About"
        accent="Me"
        crumb="About"
        intro="A front-end developer in progress and a UI/UX designer at heart — here's what I know, what I'm learning, and the people I've worked with."
      >
        <a href={RESUME_PDF} download className="btn btn-primary">
          <Download size={18} aria-hidden="true" /> Download Resume
        </a>
        <Link to="/projects" className="btn btn-ghost-light">
          View Projects
        </Link>
      </PageHeader>
      <Intro />
      <Skills />
      <Experience />
      <Certifications id="certifications" />
      <Testimonials />
      <CtaBand />
    </>
  );
}
