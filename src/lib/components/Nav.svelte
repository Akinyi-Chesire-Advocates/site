<script>
  import logoName from '$lib/assets/brand/logo-name.png';
  import TribalBar from './TribalBar.svelte';
  import { base } from '$app/paths';

  let mobileOpen = $state(false);

  function toggleMobile() {
    mobileOpen = !mobileOpen;
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
  }

  const { openConsultation } = $props();
</script>

<nav class="nav" id="nav">
  <div class="container nav__inner">
    <a href="{base}/" class="nav__logo">
      <img src={logoName} alt="Akinyi & Chesire Advocates LLP" class="nav__logo-img" />
    </a>
    <div class="nav__links">
      <a href="#about" class="nav__link">About</a>
      <a href="#practice" class="nav__link">Practice Areas</a>
      <a href="#team" class="nav__link">Our Team</a>
      <a href="#insights" class="nav__link">Insights</a>
      <a href="#locations" class="nav__link">Offices</a>
      <a href="#contact" class="nav__link">Contact</a>
    </div>
    <div class="nav__cta">
      <button onclick={openConsultation} class="btn btn--primary"><span class="material-symbols-outlined" style="font-size:1.1rem">calendar_month</span>Book Consultation</button>
    </div>
    <button onclick={toggleMobile} class="nav__hamburger" aria-label="Menu"><span></span><span></span><span></span></button>
  </div>
  <TribalBar />
</nav>

<!-- Mobile Menu -->
<div class="mobile-menu" class:open={mobileOpen}>
  <div class="mobile-menu__backdrop" onclick={toggleMobile} role="button" tabindex="-1" onkeydown={(e) => e.key === 'Escape' && toggleMobile()}></div>
  <div class="mobile-menu__panel">
    <button onclick={toggleMobile} class="mobile-menu__close" aria-label="Close menu"><span class="material-symbols-outlined" style="font-size:1.75rem">close</span></button>
    <a href="#about" onclick={toggleMobile} class="mobile-menu__link">About</a>
    <a href="#practice" onclick={toggleMobile} class="mobile-menu__link">Practice Areas</a>
    <a href="#team" onclick={toggleMobile} class="mobile-menu__link">Our Team</a>
    <a href="#insights" onclick={toggleMobile} class="mobile-menu__link">Insights</a>
    <a href="#locations" onclick={toggleMobile} class="mobile-menu__link">Offices</a>
    <a href="#contact" onclick={toggleMobile} class="mobile-menu__link">Contact</a>
    <div style="margin-top:var(--space-xl)">
      <button onclick={() => { toggleMobile(); openConsultation(); }} class="btn btn--gold"><span class="material-symbols-outlined" style="font-size:1.1rem">calendar_month</span>Book Consultation</button>
    </div>
    <div style="position:absolute;bottom:0;left:0;right:0;"><TribalBar /></div>
  </div>
</div>

<style>
  .nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    background: var(--warm-white);
    transition: box-shadow 0.3s ease;
  }
  :global(.nav--scrolled) {
    box-shadow: 0 1px 0 var(--cream), 0 4px 24px rgba(21, 66, 48, 0.06);
  }
  .nav__inner {
    display: flex; align-items: center; justify-content: space-between;
    height: 4rem;
  }
  .nav__logo { display: flex; align-items: center; flex-shrink: 0; align-self: stretch; padding-block: 0.35rem; }
  .nav__logo-img { height: 100%; width: auto; display: block; object-fit: contain; }
  .nav__links {
    display: none; align-items: center;
    gap: clamp(1.5rem, 2.5vw, 2.5rem);
    white-space: nowrap; flex-shrink: 0;
  }
  @media (min-width: 1024px) { .nav__links { display: flex; } }
  .nav__link {
    font-size: var(--text-sm); font-weight: 600;
    color: var(--text-secondary); transition: color 0.25s; position: relative;
  }
  .nav__link::after {
    content: ''; position: absolute; bottom: -0.25rem; left: 0;
    width: 0; height: 1.5px; background: var(--gold); transition: width 0.3s ease;
  }
  .nav__link:hover { color: var(--forest); }
  .nav__link:hover::after { width: 100%; }
  .nav__cta { display: none; align-items: center; gap: 1rem; flex-shrink: 0; align-self: center; }
  .nav__cta :global(.btn) { padding: 0.35rem 1.25rem; }
  @media (min-width: 1024px) { .nav__cta { display: flex; } }

  .nav__hamburger { display: flex; flex-direction: column; gap: 5px; padding: 0.5rem; }
  @media (min-width: 1024px) { .nav__hamburger { display: none; } }
  .nav__hamburger span {
    display: block; height: 2px; background: var(--forest); transition: all 0.3s;
  }
  .nav__hamburger span:nth-child(1) { width: 1.5rem; }
  .nav__hamburger span:nth-child(2) { width: 1.5rem; }
  .nav__hamburger span:nth-child(3) { width: 1rem; }

  .mobile-menu {
    position: fixed; inset: 0; z-index: 99;
    display: flex; opacity: 0; visibility: hidden;
    transition: opacity 0.35s ease, visibility 0.35s;
  }
  .mobile-menu.open { opacity: 1; visibility: visible; }
  .mobile-menu__backdrop { position: absolute; inset: 0; background: rgba(16, 17, 17, 0.5); }
  .mobile-menu__panel {
    position: absolute; top: 0; right: 0; bottom: 0;
    width: min(85vw, 360px); background: var(--forest);
    padding: 5rem 2rem 2rem;
    transform: translateX(100%);
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    overflow-y: auto;
  }
  .mobile-menu.open .mobile-menu__panel { transform: translateX(0); }
  .mobile-menu__close { position: absolute; top: 1.25rem; right: 1.25rem; color: var(--cream); }
  .mobile-menu__link {
    display: block; font-family: 'DM Serif Display', serif;
    font-size: var(--text-xl); color: var(--cream);
    padding-block: 0.75rem;
    border-bottom: 1px solid rgba(230, 226, 218, 0.1);
    transition: color 0.25s;
  }
  .mobile-menu__link:hover { color: var(--gold-light); }
</style>
