const navButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
navButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  navButton.setAttribute('aria-expanded', open);
});
document.querySelectorAll('nav a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('is-open'); navButton.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();

// Before publishing, replace this address with Rajat's professional email address.
const contactEmail = 'info@rajatdhiman.com';
document.getElementById('contact-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.checkValidity()) { form.reportValidity(); return; }
  const data = new FormData(form);
  const subject = encodeURIComponent(`Website enquiry from ${data.get('name')}`);
  const body = encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\nRequirement:\n${data.get('message')}`);
  window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
});
