import { createWebHistory, createRouter } from 'vue-router'

import HomePages from '../pages/HomePages.vue'
import AboutPages from '../pages/AboutPages.vue'
import HelloPages from '../pages/HelloPages.vue'

const routes = [
  { path: '/', component: HomePages },
  { path: '/about', component: AboutPages },
  {path: '/hello', component: HelloPages},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export {router}