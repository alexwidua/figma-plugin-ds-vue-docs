<template>
	<div class="rounded my-6 p-6  border-l-4" :class="styledBlock">
		<div class="flex">
			<info-icon v-if="type == 'hint'" class="mr-2" />
			<alert-circle-icon v-if="type == 'warning'" class="mr-2" />
			<p v-if="title" class="font-bold" v-html="title" />
		</div>
		<slot />
	</div>
</template>

<script>
import { AlertCircleIcon, InfoIcon } from 'vue-feather-icons'

export default {
	components: {
		AlertCircleIcon,
		InfoIcon
	},
	props: {
		title: {
			type: String,
			default: undefined
		},
		type: {
			type: String,
			default: 'hint'
		}
	},
	computed: {
		styledBlock() {
			return {
				'bg-indigo-50 text-indigo-700 border-indigo-700 block-hint':
					this.type == 'hint',
				'bg-yellow-50 text-yellow-600 border-yellow-500 block-warning':
					this.type == 'warning'
			}
		}
	}
}
</script>

<style lang="scss">
.block-hint {
	& p {
		@apply text-indigo-700;
	}
	& code {
		@apply bg-indigo-100 text-indigo-700;
	}

	& pre code {
		background: #263238;
		color: inherit;
	}
}

.block-warning {
	& p {
		@apply text-yellow-600;
	}

	& a {
		@apply text-yellow-600 font-semibold underline;
	}
	& code {
		@apply bg-yellow-100 text-yellow-600;
	}

	& pre code {
		background: #263238;
		color: inherit;
	}
}
</style>
