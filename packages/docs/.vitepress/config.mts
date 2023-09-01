import { defineConfig } from 'vitepress'
import MarkdownPreview from 'vite-plugin-markdown-preview'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Erabbit UI",
  description: "Erabbit UI docs",
  vite: {
    plugins: [MarkdownPreview()]
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Get Start', link: '/get-start' },
      { text: 'Components Docs', link: '/components-docs/' }
    ],

    sidebar: [
      {
        text: 'Get Start',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Components Docs',
        items: [
          { text: 'Button', link: '/components-docs/button' },
          { text: 'Carousel', link: '/components-docs/carousel' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/erabbit-dev/erabbit-ui' }
    ]
  }
})
