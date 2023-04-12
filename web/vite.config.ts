import { UserConfigExport, defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
const config:UserConfigExport = {
  plugins: [react()],
  base: '/moksha'
}

export default defineConfig(config)
