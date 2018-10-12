<template>
  <div id = "contactform">
    
  	<div class = "header">
      <span class = "title"> {{$t('contact.contactform.title')}} </span> 
      <br>
      <span class = "subtitle">{{$t('contact.contactform.subtitle')}}</span>
    </div>

    <div class = "columns" style="margin-left: 5%;">
    	<div class = "column is-4">
	    	<form>
          
	    		<div>
	    			<span class = "subtitle">{{$t('contact.contactform.name')}}</span>
	    			<br>
            
	    			
            <div class="field">
              <div class="control">
                  <input class="input is-success" v-model="name" type = "text">
              </div>
            </div>
	    		</div>

	    		<div class = "labels">
	    			<span>{{$t('contact.contactform.email')}}</span>
	    			<br>
            <div class="field">
              <div class="control">
                  <input class="input is-success" v-model="email_addr" type = "text">
              </div>
            </div>
	    		</div>
	    			
	    		<div class = "labels">
	    			<span>{{$t('contact.contactform.titlu')}}</span>
	    			<br>
	    			
            <div class="field">
              <div class="control">
                  <input class="input is-success" v-model="title" type = "text">
              </div>
            </div>
            <div class="field">
              <div class="control">
                
                  <input class="input is-success" v-model="telephone_number" v-bind:class="{'telephone': tel}" type = "text">
              </div>
            </div>
            
	    		</div>

	    	</form>

    	</div>

    	<div class = "column is-7">
    		
        <form>
    		
        	<span class = "subtitle">{{$t('contact.contactform.message')}}</span>
    			<br>
    			
          <div class="field">
            <div class="control">
                  <textarea v-model="message" class="textarea is-success is-large" type="text" placeholder="Info textarea"></textarea>
             </div>
           </div>
    		
        </form>

    	</div>

    </div>
    
    <div class = "levels">
      
      <div class = "level-item">
        <button class="button font1 is-success is-outlined is-large" v-on:click="send">{{$t('contact.contactform.send')}}</button>
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

input{
	margin-top: 5px;
	padding-left: 5px;
	width: 90%;
	/* border: 2px solid var(--color1); */
	height: 38px;
  font-size: 18px;
}

.wrapper{
	text-align: center;
}
/* button{
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
} */
/* button:hover{
	color: white;
	background-color: #002E70;
}
button:focus{
	color: white;
}
button::-moz-focus-inner {
   border: 0;
} */
.warning {
  color: red;
}
.success {
  color: green;
}

/* #contactform{
  background-color: gray;
} */
</style>