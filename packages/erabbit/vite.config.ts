import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'
// import Components from 'unplugin-vue-components/vite'
// import { ErabbitUIResolver } from '@erabbit-dev/auto-import'
import Pages from 'vite-plugin-pages'

export default defineConfig({
  build: {
    minify: false,
    outDir: 'dist',
    rollupOptions: {
      external: ['vue', '@vueuse/core'],
      input: ['src/index.ts'],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].mjs',
          preserveModules: true,
          dir: 'dist/es',
          inlineDynamicImports: false,
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          preserveModules: true,
          dir: 'dist/lib',
          inlineDynamicImports: false,
        },
        {
          format: 'iife',
          entryFileNames: 'erabbit.min.js',
          dir: 'dist',
          name: 'ErabbitUI',
          globals: {
            vue: 'Vue',
            '@vueuse/core': 'VueUse',
          },
          inlineDynamicImports: false,
        },
        {
          format: 'es',
          entryFileNames: 'erabbit.esm-browser.js',
          dir: 'dist',
          inlineDynamicImports: false,
        },
      ],
    },
    lib: {
      entry: 'src/index.ts',
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    dts({
      entryRoot: './src',
      outDir: ['dist/es', 'dist/lib'],
      tsconfigPath: './tsconfig.json',
    }),
    // Components({
    //   dts: false,
    //   resolvers: [ErabbitUIResolver()],
    // }),
    Pages({
      dirs: ['src'],
      extensions: ['vue'],
      exclude: ['App.vue'],
    }),
  ],
})
