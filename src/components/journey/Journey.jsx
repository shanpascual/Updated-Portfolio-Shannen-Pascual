import AnimatedContent from '../reactbits/AnimatedContent';
import { JOURNEY } from '../../data/content';
import './journey.css';

export default function Journey() {
  return (
    <section className="section journey" aria-labelledby="journey-heading">
      <div className="container">
        <h2 id="journey-heading" className="section-title journey-title">
          My <span className="accent">Journey</span>
        </h2>

        <ol className="journey-list">
          {JOURNEY.map((item, i) => (
            <AnimatedContent
              key={`${item.place}-${item.title}`}
              as="li"
              className="journey-item"
              distance={40}
              delay={i * 0.06}
              duration={0.6}
            >
              <div className="journey-where">
                <h3>{item.place}</h3>
                <p>{item.period}</p>
              </div>
              <span className={`journey-dot${i % 2 ? ' is-dark' : ''}`} aria-hidden="true" />
              <div className="journey-what">
                <h4>{item.title}</h4>
                <p>{item.detail}</p>
              </div>
            </AnimatedContent>
          ))}
        </ol>
      </div>
    </section>
  );
}
