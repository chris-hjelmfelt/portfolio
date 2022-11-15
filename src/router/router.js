import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Models from '../views/Models.vue'
import GameList from '../views/GameList.vue'
import Games from '../views/Games.vue'
import Writing from '../views/Writing.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/models',
    name: 'Models',
    component: Models
  },
  {
    path: '/gamelist',
    name: 'GameList',
    component: GameList
  },
  {
    path: '/games',
    name: 'Games',
    component: Games,
    props: true
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
