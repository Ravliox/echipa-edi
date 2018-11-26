/* HEROES */

import Eestec from '@/components/heroes/Eestec'
import MediaHero from '@/components/heroes/MediaHero'


/* SLIDERS */

import Slider from '@/components/sliders/main-slider/Slider'
import TestimSlider from '@/components/sliders/testimonial-slider/TestimSlider'

/* WIDGETS */

import Countdown from '@/components/widgets/Countdown.vue'
import PieChartCountdown from '@/components/widgets/PieChartCountdown.vue'
import Numbers from '@/components/widgets/Numbers.vue'
import Schedule from '@/components/widgets/Schedule.vue'
import ToTopArrow from '@/components/widgets/ToTopArrow.vue'

/* PARTNERS */

import Partners from '@/components/partners/Partners'


/* CARDS */

import BoardPersonCard from '@/components/cards/BoardPersonCard'
import ContactPersonCard from '@/components/cards/ContactPersonCard'
import InfoCard from '@/components/cards/InfoCard'
import NewsCard from '@/components/cards/NewsCard'

/* resources for cards */
import contactPeople from '@/assets/resources/contactPerson.js'
import infoCards from '@/assets/resources/infoCard.js'
import newsCards from '@/assets/resources/newsCards.js'
import organizers from '@/assets/resources/organizer.js'

/* CONTACT */

import ContactForm from '@/components/contact-components/ContactForm'
import ContactMap from '@/components/contact-components/ContactMap'

/* REGISTER */

import Introduction from '@/components/registration-components/Introduction'
import Rules from '@/components/registration-components/Rules'

export let components = {
    Eestec,
    MediaHero,
    Slider,
    TestimSlider,
    Countdown,
    PieChartCountdown,
    Numbers,
    Schedule,
    ToTopArrow,
    Partners,
    BoardPersonCard,
    ContactPersonCard,
    InfoCard,
    NewsCard,
    ContactForm,
    ContactMap,
    Rules,
    Introduction
}

export let resources = {
    contactPeople,
    infoCards,
    newsCards,
    organizers
}

/* Declarari pentru componente */
/*
<!-- <PieChartCountdown :ext_date="date"/> -->
<!-- <Countdown :ext_date="date"/> -->
<!-- <MediaHero :hasVideo="true" /> -->
<!-- <MediaHero :hasVideo="false" /> -->
<!-- <Slider /> -->
<!-- <TestimSlider :normalQuotes="true" /> -->
<!-- <TestimSlider :normalQuotes="false" /> -->
<!-- <Schedule :multiline="false" /> -->
<!-- <Schedule :multiline="true" /> -->
<!-- <Numbers /> -->
<!-- <Partners /> -->
<!-- <contact-map /> -->
<!-- <contact-form /> -->
<!-- <div class = "columns is-centered">
  <div class = "column is-3" v-for = "(news, index) in newsCards" :key="index">
    <NewsCard :newsArticle="news" />
  </div>
</div> -->
<!-- <div class = "columns is-centered">
  <div class = "column is-2" v-for = "(person, index) in contactPeople" :key="index">
    <ContactPersonCard :contactPerson="person" />
  </div>
</div> -->
<!-- <div class = "columns is-centered">
  <div class = "column is-2" v-for = "(infoCard, index) in infoCards" :key="index">
    <info-card :cardcontent="infoCard" />
  </div>
</div> -->
<!-- <div class = "columns is-centered">
  <div class = "column is-2" v-for = "(organizer, index) in organizers" :key="index">
    <board-person-card :organizer="organizer" />
  </div>
</div> -->
*/
