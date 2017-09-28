<template>
  <main class="chat center">
    <div>
      <users-list :users="store.users"></users-list>
    </div>
    <div class="chat__body">
        <h2 class="chat__title">Chat</h2>
        <messages-list :messages="store.messages"></messages-list>
        <form-chat @save-message="onMessageForm"></form-chat>
    </div>
    <div class="chat__actions">
      <a @click.prevent="emojiOpen" class="chat__action chat__action-emoji" href="#"></a>
      <a @click.prevent="sendWizz" class="chat__action chat__action-wizz" href="#"></a>
    </div>
    <audio src="/static/wizz.wav" autostart="0" preload="auto" id="player">
      <p>Your browser does not support the <code>audio</code> element.</p>
    </audio>
  </main>
</template>

<script>
import FormChat from '../FormChat'
import MessagesList from '../MessagesList'
import UsersList from '../UsersList'

export default {
  props: ['store'],
  methods: {
    saveMessage: function (message) {
      this.store.messages.push(message)
    },
    onMessageForm: function (message) {
      message.author = this.store.user
      message.distant = false
      this.saveMessage(message)
    },
    emojiOpen: function () {

    },
    wizz: function () {
      var self = this
      if (!this.$el.className.match('wizz')) {
        this.$el.className += ' wizz'
        this.$el.querySelector('#player').play()
        setTimeout(function () {
          self.$el.className = self.$el.className.replace('wizz', '')
        }, 600)
      }
    },
    sendWizz: function () {
      var message = {
        author: this.store.user,
        content: 'Vous avez envoyé un wizz',
        type: 'wizz',
        distant: false,
        date: new Date()
      }
      this.saveMessage(message)
      this.wizz()
    }
  },
  components: {
    FormChat,
    MessagesList,
    UsersList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../../styles/core/variable";

.chat {
  &__body {
  width: calc(100% - 300px);
  margin-left: 32px;
  float: left;
  border: $border-w solid black;
  position: relative;
  background-color: $color-1; 
  min-height: 500px;
  }
  &__title {
    font-size: $size-big; 
    padding: $small-pad;
    border-bottom: $border-w solid black;
  }
  &__actions {
    display: block;
    width: 50px;
    margin-left: $small-pad;
  }
  &__action {
    height: 40px;
    width: 40px;
    border: $border-w solid black;
    margin-bottom: 30px;
    background-position: center;
    background-repeat: no-repeat; 
    background-size: 60%;
    display: block;
    background-color: $color-1;
    &-emoji {
      background-image: url("/static/icons/Smiley.svg");
    }
    &-wizz {
      background-image: url("/static/icons/Wizz.svg");
    }
  }
}

.chat.wizz .chat__body {
  animation-name: wizz; 
  animation-duration: .1s; 
  animation-iteration-count: infinite;
}

@keyframes wizz {
  0% {
    transform: translateX(0px);
  }
  25% {
    transform: translateX(10px);
  }
  75% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(0);
  }
}
  


</style>
