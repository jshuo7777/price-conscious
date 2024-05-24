import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'comparsion',
      component: () => import('../views/Comparsion.vue')
    }
  ]
})

export default router
