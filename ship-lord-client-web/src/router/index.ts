import { createRouter, createWebHistory } from 'vue-router'
import ShipDesign from '../views/scenes/ShipDesign.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ShipDesign',
      component: ShipDesign
    }
  ]
})

export default router
