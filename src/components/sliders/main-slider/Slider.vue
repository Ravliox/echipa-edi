<template>
    <div id = "slider">
      <flickity ref="flickity" :options="flickityOptions">
        <div class = "carousel-cell"></div>
        <div class = "carousel-cell"></div>
      </flickity>
    </div>
</template>

<script>
import Flickity from 'vue-flickity'

export default {
  components: {
    Flickity
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

</style>
