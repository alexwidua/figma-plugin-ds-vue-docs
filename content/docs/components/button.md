---
description: ''
sidebar: 'docs'
prev: '/docs/'
next: '/docs/components/checkbox/'
---

import ComponentWrapper from "@/components/markdownPage/ComponentWrapper.vue"
import { Button } from "figma-plugin-ds-vue"

# Button

<ComponentWrapper>
<Button>Default</Button>
<Button secondary> Secondary </Button>
<Button tertiary> Tertiary </Button>
<Button primary destructive> Destructive </Button>
<Button primary disabled> Disabled </Button>
</ComponentWrapper>

### Props

| Prop           | Type      | Default/Notes                                                    |
| :------------- | :-------- | :--------------------------------------------------------------- |
| `@click`       | `Func()`    | Handle event emitted from the component. Ex: `@click={funcName}` |
| `secondary`    | `Boolean` | Default: `false`                                                 |
| `tertiary`     | `Boolean` | Default: `false`                                                 |
| `destructive` | `Boolean` | Default: `false`                                                 |
| `disabled`     | `Boolean` | Default: `false`                                                 |

### Example usage

```html
<template>
	<Button @click="apply">Apply</Button>
	<Button @click="cancel" secondary>Cancel</Button>
</template>

<script>
	import { Button } from 'figma-plugin-ds-vue'

	export default {
		components: {
			Button
		},
		methods: {
			apply() {
				// do something
			},
			cancel() {
				// do something
			}
		}
	}
</script>
```
