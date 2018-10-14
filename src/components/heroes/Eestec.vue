<template>
  <div id = "eestec" :style="style">
    <div class="eestec-content">
      <div class="logo">
      <a :href="link">
        <img :src="logo" id="logo" alt="EESTEC Bucharest">
      </a>
    </div>
    <div class="text">
      <h1>{{$t('home.eestec.title')}}</h1>
      <p class="description">{{$t('home.eestec.about')}}</p>
    </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        logo: require('@/assets/images/EESTEC.png'),
        link: 'http://eestec.ro'
      }
    }
  }
</script>

<style lang="scss">
  #eestec {
    min-width: 100%;
    background-image: url("../../assets/images/poza_grup.jpg");
    background-size: cover;
    background-position: center;
  }
  .eestec-content{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5%;
    min-height: 500px;
    flex-wrap: wrap;
  }
  .logo {
    flex-grow: 30%;
    min-width: 300px;
    margin-right: 5%;
  }
  .text {
    flex-basis: 50%;
    text-align: justify;
  }
  p, h1 {
    color: #fff!important;
  }
  h1 {
    text-align: center;
    font-size: 3.5em;
    font-weight: 500;
  }
  @media(max-width: 1002px) {
    .logo {
      margin-right: 0px;
      margin-bottom: 2em;
    }
    .text {
      flex-basis: 100%;
      text-align: right;
    }
  }
</style>