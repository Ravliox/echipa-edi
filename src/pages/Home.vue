<template>
  <div class="home">
    <!-- video hero (or any hero) is a homepage component -->
    <VideoHero/>
  </div>
</template>

<script>

import VideoHero from '@/components/heroes/VideoHero'

export default {
  name: 'home',
  components: {
    VideoHero
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss">
</style>
