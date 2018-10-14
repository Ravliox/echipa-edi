<template>
  <div class="testimonial">
    <h2>Ce barfesc astia despre noi</h2>
    <flickity  class="flickity" ref="flickity" :options="flickityOptions">
      <div class="carousel-cell" v-for="(slide, index) in testimContent.slides" :key="index">
        <TestimCard  :testimContent="slide"></TestimCard>
      </div>
      <div class="carousel-cell" v-for="(slide, index) in testimContent.slides" :key="index">
        <TestimCard2 :testimContent="slide"></TestimCard2>
      </div>
      <!-- <div class="carousel-cell" v-for="slide in testimContent.slides">
        <TestimCard3 v-for="cardContent in slide" :testimContent="cardContent"></TestimCard3>
      </div>
      <div class="carousel-cell" v-for="slide in testimContent.slides">
        <TestimCard4 v-for="cardContent in slide" :testimContent="cardContent"></TestimCard4>
      </div> -->
    </flickity>
  </div>
</template>


<script>
import Flickity from "vue-flickity";
import TestimCard from "@/components/cards/testimonial/TestimCard";
import TestimCard2 from "@/components/cards/testimonial/TestimCard2";
import TestimCard3 from "@/components/cards/testimonial/TestimCard3";
import TestimCard4 from "@/components/cards/testimonial/TestimCard4";
import slides from "@/assets/resources/testim-quotes.js"

export default {
  components: {
    Flickity,
    TestimCard,
    TestimCard2,
    TestimCard3,
    TestimCard4
  },
  data() {
    return {
      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: true,
        pageDots: true,
        wrapAround: true,
        // freeScroll: true
        // any options from Flickity can be used
      },
      testimContent: {
        title: "Ce barfesc astia despre noi",
        slides
      }
    };
  }
};
</script>


<style lang="scss" scoped>


.testimonial {
  text-align: center;
  margin: 40px 0 40px 0;
}

h2 {
  padding-top: 2%;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 2rem;
  margin-bottom: 20px;
}

.carousel-cell {
    width: 100%; /* full width */
    max-height: 80vh; /* height of carousel */
    display: flex;
    align-items: center;
    justify-content: center;
}

@media (max-width: 900px) {
  .carousel-cell {
    flex-wrap: wrap;
    max-height: none;
  }
}

</style>
