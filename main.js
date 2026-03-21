// ── Nav scroll shadow ──────────────────────────────────────
const nav = document.querySelector('.nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
window.addEventListener('scroll', onScroll, { passive: true });

// ── Mobile burger (toggle links visibility) ────────────────
const burger = document.querySelector('.nav__burger');
const navLinks = document.querySelector('.nav__links');
burger.addEventListener('click', () => {
  const open = navLinks.style.display === 'flex';
  navLinks.style.cssText = open
    ? ''
    : 'display:flex;flex-direction:column;position:absolute;top:100%;left:0;right:0;background:rgba(245,240,232,.97);padding:24px;gap:20px;backdrop-filter:blur(12px);border-bottom:1px solid rgba(26,48,40,.08);';
  burger.setAttribute('aria-expanded', String(!open));
});

// Close mobile menu on link click
navLinks.querySelectorAll('a').forEach(link =>
  link.addEventListener('click', () => { navLinks.style.cssText = ''; })
);

// ── Scroll-reveal (IntersectionObserver) ──────────────────
const style = document.createElement('style');
style.textContent = `
  .reveal { opacity: 0; transform: translateY(28px); transition: opacity .6s ease, transform .6s ease; }
  .reveal.visible { opacity: 1; transform: none; }
`;
document.head.appendChild(style);

const revealTargets = [
  '.card', '.benefit-item', '.testi-card',
  '.hero__content', '.hero__visual',
  '.beneficios__left', '.beneficios__right',
  '.contacto__info', '.contacto__form',
  '.section-header',
];
revealTargets.forEach(selector =>
  document.querySelectorAll(selector).forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${i * 0.08}s`;
  })
);

const io = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } }),
  { threshold: 0.12 }
);
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// ── Form submit ────────────────────────────────────────────
const form = document.querySelector('.contacto__form');
form.addEventListener('submit', e => {
  e.preventDefault();
  const btn = form.querySelector('button[type="submit"]');
  btn.textContent = '¡Mensaje enviado!';
  btn.disabled = true;
  btn.style.background = '#2d5a45';
  setTimeout(() => {
    form.reset();
    btn.textContent = 'Enviar mensaje';
    btn.disabled = false;
    btn.style.background = '';
  }, 3000);
});

// ── Add to cart feedback ───────────────────────────────────
document.querySelectorAll('.card .btn--primary').forEach(btn => {
  btn.addEventListener('click', function () {
    const original = this.textContent;
    this.textContent = '✓ Agregado';
    this.style.background = '#2d5a45';
    setTimeout(() => {
      this.textContent = original;
      this.style.background = '';
    }, 1800);
  });
});
