<template>
  <div id="play">
    <h2>Idle Heroes</h2>
    <iframe :src="source"></iframe>
  </div>
</template>


<script>
  export default {
    name: 'IdleHeroes',
    data() {
      return {
        source: 'https://www.quantummelody.com/games/IdleHeroes/index.html'
      }
    }
  }
</script>


<style>

</style>
      