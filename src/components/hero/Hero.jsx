import { Link } from 'react-router';
import { ArrowUpRight, Quote, Star } from 'lucide-react';
import BlurText from '../reactbits/BlurText';
import RotatingText from '../reactbits/RotatingText';
import Magnet from '../reactbits/Magnet';
import { ROLES } from '../../data/content';
import './hero.css';

const STAR_COUNT = 5;

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="container hero-inner">
        <div className="hero-hello">
          Hello!
          <svg className="hero-spark" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M6 22 L14 6 M14 26 L28 12 M18 30 L30 26" />
          </svg>
        </div>

        <h1 id="hero-heading" className="hero-title">
          <span className="sr-only">I'm Shannen, Front-End Developer and UI/UX Designer</span>
          <span aria-hidden="true" className="hero-line">
            <BlurText text="I'm" delay={90} animateBy="words" direction="top" trigger="load" className="hero-blur" />
            &nbsp;
            <BlurText
              text="Shannen,"
              delay={90}
              animateBy="letters"
              direction="top"
              trigger="load"
              className="hero-blur accent"
            />
          </span>
          <span aria-hidden="true" className="hero-line hero-role">
            <RotatingText
              texts={ROLES}
              mainClassName="hero-rotator"
              splitBy="characters"
              staggerFrom="last"
              staggerDuration={0.02}
              rotationInterval={2600}
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '-110%', opacity: 0 }}
              transition={{ type: 'spring', damping: 30, stiffness: 400 }}
            />
          </span>
          <svg className="hero-scribble" viewBox="0 0 80 60" aria-hidden="true">
            <path d="M70 6 C40 10 18 26 8 54" />
            <path d="M58 30 C44 34 30 44 24 56" />
          </svg>
        </h1>

        <div className="hero-stage">
          <aside className="hero-quote">
            <Quote size={36} className="hero-quote-icon" aria-hidden="true" />
            <p>
              A front-end developer in progress, focused on clean layouts and thoughtful user experience.
            </p>
          </aside>

          <img
            className="hero-photo"
            src="/images/pink-sparkle-and-shannen.png"
            alt="Shannen Pascual smiling with arms crossed, surrounded by hand-drawn doodles"
            width="1024"
            height="512"
            fetchPriority="high"
          />

          <aside className="hero-exp" aria-label="3 years of experience">
            <div className="hero-stars" aria-hidden="true">
              {Array.from({ length: STAR_COUNT }, (_, i) => (
                <Star key={i} size={22} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="hero-exp-num">3 Years</p>
            <p className="hero-exp-label">Experience</p>
          </aside>

          <div className="hero-cta">
            <Magnet padding={40} magnetStrength={4}>
              <Link to="/projects" className="btn btn-primary hero-cta-main">
                Portfolio <ArrowUpRight size={20} aria-hidden="true" />
              </Link>
            </Magnet>
            <Link to="/contact" className="hero-cta-ghost">
              Hire me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
