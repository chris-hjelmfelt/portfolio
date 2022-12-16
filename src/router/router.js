import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Models from '../views/Models.vue'
import GameList from '../views/GameList.vue'
import Games from '../views/Games.vue'
import CryptoBlockchain from '../views/CryptoBlockchain.vue'
import Recommendations from '../views/Recommendations.vue'

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
    path: '/crypto',
    name: 'CryptoBlockchain',
    component: CryptoBlockchain
  },
  {
    path: '/recommendations',
    name: 'Recommendations',
    component: Recommendations
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
