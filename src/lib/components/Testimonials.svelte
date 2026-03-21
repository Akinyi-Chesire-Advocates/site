<section class="testimonials section-space">
  <div class="container">
    <div class="testimonials__header reveal">
      <span class="label label--dark">Client Perspectives</span>
      <h2>What Our Clients Say</h2>
    </div>
    <div class="testimonials__grid">
      {#each testimonials as t (t.name)}
        <div class="testimonial reveal {t.delay}">
          <span class="testimonial__quote">&ldquo;</span>
          <p>{t.text}</p>
          <div class="testimonial__author">
            <div class="testimonial__avatar testimonial__avatar--{t.color}">{t.initials}</div>
            <div class="testimonial__meta"><div class="testimonial__name">{t.name}</div><div class="testimonial__title">{t.title}</div></div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<script>
  const testimonials = [
    {
      text: 'Their approach to our corporate restructuring was nothing short of brilliant. They simplified the most complex regulatory hurdles while maintaining our core values.',
      initials: 'EK', name: 'Emmanuel Korir', title: 'CEO, Visionary Tech Ltd', color: 'green', delay: ''
    },
    {
      text: 'In matters of estate planning, we needed a firm that understood our cultural nuances and long-term legacy. Akinyi & Chesire provided exactly that.',
      initials: 'AM', name: 'Alice Maalim', title: 'Director, Heritage Holdings', color: 'burgundy', delay: 'reveal-delay-1'
    },
    {
      text: 'The litigation team handled our commercial dispute with strategic finesse. Their knowledge of Kenyan business law is unparalleled.',
      initials: 'PW', name: 'Priya Wanjiku', title: 'Managing Director, Serene Group', color: 'green', delay: 'reveal-delay-3'
    },
    {
      text: 'When our family faced a challenging conveyancing dispute, this firm stood with us from start to finish. Their attention to detail was remarkable.',
      initials: 'JN', name: 'James Njoroge', title: 'Property Developer, Nairobi', color: 'cream', delay: 'reveal-delay-2'
    }
  ];
</script>

<style>
  .testimonials { background: var(--warm-white); }
  .testimonials__header { margin-bottom: var(--space-lg); }
  .testimonials h2 {
    font-family: 'DM Serif Display', serif;
    font-size: var(--text-3xl); line-height: 1.1;
    color: var(--forest); margin-top: var(--space-sm);
  }
  .testimonials__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: clamp(0.75rem, 1.4vw, 1.25rem);
    align-items: stretch;
    grid-auto-flow: row;
  }
  @media (min-width: 680px) {
    .testimonials__grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .testimonial:nth-child(1),
    .testimonial:nth-child(3) { grid-column: 1; }
    .testimonial:nth-child(2),
    .testimonial:nth-child(4) { grid-column: 2; }
  }
  .testimonial {
    padding: clamp(0.95rem, 0.8rem + 0.7vw, 1.35rem);
    background: var(--cream-light);
    position: relative; border-left: 3px solid var(--gold);
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .testimonial__quote {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(2rem, 1.5rem + 1vw, 2.6rem);
    line-height: 1;
    color: var(--gold);
    opacity: 0.25;
    position: absolute;
    top: 0.35rem;
    left: 0.85rem;
  }
  .testimonial p {
    font-size: var(--text-sm);
    font-style: italic;
    line-height: 1.6;
    color: var(--text-secondary);
    margin-bottom: var(--space-md);
    padding-top: var(--space-md);
    flex: 1;
  }
  .testimonial__author {
    display: grid;
    grid-template-columns: 2.25rem minmax(0, 1fr);
    align-items: start;
    column-gap: 0.75rem;
  }
  .testimonial__meta { min-width: 0; }
  .testimonial__avatar {
    width: 2.25rem; height: 2.25rem;
    display: flex; align-items: center; justify-content: center;
    font-weight: 700; font-size: var(--text-xs); flex-shrink: 0;
  }
  .testimonial__avatar--green { background: var(--forest); color: var(--cream); }
  .testimonial__avatar--burgundy { background: var(--burgundy); color: var(--cream); }
  .testimonial__avatar--cream { background: var(--cream); color: var(--forest); }
  .testimonial__name {
    font-weight: 700;
    font-size: var(--text-sm);
    color: var(--forest);
    line-height: 1.3;
    overflow-wrap: anywhere;
    margin-top: 0.05rem;
  }
  .testimonial__title {
    font-size: var(--text-xs);
    letter-spacing: 0.04em;
    color: var(--burgundy);
    line-height: 1.35;
    overflow-wrap: anywhere;
  }
</style>
