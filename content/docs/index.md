---
description: ''
sidebar: 'docs'
next: '/docs/components/button/'
---

# Installation

1. Install the package via npm

```js
npm i figma-plugin-ds-vue
```

2. Include the **global stylesheet** in your app (either on component-level or make it globally accessible by importing it to your plugin's entry file, ex: `main.js`)

```js
import 'figma-plugin-ds-vue/dist/figma-plugin-ds-vue.css'
```

3. Import and register the Vue components you want to use and refer to the next chapters for detailed reference, ex:
```js
import { Button } from 'figma-plugin-ds-vue'

	export default {
		components: {
			Button
		}
	}
```
4. Enjoy building your plugin 💻✨
