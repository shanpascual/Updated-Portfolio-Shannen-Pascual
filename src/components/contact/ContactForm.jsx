import { useRef, useState } from 'react';
import { CheckCircle2, Mail, Send } from 'lucide-react';
import Magnet from '../reactbits/Magnet';
import { CONTACT } from '../../data/content';
import { sendContact, validateContact } from '../../lib/sendContact';
import './contact-form.css';

const EMPTY = { name: '', email: '', message: '' };

function Field({ id, label, error, children }) {
  return (
    <div className={`field${error ? ' has-error' : ''}`}>
      <label htmlFor={id}>
        {label} <span aria-hidden="true" className="field-req">*</span>
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="field-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

/**
 * @param {{ idPrefix?: string, className?: string, showEmail?: boolean }} props
 */
export default function ContactForm({ idPrefix = 'contact', className = '', showEmail = true }) {
  const formRef = useRef(null);
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: 'idle', message: '' });
  const isSending = status.state === 'sending';
  const fieldId = name => `${idPrefix}-${name}`;

  const handleChange = e => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleBlur = e => {
    const { name, value } = e.target;
    if (!value) return;
    setErrors(prev => ({ ...prev, [name]: validateContact(values)[name] }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (isSending) return;
    const found = validateContact(values);
    setErrors(found);
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      formRef.current?.elements.namedItem(firstInvalid)?.focus();
      return;
    }
    setStatus({ state: 'sending', message: '' });
    try {
      await sendContact(formRef.current);
      setValues(EMPTY);
      setStatus({ state: 'success', message: "Sent! I'll get back to you soon." });
    } catch (error) {
      setStatus({ state: 'error', message: error instanceof Error ? error.message : 'Something went wrong.' });
    }
  };

  const inputProps = name => ({
    id: fieldId(name),
    name,
    value: values[name],
    onChange: handleChange,
    onBlur: handleBlur,
    'aria-invalid': Boolean(errors[name]),
    'aria-describedby': errors[name] ? `${fieldId(name)}-error` : undefined,
    required: true,
  });

  return (
    <form ref={formRef} className={`contact-form ${className}`} onSubmit={handleSubmit} noValidate>
      <div className="contact-row">
        <Field id={fieldId('name')} label="Name" error={errors.name}>
          <input type="text" autoComplete="name" placeholder="Your name" {...inputProps('name')} />
        </Field>
        <Field id={fieldId('email')} label="Email" error={errors.email}>
          <input
            type="email"
            autoComplete="email"
            inputMode="email"
            placeholder="you@example.com"
            {...inputProps('email')}
          />
        </Field>
      </div>
      <Field id={fieldId('message')} label="Message" error={errors.message}>
        <textarea rows={5} placeholder="Tell me about your project" {...inputProps('message')} />
      </Field>

      <div className="contact-actions">
        {showEmail ? (
          <a href={`mailto:${CONTACT.email}`} className="contact-mail">
            <Mail size={18} aria-hidden="true" /> {CONTACT.email}
          </a>
        ) : (
          <span className="contact-hint">I usually reply within 1–2 days.</span>
        )}
        <Magnet padding={30} magnetStrength={5} disabled={isSending}>
          <button type="submit" className="btn btn-primary contact-send" disabled={isSending}>
            {isSending ? 'Sending…' : 'Send'} <Send size={18} aria-hidden="true" />
          </button>
        </Magnet>
      </div>

      <p className={`contact-status is-${status.state}`} role="status" aria-live="polite" hidden={!status.message}>
        {status.state === 'success' && <CheckCircle2 size={18} aria-hidden="true" />}
        {status.message}
      </p>
    </form>
  );
}
