+<template>
  <div id = "partners">
    <div v-for="(partnerType, index) in partners" :key="index">
        <h2 class="font1 title">{{$t(partnerType.name)}}</h2>
        <div class="partners-list">
          <div v-for="(partner, index) in partnerType.content" :key="index">
            <a class="partner" :href="partner.link">
              <img :src="partner.logo" :alt="partner.name">
            </a>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import partners from '@/assets/resources/partners.js'
export default {
  data () {
    return {
      partners
    }
  }
}
</script>

<style scoped>
#partners {
  margin-top : 30px;
}
h1, h2{
  text-align: center;
}
h2 {
  display: block;
  font-weight: bold;
  font-size:  7vh;
  letter-spacing: 1px;
}
.content h2:first-child {
  margin-bottom: 0.2em;
}
.content h2:not(:first-child) {
    margin-top: 1em;
    margin-bottom: 0.2em;
}
.partners-list{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
}
.partner{
  max-width:110px;
  margin: 0.5em 0.75em;
}
div:nth-of-type(1) > a {
  max-width: 380px;
  margin: 0.5em 5em;
}
div:nth-of-type(2) > a {
  max-width: 250px;
  margin: 0.5em 1.5em;
}
/* scale the ey logo better */
div:nth-of-type(2) > a:nth-of-type(1) {
  max-width: 180px;
}
div:nth-of-type(3) > a {
  max-width: 220px;
  margin: 0.5em 1.5em;
}
/* scale the ubisoft logo better */
div:nth-of-type(3) > a:nth-of-type(2) {
  max-width: 170px;
}
div:nth-of-type(4) > a {
  max-width: 195px;
  margin: 0.5em 2em;
}
/* scale the dominos logo better */
div:nth-of-type(4) > a:nth-of-type(1) {
  max-width: 140px;
}
.partner > img {
  filter: grayscale(100%);
  opacity: 0.66;
  transition: all 0.3s ease;
  max-height:20vh;
}
.partner > img:hover{
  filter: grayscale(0%);
  opacity: 1;
}
 @media (max-width: 500px) {
  div:nth-of-type(1) > a {
    margin: 1.5em 0.5em;
  }
  div:nth-of-type(2) > a {
    margin: 1.5em 0.5em;
  }
  div:nth-of-type(3) > a {
    margin: 1.5em 0.5em;
  }
  div:nth-of-type(4) > a {
    margin: 1.5em 0.5em;
  }
}
</style>