<template>
  <div id="play">
    <h2>Dark Streets</h2>
    <iframe :src="source"></iframe>
  </div>
</template>


<script>
  export default {
    name: '',
    data() {
      return {
        source: 'https://www.quantummelody.com/games/DarkStreets/index.html'
      }
    }
  }
</script>


<style>

</style>
      