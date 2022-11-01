<template>
  <div class="page">
    <h2 id="title">3D Models</h2>

    <div class="gallery">  
      <div class="row">
        <span class="group-title">Blender Models</span>  <br>     
        <span class="note">Click on an image to see a larger version</span>
      </div>
      <div class="row picture-group">
          <img class="picture" ref="b2" src="../assets/images-models/Blender_Gazebo.png" @click="BigImage($event.target.src)">        
          <img class="picture" ref="b3" src="../assets/images-models/Blender_LampPost.png" @click="BigImage($event.target.src)">        
          <img class="picture" ref="b4" src="../assets/images-models/Blender_Bridge.png" @click="BigImage($event.target.src)">        
          <img class="picture" ref="b1" src="../assets/images-models/Blender_Book.png" @click="BigImage($event.target.src)">        
          <img class="picture" ref="b2" src="../assets/images-models/Blender_Windmill.png" @click="BigImage($event.target.src)">        
          <img class="picture" ref="b2" src="../assets/images-models/Blender_TabletWithHandles.png" @click="BigImage($event.target.src)">        
          <img class="picture" ref="b2" src="../assets/images-models/Blender_HayWagon.png" @click="BigImage($event.target.src)">       
      </div>
    </div>

    <div class="gallery">  
      <div class="row label">
        <span class="group-title">Models from BloxRiver Farms - A game on the Roblox Platform</span><br>
        <span class="note">Roblox is a gaming platform for children</span>
      </div>
      <div class="row picture-group">         
          <img class="picture" ref="r1" src="../assets/images-models/Roblox_FarmTiles.png" @click="BigImage($event.target.src)">        
          <img class="picture" ref="r2" src="../assets/images-models/Roblox_Woodworking.png" @click="BigImage($event.target.src)">       
          <img class="picture" ref="r4" src="../assets/images-models/Roblox_TruckWorkZone.png" @click="BigImage($event.target.src)">        
      </div>
    </div>

    <!-- The Modal -->
    <div ref="myModal" class="modal">
      <span class="close" @click="CloseModal()">&times;</span>
      <img class="modal-content" ref="modalImg">
      <div id="caption"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Models',
    methods: {
      BigImage(choosen){
        var modal = this.$refs.myModal
        var modalImg = this.$refs.modalImg
        modal.style.display = "block"
        modalImg.src = choosen
      },

      CloseModal(){ 
        var modal = this.$refs.myModal
        modal.style.display = "none"
      }
    }
  }
</script>

<style lang="scss" scoped>
#title {
  display: block;
  width: fit-content;
  margin: auto;
}
.gallery {  
  width: 100%;
  margin-bottom: 20px;
}
.row {
  width: 100%;
  padding: 10px 10px 10px 30px;
  background-color: #5097b8;
  margin: auto;
}
.group-title {
  font-weight: bold;
}
.note {
  color: white;
}
.picture-group {  
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  list-style: none;
}
.picture { 
  display: block; 
  width: auto;
  height: auto;
  max-height: 30vh;
  border: 2px solid white;
}


/*FOR MODAL IMAGE*/
/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 30px; 
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,1); /* Black w/ opacity */
}

/* Modal Content (image) */
.modal-content {
  display: block;
  object-fit: cover;
  width: 100%;
  height: 95%;
  width: auto;
  height: auto;
  margin: auto;
}

/* Add Animation */
.modal-content {  
  -webkit-animation-name: zoom;
  -webkit-animation-duration: 0.6s;
  animation-name: zoom;
  animation-duration: 0.6s;
}

/* The Close Button */
.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #fa0202;
  font-size: 60px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}

@media screen and (max-width: 900px) {
  .picture {
    max-height: 180px;
  }
  .modal-content {
    max-height: 220px
  }
}
</style>