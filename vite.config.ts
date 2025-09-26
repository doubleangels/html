import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { compression } from 'vite-plugin-compression2'

export default defineConfig({
  plugins: [
    react(),
    compression(),
    compression({ algorithm: 'brotliCompress', exclude: [/\.(br)$/, /\.(gz)$/], deleteOriginalAssets: false }),
    sentryVitePlugin({
      org: "doubleangels",
      project: "html"
    })
  ],
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Core React libraries
          if (id.includes('react') || id.includes('react-dom')) {
            return 'react-vendor';
          }
          // FontAwesome icons
          if (id.includes('@fortawesome')) {
            return 'fontawesome';
          }
          // Analytics
          if (id.includes('react-ga4')) {
            return 'analytics';
          }
          // Sentry
          if (id.includes('@sentry')) {
            return 'sentry';
          }
          // Animation component (heavy)
          if (id.includes('Animation.tsx')) {
            return 'animation';
          }
          // Section components
          if (id.includes('AboutSection') || id.includes('ResumeSection')) {
            return 'sections-1';
          }
          if (id.includes('PortfolioSection') || id.includes('ContactSection')) {
            return 'sections-2';
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    // Optimize chunk loading
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    // Cloudflare Pages optimization
    assetsInlineLimit: 4096, // Inline small assets
    cssCodeSplit: true, // Split CSS for better caching
    reportCompressedSize: false // Disable size reporting for faster builds
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', '@fortawesome/react-fontawesome']
  }
})