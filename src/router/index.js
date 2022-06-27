import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/options-composition',
      name: 'options-composition',
      component: () => import('../views/CompositionView.vue')
    },
    {
      path: '/provide-inject',
      name: 'provide-inject',
      component: () => import('../views/ProvideView.vue')
    },
    {
      path: '/async-component',
      name: 'async-component',
      component: () => import('../views/AsyncComponentView.vue'),
    },
    {
      path: '/composables',
      name: 'composables',
      component: () => import('../views/ComposablesView.vue')
    },
    {
      path: '/routing',
      name: 'routing',
      component: () => import('../views/RoutingView.vue')
    },
    {
      path: '/pinia',
      name: 'pinia',
      component: () => import('../views/PiniaView.vue')
    },
    
  ]
})

export default router
