<template>
  <div id="page">
    <span class="bigTitle">Crypto and Blockchain</span>
    <div class="card">
      <span class="bigLink" @click="openLink('crypto')">Eliptic Curve Cryptography Paper</span><br>    
      This is the final paper for my senior class research in Mathematics. It goes in depth into how Eliptic Curve Cryptography 
      works and how it's used in Bitcoin. <br> &nbsp; <br>
      <span class="bigLink" @click="openLink('library')">Etherium Dapp Library</span> <br>
        This is an Ethereum Dapp I made a few years ago. Unfortunately since then several changes have been made to 
        Metamask, the ethereum test networks, etc. So it is not fully functional at this time. For now 
        you can look at a document I made that explained how I made it: <span class="smallLink" @click="openLink('tutorial')">Tutorial for the Ethereum Dapp Library</span>
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
          window.open("https://quantummelody.com/ethereum/libraryadv/library2.html")
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
  .bigLink {
    font-size: 1.2em; 
    font-weight: bold;
    line-height: 2em;   
    color: #3470a8;
    cursor: pointer;
  }
  .smallLink {
    font-size: 1em;    
    color: #3470a8;
    cursor: pointer;
  }
  .message {
    font-size: 0.8em;
    font-style: italic;
  }
</style>
      