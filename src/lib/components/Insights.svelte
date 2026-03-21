<section id="insights" class="insights section-space">
  <div class="container">
    <div class="insights__header reveal">
      <span class="label">Legal Intelligence</span>
      <h2>Frequently Asked Questions</h2>
    </div>
    <div class="faq-list">
      {#each faqs as faq, i (i)}
        <div class="faq-item reveal" class:open={openIndex === i} bind:this={items[i]}>
          <button class="faq-summary" onclick={() => toggle(i)}>
            {faq.q}
            <span class="material-symbols-outlined faq-icon">{openIndex === i ? 'remove' : 'add'}</span>
          </button>
          <div class="faq-body">
            <div class="faq-inner">
              <p>{faq.a}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<script>
  let openIndex = $state(null);
  let items = $state([]);

  const faqs = [
    {
      q: 'How long does property conveyancing take in Kenya?',
      a: 'Standard conveyancing typically takes 60–90 days from instruction to completion.'
    },
    {
      q: 'What documents do I need to register a company?',
      a: 'You will need a proposed company name, director/shareholder details, a registered office address, and a memorandum and articles of association.'
    },
    {
      q: 'How do I start the estate planning process?',
      a: 'The first step is a confidential consultation. We assess your assets, family structure and wishes, then prepare a comprehensive plan.'
    },
    {
      q: 'How are legal fees structured?',
      a: 'Our fees comply with the Advocates (Remuneration) Order. For other matters we offer hourly, fixed-fee or retainer arrangements — agreed transparently before work begins.'
    }
  ];

  function toggle(i) {
    const opening = openIndex !== i;
    openIndex = opening ? i : null;
    if (opening) {
      setTimeout(() => {
        items[i]?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 320); // after animation completes
    }
  }
</script>

<style>
  .insights {
    background: var(--charcoal); color: var(--text-on-dark);
    position: relative; overflow: hidden;
  }
  .insights::before {
    content: ''; position: absolute; inset: 0; pointer-events: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'%3E%3Cg fill='none' stroke='%23E6E2DA' stroke-width='0.3' stroke-opacity='0.06'%3E%3Cpath d='M0 32 L16 0 L32 32 L48 0 L64 32'/%3E%3Cpath d='M0 64 L16 32 L32 64 L48 32 L64 64'/%3E%3C/g%3E%3C/svg%3E");
    background-size: 64px 64px;
  }
  .insights > :global(*) { position: relative; z-index: 1; }
  .insights__header {
    margin-bottom: var(--space-lg);
  }
  .insights h2 {
    font-family: 'DM Serif Display', serif;
    font-size: var(--text-3xl); line-height: 1.1;
    color: var(--cream); margin-top: var(--space-sm);
  }
  .faq-list { max-width: 800px; }
  .faq-item {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.07);
    margin-bottom: var(--space-sm);
    overflow: hidden;
  }
  .faq-summary {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: var(--space-lg) var(--space-xl);
    font-weight: 700;
    font-size: var(--text-lg);
    color: var(--cream);
    cursor: pointer;
    user-select: none;
    text-align: left;
    background: none;
    border: none;
    transition: color 0.25s;
  }
  .faq-item.open .faq-summary { color: var(--gold-light); }
  .faq-icon {
    font-size: 1.25rem;
    color: var(--gold);
    flex-shrink: 0;
    transition: transform 0.3s ease;
  }
  .faq-item.open .faq-icon { transform: rotate(180deg); }
  .faq-body {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.32s ease;
  }
  .faq-item.open .faq-body {
    grid-template-rows: 1fr;
  }
  .faq-inner {
    overflow: hidden;
  }
  .faq-item p {
    font-size: var(--text-sm);
    color: var(--text-on-dark-muted);
    line-height: 1.7;
    padding: 0 var(--space-xl) var(--space-lg);
    margin: 0;
  }
</style>
