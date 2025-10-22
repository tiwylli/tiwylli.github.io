/** @type {import('next').NextConfig} */
// Configure Next.js for static HTML export so we can host on GitHub Pages.
// We set `output: 'export'` which enables `next export` to produce static files.
const nextConfig = {
	// If you host under a repository path (e.g., https://<user>.github.io/<repo>/),
	// set `basePath` to '/<repo>' and `assetPrefix` to the same value.
	// Example:
	// basePath: '/wylliam-cantin-charawi',
	// assetPrefix: '/wylliam-cantin-charawi',
	output: 'export',
};

module.exports = nextConfig;
