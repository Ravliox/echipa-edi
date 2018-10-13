<template>
  <!-- <div id = "contactform">		
        <form>
    		
        	<span class = "subtitle">{{$t('contact.contactform.message')}}</span>
    			<br>
    			
        
    		
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
  </div> -->
  
        
    <div class="container">
      
        <div class="columns">
          <!-- HEADER -->
          <div class="column has-text-centered">
             <span 
              class = "title"> 
               {{$t('contact.contactform.title')}} 
             </span> 
             <br>
              <span 
                  class = "subtitle">
                  {{$t('contact.contactform.subtitle')}}
              </span>
          </div>
        </div>
      
      <div class="columns">
        <!-- FORM -->
        <div class="column is-6">
            <form>
              <div>
                <!-- NAME -->
	    			    <span class = "subtitle">{{$t('contact.contactform.name')}}</span>
	    			    <br>
                <div class="field">
                  <div class="control">
                      <input class="input is-success" v-model="name" type = "text">
                  </div>
                </div>
                <!-- EMAIL -->
                	<span>{{$t('contact.contactform.email')}}</span>
	    			      <br>
                  <div class="field">
                    <div class="control">
                        <input class="input is-success" v-model="email_addr" type = "text">
                    </div>
                  </div>
                  <!-- TITLU -->
                  <span>{{$t('contact.contactform.titlu')}}</span>
	    			      <br>
                  <div class="field">
                      <div class="control">
                          <input class="input is-success" v-model="title" type = "text">
                      </div>
                  </div>
                  <!-- TELEPHONE -->
                    <div class="field">
                        <div class="control">
                            <input class="input is-success" v-model="telephone_number" v-bind:class="{'telephone': tel}" type = "text">
                    </div>
                  </div>
              </div>
                </form>
            </div>
            <!-- TEXTAREA -->
            <div class="column is-6">
                <div class="field">
                <div class="control">
                      <textarea v-model="message" class="textarea is-success has-fixed-size" type="text" placeholder="Info textarea"></textarea>
                </div>
              </div>
            </div>
            
          </div>  
          <div class="columns">
            <div class="column">
              <div class = "levels">
          
          <div class = "level-item">
            <button class="button font1 is-success is-outlined is-large" v-on:click="send">{{$t('contact.contactform.send')}}</button>
          </div>

        </div>
            </div>
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
.column{
  /* border: 1px solid; */
}

.container{
 
  margin-top: 50px;
  margin-bottom: 50px;
}

.textarea{
  margin-top:20px;
}

</style>