<script>
</script>

<section id="about" class="about section-space">
  <div class="container">
    <div class="about__grid">
      <div class="about__image-stack reveal">
        <div style="display:flex;flex-direction:column;gap:var(--space-md)">
          <div class="about__img about__img--value">
            <span class="value-item__icon material-symbols-outlined">verified</span>
            <div><div class="value-item__title">Integrity First</div><div class="value-item__desc">Transparent counsel you can trust</div></div>
          </div>
          <div class="about__img about__img--value">
            <span class="value-item__icon material-symbols-outlined">balance</span>
            <div><div class="value-item__title">Equity &amp; Justice</div><div class="value-item__desc">Unwavering advocacy for all</div></div>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;gap:var(--space-md);padding-top:var(--space-2xl)">
          <div class="about__img about__img--value">
            <span class="value-item__icon material-symbols-outlined">psychology</span>
            <div><div class="value-item__title">Strategic Thinking</div><div class="value-item__desc">Creative solutions for complexity</div></div>
          </div>
          <div class="about__img about__img--value">
            <span class="value-item__icon material-symbols-outlined">handshake</span>
            <div><div class="value-item__title">Client Partnership</div><div class="value-item__desc">Long-term relationships, real results</div></div>
          </div>
        </div>
      </div>
      <div>
        <span class="label label--dark reveal">Firm Profile</span>
        <h2 class="reveal reveal-delay-1">Bridging Tradition and Tomorrow</h2>
        <hr class="gold-rule gold-rule--animated reveal reveal-delay-2"/>
        <p class="reveal reveal-delay-2">Founded on the principles of integrity and intellectual rigour, Akinyi &amp; Chesire Advocates LLP has evolved into a powerhouse of legal innovation across East Africa.</p>
        <p class="reveal reveal-delay-3">Our rebranding reflects a bolder commitment to bespoke client experiences — where complex legal challenges meet creative, ethical solutions. We don't just provide counsel; we safeguard legacies.</p>
      </div>
    </div>
  </div>
</section>

<style>
  .about { background: var(--cream-light); }
  .about__grid {
    display: grid; grid-template-columns: 1fr;
    gap: var(--space-lg); align-items: center;
  }
  @media (min-width: 768px) {
    .about__grid { grid-template-columns: 5fr 7fr; gap: var(--space-xl); }
  }
  .about__image-stack {
    display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-md);
  }
  .about__img {
    min-height: 120px;
    background: var(--cream);
    padding: var(--space-md);
    display: flex;
    align-items: flex-start;
    gap: 0.85rem;
    transition: background 0.3s;
  }
  .about__img:hover { background: var(--warm-white); }
  .about__img--value { border-left: 2px solid var(--gold); }
  .about__img--value .value-item__icon { color: var(--gold); font-size: 1.4rem; flex-shrink: 0; margin-top: 0.1rem; }
  .about__img--value .value-item__title { font-weight: 700; font-size: var(--text-sm); color: var(--forest); }
  .about__img--value .value-item__desc { font-size: var(--text-xs); color: var(--text-tertiary); margin-top: 0.2rem; }
  @media (max-width: 640px) {
    .about__image-stack { grid-template-columns: 1fr; }
    .about__image-stack > div:nth-child(2) { padding-top: 0 !important; }
  }
  .about h2 {
    font-family: 'DM Serif Display', serif;
    font-size: var(--text-3xl); line-height: 1.1;
    color: var(--forest); margin-top: var(--space-sm); margin-bottom: var(--space-md);
  }
  .about p { color: var(--text-secondary); margin-bottom: var(--space-md); }
  .about p:first-of-type { font-size: var(--text-lg); color: var(--text-primary); }
</style>
