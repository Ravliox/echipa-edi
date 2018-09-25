<template>
  <div id = "app">
    <!-- <NormalHeader :data="header"></NormalHeader> -->
    <!-- THESE TWO LINES HAVE TO BE TOGETHER. INVERTED HEADER DOES NOT WORK ON MOBILE -->
    <InvertedHeader :data="header" class="is-hidden-mobile"></InvertedHeader>
    <NormalHeader :data="header" class="is-hidden-desktop"></NormalHeader>
    <Slider></Slider>
    <router-view></router-view>
  </div>
</template>


<script>
import NormalHeader from '@/components/global-components/NormalHeader'
import InvertedHeader from '@/components/global-components/InvertedHeader'
import Slider from '@/components/sliders/main-slider/Slider'

export default {
  components: {
    NormalHeader,
    InvertedHeader,
    Slider
  },
  data() {
    return {
      header: {
        transparent: false
      }
    }
  }
}
</script>


<style lang="scss">
#app {
  min-height: 100vh;
}

</style>
