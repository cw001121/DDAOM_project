import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/SignupView.vue')
  },
  {
    path: '/',
    name: 'MainPage',
    component: () => import('../views/MainView.vue')
  },
  {
    path: '/makeproject',
    name: 'MakeProject',
    component: () => import('../views/MakeProjectView.vue')
  },
  {
    path: '/makeplan',
    name: 'MakePlan',
    component: () => import('../views/MakePlanView.vue')
  },
  {
    path: '/project',
    name: 'ProjectList',
    component: () => import('../views/ProjectListView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
