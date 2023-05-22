import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/pharmacies": {
        target: "http://localhost:8080",
        secure: false,
      },
      "/groups": {
        target: "http://localhost:8080",
        secure: false,
      },
      "/users": {
        target: "http://localhost:8080",
        secure: false,
      },
      "/medicines": {
        target: "http://localhost:8080",
        secure: false,
      },
      "/pharmacies_medicines": {
        target: "http://localhost:8080",
        secure: false,
      },
    },
  },
  plugins: [react()],
})
