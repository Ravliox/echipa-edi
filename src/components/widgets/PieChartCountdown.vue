<template>
  <div v-if="!isFinished">
    <h1 class="countdown-title"> Timpul pana la viitoare depresie </h1>
    <div class = "pie-chart-countdown">
      <vue-easy-pie-chart :track-color="trackColor" :size="200" :line-width="12" :scale-color="scaleColor" :bar-color="barColor" :percent="days">{{days}} {{$t('countdown.dz')}}</vue-easy-pie-chart>
      <vue-easy-pie-chart :track-color="trackColor" :size="200" :line-width="12" :scale-color="scaleColor" :bar-color="barColor" :percent="hourPercentege">{{hours}} {{$t('countdown.hrs')}}</vue-easy-pie-chart>
      <vue-easy-pie-chart :track-color="trackColor" :size="200" :line-width="12" :scale-color="scaleColor" :bar-color="barColor" :percent="minutePercentege">{{minutes}} {{$t('countdown.min')}}</vue-easy-pie-chart>
      <vue-easy-pie-chart :track-color="trackColor" :size="200" :line-width="12" :scale-color="scaleColor" :bar-color="barColor" :percent="secondPercentege">{{seconds}} {{$t('countdown.sec')}}</vue-easy-pie-chart>
    </div>
  </div>
  <div v-else>
    <h1 class="countdown-title">Inscrierile s-au terminat!</h1>
  </div>
</template>

<script>
import VueEasyPieChart from 'vue-easy-pie-chart'
import 'vue-easy-pie-chart/dist/vue-easy-pie-chart.css'
export default {
  props: [
    'ext_date'
  ],
  components:{ 
    VueEasyPieChart 
  },
  data() {
    return {
      now: Math.trunc((new Date()).getTime() / 1000),
      date: Math.trunc(Date.parse(this.ext_date) / 1000),
      barColor: '#FBEC5D',
      trackColor: '#333',
      scaleColor: null
    }
  },
  computed: {
    seconds () {
      return (this.date - this.now) % 60 > 0 ? (this.date - this.now) % 60 : 0;
    },
    secondPercentege () {
      return this.seconds / 60 * 100;
    },
    minutes() {
      return Math.trunc((this.date - this.now) / 60) % 60 > 0 ? Math.trunc((this.date - this.now) / 60) % 60 : 0;
    },
    minutePercentege () {
      return this.minutes / 60 * 100;
    },
    hours() {
      return Math.trunc((this.date - this.now) / 60 / 60) % 24 > 0 ?  Math.trunc((this.date - this.now) / 60 / 60) % 24 : 0;
    },
    hourPercentege () {
      return this.hours / 24 * 100;
    },
    days() {
      return Math.trunc((this.date - this.now) / 60 / 60 / 24) > 0 ?  Math.trunc((this.date - this.now) / 60 / 60 / 24) : 0;
    },
    isFinished() {
      return this.seconds === 0 && this.minutes === 0 && this.hours === 0 && this.days === 0 ? true : false;
    }
  },
  mounted() {
    window.setInterval( () => {
      this.now = Math.trunc( (new Date()).getTime() / 1000 );
    }, 1000);
  }
}
</script>

<style lang="scss">
.pie-chart-countdown {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
@media screen and (max-width: 1024px) {
  .pie-chart-countdown {
    flex-direction: column;
  }
}
.vue-easy-pie-chart {
  margin-right: 20px;
  margin-top: 20px;
}
.vue-easy-pie-chart .inner-text {
  display: block;
}
.countdown-title {
  margin-top: 50px;
}
</style>