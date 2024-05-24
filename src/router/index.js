import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'comparsion',
      component: () => import('../views/Comparsion.vue')
    }
  ]
})

export default router
