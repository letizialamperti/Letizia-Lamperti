document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
  const path = window.location.pathname.replace(/\/$/, '');
  document.querySelectorAll('.menu a').forEach(a => {
    const href = new URL(a.href).pathname.replace(/\/$/, '');
    if (href === path || (path === '' && href.endsWith('/'))) a.classList.add('active');
  });
});
