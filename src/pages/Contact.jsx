import { Mail, MapPin, MessageSquareText, Phone, Rocket, Send } from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';
import ContactForm from '../components/contact/ContactForm';
import AnimatedContent from '../components/reactbits/AnimatedContent';
import SocialIcon from '../components/ui/SocialIcon';
import { CONTACT, SOCIALS } from '../data/content';
import './contact-page.css';

const METHODS = [
  { icon: Phone, label: 'Call me', value: CONTACT.phone, href: CONTACT.phoneHref },
  { icon: Mail, label: 'Email me', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: MapPin, label: 'Based in', value: CONTACT.address },
];

const STEPS = [
  { icon: Send, title: 'Send a message', text: 'Tell me about your idea, timeline and what you need help with.' },
  { icon: MessageSquareText, title: 'I reply in 1–2 days', text: 'I’ll ask a few questions so I understand the goal clearly.' },
  { icon: Rocket, title: 'We build it together', text: 'From wireframes to front-end code, with updates along the way.' },
];

export default function Contact() {
  return (
    <>
      <PageHeader
        title="Reach"
        accent="Out to Me"
        crumb="Contact"
        intro="Any project in mind? Whether it's a website, an app concept or a design question — let's talk."
      />

      <section className="section contact-page" aria-labelledby="contact-page-heading">
        <div className="container contact-page-grid">
          <AnimatedContent direction="horizontal" reverse distance={60} className="contact-info">
            <aside>
              <span className="contact-status-pill">
                <span className="pulse-dot" aria-hidden="true" /> Open to new projects
              </span>
              <h2 className="contact-info-title">Let's build something meaningful.</h2>
              <ul className="contact-methods">
                {METHODS.map(({ icon: Icon, label, value, href }) => (
                  <li key={label}>
                    <span className="contact-method-icon" aria-hidden="true">
                      <Icon size={20} />
                    </span>
                    <div>
                      <p className="contact-method-label">{label}</p>
                      {href ? (
                        <a href={href} className="contact-method-value">
                          {value}
                        </a>
                      ) : (
                        <p className="contact-method-value">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              <ul className="contact-socials" aria-label="Social profiles">
                {SOCIALS.map(s => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                      <SocialIcon name={s.icon} />
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
          </AnimatedContent>

          <AnimatedContent distance={50} delay={0.1} className="contact-form-wrap">
            <h2 id="contact-page-heading" className="contact-form-title">
              Any project in mind? <span className="accent">Let's talk!</span>
            </h2>
            <ContactForm idPrefix="page" showEmail={false} />
          </AnimatedContent>
        </div>
      </section>

      <section className="section contact-steps" aria-labelledby="steps-heading">
        <div className="container">
          <h2 id="steps-heading" className="section-title contact-steps-title">
            What happens <span className="accent">next</span>
          </h2>
          <ol className="steps-grid">
            {STEPS.map(({ icon: Icon, title, text }, i) => (
              <AnimatedContent key={title} as="li" distance={40} delay={i * 0.08} className="step">
                <span className="step-num" aria-hidden="true">
                  0{i + 1}
                </span>
                <span className="step-icon" aria-hidden="true">
                  <Icon size={24} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </AnimatedContent>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
