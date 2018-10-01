<template>
  <div id = "hoverbar" class="notification" :class="{ fixed: true }">
    <p>{{this.hoverBarData}}</p>
    <button class="delete" @click="hideBar"></button>
  </div>  
</template>

<script>
export default {
  props: [
    'hoverBarData'
  ],
  data() {
    return {
    }
  },
  methods: {
    hideBar() {
      this.$emit('hideBar');
    }
  }
}
</script>

<style lang="scss" scoped>
#hoverbar {
  margin-top: 75vh;
  height: 10vh;
  width: 100%;
  background-color: rgb(63, 49, 49);
  opacity: 0.3;
  z-index: 1;
  position: relative;
}

.fixed {
  position: fixed !important; 
}
</style>
