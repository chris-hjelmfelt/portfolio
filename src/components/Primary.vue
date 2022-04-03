<template>
  <div id="page">
    <h1>Christine Hjelmfelt</h1>
    <h3>Software developer, Indy game developer, Writer, 3D Modeler</h3>
    <div id="panel-one">
      <div id="contents">
        <ul>
          <li><router-link to="/resume">Resume</router-link></li>
          <li>Website Development - links to sites</li>
          <li>3D Models</li>
          <li>Games</li>
          <li>Writing</li>
        </ul>
      </div>      
      <img class="image1" alt="Gazebo" src="../assets/images/Blender_Gazebo.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Primary'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#page {
  width: 100%;
  max-width: 1000px;
  height: 100%;
  margin: auto;
}
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
