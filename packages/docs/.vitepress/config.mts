import { defineConfig } from 'vitepress';
import MarkdownPreview from 'vite-plugin-markdown-preview';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Erabbit UI',
  description: 'Erabbit UI docs',
  base: '/erabbit-ui/',
  vite: {
    plugins: [MarkdownPreview(), visualizer()],
    build: {
      chunkSizeWarningLimit: 1500,
    },
  },
  markdown: {
    lineNumbers: true,
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
  },

  head: [
    [
      'link',
      {
        rel: 'shortcut icon',
        href: './favicon.ico',
      },
    ],
  ],

  themeConfig: {
    search: {
      provider: 'local',
    },

    logo: './logo.svg',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Get Start', link: '/installation' },
      { text: 'Components Docs', link: '/components-docs/button' },
      { text: 'Playground', link: 'https://erabbit-ui-playground.vercel.app/' },
    ],

    sidebar: [
      {
        text: 'Get Start',
        items: [
          { text: 'Installation', link: '/installation' },
          { text: 'Quick Start', link: '/quick-start' },
        ],
      },
      {
        text: 'Components Docs',
        items: [
          { text: 'Area', link: '/components-docs/area' },
          { text: 'Button', link: '/components-docs/button' },
          { text: 'Breadcrumb', link: '/components-docs/breadcrumb' },
          { text: 'Carousel', link: '/components-docs/carousel' },
          { text: 'Checkbox', link: '/components-docs/checkbox' },
          { text: 'Confirm', link: '/components-docs/confirm' },
          { text: 'Dialog', link: '/components-docs/dialog' },
          { text: 'Icon', link: '/components-docs/icon' },
          { text: 'ImageView', link: '/components-docs/image-view' },
          {
            text: 'InfiniteLoading',
            link: '/components-docs/infinite-loading',
          },
          { text: 'Message', link: '/components-docs/message' },
          { text: 'More', link: '/components-docs/more' },
          { text: 'Pagination', link: '/components-docs/pagination' },
          { text: 'Sku', link: '/components-docs/sku' },
          { text: 'Step', link: '/components-docs/step' },
          { text: 'Tab', link: '/components-docs/tab' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/erabbit-dev/erabbit-ui' },
    ],

    outline: {
      level: 'deep',
      label: 'CONTENTS',
    },
  },
});
