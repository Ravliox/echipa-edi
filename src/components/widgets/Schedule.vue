<template>
  <div id = "schedule">
    <div class = "columns is-multiline is-centered" :class="{columnSchedule : !multiline}">
      <div class = "column is-4 has-text-centered" v-for = "(dayData, index) in schedule" :key="index"> 
        <h1>{{dayData.day}}</h1>
        <h2>{{dayData.date}}</h2>
        <div v-for = "(training, index) in dayData.trainings" :key="index"> 
          <span><strong>{{training.hourlyIntervals}}</strong></span>
          <span class = "is-hidden-mobile"> - </span>
          <br class = "is-hidden-desktop" />
          <span>{{training.training}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import schedule from '@/assets/resources/schedule.js'

export default {
  props: [
    "multiline"
  ],
  data() {
    return {
      schedule
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 32px;
}

h2 {
  font-size: 24px;
}

span {
  font-size: 24px;
}

.columnSchedule {
  flex-direction: column !important;
  width: 100%;
  justify-content: center;
}

.columnSchedule > div {
  width: 100%;
  justify-content: center;
}
</style>