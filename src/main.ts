import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import HeaderComp from './components/HeaderComponent.vue'
import { createPinia } from 'pinia'
import {router} from './routes'

const app = createApp(App)
const pinia = createPinia()
app.use(router)
app.use(pinia)
app.component('HeaderComp', HeaderComp)
app.mount('#app')
