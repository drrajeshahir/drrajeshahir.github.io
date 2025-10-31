// Small client-side enhancements: mobile menu, theme toggle, smooth scroll
document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('menu-btn');
  const nav = document.getElementById('nav');
  const themeToggle = document.getElementById('theme-toggle');

  // Mobile menu toggle
  menuBtn && menuBtn.addEventListener('click', () => {
    if (nav.style.display === 'flex') {
      nav.style.display = '';
    } else {
      nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
      nav.style.gap = '10px';
      nav.style.padding = '12px';
      nav.style.background = 'var(--card)';
      nav.style.position = 'absolute';
      nav.style.right = '18px';
      nav.style.top = '72px';
      nav.style.borderRadius = '12px';
      nav.style.boxShadow = '0 6px 22px rgba(0,0,0,0.08)';
    }
  });

  // Theme toggle (light/dark)
  const stored = localStorage.getItem('theme');
  if (stored === 'dark') document.body.classList.add('dark');

  themeToggle && themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '') return;
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({behavior: 'smooth', block: 'start'});
    });
  });
});
