<template>
  <div id="app">
    <div id="top-nav">
      <img id="gears" src="./assets/gears.png"><br>
        <router-link to="/">Home</router-link> |
        <span class="extra-link" @click="openResume()">Resume</span> |
        <router-link to="/models">3D Models</router-link> |
        <router-link to="/games">Games</router-link>
    </div>
    <div id="left-nav">
      <img id="gears" src="./assets/gears.png"><br>
      <router-link to="/">Home</router-link> <br>
      <span class="extra-link" @click="openResume()">Resume</span> <br>
      <router-link to="/models">3D Models</router-link> <br>
      <router-link to="/games">Games</router-link> <br>
    </div>
    <div id="main">
      <router-view />
    </div>    
  </div>
</template>


<script>
  export default {
    name: "App",
    methods: {
      openResume() {
        window.open("https://quantummelody.com/resume.pdf")
      }
    }
  }
</script>


<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  overflow: auto;
}
#gears {
  width: 120px;
  margin: 20px 0 60px 0;
}
.page {
  width: 100%;
  height: 100%;
  margin: auto;
  padding: 20px;
}
#top-nav {
  width: 100%;
  height: 1px;
  text-align: center;
  border: 2px solid black;
  visibility: collapse;
}
#left-nav {
  width: 160px;
  height: 100%;
  padding: 20px;
  float: left;
  border: 2px solid black;
  line-height: 2em;
  font-size: 1.2em;
}
a {
  text-decoration: none;
  color: #3470a8;
}
.extra-link {  
  color: #3470a8;
  cursor: pointer;
}
#main {
  float: left;
  width: calc(100% - 160px);
  height: 100%;
  border: 2px solid black;
  overflow: auto;
}

@media screen and (max-width: 900px) {
  #left-nav {
    height: 1px;    
    padding: 0;
    visibility: hidden;
  }
  #top-nav {  
    height: 100px;
    visibility: visible;
  }
  #main {
    width: 100%;
  }
  #gears {
    width: 50px;
    margin: 5px;
  }
  .page {
    padding: 5px;
  }
}
</style>
