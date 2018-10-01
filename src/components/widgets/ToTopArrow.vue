<template>
  <div>
    <div id="waypoint-marker"></div>
    <div class="waypoint" v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }"></div>
    <div class="nav-up-arrow" v-if="visible">
      <a href="#" v-scroll-to="'#waypoint-marker'">
        <font-awesome-icon class="up-icon" :icon="{ prefix: 'fas', iconName: 'chevron-up' }"/>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    intersectionOptions: {
      root: null,
      rootMargin: "0px 0px 0px 0px",
      thresholds: [0]
    },
    visible: false
  }),
  methods: {
    onWaypoint({ going, direction }) {
      var directionTop = this.$waypointMap.DIRECTION_TOP;
      var directionBottom = this.$waypointMap.DIRECTION_BOTTOM;
      var goingIn = this.$waypointMap.GOING_IN;
      var goingOut = this.$waypointMap.GOING_OUT;

      if (going === goingIn && direction === directionTop) {
        this.visible = true;
      }
      if (going === goingOut && direction === directionBottom) {
        this.visible = false;
      }
    },
    determineButtonVisibility() {
      // offset of window from top of page
      var windowOffset = window.pageYOffset;
      // size of the current window
      var windowSize = window.innerHeight;

      if (windowOffset + windowSize > 1.6 * windowSize) {
        this.visible = true;
      } else {
        this.visible = false;
      }
    }
  },
  mounted: function() {
    // on refresh determine if button should be displayed or not
    this.determineButtonVisibility();
  }
};
</script>

<style lang="scss" scoped>
.nav-up-arrow {
  text-align: center;
  width: 8vh;
  height: 8vh;
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 9999999;
  background-color: lighten($primary-color, 10%);
  opacity: 0.8;
  filter: alpha(opacity=80);
  border: 0px solid;
  border-radius: 1vh;
}
.nav-up-arrow:hover {
  opacity: 1;
  filter: alpha(opacity=100);
}
.waypoint {
  position: absolute;
  top: 160vh;
}
.up-icon {
  font-size: 7vh;
  color: white;
  margin-top: 0.5vh;
}
#waypoint-marker {
  position: absolute;
  top: 0px;
}
</style>



