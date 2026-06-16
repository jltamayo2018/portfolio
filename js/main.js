const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');

if (toggle) {
  toggle.addEventListener('click', () => links.classList.toggle('open'));
}

document.querySelectorAll('.nav-links a').forEach(a =>
  a.addEventListener('click', () => links?.classList.remove('open'))
);

const text = 'Ingeniería Telemática · Desarrollo Web · Automatización · Datos · IA';
const type = document.getElementById('typewriter');
let i = 0;

if (type) {
  const write = () => {
    if (i < text.length) {
      type.textContent += text.charAt(i++);
      setTimeout(write, 42);
    }
  };

  write();
}

const back = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (back) back.classList.toggle('show', scrollY > 350);
});

back?.addEventListener('click', () =>
  scrollTo({
    top: 0,
    behavior: 'smooth',
  })
);

const glow = document.getElementById('mouse-glow');

window.addEventListener('mousemove', e => {
  if (glow) {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  }
});

const reveal = () => {
  document.querySelectorAll('.reveal').forEach(el => {
    if (el.getBoundingClientRect().top < innerHeight - 80) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', reveal);
reveal();

function particles() {
  const c = document.getElementById('particles');

  if (!c) return;

  const ctx = c.getContext('2d');
  let w;
  let h;
  let pts = [];

  const resize = () => {
    w = c.width = c.offsetWidth;
    h = c.height = c.offsetHeight;

    pts = Array.from({ length: 70 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      r: Math.random() * 2 + 1,
    }));
  };

  resize();
  addEventListener('resize', resize);

  const draw = () => {
    ctx.clearRect(0, 0, w, h);

    pts.forEach((p, idx) => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = idx % 3 === 0 ? '#f03d86' : idx % 3 === 1 ? '#19c37d' : '#b8c7e6';
      ctx.globalAlpha = 0.65;
      ctx.fill();

      for (let j = idx + 1; j < pts.length; j++) {
        const q = pts[j];
        const d = Math.hypot(p.x - q.x, p.y - q.y);

        if (d < 145) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = '#b8c7e6';
          ctx.globalAlpha = (1 - d / 145) * 0.18;
          ctx.stroke();
        }
      }
    });

    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  };

  draw();
}

particles();

document.querySelectorAll('[data-carousel]').forEach(carousel => {
  const slides = carousel.querySelectorAll('.carousel-slide');
  const prev = carousel.querySelector('.prev');
  const next = carousel.querySelector('.next');

  let current = 0;

  const showSlide = index => {
    slides[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
  };

  prev.addEventListener('click', () => showSlide(current - 1));
  next.addEventListener('click', () => showSlide(current + 1));
});