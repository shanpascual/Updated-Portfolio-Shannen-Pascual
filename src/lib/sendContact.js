import emailjs from '@emailjs/browser';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_MESSAGE = 2000;

/**
 * @param {{ name: string, email: string, message: string }} values
 * @returns {Record<string, string>} field -> error message (empty when valid)
 */
export function validateContact({ name, email, message }) {
  const errors = {};
  if (!name.trim()) errors.name = 'Please tell me your name.';
  if (!EMAIL_RE.test(email.trim())) errors.email = 'Enter a valid email, like you@example.com.';
  if (message.trim().length < 10) errors.message = 'A few more words please (at least 10 characters).';
  if (message.length > MAX_MESSAGE) errors.message = `Keep it under ${MAX_MESSAGE} characters.`;
  return errors;
}

/**
 * Sends the contact form through EmailJS. Keys are public EmailJS identifiers read from Vite env.
 * @param {HTMLFormElement} form
 */
export async function sendContact(form) {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error('Contact form is not configured yet. Please email me directly.');
  }

  try {
    await emailjs.sendForm(serviceId, templateId, form, { publicKey });
  } catch (error) {
    const detail = error?.text || (error instanceof Error ? error.message : '');
    throw new Error(`Message could not be sent${detail ? ` (${detail})` : ''}. Please try again or email me directly.`);
  }
}
