<template>
  <div id="page">
    <span class="bigTitle">Crypto and Blockchain</span>
    <div class="card">
      <span class="mylink" @click="openLink('crypto')">Eliptic Curve Cryptography Paper</span><br>    
      <span class="mylink" @click="openLink('library')">Etherium Dapp Library</span><br>
      <span class="mylink" @click="openLink('tutorial')">Tutorial for Dapp Library</span>
    </div>  
  </div>
</template>


<script>
  export default {
    name: 'CryptoBlockchain',
    methods: {
      openLink(name) {
        if (name == 'crypto') {
          window.open("https://quantummelody.com/ECFinalPaper.pdf")
        }
        else if (name == 'library') {
          window.open("https://quantummelody.com/ethereum/library/index.html")
        }
        else if (name == 'tutorial') {
          window.open("https://quantummelody.com/ethereum/tutorial.html")
        }
      }
    }
  }
</script>


<style scoped>
  .card {
    width: 90%;
    max-width: 1000px;
    margin: auto;
    margin-top: 40px;
    margin-bottom: 40px;
    padding: 20px;
    border: 1px solid black;
  }
  .mylink {
    font-size: 1.3em; 
    line-height: 2em;   
    color: #3470a8;
    cursor: pointer;
  }
</style>
      