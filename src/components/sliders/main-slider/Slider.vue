<template>
    <div id = "slider">
      <flickity ref="flickity" :options="flickityOptions">
        <div class = "carousel-cell"><Slide1></Slide1></div>
        <div class = "carousel-cell"><Slide2></Slide2></div>
      </flickity>
    </div>
</template>

<script>
import Flickity from 'vue-flickity'
import Slide1 from './slides/Slide1.vue'
import Slide2 from './slides/Slide2.vue'

export default {
  components: {
    Flickity,
    Slide1,
    Slide2
  },
  data() {
    return {
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: true,
        pageDots: true,
        wrapAround: true
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.carousel-cell {
  width: 100%;
  height: 85vh;
}

.flickity-page-dots {
  bottom: 40px !important;
}

.flickity-page-dots .dot {
  background: #fff;
}
</style>
