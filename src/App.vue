<template>
  <div id = "app">
    <!-- <NormalHeader :data="header"></NormalHeader> -->
    <!-- THESE TWO LINES HAVE TO BE TOGETHER. INVERTED HEADER DOES NOT WORK ON MOBILE -->
    <InvertedHeader :data="header" class="is-hidden-mobile"></InvertedHeader>
    <NormalHeader :data="header" class="is-hidden-desktop"></NormalHeader>
<<<<<<< HEAD
    <Slider></Slider>
    <Numbers></Numbers>
=======
>>>>>>> 9db19c42c03fc4e64937eb0017ece15e404ecea9
    <router-view></router-view>
    
    
  </div>
</template>


<script>
import NormalHeader from '@/components/global-components/NormalHeader'
import InvertedHeader from '@/components/global-components/InvertedHeader'
<<<<<<< HEAD
import Slider from '@/components/sliders/main-slider/Slider'
import Numbers from '@/components/widgets/Numbers'
import numbers from '@/assets/resources/numbers.json'
=======
>>>>>>> 9db19c42c03fc4e64937eb0017ece15e404ecea9

export default {
  components: {
    NormalHeader,
<<<<<<< HEAD
    InvertedHeader,
    Slider,
    Numbers,
    numbers
=======
    InvertedHeader
>>>>>>> 9db19c42c03fc4e64937eb0017ece15e404ecea9
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
