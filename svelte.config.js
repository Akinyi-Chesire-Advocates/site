import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		paths: {
			// Reads BASE_PATH env var set by the GitHub Actions workflow.
			// Falls back to '' for local dev and custom domain deployments.
			base: process.env.BASE_PATH ?? ''
		}
	}
};

export default config;
