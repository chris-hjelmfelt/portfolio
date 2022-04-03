import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Resume from '../views/Resume.vue'
import Models from '../views/Models.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume
  },
  {
    path: '/models',
    name: 'Models',
    component: Models
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
