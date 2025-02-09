import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  base: '/', // Đảm bảo đường dẫn đúng
  build: {
    outDir: 'dist', // Thư mục xuất file build
    assetsDir: 'assets', // Đảm bảo đúng cấu trúc file
  },
})
