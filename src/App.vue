<template>
  <div id = "app">
    <!-- <NormalHeader :data="header"></NormalHeader> -->
    <!-- THESE TWO LINES HAVE TO BE TOGETHER. INVERTED HEADER DOES NOT WORK ON MOBILE -->
    <InvertedHeader :data="header" class="is-hidden-mobile"></InvertedHeader>
    <NormalHeader :data="header" class="is-hidden-desktop"></NormalHeader>
    <HoverBar v-if="!hoverBar.value" :hoverBarData="hoverBar"></HoverBar>
    <div class = "page">
      <h1>Lorem ipsum dolor sit amet, ad liber feugiat usu. Te duo dictas equidem. Adolescens adversarium et vix, munere eleifend reprimique in duo. Suscipit interpretaris mei te, paulo intellegam sea ei, an sea saepe putent. Nam novum nominavi tacimates at, dicam admodum ad pri.

Homero soleat invidunt vim ei, suas nostrud ei ius. No solum constituam temporibus eos, justo saepe nusquam duo ad, et vis semper verear meliore. Eu pro autem mundi quaerendum, eu qui tale tota definitionem, deserunt aliquando posidonium vim te. Vix solum semper te, quo an adhuc vidisse diceret. An iisque salutatus usu, id has verterem iudicabit. Ut vel magna posidonium, eu ius dicam platonem consequat, sumo possit blandit no ius.

Cu mea etiam liberavisse instructior, electram cotidieque interpretaris nam in. Eam dictas saperet in, id nam doming constituto, in sed nibh autem philosophia. Qui congue deserunt ei, ad eos blandit convenire necessitatibus, vel in solet tation signiferumque. Sed ex natum choro melius. Error delectus disputando nec ut, wisi lucilius ex ius, labore lobortis voluptaria vix ut.

Ei est libris noster, vim no nonumes vivendo. Eos ad qualisque definiebas. Vim no modus legimus civibus. Cu mei ludus impedit. Cu est propriae adolescens, sanctus definiebas vituperata no qui. Cu per simul salutatus.

Assum erroribus eos in, te detracto consequat disputando nec. Vis ut novum utamur deseruisse. Eu hinc harum inimicus pri, nemore semper fabellas ut mel. Eam eu habeo impedit, ius et habeo utroque tibique, eu vim iudico vulputate. Quis summo invidunt mea ea, et odio dictas honestatis vix, vis error philosophia deterruisset et.</h1>
<h1>Lorem ipsum dolor sit amet, ad liber feugiat usu. Te duo dictas equidem. Adolescens adversarium et vix, munere eleifend reprimique in duo. Suscipit interpretaris mei te, paulo intellegam sea ei, an sea saepe putent. Nam novum nominavi tacimates at, dicam admodum ad pri.

Homero soleat invidunt vim ei, suas nostrud ei ius. No solum constituam temporibus eos, justo saepe nusquam duo ad, et vis semper verear meliore. Eu pro autem mundi quaerendum, eu qui tale tota definitionem, deserunt aliquando posidonium vim te. Vix solum semper te, quo an adhuc vidisse diceret. An iisque salutatus usu, id has verterem iudicabit. Ut vel magna posidonium, eu ius dicam platonem consequat, sumo possit blandit no ius.

Cu mea etiam liberavisse instructior, electram cotidieque interpretaris nam in. Eam dictas saperet in, id nam doming constituto, in sed nibh autem philosophia. Qui congue deserunt ei, ad eos blandit convenire necessitatibus, vel in solet tation signiferumque. Sed ex natum choro melius. Error delectus disputando nec ut, wisi lucilius ex ius, labore lobortis voluptaria vix ut.

Ei est libris noster, vim no nonumes vivendo. Eos ad qualisque definiebas. Vim no modus legimus civibus. Cu mei ludus impedit. Cu est propriae adolescens, sanctus definiebas vituperata no qui. Cu per simul salutatus.

Assum erroribus eos in, te detracto consequat disputando nec. Vis ut novum utamur deseruisse. Eu hinc harum inimicus pri, nemore semper fabellas ut mel. Eam eu habeo impedit, ius et habeo utroque tibique, eu vim iudico vulputate. Quis summo invidunt mea ea, et odio dictas honestatis vix, vis error philosophia deterruisset et.</h1>
<h1>Lorem ipsum dolor sit amet, ad liber feugiat usu. Te duo dictas equidem. Adolescens adversarium et vix, munere eleifend reprimique in duo. Suscipit interpretaris mei te, paulo intellegam sea ei, an sea saepe putent. Nam novum nominavi tacimates at, dicam admodum ad pri.

Homero soleat invidunt vim ei, suas nostrud ei ius. No solum constituam temporibus eos, justo saepe nusquam duo ad, et vis semper verear meliore. Eu pro autem mundi quaerendum, eu qui tale tota definitionem, deserunt aliquando posidonium vim te. Vix solum semper te, quo an adhuc vidisse diceret. An iisque salutatus usu, id has verterem iudicabit. Ut vel magna posidonium, eu ius dicam platonem consequat, sumo possit blandit no ius.

Cu mea etiam liberavisse instructior, electram cotidieque interpretaris nam in. Eam dictas saperet in, id nam doming constituto, in sed nibh autem philosophia. Qui congue deserunt ei, ad eos blandit convenire necessitatibus, vel in solet tation signiferumque. Sed ex natum choro melius. Error delectus disputando nec ut, wisi lucilius ex ius, labore lobortis voluptaria vix ut.

