import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Resume from '../views/Resume.vue'
import Models from '../views/Models.vue'
import Games from '../views/Games.vue'
import Writing from '../views/Writing.vue'

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
  },
  {
    path: '/games',
    name: 'Games',
    component: Games
  },
  {
    path: '/writing',
    name: 'Writing',
    component: Writing
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
