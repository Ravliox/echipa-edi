<template>
    <div class = "decodeCard">
    <div class="card container">
      <div class="card-image">
        <img v-bind:src="img" alt="Image">
      </div>
      <div class = "card-content">
        <div class = "content">
          <div class = "media">
            <div class = "media-content">
              <h3 class = "title is-4 font1" v-if = "cardcontent.titlu"><strong>{{cardcontent.titlu}}</strong></h3>
            </div>
          </div>
          <p class = "ovfw" v-if = "cardcontent.text" v-html="cardcontent.text"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'cardcontent'
  ],
  data () {
    return {
      img: require(this.cardcontent.img)
    }
  }
}
</script>

<style lang="scss" scoped>

img {
  width: 100%;
}
.card {
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
.details {
  margin-top: 2%;
  margin-bottom: 2%;
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
.data {
  color: #A9A9A9;
  font-size: 14px;
  margin: 4px;
}
.left {
  text-align: left;
  width: 50%;
}
.right {
  text-align: right;
  width: 50%;
  white-space: nowrap;
}
.txt {
  margin: 4px;
}
.card-content {
  position: relative;
  overflow: hidden;
}
.title {
  padding-top: 2px;
  font-weight: bold;
}
.card-footer {
  padding: 1.5rem;
  border: none;
}
#overlay {
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 70%, rgba(255, 255, 255, 1) 100%);
  width: 100%;
  pointer-events: none;
  height: 20%;
  position: absolute;
  bottom: 0px;
  left: 0px;
  z-index: 9999;
}
.title.is-4 {
  font-size: 38px;
}
a {
  color: var(--color1);
}
a:hover {
  color: var(--color1);
}
a:link {
  color: var(--color1);
}
active {
  color: var(--color1);
}
h3.title {
  margin-bottom: 5px;
  overflow:hidden;
}

</style>


