import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/objectives',
      name: 'objectives',
      component: () => import('../views/Objectives.vue')
    },
    {
      path: '/rules',
      name: 'rules',
      component: () => import('../views/Rules.vue')
    },
    {
      path: '/l1',
      name: 'layout1',
      component: () => import('../views/PrimeiroLayout.vue')
    },
    {
      path: '/l2',
      name: 'layout2',
      component: () => import('../views/SegundoLayout.vue')
    }
  ]
})

export default router
