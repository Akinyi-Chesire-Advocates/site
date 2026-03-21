<div class="trust-bar">
  <div class="container">
    <div class="trust-bar__inner">
      <div class="trust-bar__item">
        <span class="trust-bar__icon material-symbols-outlined">verified</span>
        <div class="trust-bar__text"><strong>Law Society of Kenya</strong>Fully licensed &amp; regulated</div>
      </div>
      <div class="trust-bar__item">
        <span class="trust-bar__icon material-symbols-outlined">history</span>
        <div class="trust-bar__text"><strong>15+ Years Practice</strong>Established legal excellence</div>
      </div>
      <div class="trust-bar__item">
        <span class="trust-bar__icon material-symbols-outlined">location_on</span>
        <div class="trust-bar__text"><strong>Kitengela</strong>Operating across Kenya</div>
      </div>
      <div class="trust-bar__item">
        <span class="trust-bar__icon material-symbols-outlined">groups</span>
        <div class="trust-bar__text"><strong>500+ Clients Served</strong>Individuals &amp; enterprises</div>
      </div>
    </div>
  </div>
</div>

<style>
  .trust-bar { background: var(--forest); border-top: 1px solid rgba(166, 130, 74, 0.2); scroll-snap-align: start; }
  .trust-bar__inner { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }
  .trust-bar__item {
    display: flex; align-items: center; gap: 1rem;
    padding: var(--space-lg) var(--space-md);
    border-right: 1px solid rgba(166, 130, 74, 0.12);
  }
  .trust-bar__item:last-child { border-right: none; }
  .trust-bar__icon { color: var(--gold); font-size: 1.5rem; flex-shrink: 0; }
  .trust-bar__text {
    font-size: var(--text-sm); color: var(--text-on-dark-muted); line-height: 1.4;
  }
  .trust-bar__text strong { display: block; color: var(--cream); font-weight: 600; }
</style>
