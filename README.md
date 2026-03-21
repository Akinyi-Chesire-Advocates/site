# Akinyi & Chesire Advocates LLP — Website

A modern law firm website built with **SvelteKit** and deployed as a fully static site to **GitHub Pages**.

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production (static output)
npm run build

# Preview production build
npm run preview
```

## Deployment to GitHub Pages

This project is configured for automatic deployment via GitHub Actions:

1. Push to the `main` branch
2. GitHub Actions builds the static site
3. Deploys to GitHub Pages automatically

### Manual setup

1. Go to your GitHub repo → **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Push to `main` — the site will deploy automatically

### Custom domain

If using a custom domain (e.g., `akinyichesire.co.ke`):

1. Update `svelte.config.js` → set `paths.base` to `''` (empty string)
2. Add your domain in GitHub repo → **Settings** → **Pages** → **Custom domain**
3. Create a `static/CNAME` file with your domain name

## Project Structure

```
src/
├── app.html              # HTML template
├── app.css               # Global styles & design tokens
├── routes/
│   ├── +layout.svelte    # Root layout
│   ├── +layout.js        # Prerender config
│   └── +page.svelte      # Main page (assembles all sections)
└── lib/
    └── components/
        ├── Nav.svelte
        ├── Hero.svelte
        ├── TrustBar.svelte
        ├── About.svelte
        ├── PracticeAreas.svelte
        ├── Team.svelte
        ├── Testimonials.svelte
        ├── Insights.svelte
        ├── Locations.svelte
        ├── Contact.svelte
        └── Footer.svelte
static/
└── images/               # Static assets (served as-is)
```

## Tech Stack

- **SvelteKit** with Svelte 5 (runes mode)
- **@sveltejs/adapter-static** for static site generation
- **Vite** for fast builds
- **GitHub Actions** for CI/CD
