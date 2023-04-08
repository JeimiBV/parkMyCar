import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build:{
    chunkSizeWarningLimit:1600,
    publicDir: 'http://testingapi12023-001-site1.atempurl.com',
  }
}

)
