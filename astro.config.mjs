// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import Icons from 'unplugin-icons/vite';
import starlightVersions from 'starlight-versions';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: "https://scilus.github.io",
	base: "/nf-pediatric",
	integrations: [
		starlight({
			title: 'nf-pediatric',
			plugins: [
				starlightVersions({
				versions: [{
					slug: '0.1.0',
					label: 'v0.1.0 (latest)',
					}],
				}),
			],
			logo: {
				light: './src/assets/logo_white.svg',
				dark: './src/assets/logo_dark.svg',
				replacesTitle: true,
			},
			social: [{ icon: 'github', label: 'nf-pediatric', href: 'https://github.com/scilus/nf-pediatric' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Installation', slug: 'guides/installation' },
						{ label: 'Inputs', slug: 'guides/inputs' },
						{ label: 'Running the pipeline', slug: 'guides/usage' },
						{ label: "Parameters", slug: 'guides/parameters' },
						{ label: 'Outputs', slug: 'guides/outputs' },
						{ label: 'Running with no internet access', slug: 'guides/nointernet' },
						{ label: 'Frequently Asked Questions', slug: 'guides/faq' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
            customCss: [
                './src/styles/custom.css',
                './src/styles/global.css'
            ],
		}),
	],
	vite: {
		plugins: [Icons({ compiler: 'astro' }), tailwindcss()],
		server: {
			watch: {
				ignored: [
					"**/.pnpm-store/**/*",
					"**/node_modules/**/*"
				],
			},
		},
	},
});
