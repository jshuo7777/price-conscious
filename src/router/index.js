import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'comparsion',
      component: () => import('../views/Comparsion.vue')
    }
  ]
})

export default router
