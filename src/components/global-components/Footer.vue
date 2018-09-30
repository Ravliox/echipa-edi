<template>
  <div id = "footer">
    <div class = "columns">
      <div class = "column is-one-third first">
        <h2>{{$t("footer.contact")}}</h2>
        <div><font-awesome-icon icon="phone-square" /> {{links.telefon}} </div>
      </div>
      <div class = "column is-one-third">
      </div>
      <div class = "column is-one-third last">
        <h2>{{$t("footer.follow")}}</h2>
        <div><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }"/><a href = "facebookEESTEC">Facebook</a></div>
      </div>
    </div>
  </div>
</template>

<script>
import links from '@/assets/resources/links.json'

export default {
  data() {
    return {
      links
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
  font-size: 20px;
}

.columns {
  height: 100%;
  padding: 10px 50px 0px 50px;
}

.first {
  text-align: left;
}

.left {
  text-align: right;
}

</style>
