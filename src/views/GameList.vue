<template>
  <div class="page">    
    <h1 id="heading">Games</h1>
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

    <!-- <router-link :to="{name: 'Games', params: { title: 'Dark Streets', source: 'https://www.quantummelody.com/games/DarkStreets/index.html' }}" custom v-slot="{ navigate }">
      <div class="card" @click="navigate" role="link"> -->
      <div class="card" @click="goToKongregate('dark')">      
        <img class="thumbnail" src="../assets/images-games/dark-streets.png" />
        <div class="description">
          <span class="title">Dark Streets</span>
          A noir style fighting game, that pits the player versus a series of AI competitors.
        </div>
      </div>
    <!-- </router-link> -->

    <!-- <router-link :to="{name: 'Games', params: { title: 'Idle Heroes', source: 'https://www.quantummelody.com/games/IdleHeroes/index.html' }}" custom v-slot="{ navigate }">
      <div class="card" @click="navigate" role="link"> -->
      <div class="card" @click="goToKongregate('heroes')">    
        <img class="thumbnail" src="../assets/images-games/idle-heroes.png" />
        <div class="description">
          <span class="title">Idle Heroes vs Monsters</span>
          An idle game. Fight a series of monsters and collect heroes as your reputation grows.
        </div>
      </div>
    <!-- </router-link> -->

    <!-- <router-link :to="{name: 'Games', params: { title: 'Market Master', source: 'https://www.quantummelody.com/games/MarketMaster/stockmarket.html' }}" custom v-slot="{ navigate }">
      <div class="card" @click="navigate" role="link"> -->
      <div class="card" @click="goToKongregate('market')">     
        <img class="thumbnail" src="../assets/images-games/market-master.png" />
        <div class="description">
          <span class="title">Market Master</span>
          A stock market simulator.
        </div>
      </div>
    <!-- </router-link> -->

    <div class="card" @click="goToKongregate('return')">     
      <img class="thumbnail" src="../assets/images-games/return-mountain.png" />
      <div class="description">
        <span class="title">Return From the Mountain</span>
        A simple adventure in old text based RPG style.
      </div>
    </div>


  </div>
</template>

<script>
  export default {
    name: 'GameList',
    methods: {
      goToRoblox(game) {
        if (game == 'farm') {
          window.open("https://www.roblox.com/games/4735375703/BloxRiver-Farms")
        }
        else if (game == 'nebula') {
          window.open("https://www.roblox.com/games/2714548054/Nebula-Science-Colony")
        }
      },
      goToKongregate(game) {
        if (game == 'dark') {
          window.open("https://www.kongregate.com/games/Cyberspirit/dark-streets")
        }
        else if (game == 'heroes') {
          window.open("https://www.kongregate.com/games/Cyberspirit/idle-heroes-vs-monsters")
        }
        else if (game == 'market') {
          window.open("https://www.kongregate.com/games/Cyberspirit/market-master")
        }
        else {
          window.open("https://www.kongregate.com/games/Cyberspirit/return-from-the-mountain")
        }
      }
    } 
  }
</script>

<style scoped>
#heading {
  display: block;
  width: fit-content;  
  color: #3470a8;
  margin: auto;
  margin-bottom: 10px;
}
.card {
  border: 2px solid black;
  width: 100%;
  margin-bottom: 20px;
  overflow: hidden;
}
.thumbnail {
  width: 200px;
  border: 1px solid black;  
  float: left; 
}
.title {
  display: block;
  font-size: 1.4em;
  margin: 0 0 5px 0;
}
.description {
  width: calc(100% - 200px);
  height: 100%;
  padding: 10px 10px 10px 20px;
  float: left;
  overflow: auto;
}
</style>