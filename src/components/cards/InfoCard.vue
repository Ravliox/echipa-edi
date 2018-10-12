<template>
  <div id = "infoCard">
    <div class="card container">
      <div class="card-image">
        <img :src="cardcontent.img" alt="Image">
      </div>
      <div class = "card-content">
        <div class = "content">
          <div class = "media">
            <div class = "media-content">
              <h1 v-if = "cardcontent.titlu">{{cardcontent.titlu}}</h1>
            </div>
          </div>
          <p v-if = "cardcontent.text" v-html="cardcontent.text"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'cardcontent'
  ]
}
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
}

img {
  width: 100%;
}

.card-image{
  height: 220px;
  overflow: hidden;
}

.card:hover > .card-content { 
  -webkit-box-shadow: 0px 4px 8px -1px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 4px 8px -1px rgba(0,0,0,0.75);
  box-shadow: 0px 4px 8px -1px rgba(0,0,0,0.75)
}

.card-content {
  padding-top: 0.1rem;
  height: 300px;
  overflow: hidden;
}
 @media only screen and (max-width: 600px) {
   .card-content {
    height: auto;
   }
}

/* this one is for the news variant of the information card */
.overlay {
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 70%, rgba(255, 255, 255, 1) 100%);
  width: 100%;
  pointer-events: none;
  height: 20%;
  position: absolute;
  bottom: 0px;
  left: 0px;
  z-index: 9999;
}
</style>


