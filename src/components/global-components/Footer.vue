<template>
  <div id = "footer">
    <div class="waypoint" v-waypoint="{ active: true, callback: stopHoverBar, options: intersectionOptions }"></div>
    <div class = "columns">
      <div class = "column is-one-third">
        <div>
          <h2>{{$t("footer.contact")}}</h2>
          <div><font-awesome-icon icon="phone-square" /> {{links.telefon}} </div>
          <div><font-awesome-icon icon="envelope" /><a :href='links.mailClick' target="_top">{{links.mail}}</a></div>
          <div><font-awesome-icon icon="map-marker" /><a :href='links.location' target="_blank"><span class="adress" v-html="$t('footer.address')"></span></a></div>
        </div>
      </div>
      <div class = "column is-one-third">
        <p> &copy; EESTEC Bucharest </p>
      </div>
      <div class = "column is-one-third">
        <div>
          <h2>{{$t("footer.follow")}}</h2>
          <div><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }"/><a :href="links.facebookEveniment" target="_blank">{{$t('footer.facebookEveniment')}}</a></div>
          <div><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }"/><a :href="links.facebookEESTEC" target="_blank">{{$t('footer.facebookBucharest')}}</a></div>
          <div><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin' }"/><a :href="links.linkedInEESTEC" target="_blank">{{$t('footer.linkedIn')}}</a></div>
          <div><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }"/><a :href="links.instagramEESTEC" target="_blank">{{$t('footer.instagram')}}</a></div>
          <div><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'youtube' }"/><a :href="links.youtubeEESTEC" target="_blank">{{$t('footer.youtube')}}</a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import links from '@/assets/resources/links.json'

export default {
  data() {
    return {
      links,
      intersectionOptions: {
        root: null,
        rootMargin: "0px 0px 0px 0px",
        thresholds: [0]
      }
    }
  },
  methods: {
    stopHoverBar() {
      this.$emit("stop");
    }
  }
}
</script>

<style lang="scss" scoped>
#footer {
  height: 25vh;
  background-color: $primary-color;
  text-align: center;
  color: $primary-font-color;
}

h2 {
  font-size: 28px;
}

.columns {
  height: 100%;
  padding: 10px 50px 0px 50px;
}

.column > div {
  text-align: left;
  display: inline-block;
  font-size: 18px;
}

.column:nth-child(2) {
  margin-top: auto;
}

a {
  color: $primary-font-color;
}

.adress {
  font-size: 15px;
}

svg {
  margin-right: 5px;
}
</style>
