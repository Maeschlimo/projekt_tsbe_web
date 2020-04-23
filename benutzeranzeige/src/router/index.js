import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect: {
      name: "Login"
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
      path: "/secure",
      name: "secure",
      component: () => import(/* webpackChunkName: "login" */ '../views/Secure.vue'),
      props: true
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
