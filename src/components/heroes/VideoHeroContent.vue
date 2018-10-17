<template>
  <div id="videoherocontent">
    <h1> {{title}} </h1>
    <p>The greatest project in the history of this department.<br> Get ready to be fucked by Edy and his acolytes</p>
    <router-link to="/about" class="button is-primary is-inverted is-outlined is-large">SEE MORE</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'OMNIUM 1.0'
    }
  }
}
</script>

<style scoped lang="scss">
.button.is-primary.is-inverted.is-outlined {
  border-color: $primary-font-color;
  color: $primary-font-color;
  margin-top: 5vh;
  font-weight:700;
  border-width: 2px;
  border-radius:10px;
}

.button.is-primary.is-inverted.is-outlined:hover {
  background-color:transparent;
  color:$primary-color;
  border-color:$primary-color;
}

#videoherocontent {
  text-align: center;
  margin: auto;
  max-width: 60%;
}

h1 {
  text-align: center;
  font-size: 10vh !important;
  font-weight: bold;
}

p {
  font-size: 3vh;
  font-weight: bold;
}

@media only screen and (max-width: 1024px) {
  h1{
    font-size: 6vh !important;
  }
  p{
    font-size: 2.5vh;
  }
}

@media only screen and (max-width: 439px) {
  #videoherocontent {
    margin: auto;
    text-align: center;
    max-width: 80% !important;
  }
  
  .button.is-primary.is-inverted.is-outlined {
    margin-top:2vh;
  }
}
</style>