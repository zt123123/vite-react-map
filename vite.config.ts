import path from 'path'
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { viteExternalsPlugin } from 'vite-plugin-externals'
import vitePluginRewriteImport from 'vite-plugin-rewrite-import'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // Inspect(),
    // vitePluginRewriteImport({
    //   libName: 'lodash',
    //   extension: /\.tsx?/
    // }),
    viteExternalsPlugin({
      lodash: '_',
      dayjs: 'dayjs',
      antd: 'antd',
      react: 'React',
      'react-dom': 'ReactDOM',
    }),
    reactRefresh()
  ],
  resolve: {
    alias: {
      "@/": path.join(__dirname, "./src/"),
      "@/components": path.join(__dirname, "./src/components/"),
      "@/config": path.join(__dirname, "./src/config/"),
      "@/utils": path.join(__dirname, "./src/utils/"),
    }
  },

  build: {
    minify: false,
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      }
    },
  },
})
