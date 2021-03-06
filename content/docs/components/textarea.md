---
description: ''
sidebar: 'docs'
prev: '/docs/components/text/'
next: '/docs/components/title/'
---

import ComponentWrapper from "@/components/markdownPage/ComponentWrapper.vue"
import { Textarea } from "figma-plugin-ds-vue"

# Textarea

<ComponentWrapper>
 <Textarea placeholder="Placeholder"/>
</ComponentWrapper>

### Props

| Prop          | Type            | Default/Notes                                                     |
| :------------ | :-------------- | :---------------------------------------------------------------- |
| `@input`      | `Func()`          | Handle event emitted from the component, ex: `@input={funcName}`  |
| `@change`     | `Func()`          | Handle event emitted from the component, ex: `@change={funcName}` |
| `value`       | `String/Number` | Default: `undefined`                                              |
| `placeholder` | `String`        | Default: `undefined`                                              |
| `rows`        | `Number`        | Default: `2`; Number of rows to display (textarea height)         |
| `disabled`    | `Boolean`       | Default: `false`                                                  |

### Example usage

```html
<template>
	<Textarea placeholder="Placeholder" v-model="txtModel" />
</template>

<script>
	import { Textarea } from 'figma-plugin-ds-vue'

	export default {
		data: () => ({
		    txtModel: // String || Number
	    }),
		components: {
			Textarea
		}
	}
</script>
```
