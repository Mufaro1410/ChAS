import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'
// import dotenv from 'dotenv'

// dotenv.config() // load env vars from .env

export default defineConfig({
  // define: {
  //   __VALUE__: `"${process.env.VALUE}"` // wrapping in "" since it's a string
  // },
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [react()]
  }
})
