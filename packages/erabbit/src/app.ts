/// <reference types="vite-plugin-pages/client" />

import { createApp } from 'vue'

import App from './App.vue'

import routes from '~pages'

import { createWebHashHistory, createRouter } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory('/'),
  routes,
})

const app = createApp(App)

app.use(router)

app.mount('#app')
