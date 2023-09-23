# Quick Start

This section describes how to use Element Plus in your project.

## Usage

### Full Import

```ts
import { createApp } from 'vue';

import ErabbitUI from 'erabbit';
import 'erabbit/dist/erabbit.min.css';

import App from './App.vue';

const app = createApp(App);

app.use(ErabbitUI);
app.mount('#app');
```

### Manual on demand

```vue
<script setup lang="ts">
import 'erabbit/dist/es/area/style';
import { Button as ErButton } from 'erabbit';
</script>

<template>
  <er-button>ErButton</er-button>
</template>
```

### On-demand Import

First you need to install `unplugin-vue-components` and `@erabbit-dev/auto-import`.

```sh
pnpm install -D unplugin-vue-components @erabbit-dev/auto-import
```

Then add the code below into your Vite config file.

```ts
// vite.config.ts
import { defineConfig } from 'vite';

import Components from 'unplugin-vue-components/vite';
import { ErabbitUIResolver } from '@erabbit-dev/auto-import';

export default defineConfig({
  // ...
  plugins: [
    // ...
    Components({
      resolvers: [ErabbitUIResolver()],
    }),
  ],
});
```
