import { createRouter, createWebHashHistory } from 'vue-router'
import MyHomeView from '../vues/Home.vue'
import MyAboutView from '../vues/About.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MyHomeView
  },
  {
    path: '/About',
    name: 'about',
    component: MyAboutView
  },
  /* {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" *//* '../vues/App.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  } */
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router