<template>
  <div id = "slide1">
    <h1 class = "title"> Boardaoke </h1>
    <p class = "subtitle"> Te-ai plictisit sa stai in casa hai sa jucam jouri de masa! </p>
    <p class = "subtitle"> Veniti in data de 27 noiembrie la ora 17:30 sa schimbam plictiseala cu experienta faina </p>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
#slide1 {
  width: 100%;
  height: 100%;
  //comentati ce nu vreti si alegeti intre culoare si imagine
  background-color: darken($primary-color, 10%);
  background-image: url('./sliderbackground.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}

.title {
  font-size: 50px;
  color: pink;
}

.subtitle {
  margin-top: 100px;
  font-size: 30px;
    color: pink;
text-align: center;
}
</style>