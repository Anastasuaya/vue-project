import { createWebHistory, createRouter } from 'vue-router'

import HomePages from '#root/pages/HomePages.vue'
import AboutPages from '#root/pages/AboutPages.vue'
import HelloPages from '#root/pages/HelloPages.vue'
import CharacterCard from '#root/pages/CharacterCard.vue'

const routes = [
  { path: '/', component: HomePages },
  { path: '/about', component: AboutPages },
  {path: '/hello', component: HelloPages},
  {path: '/CharacterCard', component: CharacterCard},
  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export {router}