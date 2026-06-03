import { createRouter, createWebHashHistory } from 'vue-router'

import RedPage from '../pages/RedPage.vue'
import BluePage from '../pages/BluePage.vue'
import GreenPage from '../pages/GreenPage.vue'

const routes = [
  { path: '/', component: RedPage },
  { path: '/blue', component: BluePage },
  { path: '/green', component: GreenPage }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
