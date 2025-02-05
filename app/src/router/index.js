import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      children: [
        { path: '/reviewstats', name: 'reviewstats', component: '../views/ReviewStats.vue' },
      ],
    },
    {
      path: '/reviewstats',
      name: 'reviewstats',
      component: () => import('../views/ReviewStats.vue'),
    },
    {
      path: '/myreviews',
      name: 'myreviews',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MyReviews.vue'),
    },
  ],
})

export default router
