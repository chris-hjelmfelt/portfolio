<template>
  <div class="page">
    <h1>Christine Hjelmfelt</h1>
    <h3>Software developer</h3>
    <div id="panel-one">
      <div id="contents">
        <ul>
          <li><router-link to="/resume">Resume</router-link></li>
          <li><router-link to="/games">Games</router-link></li>
          <li><router-link to="/models">3D Models</router-link></li>
        </ul>
      </div>      
    </div>
  </div>
</template>


<script>
export default {
  name: 'Home'
}
</script>


<style scoped >
  #panel-one {
    width: 100%;  
    height: 400px;
    padding: 10px;
    margin-top: 50px;
  }
  .image1 {
    width: 264px;
    height: 211px;
    border: 2px solid grey;
    float: right;
  }
  #contents {
    width: 50%;
    color: #444444;
    text-align: left;
    font-size: 1.2em;
    float: left;
  }
  </style>