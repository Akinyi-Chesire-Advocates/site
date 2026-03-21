<script>
  import nairobiSkyline from '$lib/assets/images/nairobi-skyline.jpg';
</script>

<section id="locations" class="locations">
  <div class="locations__bg" style="background-image: url({nairobiSkyline})">
    <div class="locations__overlay"></div>
    <div class="locations__content reveal">
      <div class="locations__label">
        <span class="label label--light">Where to Find Us</span>
        <h2>Our Office</h2>
      </div>
      <div class="location-card">
        <div class="location-card__name">
          <span class="material-symbols-outlined">location_on</span>
          Kitengela Office
        </div>
        <div class="location-card__address">
          <strong>Betty Business Centre</strong><br/>
          Namanga Road, Opposite Kitengela Mall<br/>
          Kitengela, Kenya
        </div>
        <div class="location-card__details">
          <div class="location-card__detail">
            <span class="material-symbols-outlined">schedule</span>
            Mon – Fri · 8:00 AM – 5:30 PM
          </div>
        </div>
        <div class="location-card__map">
          <iframe
            title="Kitengela Office Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4300.089503266177!2d36.953077224522296!3d-1.479170496051061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f9ff4d3c23c8f%3A0xbff2a0edb3f49a63!2sBettys%20Building%20Center!5e1!3m2!1sen!2snl!4v1774055022478!5m2!1sen!2snl"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=Betty+Business+Centre,+Namanga+Road,+Kitengela,+Kenya"
          target="_blank"
          rel="noopener noreferrer"
          class="location-card__directions"
        >
          <span class="material-symbols-outlined">near_me</span>
          Get Directions
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  .locations {
    width: 100%;
    scroll-snap-align: start;
  }
  .locations__bg {
    position: relative;
    background-size: cover;
    background-position: center 40%;
    background-repeat: no-repeat;
    min-height: clamp(420px, 55vw, 640px);
    display: flex;
    align-items: center;
  }
  .locations__overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to right,
      rgba(10, 30, 20, 0.82) 0%,
      rgba(10, 30, 20, 0.65) 50%,
      rgba(10, 30, 20, 0.3) 100%
    );
  }
  .locations__content {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: var(--space-3xl) var(--space-xl);
    display: flex;
    flex-direction: column;
    gap: var(--space-xl);
  }
  @media (min-width: 768px) {
    .locations__content {
      flex-direction: row;
      align-items: center;
      gap: clamp(var(--space-xl), 6vw, var(--space-3xl));
    }
  }
  .locations__label { flex-shrink: 0; }
  .locations__label h2 {
    font-family: 'DM Serif Display', serif;
    font-size: var(--text-3xl);
    line-height: 1.1;
    color: var(--cream);
    margin-top: var(--space-sm);
  }
  .location-card {
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    padding: var(--space-xl) var(--space-2xl);
    flex: 1;
    max-width: 510px;
  }
  .location-card__name {
    font-family: 'DM Serif Display', serif;
    font-size: var(--text-xl);
    color: var(--cream);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: var(--space-md);
  }
  .location-card__name :global(.material-symbols-outlined) { color: var(--gold); }
  .location-card__address {
    font-size: var(--text-sm);
    color: rgba(230, 226, 218, 0.85);
    margin-bottom: var(--space-lg);
    line-height: 1.7;
    padding-bottom: var(--space-md);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  .location-card__map {
    margin-top: var(--space-md);
    width: 100%;
    height: 180px;
    overflow: hidden;
    border-radius: 4px;
    border: 1px solid rgba(255, 255, 255, 0.12);
  }
  .location-card__map iframe {
    width: 100%;
    height: 100%;
    border: none;
    display: block;
  }
  .location-card__directions {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    margin-top: var(--space-sm);
    font-size: var(--text-sm);
    color: var(--gold-light, #d4aa6a);
    text-decoration: none;
    transition: color 0.2s;
  }
  .location-card__directions:hover { color: #f0c97a; }
  .location-card__directions :global(.material-symbols-outlined) {
    font-size: 1rem;
    color: inherit;
  }
  .location-card__details { display: flex; flex-direction: column; gap: 0.5rem; }
  .location-card__detail {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: var(--text-sm);
    color: rgba(230, 226, 218, 0.85);
  }
  .location-card__detail :global(.material-symbols-outlined) {
    color: var(--gold);
    font-size: 1rem;
    flex-shrink: 0;
  }
</style>
