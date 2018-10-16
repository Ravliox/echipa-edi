+<template>
  <div id = "partners">
    <div v-for="(partnerType, index) in partners" :key="index" class = "partner-type">
        <h2>{{$t(partnerType.name)}}</h2>
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
  padding: 0 20%;
}

h2 {
  display: block;
  font-weight: bold;
  font-size:  5vh;
  letter-spacing: 1px;
  text-align: center;
}

.partners-list{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
}
.partner{
  margin: 0.5em 0.75em;
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

.partner-type:nth-child(2) img {
  max-height: 17vh;
}

.partner-type:nth-child(3) img {
  max-height: 14vh;
}

.partner-type:nth-child(4) img {
  max-height: 12vh;
}

.partner-type:nth-child(5) img {
  max-height: 8vh;
}
</style>