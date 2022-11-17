<template>
  <div id="page">
    <span class="bigTitle">Recommendations</span>
    <div class="card">
      <p>
        Christine is a strong independent developer with a broad set of skills and adapts to rapidly changing software 
        environmental conditions. She proved her self very successfully at quickly acquiring new skills to complete 
        complex integrations in variety of software development problems. She is a talented full stack developer who can 
        be trusted to work independently and deliver software product increments on time and of high quality. She works 
        well with customers and proved to be a valuable resource to assess customers changing software requirements and 
        to diagnose complicated software development problems and support quick fixes or improvements. I can’t speak 
        highly enough of what a valuable asset she was and her consistent work ethic.
      </p>
      <span @click="goToLinkedIn('sean')">Sean Smith - Chief Engineer at BlueHalo</span>
    </div>    

    <div class="card">
      <p>
        Christine is a pleasure to work with. She is a clear communicator and her advice has been invaluable in the 
        development of the Museum of AI virtual experience. In her advisory role, Chris has provided solid architectural 
        advice and working code examples. As a result, her contributions have sped up development and improved product 
        quality. Chris would be a valuable addition to any development team.
      </p>
      <span @click="goToLinkedIn('jeff')">Jeffery Altman - Vice President of Operations at Museum of AI</span>
    </div>  
  </div>
</template>


<script>
  export default {
    name: 'Recommendations',
    methods: {
      goToLinkedIn(name) {
        if (name == 'sean') {
          window.open("https://www.linkedin.com/in/sean-smith-b435a459/")
        } else if (name == 'jeff') {
          window.open("https://www.linkedin.com/in/jeffaltman/")
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
    padding: 10px;
    border: 1px solid black;
  }
</style>
      