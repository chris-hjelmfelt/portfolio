<template>
  <div class="page">
    <div class="card" @click="goToRoblox('farm')">
      <img class="thumbnail" src="../assets/images-games/bloxriver-farms.png" />
      <div class="description">
        <span class="title">BloxRiver Farms</span>
        A farming game on the Roblox platform.
      </div>
    </div>
    <div class="card" @click="goToRoblox('nebula')">
      <img class="thumbnail" src="../assets/images-games/nebula-sciencecolony.jpg" />
      <div class="description">
        <span class="title">Nebula Science Colony</span>
        A game on the Roblox platform. Explore a science colony on another planet. 
      </div>
    </div>
    <div class="card" @click="source('http://www.quantummelody.com/games/DarkStreets/index.html')">
      <img class="thumbnail" src="../assets/images-games/dark-streets.png" />
      <div class="description">
        <span class="title">Dark Streets</span>
        A noir style fighting game, that pits the player versus a series of ai competitors.
      </div>
    </div>
    <div class="card" @click="source('http://www.quantummelody.com/games/IdleHeroes/index.html')">
      <img class="thumbnail" src="../assets/images-games/idle-heroes.png" />
      <div class="description">
        <span class="title">Idle Heroes vs Monsters</span>
        An idle game. Fight a series of monsters and collect heroes as your reputation grows.
      </div>
    </div>
    <div class="card" @click="source('http://www.quantummelody.com/games/MarketMaster/stockmarket.html')">
      <img class="thumbnail" src="../assets/images-games/market-master.jpg" />
      <div class="description">
        <span class="title">Market Master</span>
        A stock market simulator.
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GameList',
    methods: {
      source(game) {
        console.log(game)
        this.$store.commit('changeGame', game)
      },
      goToRoblox(game) {
        if (game == 'farm') {
          window.open("https://www.roblox.com/games/4735375703/BloxRiver-Farms")
        }
        else if (game == 'nebula') {
          window.open("https://www.roblox.com/games/2714548054/Nebula-Science-Colony")
        }
      }
    } 
  }
</script>

<style scoped>
.card {
  border: 1px solid black;
  width: 100%;
  height: 150px;
  overflow: hidden;
  margin-bottom: 20px;
}
.thumbnail {
  width: 150px;
  height: 150px;
  border: 1px solid black;  
  float: left;  
  overflow: auto;
}
.title {
  display: block;
  font-size: 1.4em;
  margin: 0 0 5px 0;
}
.description {
  width: calc(100% - 150px);
  height: 100%;
  padding: 10px 10px 10px 20px;
  border: 1px solid black;
  float: left;
}
</style>