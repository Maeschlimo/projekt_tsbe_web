import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect: {
      name: "Login"
    },
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,

  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
      path: "/secure",
      name: "secure",
      component: () => import(/* webpackChunkName: "login" */ '../views/Secure.vue')
  },
  {
    path: "/contacts",
    name: "contacts",
    component: () => import(/* webpackChunkName: "login" */ '../views/Contacts.vue')
},
  {
  path: '/register',
  name: 'Register',
  component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
}
]

const router = new VueRouter({
  routes
})

export default router