Ei est libris noster, vim no nonumes vivendo. Eos ad qualisque definiebas. Vim no modus legimus civibus. Cu mei ludus impedit. Cu est propriae adolescens, sanctus definiebas vituperata no qui. Cu per simul salutatus.

Assum erroribus eos in, te detracto consequat disputando nec. Vis ut novum utamur deseruisse. Eu hinc harum inimicus pri, nemore semper fabellas ut mel. Eam eu habeo impedit, ius et habeo utroque tibique, eu vim iudico vulputate. Quis summo invidunt mea ea, et odio dictas honestatis vix, vis error philosophia deterruisset et.</h1>
<h1>Lorem ipsum dolor sit amet, ad liber feugiat usu. Te duo dictas equidem. Adolescens adversarium et vix, munere eleifend reprimique in duo. Suscipit interpretaris mei te, paulo intellegam sea ei, an sea saepe putent. Nam novum nominavi tacimates at, dicam admodum ad pri.

Homero soleat invidunt vim ei, suas nostrud ei ius. No solum constituam temporibus eos, justo saepe nusquam duo ad, et vis semper verear meliore. Eu pro autem mundi quaerendum, eu qui tale tota definitionem, deserunt aliquando posidonium vim te. Vix solum semper te, quo an adhuc vidisse diceret. An iisque salutatus usu, id has verterem iudicabit. Ut vel magna posidonium, eu ius dicam platonem consequat, sumo possit blandit no ius.

Cu mea etiam liberavisse instructior, electram cotidieque interpretaris nam in. Eam dictas saperet in, id nam doming constituto, in sed nibh autem philosophia. Qui congue deserunt ei, ad eos blandit convenire necessitatibus, vel in solet tation signiferumque. Sed ex natum choro melius. Error delectus disputando nec ut, wisi lucilius ex ius, labore lobortis voluptaria vix ut.

Ei est libris noster, vim no nonumes vivendo. Eos ad qualisque definiebas. Vim no modus legimus civibus. Cu mei ludus impedit. Cu est propriae adolescens, sanctus definiebas vituperata no qui. Cu per simul salutatus.

Assum erroribus eos in, te detracto consequat disputando nec. Vis ut novum utamur deseruisse. Eu hinc harum inimicus pri, nemore semper fabellas ut mel. Eam eu habeo impedit, ius et habeo utroque tibique, eu vim iudico vulputate. Quis summo invidunt mea ea, et odio dictas honestatis vix, vis error philosophia deterruisset et.</h1>
<h1>Lorem ipsum dolor sit amet, ad liber feugiat usu. Te duo dictas equidem. Adolescens adversarium et vix, munere eleifend reprimique in duo. Suscipit interpretaris mei te, paulo intellegam sea ei, an sea saepe putent. Nam novum nominavi tacimates at, dicam admodum ad pri.

Homero soleat invidunt vim ei, suas nostrud ei ius. No solum constituam temporibus eos, justo saepe nusquam duo ad, et vis semper verear meliore. Eu pro autem mundi quaerendum, eu qui tale tota definitionem, deserunt aliquando posidonium vim te. Vix solum semper te, quo an adhuc vidisse diceret. An iisque salutatus usu, id has verterem iudicabit. Ut vel magna posidonium, eu ius dicam platonem consequat, sumo possit blandit no ius.

Cu mea etiam liberavisse instructior, electram cotidieque interpretaris nam in. Eam dictas saperet in, id nam doming constituto, in sed nibh autem philosophia. Qui congue deserunt ei, ad eos blandit convenire necessitatibus, vel in solet tation signiferumque. Sed ex natum choro melius. Error delectus disputando nec ut, wisi lucilius ex ius, labore lobortis voluptaria vix ut.

Ei est libris noster, vim no nonumes vivendo. Eos ad qualisque definiebas. Vim no modus legimus civibus. Cu mei ludus impedit. Cu est propriae adolescens, sanctus definiebas vituperata no qui. Cu per simul salutatus.

Assum erroribus eos in, te detracto consequat disputando nec. Vis ut novum utamur deseruisse. Eu hinc harum inimicus pri, nemore semper fabellas ut mel. Eam eu habeo impedit, ius et habeo utroque tibique, eu vim iudico vulputate. Quis summo invidunt mea ea, et odio dictas honestatis vix, vis error philosophia deterruisset et.</h1>
      <router-view></router-view>
    </div>
    <HoverBar></HoverBar>
    <Footer @stop=""></Footer>
  </div>
</template>


<script>
import Rules from '@/components/registration-components/Rules'
import NormalHeader from '@/components/global-components/NormalHeader'
import InvertedHeader from '@/components/global-components/InvertedHeader'
import Footer from '@/components/global-components/Footer'
import HoverBar from '@/components/global-components/HoverBar'

export default {
  components: {
    NormalHeader,
    InvertedHeader,
    Footer,
    HoverBar
  },
  data() {
    return {
      header: {
        transparent: false
      },
      hoverBar: {
        value: false,
        fixed: true
      }
    }
  },
  methods: {
    hideHoverBar() {
      this.hoverBar.value = !this.hoverBar.value;
    },
    stopHoverBar() {
      console.log(this.hoverBar);
      // this.hoverBar.fixed = !this.hoverBar.fixed;
    }
  }
}
</script>


<style lang="scss">
#app {
  min-height: 100vh;
}

.page {
  min-height: 95vh;
  padding: 50px 200px 0 200px;
}
</style>
