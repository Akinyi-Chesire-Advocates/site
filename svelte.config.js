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
			// Set base path for GitHub Pages: /<repo-name>
			// Leave empty for custom domain or root deployment
			base: ''
		}
	}
};

export default config;
