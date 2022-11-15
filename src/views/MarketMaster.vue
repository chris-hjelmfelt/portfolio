<template>
  <div id="play">
    <h2>Market Master</h2>
    <iframe :src="source"></iframe>
  </div>
</template>


<script>
  export default {
    name: '',
    data() {
      return {
        source: 'https://www.quantummelody.com/games/MarketMaster/stockmarket.html'
      }
    }
  }
</script>


<style>

</style>
      