import { createApp } from 'vue'

import App from './App.vue'

import './index.scss'

// import Demo from './area/demo/index.vue'
// import Demo from './breadcrumb/demo/index.vue'
// import Demo from './button/demo/index.vue'
// import Demo from './carousel/demo/index.vue'
// import Demo from './checkbox/demo/index.vue'
// import Demo from './icon/demo/index.vue'

import { createWebHashHistory, createRouter } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory('/'),
  routes: [
    { path: '/', redirect: '/area' },
    { path: '/area', component: () => import('./area/demo/index.vue') },
    {
      path: '/breadcrumb',
      component: () => import('./breadcrumb/demo/index.vue'),
    },
    { path: '/button', component: () => import('./button/demo/index.vue') },
    { path: '/carousel', component: () => import('./carousel/demo/index.vue') },
    { path: '/checkbox', component: () => import('./checkbox/demo/index.vue') },
    { path: '/confirm', component: () => import('./confirm/demo/index.vue') },
    { path: '/icon', component: () => import('./icon/demo/index.vue') },
  ],
})

const app = createApp(App)

app.use(router)

app.mount('#app')
