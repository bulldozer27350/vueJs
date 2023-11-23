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
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../components/ArticleEdit.vue') 
  },
  {
    path: '/create/',
    name: 'create',
    component: () => import('../components/ArticleEdit.vue') 
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router