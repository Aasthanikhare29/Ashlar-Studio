// Vercel serverless function: emails contact-form leads via Hostinger SMTP.
// Required env vars (Vercel → Settings → Environment Variables):
//   SMTP_USER, SMTP_PASS            Hostinger mailbox login
//   SMTP_HOST (default smtp.hostinger.com), SMTP_PORT (default 465)
//   LEAD_EMAILS                     comma-separated recipients (defaults below)
import nodemailer from 'nodemailer';
import { leadEmailHtml } from './_lead-email.js';

const DEFAULT_RECIPIENTS = 'academy.ashlar@gmail.com,ar.pranavkadoo@gmail.com,nagpureshivani3@gmail.com';
const MIN_FILL_MS = 3000; // bots submit instantly

const clean = (v, max) => String(v ?? '').trim().slice(0, max);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const b = req.body || {};
  // Honeypot: real users never see or fill this field
  if (b.website) return res.status(200).json({ ok: true });
  if (!b.startedAt || Date.now() - Number(b.startedAt) < MIN_FILL_MS) {
    return res.status(400).json({ error: 'Please take a moment to fill the form.' });
  }

  // Captcha: "a + x = c, find x". ponytail: stateless check, stops dumb bots only; swap for Turnstile if spam gets through
  const a = Number(b.captchaA), c = Number(b.captchaC), ans = Number(b.captchaAnswer);
  if (!Number.isInteger(a) || !Number.isInteger(c) || a < 1 || a > 20 || c - a < 1 || c - a > 20 || ans !== c - a) {
    return res.status(400).json({ error: 'Captcha answer is incorrect.' });
  }

  const name = clean(b.name, 100);
  const email = clean(b.email, 200);
  const phone = clean(b.phone, 30);
  const service = clean(b.service, 60);
  const message = clean(b.message, 5000);
  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Name, a valid email and a message are required.' });
  }

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.error('contact: SMTP_USER / SMTP_PASS not set');
    return res.status(500).json({ error: 'Email is not configured yet. Please call us instead.' });
  }

  const port = Number(process.env.SMTP_PORT || 465);
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.hostinger.com',
    port,
    secure: port === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });

  const rows = [['Name', name], ['Email', email], ['Phone', phone || '—'], ['Service', service || '—']];
  try {
    await transporter.sendMail({
      from: `"Ashlar Studio Website" <${process.env.SMTP_USER}>`,
      to: (process.env.LEAD_EMAILS || DEFAULT_RECIPIENTS).split(',').map((s) => s.trim()).filter(Boolean),
      replyTo: `"${name.replace(/"/g, '')}" <${email}>`,
      subject: `New enquiry: ${name}${service ? ` – ${service}` : ''}`,
      text: `${rows.map(([k, v]) => `${k}: ${v}`).join('\n')}\n\nMessage:\n${message}`,
      html: leadEmailHtml({ name, email, phone, service, message }),
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('contact: send failed', err.message);
    return res.status(502).json({ error: 'Could not send your message. Please call or email us directly.' });
  }
}
