// ── Progress bar ───────────────────────────────────────────
const pb = document.getElementById('pb');
window.addEventListener('scroll', () => {
  const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
  pb.style.width = Math.min(pct, 100) + '%';
}, { passive: true });

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
  '.contacto__info', '.faq-box',
  '.pack-featured', '.pack-card',
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

// ── FAQ accordion ──────────────────────────────────────────
document.querySelectorAll('.faq-item').forEach(item => {
  item.querySelector('.faq-q').addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// ── Datos de productos ─────────────────────────────────────
const PRODUCTS = {
  creatina: {
    tag: 'Fuerza · Rendimiento',
    name: 'Creatina FNL',
    img: 'images/creatina-fnl.jpg',
    bg: 'linear-gradient(140deg, #0d2010, #1a3a2a)',
    intro: 'La creatina es uno de los suplementos con mayor respaldo científico. Mejora la disponibilidad de energía tanto a nivel muscular como cerebral, impactando directamente en tu rendimiento físico y mental.',
    benefits: [
      'Aumenta la fuerza y potencia en entrenamientos intensos',
      'Mejora el rendimiento en ejercicios de alta exigencia',
      'Favorece la ganancia de masa muscular cuando entrenas',
      'Ayuda a recuperarte mejor entre series',
      'Contribuye a mantener el rendimiento mental en situaciones de fatiga o estrés',
      'Asociada a mejoras en memoria de trabajo y procesamiento en contextos exigentes',
    ],
    dato: 'No es solo para el gym. Tu cerebro también necesita energía rápida: la creatina puede ayudarte a rendir mejor cuando estás exigido física y mentalmente.',
    wa: 'https://wa.me/56998423845?text=Hola!%20Quiero%20pedir%20Creatina%20FNL',
  },
  magnesio: {
    tag: 'Recuperación · Sueño',
    name: 'Magnesio Bisglicinato',
    img: 'images/magnesio-bisglicinato.jpg',
    bg: 'linear-gradient(140deg, #0a1e12, #1a3a2a)',
    intro: 'El magnesio es un mineral esencial para el funcionamiento del cuerpo. En su forma bisglicinato, destaca por su alta absorción y excelente tolerancia digestiva.',
    benefits: [
      'Contribuye al funcionamiento normal de músculos (clave si entrenas o tienes calambres)',
      'Favorece la relajación y una mejor calidad del sueño',
      'Ayuda a reducir la fatiga y el cansancio diario',
      'Apoya el sistema nervioso en contextos de estrés',
    ],
    dato: 'No todos los magnesios son iguales. El bisglicinato se absorbe mejor y es más amable con tu digestión.',
    wa: 'https://wa.me/56998423845?text=Hola!%20Quiero%20pedir%20Magnesio%20Bisglicinato',
  },
  vitamina: {
    tag: 'Vitaminas · Inmunidad',
    name: 'Vitamina D3',
    img: 'images/vitamina-d3.jpg',
    bg: 'linear-gradient(140deg, #2d5a3d, #1a3a2a)',
    intro: 'La vitamina D es fundamental para múltiples funciones del cuerpo, pero su deficiencia es muy común, especialmente en personas con baja exposición al sol.',
    benefits: [
      'Apoya el funcionamiento normal del sistema inmune',
      'Contribuye a la salud ósea y correcta absorción de calcio',
      'Participa en la función muscular',
      'Puede influir positivamente en el estado de ánimo',
    ],
    dato: 'Tener niveles adecuados de vitamina D no es un "extra", es una base para tu salud.',
    wa: 'https://wa.me/56998423845?text=Hola!%20Quiero%20pedir%20Vitamina%20D3',
  },
  melena: {
    tag: 'Adaptógeno · Nootropic',
    name: 'Melena de León',
    img: 'images/melena-de-leon.jpg',
    bg: 'linear-gradient(140deg, #0d1f12, #1a3a2a)',
    intro: 'La melena de león es un hongo adaptógeno estudiado por su potencial impacto en la salud cerebral y el rendimiento cognitivo.',
    benefits: [
      'Puede apoyar la memoria y la concentración',
      'Asociada a la estimulación del crecimiento neuronal (NGF)',
      'Potencial apoyo en la salud cognitiva a largo plazo',
    ],
    dato: 'No es un efecto inmediato tipo "energía". Es un apoyo progresivo a tu salud cerebral.',
    wa: 'https://wa.me/56998423845?text=Hola!%20Quiero%20pedir%20Melena%20de%20Le%C3%B3n',
  },
  probase: {
    tag: 'Proteína vegana',
    name: 'ProBASE',
    img: null,
    icon: '🌱',
    bg: 'linear-gradient(140deg, #2d5a3d, #3d6b50)',
    intro: 'ProBASE es una proteína vegetal formulada con guisante y arroz integral para ofrecer un perfil de aminoácidos completo, alta digestibilidad y sin lactosa.',
    benefits: [
      'Proteína completa a partir de fuentes vegetales',
      'Alta digestibilidad y sin lactosa',
      'Sin saborizantes ni colorantes artificiales',
      'Ideal para personas activas que buscan una alternativa limpia',
    ],
    dato: 'Una proteína vegana no tiene que sacrificar calidad. ProBASE está formulada para rendir igual que una proteína de suero.',
    wa: 'https://wa.me/56998423845?text=Hola!%20Quiero%20pedir%20ProBASE',
  },
};

// ── Modal ──────────────────────────────────────────────────
const overlay   = document.getElementById('modalOverlay');
const modalImg  = document.getElementById('modalImg');
const modalImgIcon = document.getElementById('modalImgIcon');
const modalImgCol  = document.getElementById('modalImgCol');

function openModal(key) {
  const p = PRODUCTS[key];
  if (!p) return;

  // Image column
  modalImgCol.style.background = p.bg;
  if (p.img) {
    modalImg.src = p.img;
    modalImg.alt = p.name;
    modalImg.style.display = 'block';
    modalImgIcon.textContent = '';
  } else {
    modalImg.style.display = 'none';
    modalImgIcon.textContent = p.icon || '';
  }

  // Text
  document.getElementById('modalTag').textContent  = p.tag;
  document.getElementById('modalName').textContent = p.name;
  document.getElementById('modalIntro').textContent = p.intro;
  document.getElementById('modalDatoText').textContent = p.dato;
  document.getElementById('modalCta').href = p.wa;

  const ul = document.getElementById('modalBenefits');
  ul.innerHTML = p.benefits.map(b => `<li>${b}</li>`).join('');

  // Open
  overlay.setAttribute('aria-hidden', 'false');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

document.getElementById('modalClose').addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

document.querySelectorAll('.card__ver-mas').forEach(btn => {
  btn.addEventListener('click', () => {
    const key = btn.closest('[data-product]').dataset.product;
    openModal(key);
  });
});
