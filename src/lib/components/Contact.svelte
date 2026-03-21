<script>
  const { openLegal, showToast } = $props();

  function submitForm(e) {
    e.preventDefault();
    showToast();
    e.target.reset();
  }
</script>

<section id="contact" class="contact section-space">
  <div class="container">
    <div class="contact__grid">
      <div class="contact__form-side">
        <h2 class="reveal">Secure a Consultation</h2>
        <p class="reveal reveal-delay-1">Confidential strategic guidance starts here. All communications are protected by attorney-client privilege.</p>
        <form onsubmit={submitForm} class="form reveal reveal-delay-2">
          <div class="form__row">
            <div class="form__group"><label class="form__label">Full Name *</label><input class="form__input" type="text" placeholder="Your full name" required/></div>
            <div class="form__group"><label class="form__label">Email Address *</label><input class="form__input" type="email" placeholder="your@email.com" required/></div>
          </div>
          <div class="form__row">
            <div class="form__group"><label class="form__label">Phone Number</label><input class="form__input" type="tel" placeholder="+254 7XX XXX XXX"/></div>
            <div class="form__group"><label class="form__label">Practice Area *</label><select class="form__input" required><option value="">Select area of law</option><option>Commercial Law</option><option>Corporate Structuring</option><option>Conveyancing</option><option>Litigation</option><option>Estate Planning</option><option>Family Law</option><option>General Enquiry</option></select></div>
          </div>
          <div class="form__group"><label class="form__label">Preferred Contact Method</label><select class="form__input"><option>Phone Call</option><option>Email</option><option>WhatsApp</option><option>No Preference</option></select></div>
          <div class="form__group"><label class="form__label">Brief Description</label><textarea class="form__input" rows="2" placeholder="Brief description of your matter (optional — all communications are confidential)"></textarea></div>
          <div class="form__consent"><input type="checkbox" id="consent" required/><label for="consent">I consent to Akinyi &amp; Chesire Advocates LLP processing my data per their <button type="button" class="link-btn" onclick={(e) => { e.preventDefault(); openLegal('privacy'); }}>Privacy Policy</button>.</label></div>
          <button type="submit" class="btn btn--primary" style="width:100%;justify-content:center;padding-block:0.85rem;">Request Consultation</button>
        </form>
      </div>
      <div class="contact__info-side">
        <div style="position:relative;z-index:1;">
          <span class="label" style="display:block;margin-bottom:var(--space-lg);">Connect Directly</span>
          <div class="contact__channels">
            <a href="mailto:info@acadvocates.com" class="contact-channel">
              <div class="contact-channel__icon contact-channel__icon--gold"><span class="material-symbols-outlined">mail</span></div>
              <div><div class="contact-channel__label">Email Us</div><div class="contact-channel__value">info@acadvocates.com</div></div>
            </a>
            <a href="tel:+254742611999" class="contact-channel">
              <div class="contact-channel__icon contact-channel__icon--green"><span class="material-symbols-outlined">phone</span></div>
              <div><div class="contact-channel__label">Call Us</div><div class="contact-channel__value">0742 611 999</div></div>
            </a>
            <a href="tel:+254769606281" class="contact-channel">
              <div class="contact-channel__icon contact-channel__icon--green"><span class="material-symbols-outlined">phone</span></div>
              <div><div class="contact-channel__label">Call Us</div><div class="contact-channel__value">0769 606 281</div></div>
            </a>
          </div>
        </div>
        <div style="position:relative;z-index:1;">
          <span class="label" style="display:block;margin-bottom:var(--space-md);">Follow Our Work</span>
          <div class="contact__socials">
            <a href="#" class="contact__social" aria-label="LinkedIn"><svg viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
            <a href="#" class="contact__social" aria-label="X (Twitter)"><svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
            <a href="#" class="contact__social" aria-label="Facebook"><svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .contact {
    background: var(--cream);
    overflow: visible;
    min-height: 100dvh;
  }
  .contact__grid {
    display: grid;
    grid-template-columns: 1fr;
    background: var(--warm-white);
    box-shadow: 0 4px 40px rgba(21, 66, 48, 0.07);
    width: 100%;
  }
  @media (min-width: 1024px) {
    .contact__grid {
      grid-template-columns: 3fr 2fr;
      min-height: calc(100dvh - 8rem);
    }
  }
  .contact__form-side {
    padding: clamp(1.25rem, 2vh, 1.75rem) var(--space-xl);
    display: flex;
    flex-direction: column;
    gap: 0;
  }
  .contact__form-side h2 {
    font-family: 'DM Serif Display', serif;
    font-size: var(--text-2xl);
    color: var(--forest);
    margin-bottom: 0.35rem;
  }
  .contact__form-side > p {
    font-size: var(--text-sm);
    color: var(--text-secondary);
    margin-bottom: clamp(0.75rem, 1.5vh, 1.25rem);
  }
  .contact__info-side {
    background: var(--forest);
    color: var(--cream);
    padding: clamp(1.25rem, 2vh, 1.75rem) var(--space-xl);
    display: flex;
    flex-direction: column;
    gap: var(--space-xl);
    position: relative;
    overflow: hidden;
  }
  .contact__info-side::before {
    content: ''; position: absolute; top: -4rem; right: -4rem;
    width: 16rem; height: 16rem; border-radius: 50%;
    background: rgba(166, 130, 74, 0.06); filter: blur(60px);
  }
  .contact-channel {
    display: flex; align-items: center; gap: 1rem;
    padding: var(--space-md); background: rgba(255, 255, 255, 0.07);
    transition: background 0.25s;
    text-decoration: none;
  }
  .contact-channel:hover { background: rgba(255, 255, 255, 0.12); }
  .contact-channel__icon {
    width: 2.75rem; height: 2.75rem; border-radius: 50%;
    display: flex; align-items: center; justify-content: center; flex-shrink: 0;
  }
  .contact-channel__icon--gold { background: var(--gold); color: var(--forest-deep); }
  .contact-channel__icon--green { background: #25a244; color: white; }
  .contact-channel__label {
    font-size: var(--text-xs); letter-spacing: 0.12em;
    text-transform: uppercase; font-weight: 700; color: var(--text-on-dark-muted);
  }
  a.contact-channel[href^="mailto:"] .contact-channel__value {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
  .contact-channel__value { font-size: var(--text-sm); font-weight: 500; color: var(--cream); }
  .contact__channels { display: flex; flex-direction: column; gap: 0.5rem; }
  .contact__socials { display: flex; gap: 0.5rem; }
  .contact__social {
    width: 2.5rem; height: 2.5rem;
    display: flex; align-items: center; justify-content: center;
    background: rgba(255, 255, 255, 0.07); transition: background 0.25s;
  }
  .contact__social:hover { background: rgba(255, 255, 255, 0.15); }
  .contact__social svg { width: 1rem; height: 1rem; fill: var(--cream); }
</style>
