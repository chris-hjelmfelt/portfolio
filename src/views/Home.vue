<template>
  <div class="page">
    <div id="intro">
      <h1>Christine Hjelmfelt</h1>
      <h3>Software developer</h3>
      <button @click="goToProfile('linkedin')"><img class="icon" src="../assets/Linkedin.png">LinkedIn</button><br>
      <button @click="goToProfile('github')"><img class="icon" src="../assets/Github.png">Github</button><br>
      <img class="space" src="../assets/images-models/Transparent.png" />
    </div>
  </div>
</template>


<script>
export default {
  name: 'Home',
  methods: {
    goToProfile(site) {
      if(site == 'linkedin') {
        window.open('https://www.linkedin.com/in/christine-hjelmfelt/')
      } 
      else if (site == 'github') {
        window.open('https://github.com/chris-hjelmfelt')
      }
    }
  }
}
</script>


<style scoped >
  .page {
    display: flex;
    align-items: center;
    line-height: 2em;
  }
  #intro {
    width: 100%;
    text-align: center;

  }
  .space {
    max-height: 15vw;
  }
  button {
    width: 120px;
    margin: auto;
    margin-bottom: 10px;
    align-items: center;
    font-size: 1.2em;
  }
  .icon {
    width: 20px;
    margin: 2px 10px 0 0;
  }
</style>