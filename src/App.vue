<template>
  <div id = "app">
    
    <InvertedHeader :data="header"></InvertedHeader>
    <ContactForm></ContactForm>
  </div>
</template>


<script>

import InvertedHeader from '@/components/global-components/InvertedHeader'
import ContactForm from '@/components/contact-components/ContactForm'

export default {
  components: {
   
    InvertedHeader,
    ContactForm
  },
  data() {
    return {
      header: {
        transparent: false
      }
    }
  }
}
</script>


<style lang="scss">
#app {
  min-height: 100vh;
}

</style>
