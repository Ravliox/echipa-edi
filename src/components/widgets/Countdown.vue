<template>
  <div id = "countdown">
    <div class = "block">
      <p class = "digit"> {{days}} </p>
      <p class = "text"> {{$t('countdown.dz')}} </p>
    </div>
    <div class = "block">
      <p class = "digit"> {{hours}} </p>
      <p class = "text">{{$t('countdown.hrs')}} </p>
    </div>
    <div class = "block">
      <p class = "digit"> {{minutes}} </p>
      <p class = "text"> {{$t('countdown.min')}} </p>
    </div>
    <div class = "block">
      <p class = "digit"> {{seconds}} </p>
      <p class = "text"> {{$t('countdown.sec')}} </p>
    </div>
  </div>
</template>



<script>
export default {
  props: [
    'ext_date'
  ],
  data() {
    return {
      now: Math.trunc((new Date()).getTime() / 1000),
      date: Math.trunc(Date.parse(this.ext_date) / 1000)
    }
  },
  computed: {
    seconds () {
      return (this.date - this.now) % 60 > 0 ? (this.date - this.now) % 60 : 0;
    },
    minutes() {
      return Math.trunc((this.date - this.now) / 60) % 60 > 0 ? Math.trunc((this.date - this.now) / 60) % 60 : 0;
    },
    hours() {
      return Math.trunc((this.date - this.now) / 60 / 60) % 24 > 0 ?  Math.trunc((this.date - this.now) / 60 / 60) % 24 - 4 : 0;
    },
    days() {
      return Math.trunc((this.date - this.now) / 60 / 60 / 24) > 0 ?  Math.trunc((this.date - this.now) / 60 / 60 / 24) : 0;
    }
  },
  mounted() {
    window.setInterval( () => {
      this.now = Math.trunc( (new Date()).getTime() / 1000 );
    }, 1000);
  },

}
</script>





<style scoped lang="scss">
.block{
  display: inline-block;
  margin: 8px;
  margin-top:0;
  text-align: center;
}

.text {
  font-weight: 40;
  margin-top: -10px;
  font-size: 2.5vh;
}

.digit {
  font-size: 5vh;
  font-weight: 100;
  margin: 10px;
}

#countdown {
  display: flex;
  justify-content: center;
}
</style>