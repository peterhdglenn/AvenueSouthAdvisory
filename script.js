const form = document.querySelector('#contact-form');
const status = document.querySelector('.form-status');

if (form && status) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const firstName = String(data.get('firstName') || '').trim();
    const lastName = String(data.get('lastName') || '').trim();
    const company = String(data.get('company') || '').trim();
    const email = String(data.get('email') || '').trim();
    const phone = String(data.get('phone') || '').trim();
    const service = String(data.get('service') || '').trim();
    const message = String(data.get('message') || '').trim();

    const subject = encodeURIComponent(`Website inquiry from ${firstName} ${lastName}`.trim());
    const body = encodeURIComponent([
      `Name: ${firstName} ${lastName}`.trim(),
      company ? `Company: ${company}` : null,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      `Service: ${service}`,
      '',
      message
    ].filter(Boolean).join('\n'));

    const mailto = `mailto:aviscichini@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailto;
    status.hidden = false;
    status.textContent = 'Your email app should open with the message prefilled.';
  });
}
