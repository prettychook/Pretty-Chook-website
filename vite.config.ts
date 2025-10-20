```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      './components': '/components',
      './styles': '/styles',
      './assets': '/assets',
      './utils': '/utils',
    },
  },
})
```