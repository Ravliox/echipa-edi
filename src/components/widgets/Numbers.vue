<template>
  <div id="numbersSection">
    <div v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }"></div>
    <div class="columns">
      <div class="column has-text-centered has-text-justified" v-for="(section, index) in numbers" :key="index">
        <img class = "pictogram" :src = "section.image">
        <h1>{{section.number}}</h1>
        <h2>{{section.text}}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import numbers from '@/assets/resources/numbers.js'
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
    onWaypoint ({ going, direction }) {
      if (going === this.$waypointMap.GOING_IN) {
        this.startAnimation();
      }
    },
    startAnimation: function () {
      if (!this.triggered) {
        this.triggered = true
        var interval = setInterval(() => {
          this.count += 50;
          this.numbers.forEach((section) => {
            section.number = Math.floor(this.count / this.animationDuration * section.value)
          })
          if (this.count >= this.animationDuration) {
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