---
description: ''
sidebar: 'docs'
prev: '/docs/components/select-menu/'
next: '/docs/components/text/'
---

import ComponentWrapper from "@/components/markdownPage/ComponentWrapper.vue"
import { Label } from "figma-plugin-ds-vue"

# Label

<ComponentWrapper>
<Label style="width: auto">Lorem ipsum</Label>
</ComponentWrapper>

### Example usage

```html
<template>
	<Label>Box title</Label>
	<Input v-model="inputModel" placeholder="Text" />
</template>

<script>
	import { Label, Input } from 'figma-plugin-ds-vue'

	export default {
	    data: () => ({
		    inputModel: // String || Number
	    }),
		components: {
			Label,
	        Input
		}
	}
</script>
```
