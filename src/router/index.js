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
      component: () => import('../views/l1.vue')
    },
    {
      path: '/l2',
      name: 'layout2',
      component: () => import('../views/l2.vue')
    },
    {
      path: '/objectivesl1',
      name: 'objectivesL1',
      component: () => import('../views/ObjectivesL1.vue')
    },
    {
      path: '/objectivesl2',
      name: 'objectivesL2',
      component: () => import('../views/ObjectivesL2.vue')
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: () => import('../views/Quiz.vue')
    },
    {
      path: '/finish',
      name: 'finish',
      component: () => import('../views/Finish.vue')
    }
  ]
})

export default router
