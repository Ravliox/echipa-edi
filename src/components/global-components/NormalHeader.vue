<template>
  <div id = "normal-header">
    <nav class = "navbar">
      <div class = "navbar-brand">
        <router-link to="/" class = "navbar-item"><img :src="logo"  alt = "Logo Eveniment"></router-link>
        <div v-on:click="toggleBurger" class = "navbar-burger" v-bind:class="{'is-active':isActive}" data-target="navMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class = "navbar-menu" v-bind:class="{'is-active': isActive}" id="navMenu">
        <div class = "navbar-start">
        </div>
        <div class ="navbar-end" v-on:click="deactivate">
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
.navbar {
  min-height: 10vh;
}

.navbar-menu, .navbar-brand, .navbar-end{
  background-color: $primary-color;
  transition: 0.2s all;
}

.navbar-item{
  outline: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

a {
  color: $primary-font-color;
}

.navbar-item img {
  max-height: 5rem;
}

.navbar-item:hover{
  background-color: $secondary-color;
  color: $primary-font-color;;
}

.navbar-burger span {
  background-color: $secondary-color;
}

.dropdown {
  height: 100%;
}

.dropdown-item:hover {
  background-color: $fade-color;
}

.navbar-link:hover {
  background-color: $secondary-color;
}
</style>



