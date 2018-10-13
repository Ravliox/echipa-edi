<template>
  <div id = "introduction">
    <!-- <p>{{$t('register.introduction.introduction1')}}</p>
    <p>{{$t('register.introduction.introduction2')}}</p> -->
    <h1>{{$t('register.introduction.header')}}</h1>
    <a href="https://goo.gl/forms/26fmHfvFUhaYFgvA3" type = "button" class = "button">{{$t('register.introduction.join')}}</a>
    <!--<h1 class = "header1"> {{$t("home.mainslider.end")}} </h1>-->
    <p v-html="introductionText"></p>
  </div>
</template>

<script>
  export default{
    data() {
      return {
        introductionText: this.$t('register.information')
      }
    }
  }
</script>

<style lang="scss">
  div{
    text-align: center;
  }
  p{
    color: black;
  }
  a{
    display:block;
  }
  .button{
    margin-top: 20px;
    margin-bottom: 40px;
    width: auto;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 0.53em;
    font-size: 35px;
    background-color: $primary-color;
    color: $primary-font-color; 
    outline: none;
    border: none;
    font-weight: bold;
  }
  .button:hover{
    color: $secondary-color;
    background-color: $secondary-font-color;
  }
  .button:focus{
    color: white;
  }
  .button::-moz-focus-inner {
    border: 0;
  }

  h1 {
    font-size: 32px;
  }
</style>