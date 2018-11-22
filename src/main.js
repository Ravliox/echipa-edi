import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import VueResource from 'vue-resource'

import VueI18n from 'vue-i18n'
import en from './locales/en.json'
import ro from './locales/ro.json'

import Flickity from 'vue-flickity'
import VueWaypoint from 'vue-waypoint'
import VueScrollTo from 'vue-scrollto'
import * as VueGoogleMaps from 'vue2-google-maps' 

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, fab)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

Vue.use(Flickity)
Vue.use(VueWaypoint)
Vue.use(VueResource);

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAQLikAuA2vwuToJgv5DEWF16i5T1V9ieY',
  }
})

Vue.config.productionTip = false

Vue.use(Buefy)

Vue.use(VueI18n)
const messages = {
  en,
  ro
}

const i18n = new VueI18n({
  locale: 'ro',
  messages
})

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
