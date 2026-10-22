/* Copyright (c) 2026 Debabrata Panda (DP). Accessible portfolio interactions. */
(() => {
  'use strict';
  document.documentElement.classList.add('js-ready');
  const menuButton = document.getElementById('menu-toggle');
  const nav = document.getElementById('main-nav');
  const closeMenu = () => {
    if (!menuButton || !nav) return;
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded','false');
    menuButton.setAttribute('aria-label','Open navigation');
  };
  menuButton?.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });
  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });

  // Actual content filtering, with programmatically exposed pressed state.
  const filters = [...document.querySelectorAll('.filter')];
  const projects = [...document.querySelectorAll('.project-card')];
  for (const button of filters) {
    button.addEventListener('click', () => {
      const selected = button.dataset.filter;
      for (const filter of filters) {
        const active = filter === button;
        filter.classList.toggle('active', active);
        filter.setAttribute('aria-pressed', String(active));
      }
      for (const card of projects) {
        card.hidden = selected !== 'all' && card.dataset.category !== selected;
      }
    });
  }

  // Reveal uses IntersectionObserver; every item stays visible on older browsers.
  const revealElements = [...document.querySelectorAll('.reveal')];
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const revealObserver = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          revealObserver.unobserve(entry.target);
        }
      }
    }, {threshold:0.08,rootMargin:'0px 0px -24px 0px'});
    revealElements.forEach(element => revealObserver.observe(element));
  } else {
    revealElements.forEach(element => element.classList.add('in-view'));
  }

  const progress = document.getElementById('site-progress');
  let scheduled = false;
  const paintProgress = () => {
    const available = document.documentElement.scrollHeight - window.innerHeight;
    const percent = available > 0 ? Math.max(0,Math.min(100,100 * window.scrollY / available)) : 0;
    if (progress) progress.style.width = `${percent}%`;
    scheduled = false;
  };
  window.addEventListener('scroll', () => {
    if (!scheduled) {scheduled = true;window.requestAnimationFrame(paintProgress);}
  }, {passive:true});
  paintProgress();

  const toast = document.getElementById('toast');
  let toastTimeout;
  const showToast = message => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('visible');
    window.clearTimeout(toastTimeout);
    toastTimeout = window.setTimeout(() => toast.classList.remove('visible'), 3000);
  };
  document.getElementById('copy-email')?.addEventListener('click', async event => {
    const email = event.currentTarget.dataset.email;
    try {
      if (!navigator.clipboard || !window.isSecureContext) throw new Error('Clipboard not available');
      await navigator.clipboard.writeText(email);
      showToast('Email copied to clipboard');
    } catch {
      showToast(`Email: ${email}`);
    }
  });
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
