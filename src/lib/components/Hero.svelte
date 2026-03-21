<script>
  import heroBg from '$lib/assets/images/hero-bg.jpg';
</script>

<section class="hero">
  <div class="hero__image hero-anim-img">
    <img src={heroBg} alt="Legal consultation at Akinyi & Chesire Advocates"/>
  </div>
  <div class="hero__gradient"></div>
  <div class="container hero__content">
    <div class="hero__text">
      <div class="hero__label hero-anim-1"><span class="label">Advocates &amp; Commissioners for Oaths · Kenya</span></div>
      <h1 class="hero-anim-2">Where Authority<br/><em>Meets Purpose.</em></h1>
      <p class="hero__body hero-anim-3">Deep legal expertise and a bold modern vision — protecting your interests across corporate, property, family, and estate matters throughout Kenya and East Africa.</p>
    </div>
    <div class="hero__bottom hero-anim-4">
      <div class="hero__actions">
        <a href="#practice" class="btn btn--gold btn--lg">Explore Practice Areas <span class="material-symbols-outlined" style="font-size:1.1rem">arrow_forward</span></a>
        <a href="#about" class="btn btn--outline-light btn--lg">Our Story</a>
      </div>
      <div class="hero__stats hero-anim-5">
        <div class="hero__stat">
          <div class="hero__stat-num">15+</div>
          <div class="hero__stat-label">Years Practice</div>
        </div>
        <div class="hero__stat">
          <div class="hero__stat-num">500+</div>
          <div class="hero__stat-label">Clients Served</div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .hero {
    position: relative; height: 100vh; max-height: 100vh;
    display: flex; align-items: stretch;
    overflow: hidden; background: var(--charcoal);
    scroll-snap-align: start;
  }
  .hero__image { position: absolute; inset: 0; z-index: 1; }
  .hero__image img {
    width: 100%; height: 100%; object-fit: cover;
    object-position: center 30%;
    filter: brightness(0.55) saturate(0.85);
    transform: scaleX(-1);
  }
  .hero__gradient {
    position: absolute; inset: 0; z-index: 2;
    background:
      linear-gradient(to right, rgba(13, 44, 32, 0.92) 0%, rgba(13, 44, 32, 0.55) 55%, transparent 100%),
      linear-gradient(to top, rgba(16, 17, 17, 0.75) 0%, transparent 45%);
  }
  .hero__content {
    position: relative; z-index: 3;
    padding-top: clamp(5rem, 12vh, 9rem);
    padding-bottom: clamp(2rem, 5vh, 4rem);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: clamp(1rem, 2vh, 2rem);
    height: 100%;
    width: 100%;
  }
  .hero__text { display: flex; flex-direction: column; gap: clamp(0.5rem, 1.2vh, 1rem); }
  .hero__label { margin-bottom: 0; }
  .hero h1 { margin-bottom: 0; }
  .hero__body { margin-bottom: 0; }
  .hero__actions { margin-bottom: 0; }
  .hero__label {
    display: inline-flex; align-items: center;
    gap: clamp(0.4rem, 0.5vw, 0.75rem); margin-bottom: var(--space-lg);
  }
  .hero__label :global(.label) {
    font-size: clamp(0.7rem, 0.55rem + 0.6vw, 1.05rem);
  }
  .hero__label::before {
    content: ''; display: block;
    width: clamp(1.5rem, 1rem + 1.5vw, 2.5rem); height: 2px; background: var(--gold-light); opacity: 1;
  }
  .hero h1 {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(2.8rem, 4vw + 2vh, 7rem); font-weight: 400;
    line-height: 1.05; color: var(--cream); letter-spacing: -0.02em;
  }
  .hero h1 em { font-style: italic; color: var(--gold-light); }
  .hero__body {
    font-size: clamp(1.05rem, 0.9rem + 1vw, 1.55rem); line-height: 1.65;
    color: var(--text-on-dark-muted); max-width: min(600px, 90%); font-weight: 300;
  }
  .hero__bottom {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: clamp(0.75rem, 1.5vh, 1.25rem);
  }
  @media (min-width: 768px) {
    .hero__bottom {
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
    }
  }
  .hero__actions { display: flex; flex-wrap: wrap; gap: 1rem; }
  .hero__stats {
    display: grid; grid-template-columns: repeat(2, 1fr);
    gap: 1px;
    background: rgba(166, 130, 74, 0.15);
    max-width: 360px;
    align-self: flex-start;
  }
  @media (min-width: 768px) {
    .hero__stats { align-self: flex-start; }
  }
  .hero__stat {
    background: rgba(13, 44, 32, 0.75);
    backdrop-filter: blur(12px);
    padding: var(--space-md) var(--space-lg);
    text-align: center;
  }
  .hero__stat-num {
    font-family: 'DM Serif Display', serif;
    font-size: var(--text-2xl); color: var(--gold-light); line-height: 1;
  }
  .hero__stat-label {
    font-size: var(--text-xs); letter-spacing: 0.15em;
    text-transform: uppercase; color: var(--text-on-dark-muted); margin-top: 0.35rem;
  }
  @media (max-width: 480px) {
    .hero__stats { grid-template-columns: 1fr 1fr; max-width: 100%; }
  }
</style>
