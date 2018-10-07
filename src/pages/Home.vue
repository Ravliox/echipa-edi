<template>
  <div class="home">
    <TestimSlider></TestimSlider>
  </div>
</template>

<script>
// @ is an alias to /src
import TestimSlider from '@/components/sliders/testimonial-slider/TestimSlider'

export default {
  name: 'home',
  components: {
    TestimSlider
  }
}
</script>
