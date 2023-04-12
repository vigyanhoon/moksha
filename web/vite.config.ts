import { UserConfigExport, defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const isProd = process.env.NODE_ENV === 'production'

// https://vitejs.dev/config/

const config:UserConfigExport = {
  plugins: [react()],
}

if(isProd) config.base = '/Moksha'

export default defineConfig(config)
