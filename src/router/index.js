import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import LoginPage from '../pages/LoginPage.vue'
import RegisterPage from '../pages/RegisterPage.vue'
import ForgotPage from '../pages/ForgotPage.vue'
import ResetPage from '../pages/ResetPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage
    },
    {
      path: '/forgot',
      name: 'forgot',
      component: ForgotPage
    },
    {
      path: '/forgot/reset',
      name: 'reset',
      component: ResetPage
    }
  ]
})

export default router
