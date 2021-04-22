import DefaultLayout from '~/layouts/Default.vue'

import 'figma-plugin-ds-vue/dist/figma-plugin-ds-vue.css'
import 'prism-themes/themes/prism-material-oceanic.css'

export default function(Vue, { router, head, isClient }) {
	Vue.component('Layout', DefaultLayout)

	router.beforeEach((to, _from, next) => {
		head.meta.push({
			key: 'og:url',
			name: 'og:url',
			content: process.env.GRIDSOME_BASE_PATH + to.path
		})
		next()
	})
}
