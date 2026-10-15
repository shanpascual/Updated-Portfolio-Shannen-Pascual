import { Link } from 'react-router';
import { Award, Check, Download, GraduationCap, Mail, MapPin, Phone, Sparkles } from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';
import CtaBand from '../components/layout/CtaBand';
import AnimatedContent from '../components/reactbits/AnimatedContent';
import { CERTIFICATIONS, CONTACT, RESUME_PDF } from '../data/content';
import { EDUCATION, PROFILE, RESUME_SKILLS } from '../data/profile';
import './resume.css';

function ResumeBlock({ icon: Icon, title, children, className = '' }) {
  return (
    <section className={`resume-block ${className}`}>
      <h3 className="resume-block-title">
        <span className="resume-block-icon" aria-hidden="true">
          <Icon size={20} />
        </span>
        {title}
      </h3>
      {children}
    </section>
  );
}

export default function Resume() {
  return (
    <>
      <PageHeader
        title="My"
        accent="Resume"
        crumb="Resume"
        intro="Education, skills and certifications at a glance. Grab the PDF for the printable version."
      >
        <a href={RESUME_PDF} download className="btn btn-primary">
          <Download size={18} aria-hidden="true" /> Download PDF
        </a>
        <Link to="/contact" className="btn btn-ghost-light">
          Hire me
        </Link>
      </PageHeader>

      <section className="section resume" aria-label="Resume">
        <div className="container">
          <AnimatedContent distance={50} scale={0.98} className="resume-card">
            <article>
              <header className="resume-profile">
                <img src={PROFILE.photo} alt={`Portrait of ${PROFILE.name}`} width="240" height="240" />
                <div>
                  <h2 className="resume-name">{PROFILE.name}</h2>
                  <p className="resume-role">{PROFILE.title}</p>
                  <ul className="resume-contacts">
                    <li>
                      <MapPin size={18} aria-hidden="true" /> {PROFILE.location}
                    </li>
                    <li>
                      <Phone size={18} aria-hidden="true" /> <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
                    </li>
                    <li>
                      <Mail size={18} aria-hidden="true" /> <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                    </li>
                  </ul>
                </div>
              </header>

              <ResumeBlock icon={Sparkles} title="Career Overview">
                <p className="resume-overview">{PROFILE.overview}</p>
              </ResumeBlock>

              <ResumeBlock icon={GraduationCap} title="Education">
                <ol className="resume-edu">
                  {EDUCATION.map(item => (
                    <li key={item.degree}>
                      <div>
                        <p className="resume-edu-degree">{item.degree}</p>
                        <p className="resume-edu-meta">
                          {item.school} · {item.period}
                        </p>
                      </div>
                      <span className="resume-honor">{item.honor}</span>
                    </li>
                  ))}
                </ol>
              </ResumeBlock>

              <div className="resume-columns">
                <ResumeBlock icon={Check} title="Skills">
                  <ul className="resume-list">
                    {RESUME_SKILLS.map(skill => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </ResumeBlock>
                <ResumeBlock icon={Award} title="Certifications">
                  <ul className="resume-list">
                    {CERTIFICATIONS.map(cert => (
                      <li key={cert.title}>
                        <a href={cert.link} target="_blank" rel="noopener noreferrer">
                          {cert.issuer} – {cert.title}
                          <span className="sr-only"> (opens in new tab)</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </ResumeBlock>
              </div>
            </article>
          </AnimatedContent>
        </div>
      </section>

      <CtaBand title="Like what you see?" text="I'm open to internships, freelance work and collaborations." label="Get in Touch" />
    </>
  );
}
