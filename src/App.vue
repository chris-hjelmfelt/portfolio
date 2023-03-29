<template>
  <div id="app">
    <div id="top-nav">
      <img id="gears" src="./assets/gears.png"><br>
        <router-link to="/">Home</router-link> |
        <router-link to="/models">3D Models</router-link> |
        <router-link to="/gamelist">Games</router-link>
        <!-- <router-link to="/crypto">Crypto & Blockchain</router-link> |  -->
        <!-- <span class="extra-link" @click="openResume()">Resume</span> | -->
    </div>
    <div id="left-nav">
      <img id="gears" src="./assets/gears.png"><br>
      <router-link to="/">Home</router-link> <br>
      <router-link to="/models">3D Models</router-link> <br>
      <router-link to="/gamelist">Games</router-link>
      <!-- <router-link to="/crypto">Crypto / Blockchain</router-link> <br> -->
      <!-- <span class="extra-link" @click="openResume()">Resume</span>  -->
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
  position: relative;
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
  width: 230px;
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
  width: calc(100% - 230px);
  height: 100%;
  border: 2px solid black;
  overflow: auto;
}
.title {
  display: inline-block; 
  color: #3470a8;
  font-size: 1.4em;
  font-weight: bold;
  margin: 10px 0 0 10px;
}
.bigTitle {
  display: block;
  width: fit-content;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 1.8em;
  font-weight: bold;
  color: #3470a8;
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
