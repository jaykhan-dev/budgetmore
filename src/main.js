import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import 'animate.css'

const app = createApp(App)
app.use(router).mount("#app")
