---
description: ''
sidebar: 'docs'
prev: '/docs/components/num-input/'
next: '/docs/components/select-menu/'
---

import ComponentWrapper from "@/components/markdownPage/ComponentWrapper.vue"
import { Radio } from "figma-plugin-ds-vue"

# Radio menu

<ComponentWrapper>
<Radio
	:items="[{ label: 'Item A', value: 'A' },{ label: 'Item B', value: 'B' }]"
/>
</ComponentWrapper>

### Props

| Prop       | Type            | Default/Notes                                                                                                                         |
| :--------- | :-------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| `@input`   | `Func()`          | Handle event emitted from the component, ex: `@input={funcName}`                                                                      |
| `items`    | `Array<Object>` | Format: `[{ label: String, value: String | Number}]` Pass an array of objects containing the option name and value that gets returned |
| `value`    | `String/Number` | Default: `undefined`                                                                                                                  |
| `disabled` | `Boolean`       | Default: `false`                                                                                                                      |

### Example usage

```html
<template>
	<Radio
		:items="[{ label: 'Item A', value: 'A' },{ label: 'Item B', value: 'B' }]"
		v-model="radioModel"
	/>
</template>

<script>
	import { Radio } from 'figma-plugin-ds-vue'

	export default {
	       data: () => ({
		    radioModel: // Value of selected radio key
	    }),
		components: {
			Radio
		}
	}
</script>
```
