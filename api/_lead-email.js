// HTML lead notification, matching the studio's email design system
// (600px card, header bar, summary strip, details card, pill CTA, footer).
// Files starting with "_" are not deployed as Vercel functions.
const SITE = 'https://ashlar-studio.vercel.app';
const ACCENT = '#E86A33';
const TINT = '#FDF0EA';

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

export function leadEmailHtml({ name, email, phone, service, message }) {
  const when = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' });
  const row = (label, value, shaded) => `
                <tr${shaded ? ' style="background:#fafafa;"' : ''}>
                  <td style="padding:12px 14px; font-weight:600; color:#585858; width:32%; vertical-align:top;">${label}</td>
                  <td style="padding:12px 14px; color:#202124; line-height:1.6;">${value}</td>
                </tr>`;
  const reply = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent('Re: Your enquiry to Ashlar Studio')}`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New enquiry from ${esc(name)}</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet" />
  <style>
    body, table, td, p, a { margin:0; padding:0; }
    table { border-collapse:collapse; }
    img { border:0; display:block; }
    .preheader { display:none; font-size:1px; color:#f3f5f7; max-height:0; max-width:0; overflow:hidden; opacity:0; mso-hide:all; }
    h1 { font-size:22px; font-weight:600; color:#202124; margin:0 0 8px 0; font-family:Poppins, Arial, sans-serif; }
    .btn { display:inline-block; padding:12px 26px; background:${ACCENT}; border-radius:999px; font-size:14px; font-weight:600; color:#ffffff; text-decoration:none; }
    @media screen and (max-width:640px) {
      .container { border-radius:0 !important; }
      .section-padding { padding-left:18px !important; padding-right:18px !important; }
      .footer-flex { display:block !important; text-align:left !important; }
    }
  </style>
</head>
<body style="background:#f3f5f7; margin:0; padding:0; font-family:Poppins, Arial, sans-serif;">
  <div class="preheader">${esc(name)}${service ? ` · ${esc(service)}` : ''}: ${esc(message.slice(0, 90))}</div>
  <center style="width:100%; padding:30px 0;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr><td align="center">
        <table role="presentation" width="600" class="container" style="max-width:600px; background:#ffffff; border-radius:12px; overflow:hidden;">

          <tr>
            <td style="padding:12px 32px; border-bottom:1px solid #edf0f2;">
              <table role="presentation" width="100%">
                <tr>
                  <td align="left"><img src="${SITE}/ashlar.png" width="110" alt="Ashlar Studio" /></td>
                  <td align="right" style="font-size:14px; color:#585858;"><strong>New website enquiry</strong></td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td class="section-padding" style="padding:24px 32px 6px 32px;">
              <h1>${esc(name)} wants to talk about a project</h1>
              <p style="font-size:14px; color:#3c4043; line-height:1.7; margin:0 0 12px 0;">
                A new enquiry came in through the contact form on ashlar-studio.vercel.app. Reply to this email to answer ${esc(name)} directly.
              </p>
            </td>
          </tr>

          <tr>
            <td class="section-padding" style="padding:0 32px 16px 32px;">
              <table role="presentation" width="100%" style="border:1px solid #edf0f2; border-radius:10px;">
                <tr style="background:${TINT};">
                  <td style="padding:12px 14px;">
                    <div style="font-size:14px; font-weight:600; color:#202124;">${esc(service || 'General enquiry')}</div>
                    <div style="font-size:13px; color:#585858; margin-top:4px;">${when} IST</div>
                  </td>
                  <td align="right" style="padding:12px 14px; white-space:nowrap; font-size:13px; color:#585858;">
                    Source: <strong style="color:#202124;">Contact form</strong>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td class="section-padding" style="padding:0 32px 10px 32px;">
              <table role="presentation" width="100%" style="border:1px solid #edf0f2; border-radius:10px; font-size:13px; overflow:hidden;">${row('Name', esc(name))}${row('Email', `<a href="mailto:${esc(email)}" style="color:${ACCENT}; text-decoration:none;">${esc(email)}</a>`, true)}${row('Phone', phone ? `<a href="tel:${esc(phone.replace(/[^\d+]/g, ''))}" style="color:${ACCENT}; text-decoration:none;">${esc(phone)}</a>` : '—')}${row('Service', esc(service || '—'), true)}${row('Message', `<span style="white-space:pre-wrap;">${esc(message)}</span>`)}
              </table>
            </td>
          </tr>

          <tr>
            <td class="section-padding" style="padding:10px 32px 24px 32px;">
              <a href="${reply}" class="btn" style="color:#ffffff;">Reply to ${esc(name.split(' ')[0])}</a>
            </td>
          </tr>

          <tr>
            <td style="padding:20px 24px 24px 24px; border-top:1px solid #edf0f2;">
              <table role="presentation" width="100%">
                <tr class="footer-flex">
                  <td><img src="${SITE}/ashlar.png" width="90" alt="Ashlar Studio" /></td>
                  <td align="right" style="font-size:11px; color:#80868b;">Ashlar Studio<br>Nagpur, Maharashtra, India</td>
                </tr>
              </table>
              <p style="margin:12px 0 0 0; font-size:11px;">
                <a href="${SITE}" style="color:${ACCENT}; text-decoration:none; margin-right:12px;">Website</a>
                <a href="${SITE}/projects" style="color:${ACCENT}; text-decoration:none; margin-right:12px;">Projects</a>
                <a href="https://bookasloth.com/pranavkadoo" style="color:${ACCENT}; text-decoration:none;">Booking calendar</a>
              </p>
              <p style="margin:10px 0 0 0; font-size:10px; color:#9aa0a6; line-height:1.6;">
                Sent automatically by the Ashlar Studio website contact form.
              </p>
            </td>
          </tr>

        </table>
      </td></tr>
    </table>
  </center>
</body>
</html>`;
}
