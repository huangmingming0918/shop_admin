import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login/Login'
import Home from '../components/home/Home'
import Users from '@/components/users/Users'
import Roles from '@/components/roles/Roles'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/home',
      component: Home,
      children: [
        { path: '/users', component: Users },
        { path: '/roles', component: Roles }
      ]
    },
    { path: '/login', component: Login }
  ]
})
// 导航守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    return next()
  }
  const token = localStorage.getItem('token')
  if (token) {
    next()
  } else {
    next('/login')
  }
})

export default router
