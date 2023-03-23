import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout1',
      component: () => import('../views/PrimeiroLayout.vue')
    }
  ]
})

export default router
