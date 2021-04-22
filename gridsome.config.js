module.exports = {
	siteName: 'figma-plugin-ds-vue-docs',
	icon: {
		favicon: './src/assets/favicon.png',
		touchicon: './src/assets/favicon.png'
	},
	siteUrl: 'https://figma-plugin-ds-vue.netlify.app/',
	settings: {
		github: 'https://github.com/alexwidua/figma-plugin-ds-vue',
		nav: {
			links: [{ path: '/docs/', title: 'Docs' }]
		},
		sidebar: [
			{
				name: 'docs',
				sections: [
					{
						title: 'Getting Started',
						items: ['/docs/']
					},
					{
						title: 'Components',
						items: [
							'/docs/components/button/',
							'/docs/components/checkbox/',
							'/docs/components/disclosure/',
							'/docs/components/divider/',
							'/docs/components/icon/',
							'/docs/components/icon-button/',
							'/docs/components/input/',
							'/docs/components/num-input/',
							'/docs/components/radio-menu/',
							'/docs/components/select-menu/',
							'/docs/components/label/',
							'/docs/components/text/',
							'/docs/components/textarea/',
							'/docs/components/title/',
							'/docs/components/toggle/',
							'/docs/components/tooltip/'
						]
					},
					{
						title: 'Utilities',
						items: [
							'/docs/utils/variables/',
							'/docs/utils/style-utils/'
						]
					},
					{
						title: 'Library',
						items: ['/docs/library/changelog/']
					}
				]
			}
		]
	},
	plugins: [
		{
			use: '@gridsome/vue-remark',
			options: {
				baseDir: './content',
				path: '**/*.md',
				typeName: 'MarkdownPage',
				template: './src/templates/MarkdownPage.vue',
				plugins: ['@gridsome/remark-prismjs']
			}
		},
		{
			use: 'gridsome-plugin-tailwindcss',
			options: {
				tailwindConfig: './tailwind.config.js'
			}
		},
		{
			use: '@gridsome/plugin-sitemap',
			options: {}
		}
	]
}
