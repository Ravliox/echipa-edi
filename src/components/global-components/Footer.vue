<template>
  <div id = "footer">
    <div class = "columns">
      <div class = "column is-one-third">
        <div>
          <h2>{{$t("footer.contact")}}</h2>
          <div><font-awesome-icon icon="phone-square" /> {{links.telefon}} </div>
          <div><font-awesome-icon icon="envelope" /><a :href='links.mailClick' target="_top">{{links.mail}}</a></div>
          <div><font-awesome-icon icon="map-marker" /><a :href='links.location' target="_blank"><span class="adress" v-html="$t('footer.address')"></span></a></div>
        </div>
      </div>
      <div class = "column is-one-third is-hidden-mobile">
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
      <div class = "column is-one-third is-hidden-desktop">
        <p> &copy; EESTEC Bucharest </p>
      </div>
    </div>
  </div>
</template>

<script>
import links from '@/assets/resources/links.js'

export default {
  data() {
    return {
      links,
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
#footer {
  min-height: 20vh;
  background-color: $primary-color;
  text-align: center;
}

h2 {
  font-size: 28px;
  text-align: left;
}

.columns {
  height: 100%;
  padding: 10px 50px 0px 50px;
  margin: 0 !important;
}

.column > div {
  text-align: left;
  display: inline-block;
  font-size: 18px;
}

@media screen and (max-width: 1024px) {
   .column > div {
     text-align: center;
   }
   h2 {
     text-align: center;
   }
}

.column:nth-child(2) {
  margin-top: auto;
}

a > span:hover {
  color: $secondary-color !important; 
}

.adress {
  font-size: 15px;
}

svg {
  margin-right: 5px;
}
</style>
