import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import 'animate.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)
app.AOS = new AOS.init({ disable: "mobile"})
app.use(router).mount("#app")
