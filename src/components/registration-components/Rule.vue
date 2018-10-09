<template>
	<div id = "rule">
		<div class = "sectiune" v-on:click="toggleShow" v-bind:class="{'square-bottom':isShowing}" >
			<span class = "unselectable">{{$t(rule.header)}}</span>
			<span class="icon i-custom is-large is-hidden-mobile">
        <div><font-awesome-icon icon="angle-down" v-bind:class="{'icon-arrow-down': isRotated, 'icon-arrow-left': !isRotated}" /></div>
			</span>
		</div>
    <transition name = "expand">
		  <div v-if="isShowing" v-html="$t(rule.content)" class = "continut"></div>
    </transition>
	</div>
</template>

<script>
  export default {
    name: 'rule',
    props: [
      'rule'
    ],
    data () {
      return {
        rotation: 'rotation-down',
        isRotated: false,
        isShowing: false
      }
    },
    methods: {
      toggleShow: function () {
        this.isShowing = !this.isShowing
        this.isRotated = !this.isRotated
      }
    }
  }
</script>

<style lang="scss">
  #rule{
    margin-bottom: 25px;
  }
  .sectiune{
    background-color: $primary-color;
    font-size: 25px;
    font-weight: bold;
    border-radius: 7px 7px 7px 7px;
    padding: 10px;
    cursor: pointer;
  }
  .square-bottom {
    border-radius: 7px 7px 0px 0px;
  }
  .continut{
    background-color: $fade-color;
    color: black;
    border-radius: 0px 0px 7px 7px;
    max-height: 250rem;
    width: 100%;
    overflow:hidden;
    padding :10px;
    font-size: 15px;
  }
  .icon-arrow-down {
    transform: rotate(0deg);
    transition: transform 0.1s linear;
  }
  .icon-arrow-left {
    transform: rotate(90deg);
    transition: transform 0.1s linear;
  }
  .expand-enter-active{
    transition: all 0.9s;
    padding :10px;
  }
  .expand-enter{
    max-height: 0px;
    padding :10px;
  }
  .expand-leave-active {
    transition: all 0.3s;
    padding :10px;
  }
  .expand-leave-to {
    padding :10px;
    max-height: 0px;
  }
  .i-custom{
    float: right;
    padding-bottom: 10px;
  }
  .unselectable {
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
  }
</style>