<template>
  <div id = "app">
    <NormalHeader></NormalHeader>
    <router-view></router-view>
  </div>
</template>


<script>
import NormalHeader from '@/components/global-components/NormalHeader'

export default {
  components: {
    NormalHeader
  }
}
</script>


<style lang="scss">
</style>
