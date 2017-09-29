<template>
  <main class="chat center">
    <div>
      <users-list :users="$store.users"></users-list>
      <a @click.prevent='disconnectClick' class='action__disconnect'>Disconnect</a>
    </div>
    <div class="chat__body">
        <h2 class="chat__title">Chat</h2>
        <messages-list :messages="$store.messages"></messages-list>
        <form-chat @send-message="formMessage"></form-chat>
    </div>
    <div class="chat__actions">
      <a @click.prevent="wizzClick" class="chat__action chat__action-wizz" href="#"></a>
    </div>
    <audio src="/static/wizz.wav" autostart="0" preload="auto" id="wizz">
      <p>Your browser does not support the <code>audio</code> element.</p>
    </audio>
    <audio src="/static/send.wav" autostart="0" preload="auto" id="send">
      <p>Your browser does not support the <code>audio</code> element.</p>
    </audio>
    <audio src="/static/receive.wav" autostart="0" preload="auto" id="receive">
      <p>Your browser does not support the <code>audio</code> element.</p>
    </audio>
  </main>
</template>

<script>
import FormChat from '../FormChat'
import MessagesList from '../MessagesList'
import UsersList from '../UsersList'
import { bus } from '../../main.js'

export default {

  props: ['store'],

  components: {
    FormChat,
    MessagesList,
    UsersList
  },

  created: function () {
    if (!this.$store.user.id) this.$router.push({path: '/login'})
    bus.$on('receiveWizz', (user) => {
      this.createWizz(user)
    })
  },

  methods: {
    // callback FormChat add a new message emit from current_user
    formMessage: function (content) {
      this.sendMessage(content)
    },

    // Event button disconnect
    disconnectClick: function () {
      this.$router.push({path: '/login'})
      this.disconnect()
    },

    // Event button wizz
    wizzClick: function () {
      this.createWizz(this.$store.user)
      var message = {
        body: 'Vous avez envoyé un wizz',
        createdAt: new Date().getTime(),
        author: this.$store.user,
        isBot: true
      }
      this.$store.messages.push(message)
      this.sendWizz()
    },

    // Generate animation wiff
    createWizz: function (user) {
      var self = this
      if (!this.$el.className.match('wizz')) {
        this.$el.className += ' wizz'
        setTimeout(function () {
          self.$el.className = self.$el.className.replace('wizz', '')
        }, 600)
        this.soundPlay('wizz')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../../styles/core/variable";
@import "../../styles/core/mixin";


.chat {
  &__body {
  width: calc(100% - 300px);
  margin-left: 32px;
  float: left;
  border: $border-w solid black;
  position: relative;
  background-color: $color-1;
  min-height: 500px;
  height: calc(100vh - 200px);
  }
  &__title {
    font-size: $size-big;
    padding: $small-pad;
    border-bottom: $border-w solid black;
  }
  &__actions {
    display: block;
    width: 50px;
    margin-left: $medium-pad;
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
    box-shadow: 0 0 0 black;
    @include transition(.2s);
    @include transform(translateX(0) translateY(0) scale(1));
    &:hover {
      box-shadow: 4px 4px 0 black;
      @include transform(translateX(-3px) translateY(-3px) scale(1.05));
    }
    &-emoji {
      background-image: url("/static/icons/Smiley.svg");
    }
    &-wizz {
      background-image: url("/static/icons/Wizz.svg");
    }
  }
}

.action__disconnect {
  width: 100%;
  background: #EBEBEB;
  display: block;
  border: $border-w solid black;
  margin-top: $medium-pad;
  padding: 15px;
  box-sizing: border-box;
  text-align: center;
  text-transform: uppercase;
  font-size: $size-big;
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
