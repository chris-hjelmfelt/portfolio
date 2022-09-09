<template>
  <div id="page">
    <h2>3D Models by Christine Hjelmfelt </h2>

    <div class="gallery">  
      <div class="row">
        <span class="group-title">Blender Models</span>       
        <span class="note">Click on an image to see a larger version</span>
      </div>
      <div class="pictures">    
        <div class="row">  
          <div class="col-6 picture">
            <img ref="b2" src="../assets/images/Blender_Gazebo.png" @click="BigImage($event.target.src)">
          </div>
          <div class="col-6 picture">
            <img ref="b3" src="../assets/images/Blender_LampPost.png" @click="BigImage($event.target.src)">
          </div>
          <div class="col-6 picture">
            <img ref="b4" src="../assets/images/Blender_Bridge.png" @click="BigImage($event.target.src)">
          </div>
          <div class="col-6 picture">
            <img ref="b1" src="../assets/images/Blender_Book.png" @click="BigImage($event.target.src)">
          </div> 
        </div>

        <div class="row">  
          <div class="col-6 picture">
            <img ref="b2" src="../assets/images/Blender_TabletWithHandles.png" @click="BigImage($event.target.src)">
          </div>
        </div>
      </div>

      <div class="row">
        <span class="group-title">Models from BloxRiver Farms - A game on the Roblox Platform</span>
        <span class="note">Roblox is a gaming platform for children</span>
      </div>
      <div class="row pictures"> 
        <div class="col-6 picture">
          <img ref="r1" src="../assets/images/Roblox_FarmTiles.png" @click="BigImage($event.target.src)">
        </div>
        <div class="col-6 picture">
          <img ref="r2" src="../assets/images/Roblox_Woodworking.png" @click="BigImage($event.target.src)">
        </div>
        <div class="col-6 picture">
          <img ref="r3" src="../assets/images/Roblox_Windmill.png" @click="BigImage($event.target.src)">
        </div>
        <div class="col-6 picture">
          <img ref="r4" src="../assets/images/Roblox_TruckWorkZone.png" @click="BigImage($event.target.src)">
        </div>
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
#page {
  width: 100%;
  height: 100%;
  margin: auto;
  overflow-y: auto;
}

.gallery {  
  width: 100%;
}
.row {
  width: 96%;
  padding: 10px 30px 30px 30px;
  background-color: black;
  margin: auto;
  display: flex;
  justify-content: space-between;
}
.group-title {
  font-weight: bold;
}
.note {
  color: white;
}
.pictures {  
  margin-bottom: 1vw;
}
img {
  height: 10vw;
  border: 4px solid white;
}


/*FOR MODAL IMAGE*/
/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; 
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
  margin: auto;
  display: block;
  width: 95%;
  height: auto;
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

</style>