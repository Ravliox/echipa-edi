<template>
  <div id = "app">
    <NormalHeader></NormalHeader>
    <!-- <InvertedHeader></InvertedHeader> -->
    <!-- <TransparentHeader></TransparentHeader> -->
    <router-view></router-view>
  </div>
</template>


<script>
import NormalHeader from '@/components/global-components/NormalHeader'
import InvertedHeader from '@/components/global-components/InvertedHeader'
import TransparentHeader from '@/components/global-components/TransparentHeader'

export default {
  components: {
    NormalHeader,
    InvertedHeader,
    TransparentHeader
  }
}
</script>


<style lang="scss">
#app {
  // background-color: red;
  min-height: 100vh;
}

</style>
