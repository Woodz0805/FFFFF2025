import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // 設定為相對路徑，確保在 GitHub Pages 的子目錄下能正確讀取資源
  base: './',
  define: {
    // 為了兼容部分舊式寫法，定義 process.env
    'process.env': {}
  }
});