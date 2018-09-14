<template>
  <div id = "normal-header">
    <nav class = "navbar" :class="{'transparent': data.transparent}">
      <div class = "navbar-brand" :class="{'transparent': data.transparent}">
        <router-link to="/" class = "navbar-item"><img :src="logo"  alt = "Logo Eveniment"></router-link>
        <div v-on:click="toggleBurger" class = "navbar-burger" v-bind:class="{'is-active':isActive}" data-target="navMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class = "navbar-menu" v-bind:class="{'is-active': isActive, 'transparent': data.transparent}" id="navMenu">
        <div class = "navbar-start">
        </div>
        <div class ="navbar-end" v-on:click="deactivate" :class="{'transparent': data.transparent}">
          <div v-for = "item in routes" :key="routes.indexOf(item)"> 
            <router-link class = "navbar-item" :to="item.path.ro" v-if="item.hasChildren !== 'true'">{{$t(item.name)}} </router-link>
            <div class = "navbar-item has-dropdown is-hoverable" v-if="item.hasChildren === 'true'">
              <a class = "navbar-link">
                {{$t(item.name)}}
              </a>
              <div class = "navbar-dropdown is-right">
                <div v-for="subroute in item.subroutes" :key="item.subroutes.indexOf(subroute)">
                  <router-link :to = "subroute.path.ro"  class = "navbar-item"> {{$t(subroute.name)}} </router-link>
                  <hr class = "navbar-divider" v-if="item.subroutes.indexOf(subroute) !== item.subroutes.length - 1">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>


<script>
import routes from '@/assets/resources/routes.json';

export default {
  props: [
    'data'
  ],
  data() {
    return {
      routes,
      isActive: false,
      logo: require('@/assets/images/logo.png')
    }
  },
  methods: {
    toggleBurger: function() {
      this.isActive = !this.isActive;
    },
    deactivate: function() {
      this.isActive = false;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/theme/headers.scss';
</style>



