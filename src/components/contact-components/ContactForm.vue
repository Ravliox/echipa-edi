<template>
  <div class="container">
    <!-- HEADER -->
    <div class = "has-text-centered">
      <div class = "title"> {{$t('contact.contactform.title')}} </div> 
    </div>
    <div class="columns">
      <!-- FORM -->
      <div class="column is-6">
        <form>
          <!-- NAME -->
          <span>{{$t('contact.contactform.name')}}</span>
          <div class="field">
            <div class="control">
              <input class="input" v-model="name" type = "text">
            </div>
          </div>
          <!-- EMAIL -->
          <span>{{$t('contact.contactform.email')}}</span>
          <div class="field">
            <div class="control">
              <input class="input" v-model="email_addr" type = "text">
            </div>
          </div>
          <!-- TITLU -->
          <span>{{$t('contact.contactform.titlu')}}</span>
          <div class="field">
            <div class="control">
              <input class="input" v-model="title" type = "text">
            </div>
          </div>
          <!-- TELEPHONE -->
          <span class = "telephone">{{$t('contact.contactform.telephone')}}</span>
          <div class="field telephone">
            <div class="control">
              <input class="telephone input" v-model="telephone_number" type = "text">
            </div>
          </div>
        </form>
      </div>
      <!-- TEXTAREA -->
      <div class="column is-6">
        <div class="field">
          <div class="control">
            <textarea v-model="message" class="textarea has-fixed-size" type="text" 
            placeholder="Write your message here!"></textarea>
          </div>
        </div>
      </div>
    </div>
    <div class = "sending-area">
      <div class = "button-area"> 
        <button class="button is-outlined is-large" 
          v-on:click="send">{{$t('contact.contactform.send')}}</button>
      </div>
      <div class = "output-area">
        <p class = "error-message" v-if="invalid"> {{$t('contact.contactform.invalid_message')}} </p>
        <p class = "success-message" v-if="sent"> {{$t('contact.contactform.success_message')}} </p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      name: '',
      email_addr: '',
      title: '',
      telephone_number: '',
      message: '',
      invalid: false,
      sent: false
    };
  },
  methods: {
    send() {
      this.invalid = false;
      if (this.name === '' || this.email_addr === '' || this.title === '' || this.message === '') {
        this.invalid = true;
      } else {
        this.sent = true;
        this.name = '';
        this.email_addr = '';
        this.title = '';
        this.telephone_number = '';
        this.message = '';
      }
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  margin-top: 50px;
  margin-bottom: 50px;
}

.textarea {
  margin-top: 24px;
}

.column {
  justify-content: start;
}

.telephone {
  display: none;
}

.error-message {
  color: $error;
}

.success-message {
  color: $success;
}

.sending-area {
  display: flex;
  flex-direction: column;
}

.button-area, .output-area {
  display: flex;
  flex-direction: row;
  justify-content: center;
}


</style>