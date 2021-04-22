---
description: ''
sidebar: 'docs'
prev: '/docs/components/button/'
next: '/docs/components/disclosure/'
---

import ComponentWrapper from "@/components/markdownPage/ComponentWrapper.vue"
import { Checkbox } from "figma-plugin-ds-vue"

<script>
export default {
	data: () => ({
		checkboxModel: false
	}),
}
</script>

# Checkbox

<ComponentWrapper >
<Checkbox v-model="checkboxModel"> {{checkboxModel ? 'Checked' : 'Unchecked'}} </Checkbox>
<Checkbox disabled>Disabled</Checkbox>
</ComponentWrapper>

### Props

| Prop       | Type      | Default/Notes                                                    |
| :--------- | :-------- | :--------------------------------------------------------------- |
| `@input`   | `Func()`    | Handle event emitted from the component, ex: `@input={funcName}` |
| `value`    | `Boolean` | Default: `false`                                                 |
| `checked`  | `Boolean` | Default: `undefined`                                             |
| `disabled` | `Boolean` | Default: `false`                                                 |

### Example usage

```html
<template>
	<Checkbox v-model="checkboxModel">Close Figma on startup</Checkbox>
</template>

<script>
	import { Checkbox } from 'figma-plugin-ds-vue'

	export default {
	    data: () => ({
		    checkboxModel: // Boolean
	    }),
		components: {
			Checkbox
		}
	}
</script>
```
