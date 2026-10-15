import { Link } from 'react-router';
import CountUp from '../reactbits/CountUp';
import AnimatedContent from '../reactbits/AnimatedContent';
import './hire.css';

const STATS = [
  { value: 4, label: 'Projects Completed' },
  { value: 4, label: 'Happy Clients' },
  { value: 8, label: 'Certifications' },
];

export default function HireMe() {
  return (
    <section className="hire" aria-labelledby="hire-heading">
      <div className="hire-panel">
        <div className="container hire-grid">
          <AnimatedContent direction="horizontal" reverse distance={80} className="hire-visual">
            <img
              src="/images/shannen-image2.png"
              alt="Portrait of Shannen Pascual"
              width="500"
              height="500"
              loading="lazy"
            />
          </AnimatedContent>

          <div className="hire-copy">
            <h2 id="hire-heading" className="section-title">
              Why <span className="accent">Hire me</span>?
            </h2>
            <p className="hire-lead">
              I may still be learning, but I bring dedication, creativity, and a strong willingness to grow with every
              project I take on.
            </p>

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

            <Link to="/contact" className="btn btn-outline hire-btn">
              Hire me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
