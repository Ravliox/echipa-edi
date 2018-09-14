<template>
  <div id = "app">
    <!-- <NormalHeader :data="header"></NormalHeader> -->
    <InvertedHeader :data="header"></InvertedHeader>
    <router-view></router-view>
  </div>
</template>


<script>
import NormalHeader from '@/components/global-components/NormalHeader'
import InvertedHeader from '@/components/global-components/InvertedHeader'

export default {
  components: {
    NormalHeader,
    InvertedHeader
  },
  data() {
    return {
      header: {
        transparent: true
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
