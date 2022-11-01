import { createStore } from 'vuex'

export default createStore({
  state: {
    game: null
  },
  getters: {
    getGame(state) {
      return state.game
    }
  },
  mutations: {
    changeGame (state, value) {
      state.game = value
    }
  },
  actions: {
  },
})
