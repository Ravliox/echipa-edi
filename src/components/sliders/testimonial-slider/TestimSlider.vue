<template>
  <div class="testimonial">
        <h2>Ce barfesc astia despre noi</h2>
        <flickity  class="flickity" ref="flickity" :options="flickityOptions">
        <!-- <div class="carousel-cell">
          <TestimCard :testimContent="testimContent1"></TestimCard>
          <TestimCard :testimContent="testimContent2"></TestimCard>
        </div>
        <div class="carousel-cell">
          <TestimCard :testimContent="testimContent3"></TestimCard>
          <TestimCard :testimContent="testimContent4"></TestimCard>
        </div> -->
        <div class="carousel-cell" v-for="slide in testimContent.slides">
          <TestimCard v-for="cardContent in slide" :testimContent="cardContent"></TestimCard>
        </div>
        <div class="carousel-cell" v-for="slide in testimContent.slides">
          <TestimCard2 v-for="cardContent in slide" :testimContent="cardContent"></TestimCard2>
        </div>
        <div class="carousel-cell" v-for="slide in testimContent.slides">
          <TestimCard3 v-for="cardContent in slide" :testimContent="cardContent"></TestimCard3>
        </div>
        <div class="carousel-cell" v-for="slide in testimContent.slides">
          <TestimCard4 v-for="cardContent in slide" :testimContent="cardContent"></TestimCard4>
        </div>
    </flickity>
  </div>
</template>


<script>
import Flickity from "vue-flickity";
import TestimCard from "@/components/cards/testimonial/TestimCard";
import TestimCard2 from "@/components/cards/testimonial/TestimCard2";
import TestimCard3 from "@/components/cards/testimonial/TestimCard3";
import TestimCard4 from "@/components/cards/testimonial/TestimCard4";

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
        slides: [
          [
            {
              quote: "Cat ipsum dolor sit amet, slap owner's face at 5am until human fills food dish or walk on car leaving trail of paw prints on hood and windshield so slap kitten brother with paw. Meowzer sleep on dog bed, force dog to sleep on floor, or bathe private parts with tongue then lick owner's face milk the cow stuff and things. Scamper chase red laser dot but poop in litter box, scratch the walls plays league of legends. Lick butt and make a weird face dont wait for the storm to pass.",
              author: {
                name: "Eduard Istrate",
                description: "Alcoolist profesional de ocazie",
                img: "https://scontent.fotp3-3.fna.fbcdn.net/v/t1.15752-9/31453881_1704515236263476_4618382980543414272_n.png?_nc_cat=108&oh=0b04a2df76ac8e9052a1c4355c17bc13&oe=5C54CA38"
              }
            },
            {
              quote: "Mew asdflkjaertvlkjasntvkjn (sits on keyboard) catasstrophe. Cough hiding behind the couch until lured out by a feathery toy somehow manage to catch a bird but have no idea what to do next, so play with it until it dies of shock so put butt in owner's face ask to go outside and ask to come inside and ask to go outside and ask to come inside or really likes hummus.",
              author: {
                name: "Teodor Tincu",
                description: "HR & IT",
                img: "https://scontent.fotp3-3.fna.fbcdn.net/v/t1.15752-9/31577812_1704522422929424_5437934840236212224_n.png?_nc_cat=104&oh=533689544f598ed290fd4904776f8b96&oe=5C17B796"
              }
            }
          ],
          [
            {
              quote: "That box? i can fit in that box and sometimes switches in french and say 'miaou' just because well why not.",
              author: {
                name: "Robert Statescu",
                description: "CP",
                img: "https://scontent.fotp3-3.fna.fbcdn.net/v/t1.15752-9/31689078_1704526806262319_4393284839776714752_n.png?_nc_cat=104&oh=85c4e085c15270edc5708201afe782c7&oe=5C1F4C10"
              }
            },
            {
              quote: "Bite the neighbor's bratty kid chase after silly colored fish toys around the house so sniff catnip and act crazy refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am hiding behind the couch until lured out by a feathery toy meow for swat turds around the house.",
              author: {
                name: "Radu Bucur",
                description: "Cool guy with awesome hair",
                img: "https://scontent.fotp3-3.fna.fbcdn.net/v/t1.15752-9/31655529_1704534399594893_6750126406627229696_n.png?_nc_cat=105&oh=1a6c480fec327dc057314c731fa98703&oe=5C56076B"
              }
            }
          ]
        ]
      }
    };
  }
};
</script>


<style lang="scss" scoped>


.testimonial {
    background-color: #eee;
    text-align: center;
}

h2 {
  padding-top: 2%;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 2rem;
}

.carousel-cell {
    width: 100%; /* full width */
    max-height: 50vh; /* height of carousel */
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
