<template>
  <div class="home">
    <Slider />
    <pie-chart-countdown :ext_date="date" />
    <schedule :multiline="true" />
    <partners />
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
      date: '27 Nov 2018 18:00:00 GMT+0200'
    }
  }
}
</script>

<style lang="scss">
</style>
