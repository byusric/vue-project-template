import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: () => import('@/components/layout/AppLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home',

          component: () => import('@/views/LandingPage.vue')
        }
      ]
    }
  ]
})

export default router
