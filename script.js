const menuButton = document.querySelector('.menu');
const nav = document.querySelector('#nav');

menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('#nav a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

document.getElementById('year').textContent = new Date().getFullYear();

// Before publishing, replace this address with Rajat's professional email address.
const contactEmail = 'hello@rajatdhiman.com';
document.getElementById('contact-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  const data = new FormData(form);
  const subject = encodeURIComponent(`Website enquiry from ${data.get('name')}`);
  const body = encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\nRequirement:\n${data.get('message')}`);
  window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
});
