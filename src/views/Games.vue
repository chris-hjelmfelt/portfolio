<template>
  <div class="page">
    <div id="start" v-if="source == null">
      <h2>My Games</h2>
      {{source}}
      <GameList />
    </div>
    <div id="play" v-if="source != null">
      <iframe :src="source"></iframe>
      <div id="buttons" > 
        <button @click="source = 'http://www.quantummelody.com/games/DarkStreets/index.html'">DarkStreets</button> &nbsp; &nbsp; &nbsp; 
        <button @click="source = 'http://www.quantummelody.com/games/IdleHeroes/index.html'">IdleHeroes</button> &nbsp; &nbsp; &nbsp;  
        <button @click="source = 'http://www.quantummelody.com/games/MarketMaster/stockmarket.html'">MarketMaster</button>
      </div>
    </div>    
  </div>
</template>

<script>
  import GameList from "../components/GameList.vue"

  export default {
    name: 'Games',
    components: {
      GameList
    },
    computed: {
      source () {
        return this.$store.getters.getGame
      }
    }
  }
</script>

<style scoped>
button {
  margin: 10px;
}
iframe {
  width: 1000px;
  height: 600px;
  overflow: auto;
}
</style>