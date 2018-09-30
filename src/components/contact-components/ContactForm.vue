<template>
  <div id = "contactform">
    <script type="text/javascript" src="https://cdn.emailjs.com/dist/email.min.js"></script>
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
    			</br>
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
        name: '',
        email_addr: '',
        title: '',
        telephone_number: '',
        message: '',
        invalid: false,
        invalid_message: '',
        sent: false,
        name_error: 'contact.contactform.name_error',
        email_error: 'contact.contactform.email_error',
        title_error: 'contact.contactform.title_error',
        msg_error: 'contact.contactform.msg_error',
        success_message: 'contact.contactform.success_message',
        tel: true
      }
    },
    /* eslint-disable */
    methods: {
      send: function () {
        this.invalid = false
        this.validate()
        if (this.invalid === false) {
          this.sent = true
          if (this.telephone_number === '')
          {
            window.emailjs.init('user_iZ9xvISum1GIMaXOcy6bt')
            window.emailjs.send("gmail", "template_rs0ElpqZ", {"title": this.title,"from_name": this.name, "email_address": this.email_addr, "to_name":"SSA Team","message_html": this.message}).then(function(response) {
              console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
            }, function(err) {
            console.log("FAILED. error=", err);
            });
          }
          this.name = ''
          this.email_addr = ''
          this.title = ''
          this.message = ''
        }
      },
      validate_name: function () {
        if (this.name === '') {
          return false
        }
        return true
      },
      validate_email: function () {
        if (this.email_addr === null) {
          return false
        }
        let tokens = this.email_addr.split('@')
        if (tokens.length !== 2) {
          return false
        } else if (tokens[0] === '' || tokens[1] === '') {
          return false
        }
        return true
      },
      validate_title: function () {
        if (this.title === '') {
          return false
        }
        return true
      },
      validate_message: function () {
        if (this.message === '') {
          return false
        }
        return true
      },
      validate: function () {
        if (this.validate_name() === false) {
          this.invalid_message = this.name_error
          this.invalid = true
        } else if (this.validate_email() === false) {
          this.invalid_message = this.email_error
          this.invalid = true
        } else if (this.validate_title() === false) {
          this.invalid_message = this.title_error
          this.invalid = true
        } else if (this.validate_message() === false) {
          this.invalid = true
          this.invalid_message = this.msg_error
        }
      }
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
	align: left;
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