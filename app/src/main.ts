import { createApp } from 'vue'
import { router } from '@/modules'
import App from './App.vue'

const app = createApp(App)

app.use(router).mount('#app')
