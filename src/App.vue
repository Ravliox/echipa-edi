<template>
  <div id = "app">
    <!-- this waypoint has to be here beacuse it can't be inside a component because it could move when the component repositions -->
    <div class="hoverbar-waypoint" v-waypoint="{ active: true, callback: stopHoverBar, options: intersectionOptions }"></div>
    <NormalHeader :data="header"></NormalHeader>
    <!-- THESE TWO LINES HAVE TO BE TOGETHER. INVERTED HEADER DOES NOT WORK ON MOBILE -->
    <!-- <InvertedHeader :data="header" class="is-hidden-mobile"></InvertedHeader>
    <NormalHeader :data="header" class="is-hidden-desktop"></NormalHeader> -->
    <div :class=" { mainContentMargin: hoverBar.fixed && !hoverBar.value}">
      <router-view></router-view>
    </div>
    <!-- <HoverBar @hideBar="hideHoverBar" v-if="!hoverBar.value" :hoverBarData="hoverBar"></HoverBar> -->
    <Footer @stop="stopHoverBar"></Footer>
  </div>
</template>


<script>
import NormalHeader from '@/components/global-components/NormalHeader'
import InvertedHeader from '@/components/global-components/InvertedHeader'
import Footer from '@/components/global-components/Footer'
import HoverBar from '@/components/global-components/HoverBar'

export default {
  components: {
    NormalHeader,
    InvertedHeader,
    Footer,
    HoverBar
  },
  data() {
    return {
      header: {
        transparent: false
      },
      intersectionOptions: {
        root: null,
        rootMargin: "0px 0px 0px 0px",
        thresholds: [0]
      },
      hoverBar: {
        value: false,
        fixed: false,
        text: "Here is some news about us"
      }
    }
  },
  methods: {
    hideHoverBar() {
      this.hoverBar.value = !this.hoverBar.value;
    },
    stopHoverBar({ going, direction }) {
      var directionTop = this.$waypointMap.DIRECTION_TOP;
      var directionBottom = this.$waypointMap.DIRECTION_BOTTOM;
      var goingIn = this.$waypointMap.GOING_IN;
      var goingOut = this.$waypointMap.GOING_OUT;

      if (going === goingIn && direction === directionTop) {
        this.hoverBar.fixed = !this.hoverBar.fixed;
      }
      if (going === goingOut && direction === directionBottom) {
        this.hoverBar.fixed = !this.hoverBar.fixed;
      }
    }
  }
}
</script>


<style lang="scss">
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  flex-grow: 100%;
  justify-content: space-between;
  position: relative;
}

.hoverbar-waypoint {
  position: absolute;
  bottom: 25vh;
  z-index: 1;
}
.mainContentMargin {
  margin-bottom: 10vh;
}
</style>
