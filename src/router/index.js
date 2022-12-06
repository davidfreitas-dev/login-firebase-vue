import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: () => import('../pages/HomePage.vue') },
    { path: '/login', component: () => import('../pages/LoginPage.vue') },
    { path: '/register', component: () => import('../pages/RegisterPage.vue') },
    { path: '/forgot', component: () => import('../pages/ForgotPage.vue') },
    { path: '/forgot/reset', component: () => import('../pages/ResetPage.vue') }
  ]
})

export default router
