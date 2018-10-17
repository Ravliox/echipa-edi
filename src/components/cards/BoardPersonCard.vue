<template>
 <div class="box">
	<div class = "columns is-multiline">
		<div class="column">
			<figure class="image is-4by3">
				<img :src="organizer.img" :alt="organizer.name">
			</figure>
		</div>
		<div class="column txt">
			<div class = "name">{{organizer.name}}</div>
			<div class = "function">{{$t(organizer.function)}}</div>
		</div>
	</div>
</div>
</template>

<script>
 
  export default{
  
  props: [
    'organizer'
  ],
  data () {
    return {
      
    }
  },
  methods: {
    
  }
}
</script>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            

<style scoped lang = "css">
.title{
	font-weight: bold;
	font-size: 20px;
}
figure{
	margin: auto;
}
.name{
	font-size: 25px;
	font-family: OpenSanssB;
	line-height: 80%;
  margin: auto;
}
.function{
	font-size: 15px;
}

.media-content{
	padding-left: 5%;
}
.box{
	height: 100%;
	max-width: 350px;
}
.txt {
  text-align: center;
}
</style>
