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

```ts
import 'erabbit/dist/es/index.css';

import 'erabbit/dist/es/area/index.css';
import { Area as ErArea } from 'erabbit';
```

### On-demand Import
