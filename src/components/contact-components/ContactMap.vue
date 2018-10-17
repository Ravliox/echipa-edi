<template>
  <div id = "map">
    <p class = "title font1"> {{$t('contactMap.title')}} </p>
    <div class = "columns">

	    <div class="column is-7">

	    	<gmap-map
		    :center="center"
		    :zoom="17"
		    class = "google-map box"
		  	>
			    <gmap-marker
			      :key="index"
			      v-for="(m, index) in markers"
			      :position="m.position"
			      :clickable="true"
			      :draggable="true"
			      @click="center=m.position"
			    ></gmap-marker>
  			</gmap-map>
	  	</div>

  		<div class="column details">
    		<h2 class="font1">{{$t('contactMap.lc_title')}}</h2>
    		<div class = "date">
    			<span> {{$t('contactMap.address1')}} </span>
          <br>
          <span> {{$t('contactMap.address2')}} </span>
          <br>
          <span> {{$t('contactMap.address3')}} </span>
          <br>
    			<span> {{$t('contactMap.telephone')}} </span>
    			<br>
    			<span>{{$t('contactMap.email')}}</span>
    		</div>
  		</div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        center: {lat: 44.43872, lng: 26.05015},
        markers: [{
          position: {lat: 44.43872, lng: 26.05015}
        }]
      }
    }
  }
</script>

<style lang="scss">
div {
  text-align: center;
  margin-bottom: 30px;
}

.title {
  font-weight: bold;
  font-size: 40px;
}

h2 {
  font-size: 40px;
  font-weight: bold;
}

.details {
  margin-top: 80px;
}

.google-map {
  width: 100%;
  height:100%;
  min-height: 450px;
  background-color: grey;
  margin-right: 50px;
}

.date {
  margin-top: 40px;
  font-size: 20px;
}

.vue-map {
  margin-bottom:0px!important;
}
</style>