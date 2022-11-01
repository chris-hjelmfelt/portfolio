<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/resume">Resume</router-link> | 
    <router-link to="/models">3D Models</router-link> |
    <router-link to="/games">Games</router-link> |
    <!-- <router-link to="/writing">Writing</router-link> -->
  </div>
  <router-view/>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.page {
  width: 100%;
  max-width: 1000px;
  height: 100%;
  margin: auto;
}

#nav {
  width: fit-content;
  padding: 30px;
  margin: auto;
}
</style>
