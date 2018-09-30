<template>
  <div id = "app">
    <!-- <NormalHeader :data="header"></NormalHeader> -->
    <!-- THESE TWO LINES HAVE TO BE TOGETHER. INVERTED HEADER DOES NOT WORK ON MOBILE -->
    <InvertedHeader :data="header" class="is-hidden-mobile"></InvertedHeader>
    <NormalHeader :data="header" class="is-hidden-desktop"></NormalHeader>
    
    <ContactPersonCard :eestecer="member" v-for="member in eestecer"></ContactPersonCard>
    <router-view></router-view>
    
    
  </div>
</template>


<script>
import NormalHeader from '@/components/global-components/NormalHeader'
import InvertedHeader from '@/components/global-components/InvertedHeader'
import eestecer from "@/assets/resources/eestecer.json"
import ContactPersonCard from '@/components/cards/ContactPersonCard'
export default {
  components: {
    NormalHeader,
    InvertedHeader,
    
    ContactPersonCard
  },
  data() {
    return {
      header: {
        transparent: false
      },
      eestecer
    }
  }
}
</script>


<style lang="scss">
#app {
  min-height: 100vh;
}

</style>
