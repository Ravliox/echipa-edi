<template>
  <div id = "contactform">
    
  	<div class = "header">
      <span class = "title font1"> {{$t('contact.contactform.title')}} </span>
      <br>
    <span class = "subtitle">{{$t('contact.contactform.subtitle')}}</span>
    </div>
    <div class = "columns details">
    	<div class = "column">
	    	<form>
	    		<div>
	    			<span class = "subtitle">{{$t('contact.contactform.name')}}</span>
	    			<br>
	    			<input v-model="name" type = "text">
	    		</div>
	    		<div class = "labels">
	    			<span>{{$t('contact.contactform.email')}}</span>
	    			<br>
	    			<input v-model="email_addr" type = "text">
	    		</div>
	    		<div class = "labels">
	    			<span>{{$t('contact.contactform.titlu')}}</span>
	    			<br>
	    			<input v-model="title" type = "text">
            <input v-model="telephone_number" v-bind:class="{'telephone': tel}" type="text">
	    		</div>
	    	</form>
    	</div>
    	<div class = "column is-7">
    		<form>
    			<span class = "subtitle">{{$t('contact.contactform.message')}}</span>
    			<br>
    			<textarea v-model="message"></textarea>
    		</form>
    	</div>
    </div>
    <div class = "levels">
      <div class = "level-item">
        <button class = "button font1" v-on:click="send">{{$t('contact.contactform.send')}}</button>
      </div>
    </div>
    <div class = "wrapper">
      <p class = "subtitle warning" v-if="invalid"> {{$t(invalid_message)}} </p>
      <p class = "subtitle success" v-if="sent"> {{$t(success_message)}} </p>
    </div>
  </div>
  
</template>

<script>
  export default {
    data () {
      return {
       
      }
    },
   
    methods: {
     
    }
  }
</script>

<style scoped>
.header{
	margin-top: 5px;
	text-align: center;
	margin-bottom: 30px;
}
.title{
	font-weight: bold;
	font-size: 40px;
}
.labels{
	padding-top: 25px;
	font-size: 20px;
}
.telephone{
  display: none;
}
.details{

	margin-left: 5%;
}
input{
	margin-top: 5px;
	padding-left: 5px;
	width: 90%;
	border: 2px solid var(--color1);
	height: 38px;
  font-size: 18px;
}
textarea{
	margin-top: 5px;
	padding: 5px 10px;
	height: 240px;
	width: 100%;
	border: 2px solid var(--color1);
  font-size: 18px;
  resize: none;
}
.wrapper{
	text-align: center;
}
button{
	background-color: var(--color1);
	border: none;
	padding: 10px 20px 10px 20px;
	font-size: 25px;
	color: white;
	font-weight: bold;
	outline: none !important;
  margin-top: 20px;
  width: 15%;
  min-width: 100px;
}
button:hover{
	color: white;
	background-color: #002E70;
}
button:focus{
	color: white;
}
button::-moz-focus-inner {
   border: 0;
}
.warning {
  color: red;
}
.success {
  color: green;
}
</style>