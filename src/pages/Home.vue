<template>
  <div class="home">

  </div>
</template>

<script>
import {components, resources} from './components.js'

export default {
  name: 'home',
  components: {
    ...components
  },
  data() {
    return {
      ...resources,
      video: true,
      date: '23 Dec 2018 18:00:00 GMT+0200'
    }
  }
}
</script>

<style lang="scss">
</style>
