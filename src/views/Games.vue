<template>
  <div id="page">
    <div id="top">
      <span class="title">{{ title }}</span>
      <router-link to="/gamelist" custom v-slot="{ navigate }">
        <button @click="navigate" role="link">&#9664 Back</button>
      </router-link>
    </div>
    <iframe :src="source"></iframe>
  </div>
</template>


<script>
  export default {
    name: 'Games',
    props: {
      title: String,
      source: String
    }
  }
</script>


<style scoped>
iframe {
  display: block;
  width: 1100px;
  height: 650px;
  overflow: auto;
}
#top {
  width: 1100px;
}
button {
  display: block;
  float: right;
  width: 60px;
  margin: 10px 0 0 0;
  background-color: white;
  color: #3470a8;
  font-weight: bold;
  border: 2px solid #3470a8;
  border-radius: 5px;
}
</style>
      