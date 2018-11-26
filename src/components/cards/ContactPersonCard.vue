<template>
	<div class="box">
	  <div class = "media-center">
	    <figure class="image is-3by3">
	      <img :src = "contactPerson.img" :alt="contactPerson.name">
	    </figure>
	  </div>
	  <div class="media-content">
	    <p class="title is-4">{{ contactPerson.name }}</p>
	    <div>{{ $t(contactPerson.function) }}</div>
	    <div>{{ contactPerson.phone }}</div>
	    <div>{{ contactPerson.email }}</div>
	  </div>
	</div>
</template>

<script>
export default{
  name: 'ContactPersonCard',
  props: [
    'contactPerson'
  ],
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.title{
	font-weight: bold;
	font-size: 20px;
  margin-top: 10px;
}
span{
	margin-top: 30px;
}
div{
	text-align: center;
	margin-bottom:0px;
}
img{
	border-radius: 50%;
  height: 170px;
  width: 175px;
}
.box{
  display:inline-block;
  height: 100%;
  width: 100%;
}
img {
	margin: auto;
}
</style>