/**
 * form.js
 * Contact form handler.
 *
 * By default shows a success message.
 * To connect a real backend, replace the submitForm() stub below.
 *
 * Free options: Formspree (formspree.io), Web3Forms, EmailJS.
 *
 * Example with Formspree:
 *   const res = await fetch('https://formspree.io/f/YOUR_ID', {
 *     method : 'POST',
 *     headers: { 'Content-Type': 'application/json' },
 *     body   : JSON.stringify({ name, email, subject, message }),
 *   });
 *   if (res.ok) showSuccess();
 */
(function () {
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    showSuccess();
  });

  function showSuccess() {
    success.classList.add('show');
    form.reset();
    setTimeout(() => success.classList.remove('show'), 5000);
  }
})();
