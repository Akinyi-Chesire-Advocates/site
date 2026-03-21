<script>
  import { onMount } from "svelte";
  import Nav from "$lib/components/Nav.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import TrustBar from "$lib/components/TrustBar.svelte";
  import About from "$lib/components/About.svelte";
  import PracticeAreas from "$lib/components/PracticeAreas.svelte";
  import Team from "$lib/components/Team.svelte";
  import Testimonials from "$lib/components/Testimonials.svelte";
  import Insights from "$lib/components/Insights.svelte";
  import Locations from "$lib/components/Locations.svelte";
  import Contact from "$lib/components/Contact.svelte";
  import Footer from "$lib/components/Footer.svelte";

  /* ── State ──────────────────────────────────────────────── */
  let consultOpen = $state(false);
  let legalOpen = $state(false);
  let legalKey = $state("privacy");
  let toastVisible = $state(false);

  const legalContent = {
    privacy: {
      title: "Privacy Policy",
      body: '<p><strong>Last updated: January 2025</strong></p><p><strong>1. Introduction</strong><br/>Akinyi & Chesire Advocates LLP is committed to protecting your privacy under the Kenya Data Protection Act 2019.</p><p><strong>2. Data We Collect</strong><br/>We collect your name, contact details, and information about your legal matter when you contact us.</p><p><strong>3. How We Use Your Data</strong><br/>Your data is used solely to respond to enquiries and provide legal services.</p><p><strong>4. Data Security</strong><br/>We maintain appropriate technical and organisational measures to protect your personal data.</p><p><strong>5. Your Rights</strong><br/>You have the right to access, correct or request deletion of your personal data.</p><p><em style="color:var(--text-tertiary)">[Placeholder — have this reviewed by qualified data protection counsel.]</em></p>',
    },
    terms: {
      title: "Terms of Use",
      body: '<p><strong>Last updated: January 2025</strong></p><p><strong>1. Acceptance</strong><br/>By accessing this website, you agree to these Terms of Use.</p><p><strong>2. Information Only</strong><br/>Content is for general informational purposes only and does not constitute legal advice.</p><p><strong>3. Intellectual Property</strong><br/>All content and branding are the property of Akinyi & Chesire Advocates LLP.</p><p><strong>4. Governing Law</strong><br/>These Terms are governed by the laws of Kenya.</p><p><em style="color:var(--text-tertiary)">[Placeholder — review before publishing.]</em></p>',
    },
    disclaimer: {
      title: "Legal Disclaimer",
      body: '<p><strong>Important Notice</strong></p><p>The information on this website is for general informational purposes only. It does not constitute legal advice.</p><p>Accessing this website does not create an attorney-client relationship.</p><p>The Firm is regulated by the Law Society of Kenya and complies with professional rules and standards of conduct.</p><p><em style="color:var(--text-tertiary)">[Placeholder — review before publishing.]</em></p>',
    },
  };

  /* ── Functions ──────────────────────────────────────────── */
  function openConsultation() {
    consultOpen = true;
    document.body.style.overflow = "hidden";
  }

  function closeConsultation(e) {
    if (!e || e.target === e.currentTarget) {
      consultOpen = false;
      document.body.style.overflow = "";
    }
  }

  function submitConsultation(e) {
    e.preventDefault();
    consultOpen = false;
    document.body.style.overflow = "";
    showToast();
  }

  function openLegal(key) {
    legalKey = key;
    legalOpen = true;
    document.body.style.overflow = "hidden";
  }

  function closeLegal(e) {
    if (!e || e.target === e.currentTarget) {
      legalOpen = false;
      document.body.style.overflow = "";
    }
  }

  function showToast() {
    toastVisible = true;
    setTimeout(() => {
      toastVisible = false;
    }, 4500);
  }

  /* ── Scroll effects ─────────────────────────────────────── */
  onMount(() => {
    const bar = document.getElementById("scrollProgress");
    const nav = document.getElementById("nav");

    function onScroll() {
      // Scroll progress bar
      if (bar) {
        const scrollable = document.body.scrollHeight - window.innerHeight;
        bar.style.width =
          scrollable > 0 ? (window.scrollY / scrollable) * 100 + "%" : "0%";
      }
      // Nav shadow
      if (nav) {
        nav.classList.toggle("nav--scrolled", window.scrollY > 30);
      }
    }

    // Scroll reveal via IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -40px 0px" },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  });
</script>

<div class="scroll-progress" id="scrollProgress"></div>

<Nav {openConsultation} />
<Hero />
<TrustBar />
<About />
<PracticeAreas />
<Team />
<Testimonials />
<Insights />
<Locations />
<Contact {openLegal} {showToast} />
<Footer {openLegal} />

<!-- WhatsApp Float -->
<a
  href="https://wa.me/254742611999"
  target="_blank"
  class="wa-float"
  title="Chat on WhatsApp"
>
  <svg viewBox="0 0 24 24"
    ><path
      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
    /></svg
  >
</a>

<!-- Toast -->
<div class="toast" class:show={toastVisible}>
  <span class="material-symbols-outlined" style="color:var(--gold)"
    >check_circle</span
  >
  <div>
    <strong style="font-size:var(--text-sm)">Request Submitted!</strong><br />
    <span style="font-size:var(--text-xs);color:var(--text-on-dark-muted)"
      >We'll be in touch within 24 hours.</span
    >
  </div>
</div>

<!-- Consultation Overlay -->
<div
  class="overlay"
  class:open={consultOpen}
  role="dialog"
  aria-modal="true"
  aria-labelledby="consult-title"
  tabindex="-1"
  onkeydown={(e) => e.key === "Escape" && closeConsultation()}
>
  <button class="overlay__backdrop" onclick={closeConsultation} aria-label="Close dialog"></button>
  <div class="overlay__box">
    <button
      onclick={() => {
        consultOpen = false;
        document.body.style.overflow = "";
      }}
      class="overlay__close"
      aria-label="Close dialog"
      ><span class="material-symbols-outlined">close</span></button
    >
    <h3 id="consult-title">Book a Consultation</h3>
    <p>
      Confidential — all communications are protected by attorney-client
      privilege.
    </p>
    <form onsubmit={submitConsultation} class="form">
      <div class="form__row">
        <div class="form__group">
          <label class="form__label">Full Name *</label><input
            class="form__input"
            type="text"
            placeholder="Your full name"
            required
          />
        </div>
        <div class="form__group">
          <label class="form__label">Email Address *</label><input
            class="form__input"
            type="email"
            placeholder="your@email.com"
            required
          />
        </div>
      </div>
      <div class="form__row">
        <div class="form__group">
          <label class="form__label">Phone Number</label><input
            class="form__input"
            type="tel"
            placeholder="+254 7XX XXX XXX"
          />
        </div>
        <div class="form__group">
          <label class="form__label">Practice Area *</label><select
            class="form__input"
            required
            ><option value="">Select area of law</option><option
              >Commercial Law</option
            ><option>Corporate Structuring</option><option>Conveyancing</option
            ><option>Litigation</option><option>Estate Planning</option><option
              >Family Law</option
            ><option>General Enquiry</option></select
          >
        </div>
      </div>
      <div class="form__group">
        <label class="form__label">Preferred Contact Method</label><select
          class="form__input"
          ><option>Phone Call</option><option>Email</option><option
            >WhatsApp</option
          ><option>No Preference</option></select
        >
      </div>
      <div class="form__group">
        <label class="form__label">Brief Description</label><textarea
          class="form__input"
          rows="2"
          placeholder="Brief description of your matter (optional — all communications are confidential)"
        ></textarea>
      </div>
      <div class="form__consent">
        <input type="checkbox" id="consult-consent" required /><label
          for="consult-consent"
          >I consent to Akinyi &amp; Chesire Advocates LLP processing my data
          per their <button
            type="button"
            class="link-btn"
            onclick={(e) => {
              e.preventDefault();
              consultOpen = false;
              setTimeout(() => openLegal("privacy"), 50);
            }}>Privacy Policy</button
          >.</label
        >
      </div>
      <button
        type="submit"
        class="btn btn--primary"
        style="width:100%;justify-content:center;padding-block:0.85rem;"
        >Request Consultation</button
      >
    </form>
  </div>
</div>

<!-- Legal Overlay -->
<div
  class="overlay"
  class:open={legalOpen}
  role="dialog"
  aria-modal="true"
  aria-labelledby="legal-title"
  tabindex="-1"
  onkeydown={(e) => e.key === "Escape" && closeLegal()}
>
  <button class="overlay__backdrop" onclick={closeLegal} aria-label="Close dialog"></button>
  <div class="overlay__box">
    <button
      onclick={() => {
        legalOpen = false;
        document.body.style.overflow = "";
      }}
      class="overlay__close"
      aria-label="Close dialog"
      ><span class="material-symbols-outlined">close</span></button
    >
    <h3 id="legal-title">{legalContent[legalKey].title}</h3>
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    <div class="legal-content">{@html legalContent[legalKey].body}</div>
  </div>
</div>
