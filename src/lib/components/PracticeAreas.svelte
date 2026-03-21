<script>
</script>

<section id="practice" class="practice section-space">
  <div class="container">
    <div class="practice__header reveal">
      <span class="label label--dark">Core Competencies</span>
      <h2>Our Practice Areas</h2>
      <p class="practice__intro">Comprehensive services spanning the critical intersections of commerce, property, family and private wealth management.</p>
    </div>
    <div class="practice__grid">
      <div class="practice-card reveal">
        <span class="practice-card__num">01</span>
        <h3 class="practice-card__title">Commercial Law</h3>
        <hr class="practice-card__rule"/>
        <p class="practice-card__desc">Navigating trade, regulatory compliance, and contractual obligations with precision across all commercial sectors.</p>
      </div>
      <div class="practice-card reveal reveal-delay-1">
        <span class="practice-card__num">02</span>
        <h3 class="practice-card__title">Corporate Structuring</h3>
        <hr class="practice-card__rule"/>
        <p class="practice-card__desc">From startups to conglomerates, we architect entities for growth, tax efficiency, and long-term operational resilience.</p>
      </div>
      <div class="practice-card reveal reveal-delay-2">
        <span class="practice-card__num">03</span>
        <h3 class="practice-card__title">Conveyancing</h3>
        <hr class="practice-card__rule"/>
        <p class="practice-card__desc">Strategic property acquisition, disposal and title management for high-net-worth portfolios and institutional investors.</p>
      </div>
      <div class="practice-card reveal reveal-delay-1">
        <span class="practice-card__num">04</span>
        <h3 class="practice-card__title">Litigation</h3>
        <hr class="practice-card__rule"/>
        <p class="practice-card__desc">Rigorous courtroom representation and dispute resolution across civil, commercial and constitutional matters.</p>
      </div>
      <div class="practice-card reveal reveal-delay-2">
        <span class="practice-card__num">05</span>
        <h3 class="practice-card__title">Estate Planning</h3>
        <hr class="practice-card__rule"/>
        <p class="practice-card__desc">Preserving wealth and legacy through robust trusts, wills, succession planning and probate administration.</p>
      </div>
      <div class="practice-card reveal reveal-delay-3">
        <span class="practice-card__num">06</span>
        <h3 class="practice-card__title">Family Law</h3>
        <hr class="practice-card__rule"/>
        <p class="practice-card__desc">Compassionate yet decisive representation for domestic matters, matrimonial disputes and child custody proceedings.</p>
      </div>
    </div>
  </div>
</section>

<style>
  .practice { background: var(--cream); }
  .practice__header { max-width: 680px; margin-bottom: var(--space-lg); }
  .practice h2 {
    font-family: 'DM Serif Display', serif;
    font-size: var(--text-3xl); line-height: 1.1;
    color: var(--forest); margin-top: var(--space-sm);
  }
  .practice__intro { color: var(--text-secondary); margin-top: var(--space-md); font-size: var(--text-lg); }
  .practice__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: clamp(0.65rem, 1vw, 1rem);
    align-items: stretch;
  }
  @media (min-width: 768px) {
    .practice__grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  @media (min-width: 1200px) {
    .practice__grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
  .practice-card {
    background: var(--warm-white);
    padding: clamp(1.2rem, 1rem + 0.8vw, 1.8rem) clamp(1rem, 0.85rem + 0.8vw, 1.5rem);
    position: relative; overflow: hidden;
    transition: all 0.45s cubic-bezier(0.16, 1, 0.3, 1);
    min-height: clamp(220px, 24vh, 290px);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .practice-card::before {
    content: ''; position: absolute; top: 0; left: 0;
    width: 3px; height: 0; background: var(--gold);
    transition: height 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .practice-card:hover::before { height: 100%; }
  .practice-card:hover { background: var(--forest); }
  .practice-card:hover .practice-card__title,
  .practice-card:hover .practice-card__num { color: var(--cream); }
  .practice-card:hover .practice-card__desc { color: var(--text-on-dark-muted); }
  .practice-card__num {
    font-family: 'DM Serif Display', serif;
    font-size: var(--text-3xl); color: var(--cream); opacity: 0.06;
    position: absolute; top: var(--space-md); right: var(--space-md);
    line-height: 1; transition: color 0.3s;
  }
  .practice-card:hover .practice-card__num { opacity: 0.12; }
  .practice-card__title {
    font-family: 'DM Serif Display', serif;
    font-size: var(--text-xl); color: var(--forest);
    margin-bottom: var(--space-sm); transition: color 0.3s;
  }
  .practice-card__rule {
    width: 2rem; height: 1.5px; background: var(--gold);
    border: none; margin-bottom: var(--space-md);
  }
  .practice-card__desc {
    font-size: var(--text-sm); line-height: 1.7;
    color: var(--text-secondary); transition: color 0.3s;
  }
</style>
