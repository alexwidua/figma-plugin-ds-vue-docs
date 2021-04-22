<template>
	<div
		class="cursor-pointer  pl-4 select-none relative bg-gray-50 rounded mb-6"
	>
		<div
			class="flex items-center text-lg font-semibold py-4"
			:class="{
				accordion__trigger_active: visible,
				'border-b-2': visible
			}"
			@click="open"
		>
			<chevron-down-icon
				class="mr-2 transform transition"
				:class="{ 'rotate-180': visible }"
			/>{{ title }}
		</div>

		<transition
			name="accordion"
			@enter="start"
			@after-enter="end"
			@before-leave="start"
			@after-leave="end"
		>
			<div class="py-6 px-6" v-show="visible">
				<slot />
			</div>
		</transition>
	</div>
</template>

<script>
import { ChevronDownIcon } from 'vue-feather-icons'

export default {
	props: {},
	inject: ['Accordion'],
	components: {
		ChevronDownIcon
	},
	data() {
		return {
			index: null
		}
	},
	props: {
		title: {
			type: String,
			default: 'Title'
		}
	},
	computed: {
		visible() {
			return this.index == this.Accordion.active
		}
	},
	methods: {
		open() {
			if (this.visible) {
				this.Accordion.active = null
			} else {
				this.Accordion.active = this.index
			}
		},
		start(el) {
			el.style.height = el.scrollHeight + 'px'
		},
		end(el) {
			el.style.height = ''
		}
	},
	created() {
		this.index = this.Accordion.count++
	}
}
</script>

<style lang="scss" scoped>
.accordion-enter-active,
.accordion-leave-active {
	will-change: height, opacity;
	transition: height 0.3s ease, opacity 0.3s ease;
	overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
	height: 0 !important;
	opacity: 0;
}
</style>
