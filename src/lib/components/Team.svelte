<script>
  import teamWoman from '$lib/assets/images/team-woman.jpg';
</script>

<section id="team" class="team section-space">
  <div class="container">
    <div class="team__layout">
      <div class="team__header reveal">
        <span class="label label--dark">Our Leadership</span>
        <h2>The Minds Behind the Mandate</h2>
        <p class="team__intro">Seasoned advocates united by deep specialisation and a shared commitment to exceptional client service.</p>
      </div>
      <div class="team__grid">
        <div class="team-card reveal">
          <div class="team-card__image">
            <img src={teamWoman} alt="Akinyi — Managing Partner"/>
            <div class="team-card__overlay"><p>Specialising in International Corporate Law &amp; Dispute Resolution</p></div>
          </div>
          <h4 class="team-card__name">Akinyi</h4>
          <div class="team-card__role">Managing Partner</div>
          <p class="team-card__bio">LLB, LLM. Over 15 years in corporate and commercial litigation across East Africa.</p>
          <div class="team-card__contact">
            <a href="mailto:akinyi@acadvocates.com" class="material-symbols-outlined" title="akinyi@acadvocates.com">mail</a>
            <a href="tel:+254742611999" class="material-symbols-outlined" title="0742 611 999">phone</a>
          </div>
        </div>
        <div class="team-card reveal reveal-delay-1">
          <div class="team-card__image">
            <img src={teamWoman} alt="Chesire — Partner"/>
            <div class="team-card__overlay"><p>Expert in Real Estate Conveyancing and Property Litigation</p></div>
          </div>
          <h4 class="team-card__name">Chesire</h4>
          <div class="team-card__role">Partner</div>
          <p class="team-card__bio">LLB, Advocate of the High Court of Kenya. Property and conveyancing specialist with 10+ years experience.</p>
          <div class="team-card__contact">
            <a href="mailto:chesire@acadvocates.com" class="material-symbols-outlined" title="chesire@acadvocates.com">mail</a>
            <a href="tel:+254769606281" class="material-symbols-outlined" title="0769 606 281">phone</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .team {
    background: var(--cream-light);
  }
  .team__layout {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-xl);
    align-items: start;
  }
  .team__header { margin-bottom: 0; }
  .team h2 {
    font-family: 'DM Serif Display', serif;
    font-size: var(--text-3xl); line-height: 1.1;
    color: var(--forest); margin-top: var(--space-sm);
  }
  .team__intro {
    color: var(--text-secondary); margin-top: var(--space-md);
    font-size: var(--text-lg);
  }
  .team__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-xl);
    align-items: start;
  }
  @media (min-width: 640px) {
    .team__grid { grid-template-columns: 1fr 1fr; }
  }
  @media (min-width: 1024px) {
    .team__layout {
      grid-template-columns: minmax(260px, 1fr) minmax(0, 2fr);
      gap: clamp(1.5rem, 2.2vw, 3rem);
    }
    .team__grid {
      gap: clamp(1.5rem, 2vw, 2.5rem);
    }
  }
  .team-card__image {
    position: relative;
    overflow: hidden;
    height: clamp(260px, 38vw, 460px);
    margin-bottom: var(--space-md);
  }
  .team-card__image img {
    width: 100%; height: 100%; object-fit: cover;
    filter: grayscale(0.4) contrast(1.05);
    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .team-card:hover .team-card__image img {
    filter: grayscale(0) contrast(1); transform: scale(1.03);
  }
  .team-card__overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(21, 66, 48, 0.75) 0%, transparent 55%);
    opacity: 0; transition: opacity 0.4s;
    display: flex; align-items: flex-end; padding: var(--space-lg);
  }
  .team-card:hover .team-card__overlay { opacity: 1; }
  .team-card__overlay p { color: var(--cream); font-size: var(--text-sm); font-weight: 500; }
  .team-card__name {
    font-family: 'DM Serif Display', serif;
    font-size: var(--text-xl); color: var(--forest);
  }
  .team-card__role {
    font-size: var(--text-xs); font-weight: 700; letter-spacing: 0.15em;
    text-transform: uppercase; color: var(--burgundy);
    margin-top: 0.25rem; margin-bottom: 0.5rem;
  }
  .team-card__bio { font-size: var(--text-sm); color: var(--text-secondary); line-height: 1.6; }
  .team-card__contact { display: flex; gap: 0.75rem; margin-top: 0.75rem; }
  .team-card__contact a {
    color: var(--text-tertiary); font-size: 1.1rem; transition: color 0.25s;
  }
  .team-card__contact a:hover { color: var(--burgundy); }
</style>
