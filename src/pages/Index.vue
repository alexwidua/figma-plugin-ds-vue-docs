<template>
	<Layout>
		<div class="pt-8 md:pt-48 flex justify-center flex-col md:flex-row">
			<div class="flex flex-col items-center">
				<div class="flex flex-col items-center mb-2 text-ui-primary">
					<Logo class="my-6" :width="80" />
				</div>
				<h1
					class="text-4xl text-center font-bold lg:text-5xl tracking-tight"
				>
					figma-plugin-ds-vue
				</h1>
				<p class="mt-2 text-xl font-medium text-center">
					Vue component library for building Figma plugins
				</p>
				<div class="flex justify-center my-6">
					<g-link
						to="/docs/"
						:style="styled"
						class="z-10 flex items-center px-6 py-4 ml-auto text-xl font-semibold leading-none text-white border bg-ui-primary border-ui-primary hover:bg-green-400 hover:border-green-400"
					>
						{{ toggle ? 'Get started already' : 'Get started' }}
					</g-link>
				</div>

				<p class="mt-16 text-center">
					<a
						href="https://github.com/alexwidua/figma-plugin-ds-vue"
						class="border-b border-solid border-ui-primary text-ui-primary"
						>View on GitHub</a
					>.
				</p>
			</div>

			<Components
				class="ml-24 mt-12 md:mt-0"
				:xVal="x"
				:yVal="y"
				:widthVal="width"
				:heightVal="height"
				:angleVal="angle"
				:cornerVal="corner"
				:blendVal="blend"
				:toggleVal="toggle"
				@x="(val) => (x = val)"
				@y="(val) => (y = val)"
				@width="(val) => (width = val)"
				@height="(val) => (height = val)"
				@corner="(val) => (corner = val)"
				@angle="(val) => (angle = val)"
				@justify="(val) => (justify = val)"
				@align="(val) => (align = val)"
				@blend="(val) => (blend = val)"
				@toggle="(val) => (toggle = val)"
				@reset="resetVals()"
			/>
		</div>
	</Layout>
</template>

<script>
import Components from '@/components/misc/Components.vue'
import Logo from '@/components/layout/Logo'
import {
	ArrowRightCircleIcon,
	ZapIcon,
	CodeIcon,
	MoonIcon,
	SearchIcon
} from 'vue-feather-icons'

export default {
	components: {
		Logo,
		ArrowRightCircleIcon,
		ZapIcon,
		CodeIcon,
		MoonIcon,
		SearchIcon,
		Components
	},
	metaInfo() {
		const title = 'Component library'
		const description = 'Vue component library for building Figma plugins'

		return {
			title: title,
			meta: [
				{
					name: 'description',
					content: description
				},
				{
					key: 'og:title',
					name: 'og:title',
					content: title
				},
				{
					key: 'twitter:title',
					name: 'twitter:title',
					content: title
				},
				{
					key: 'og:description',
					name: 'og:description',
					content: description
				},
				{
					key: 'twitter:description',
					name: 'twitter:description',
					content: description
				}
			]
		}
	},
	data() {
		return {
			x: 0,
			y: 0,
			width: 256,
			height: 48,
			corner: 6,
			angle: 0,
			align: 'center',
			justify: 'center',
			blend: 'normal',
			toggle: false
		}
	},
	methods: {
		resetVals() {
			this.x = 0
			this.y = 0
			this.width = 256
			this.height = 48
			this.corner = 6
			this.angle = 0
			this.align = 'center'
			this.justify = 'center'
			this.blend = 'normal'
			this.toggle = false
		}
	},
	computed: {
		styled() {
			return {
				position: 'absolute',
				transform: `translateX(${this.x}px) translateY(${
					this.y
				}px) rotate(${this.angle}deg)`,
				width: `${this.width}px`,
				height: `${this.height}px`,
				borderRadius: `${this.corner}px`,
				display: 'flex',
				alignItems: this.align,
				justifyContent: this.justify,
				mixBlendMode: this.blend
			}
		}
	}
}
</script>
