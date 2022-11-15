import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Models from '../views/Models.vue'
import Games from '../views/Games.vue'
import IdleHeroes from '../views/IdleHeroes.vue'
import DarkStreets from '../views/DarkStreets.vue'
import MarketMaster from '../views/MarketMaster.vue'
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
    path: '/games',
    name: 'Games',
    component: Games
  },
  {
    path: '/idleheroes',
    name: 'IdleHeroes',
    component: IdleHeroes
  },
  {
    path: '/darkstreets',
    name: 'DarkStreets',
    component: DarkStreets
  },
  {
    path: '/marketmaster',
    name: 'MarketMaster',
    component: MarketMaster
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
