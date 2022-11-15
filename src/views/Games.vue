<template>
  <div class="page">
      <h2 id="title">Games</h2>
      <GameList />     
  </div>
</template>

<script>
  import GameList from "../components/GameList.vue"

  export default {
    name: 'Games',
    components: {
      GameList
    }
  }
</script>

<style scoped>
button {
  margin: 10px;
}
#title {
  display: block;
  width: fit-content;
  margin: auto;
}
</style>