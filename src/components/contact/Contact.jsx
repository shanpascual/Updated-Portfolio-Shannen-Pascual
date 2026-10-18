import { Award, BadgeCheck, GraduationCap } from 'lucide-react';
import ContactForm from './ContactForm';
import { CERTIFICATIONS } from '../../data/content';
import './contact.css';

const BADGES = [
  { icon: GraduationCap, text: "Dean's Lister" },
  { icon: Award, text: `${CERTIFICATIONS.length} Certifications` },
  { icon: BadgeCheck, text: 'Front-End & UI/UX' },
];

export default function Contact() {
  return (
    <section className="section contact" aria-labelledby="contact-heading">
      <div className="container contact-inner">
        <h2 id="contact-heading" className="section-title contact-title">
          Have an Awesome Project
          <br />
          Idea? <span className="accent">Let's Discuss</span>
        </h2>

        <ContactForm idPrefix="home" className="contact-form--home" />

        <ul className="contact-badges">
          {BADGES.map(({ icon: Icon, text }) => (
            <li key={text}>
              <Icon size={20} aria-hidden="true" /> {text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}