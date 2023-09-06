import { defineConfig } from 'vitepress'
import MarkdownPreview from 'vite-plugin-markdown-preview'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Erabbit UI",
  description: "Erabbit UI docs",
  base: '/erabbit-ui/',
  vite: {
    plugins: [MarkdownPreview()]
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Get Start', link: '/installation' },
      { text: 'Components Docs', link: '/components-docs/carousel' }
    ],

    sidebar: [
      {
        text: 'Get Start',
        items: [
          { text: 'Installation', link: '/installation' },
          { text: 'Quick Start', link: '/quick-start' }
        ]
      },
      {
        text: 'Components Docs',
        items: [
          { text: 'Button', link: '/components-docs/button' },
          { text: 'Breadcrumb', link: '/components-docs/breadcrumb' },
          { text: 'Carousel', link: '/components-docs/carousel' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/erabbit-dev/erabbit-ui' }
    ],

    outline: {
      level: 'deep',
      label: 'CONTENTS'
    }
  }
})
