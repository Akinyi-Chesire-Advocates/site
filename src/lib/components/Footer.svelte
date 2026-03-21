<script>
  import logoName from '$lib/assets/brand/logo-name.png';
  import TribalBar from './TribalBar.svelte';

  const { openLegal } = $props();
</script>

<footer class="footer">
  <div class="container footer__top">
    <div class="footer__brand">
      <div class="footer__logo">
        <img src={logoName} alt="Akinyi & Chesire Advocates LLP" class="footer__logo-img" />
      </div>
      <p>Advocates and Commissioners for Oaths — legal excellence rooted in integrity, serving individuals and enterprises across Kenya and East Africa.</p>
    </div>
    <div class="footer__nav">
      <div class="footer__nav-title">Quick Links</div>
      <a href="#about">About the Firm</a>
      <a href="#practice">Practice Areas</a>
      <a href="#team">Our Team</a>
      <a href="#insights">Legal Insights</a>
      <a href="#locations">Office Locations</a>
      <a href="#contact">Contact Us</a>
    </div>
    <div class="footer__nav">
      <div class="footer__nav-title">Legal</div>
      <button class="footer-link" onclick={() => openLegal('privacy')}>Privacy Policy</button>
      <button class="footer-link" onclick={() => openLegal('terms')}>Terms of Use</button>
      <button class="footer-link" onclick={() => openLegal('disclaimer')}>Legal Disclaimer</button>
    </div>
  </div>
  <div class="container footer__bottom">
    <p>&copy; {new Date().getFullYear()} Akinyi &amp; Chesire Advocates LLP. All rights reserved. Regulated by the Law Society of Kenya.</p>
  </div>
  <TribalBar />
</footer>

<style>
  .footer { background: var(--charcoal); color: var(--text-on-dark); scroll-snap-align: start; }
  .footer__top {
    padding-block: var(--space-md);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-lg);
  }
  .footer__brand {
    grid-column: 1 / -1;
  }
  @media (min-width: 768px) {
    .footer__top { grid-template-columns: 2fr 1fr 1fr; gap: var(--space-xl); }
    .footer__brand { grid-column: auto; }
  }
  .footer__brand p {
    font-size: var(--text-sm); color: var(--text-on-dark-muted);
    line-height: 1.7; max-width: 360px; margin-top: var(--space-md);
    text-align: center;
  }
  @media (min-width: 768px) { .footer__brand p { text-align: left; } }
  .footer__nav-title {
    font-size: var(--text-xs); font-weight: 700; letter-spacing: 0.2em;
    text-transform: uppercase; color: var(--gold); margin-bottom: var(--space-sm);
  }
  .footer__nav a, .footer-link {
    display: block; font-size: var(--text-sm);
    color: var(--text-on-dark-muted); padding-block: 0.25rem;
    transition: color 0.25s; text-align: left;
  }
  .footer__nav a:hover, .footer-link:hover { color: var(--cream); }
  .footer__bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.06);
    padding-block: var(--space-md); font-size: var(--text-xs);
    color: rgba(232, 228, 220, 0.3);
  }
  .footer__logo { display: flex; align-items: center; justify-content: center; }
  @media (min-width: 768px) { .footer__logo { justify-content: flex-start; } }
  .footer__logo-img {
    height: 64px; width: auto; display: block;
    filter: invert(1);
    mix-blend-mode: screen;
  }
</style>
