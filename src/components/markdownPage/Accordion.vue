<template>
	<div class="my-2">
		<slot></slot>
	</div>
</template>

<script>
export default {
	props: {},
	data() {
		return {
			Accordion: {
				count: 0,
				active: null
			}
		}
	},
	provide() {
		return { Accordion: this.Accordion }
	}
}
</script>
