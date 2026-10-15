import { Quote, Star } from 'lucide-react';
import AnimatedContent from '../reactbits/AnimatedContent';
import { TESTIMONIALS } from '../../data/content';
import './testimonials.css';

const STAR_COUNT = 5;

export default function Testimonials() {
  return (
    <section className="testimonials" aria-labelledby="testimonials-heading">
      <div className="testimonials-panel">
        <div className="container">
          <header className="testimonials-head">
            <h2 id="testimonials-heading" className="section-title">
              Testimonials That
              <br />
              Speak to <span className="accent">My Results</span>
            </h2>
            <p>
              Feedback from people I've worked with during projects and coursework. Their insights help me understand my
              strengths and areas for improvement.
            </p>
          </header>

          <ul className="testimonials-grid">
            {TESTIMONIALS.map((t, i) => (
              <AnimatedContent key={t.name} as="li" distance={50} delay={i * 0.1} className="testimonial">
                <figure>
                  <Quote className="testimonial-mark" size={44} aria-hidden="true" />
                  <figcaption className="testimonial-who">
                    <img src={t.image} alt="" width="56" height="56" loading="lazy" />
                    <div>
                      <p className="testimonial-name">{t.name}</p>
                      <p className="testimonial-role">{t.role}</p>
                    </div>
                  </figcaption>
                  <div className="testimonial-stars" aria-label="Rated 5 out of 5">
                    {Array.from({ length: STAR_COUNT }, (_, s) => (
                      <Star key={s} size={18} fill="currentColor" strokeWidth={0} aria-hidden="true" />
                    ))}
                    <span>5.0</span>
                  </div>
                  <blockquote>{t.quote}</blockquote>
                </figure>
              </AnimatedContent>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
