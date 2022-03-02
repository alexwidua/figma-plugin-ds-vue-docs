<template>
	<div class="window">
		<div class="window__bar">
			Figma Plugin
		</div>
		<div class="window__content">
			<IconButton
				icon="align-left"
				@click="$emit('justify', 'flex-start')"
				:disabled="lock"
			/>
			<IconButton
				icon="align-horizontal-centers"
				@click="$emit('justify', 'center')"
				:disabled="lock"
			/>
			<IconButton
				icon="align-right"
				@click="$emit('justify', 'flex-end')"
				:disabled="lock"
			/>
			<IconButton
				icon="align-top"
				@click="$emit('align', 'flex-start')"
				:disabled="lock"
			/>
			<IconButton
				icon="align-vertical-centers"
				@click="$emit('align', 'center')"
				:disabled="lock"
			/>
			<IconButton
				icon="align-bottom"
				@click="$emit('align', 'flex-end')"
				:disabled="lock"
			/>
			<IconButton icon="distribute-horizontal-spacing" disabled />
			<Divider />
			<div class="flex column">
				<div class="flex mb-xxsmall">
					<NumInput
						iconText="X"
						class="mr-xxsmall"
						v-model="x"
						style="width: 96px"
						:disabled="lock"
					/>
					<NumInput
						iconText="Y"
						v-model="y"
						style="width: 96px"
						:disabled="lock"
					/>
				</div>
				<div class="flex mb-xxsmall">
					<NumInput
						iconText="W"
						min="0"
						class="mr-xxsmall"
						v-model="width"
						style="width: 96px"
						:disabled="lock"
					/>
					<NumInput
						iconText="H"
						min="0"
						v-model="height"
						style="width: 96px"
						:disabled="lock"
					/>
				</div>
				<div class="flex">
					<NumInput
						icon="angle"
						class="mr-xxsmall"
						v-model="angle"
						style="width: 96px"
						:disabled="lock"
					/>
					<NumInput
						icon="corner-radius"
						v-model="corner"
						style="width: 96px"
						min="0"
						:disabled="lock"
					/>
				</div>
			</div>
			<Divider />
			<Select
				:items="[
					{
						icon: 'blend-empty',
						label: 'Pass through',
						key: 'normal'
					},
					{
						icon: 'blend-empty',
						label: 'Normal',
						key: 'normal'
					},
					{
						divider: true
					},
					{
						icon: 'blend',
						label: 'Darken',
						key: 'darken'
					},
					{
						icon: 'blend',
						label: 'Multiply',
						key: 'multiply'
					},
					{
						icon: 'blend',
						label: 'Color burn',
						key: 'color-burn'
					},
					{
						divider: true
					},
					{
						icon: 'blend',
						label: 'Lighten',
						key: 'lighten'
					},
					{
						icon: 'blend',
						label: 'Screen',
						key: 'screen'
					},
					{
						icon: 'blend',
						label: 'Color dodge',
						key: 'color-dodge'
					},
					{
						divider: true
					},
					{
						icon: 'blend',
						label: 'Difference',
						key: 'difference'
					},
					{
						icon: 'blend',
						label: 'Exclusion',
						key: 'exclusion'
					},
					{
						divider: true
					},
					{
						icon: 'blend',
						label: 'Hue',
						key: 'hue'
					},
					{
						icon: 'blend',
						label: 'Saturation',
						key: 'saturation'
					},
					{
						icon: 'blend',
						label: 'Color',
						key: 'color'
					},
					{
						icon: 'blend',
						label: 'Luminosity',
						key: 'luminosity'
					}
				]"
				v-model="blend"
				:disabled="lock"
			/>
			<Divider />
			<div class="flex">
				<Toggle v-model="toggle" :disabled="lock">Capslock</Toggle
				><Tooltip width="116" position="r" style="margin-left: -16px"
					>This is a tooltip.</Tooltip
				>
			</div>
			<Divider />
			<Checkbox v-model="lock">Lock changes</Checkbox>
			<Divider />
			<div class="flex">
				<Button
					class="mr-xxsmall"
					style="width: 70%"
					@click="() => $router.push('docs/')"
					>Visit docs</Button
				>
				<Button
					@click="$emit('reset')"
					secondary
					style="width: calc(30% - 8px)"
					>Reset</Button
				>
			</div>
		</div>
	</div>
</template>

<script>
import {
	Button,
	Checkbox,
	Divider,
	IconButton,
	NumInput,
	Select,
	Toggle,
	Tooltip
} from 'figma-plugin-ds-vue'

export default {
	components: {
		Button,
		Checkbox,
		Divider,
		IconButton,
		NumInput,
		Select,
		Toggle,
		Tooltip
	},
	data() {
		return {
			lock: false
		}
	},
	props: {
		xVal: {
			type: Number
		},
		yVal: {
			type: Number
		},
		widthVal: {
			type: Number
		},
		heightVal: {
			type: Number
		},
		cornerVal: {
			type: Number
		},
		angleVal: {
			type: Number
		},
		blendVal: {
			type: String
		},
		toggleVal: {
			type: Boolean
		}
	},
	computed: {
		x: {
			get() {
				return this.xVal
			},
			set(val) {
				this.$emit('x', val)
			}
		},
		y: {
			get() {
				return this.yVal
			},
			set(val) {
				this.$emit('y', val)
			}
		},
		width: {
			get() {
				return this.widthVal
			},
			set(val) {
				this.$emit('width', val)
			}
		},
		height: {
			get() {
				return this.heightVal
			},
			set(val) {
				this.$emit('height', val)
			}
		},
		corner: {
			get() {
				return this.cornerVal
			},
			set(val) {
				this.$emit('corner', val)
			}
		},
		angle: {
			get() {
				return this.angleVal
			},
			set(val) {
				this.$emit('angle', val)
			}
		},
		blend: {
			get() {
				return this.blendVal
			},
			set(val) {
				this.$emit('blend', val)
			}
		},
		toggle: {
			get() {
				return this.toggleVal
			},
			set(val) {
				this.$emit('toggle', val)
			}
		}
	}
}
</script>

<style lang="scss" scoped>
// TODO: Transform into Tailwinds or seperate concerns?
.window {
	display: block;
	background: #fff;
	border: 0.5px solid rgba(0, 0, 0, 0.2);
	width: 300px;
	border-radius: 3px;
	box-shadow: 0px 2px 14px rgba(0, 0, 0, 0.15);

	&__bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		height: 42px;
		padding: 0 4px 0 16px;
		font-size: 11px;
		font-weight: 600;
		font-style: normal;
		line-height: 16px;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	}

	&__content {
		padding: 8px;
	}
}
</style>
