<template>
  <div id="numbersSection">
    <div v-waypoint="{ active: true, callback: startAnimation, options: intersectionOptions}"></div>
    <div class="columns">
      <template v-for="(section, index) in numbers">
        <div class="column has-text-centered has-text-justified">
           <img class = "pictogram" :src = "section.image">
          <h1>{{$t(section.numbers)}}</h1>
          <h2>{{$t(section.text)}}</h2>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import numbers from '@/assets/resources/numbers.json'
export default {
  data () {
    return {
      numbers,
      triggered: false,
      animationDuration: 2500,
      count: 0,
      intersectionOptions: {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        thresholds: [0]
      } 
    }
  },
  methods: {
    startAnimation: function () {
      if (!this.triggered) {
        this.triggered = true
        var vueInstance = this
        var interval = setInterval(function () {
          vueInstance.count += 50
          vueInstance.numbers.forEach(function (section) {
            section.number = Math.floor(vueInstance.count / vueInstance.animationDuration * section.value)
          })
          if (vueInstance.count >= vueInstance.animationDuration) {
            clearInterval(interval)
          }
        }, 50)
      }
    }
  }
}
</script>

<style scoped lang = "scss">
#numbersSection {
  margin-top: 30px;
  margin-bottom: 30px;
}
h1 {
  text-align: center;
  font-size: 80px;
  margin-bottom: 0px;
}
h2 {
  text-align: center;
  font-size: 50px;
  margin-bottom: 1rem;
}
.content h2:not(:first-child) {
    margin-top: 0.5rem;
}
.content h1:not(:first-child) {
    margin-top: 0.5rem;
}
.pictogram {
  height: 100px;
  width: 100px;
  display: block;
  margin: auto;
}
</style>