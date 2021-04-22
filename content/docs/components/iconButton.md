---
description: ''
sidebar: 'docs'
prev: '/docs/components/icon/'
next: '/docs/components/input/'
---

import ComponentWrapper from "@/components/markdownPage/ComponentWrapper.vue"
import { IconButton } from "figma-plugin-ds-vue"

<script>
export default {
	data: () => ({
		iconModel: false
	}),
}
</script>

# Icon Button

<ComponentWrapper>
<IconButton @click="iconModel = !iconModel" :icon="iconModel ? 'heart' : 'heart-fill'"/>
<IconButton iconText="W"/>
</ComponentWrapper>

### Props

| Prop       | Type      | Default/Notes                                                    |
| :--------- | :-------- | :--------------------------------------------------------------- |
| `@click`   | `Func()`    | Handle event emitted from the component, ex: `@click={funcName}` |
| `icon`     | `String`  | _See [Icon](/docs/components/icon/#props) component for usage_                                   |
| `iconText` | `String`  | _See [Icon](/docs/components/icon/#props)  component for usage_                                   |
| `selected` | `Boolean` | Default: `false`                                                 |
| `spinning` | `Boolean` | _See [Icon](/docs/components/icon/#props)  component for usage_                                   |
| `disabled` | `Boolean` | Default: `false`                                                 |

### Example usage

```html
<template>
	<IconButton
		@click="iconState = !iconState"
		:icon="iconState ? 'heart-fill' : 'heart'"
	/>
</template>

<script>
	import { IconButton } from 'figma-plugin-ds-vue'

	export default {
	       data: () => ({
		    iconState: // Boolean
	    }),
		components: {
			IconButton
		}
	}
</script>
```
