<template>
  <div class="message" :class="side">
  	<user v-if="!message.type" :user="message.author" :date="date"></user>
    <p class="message__content" v-html="messageFormat"></p>
  </div>
</template>

<script>
import User from './User'

export default {
  props: ['message'],
  computed: {
    side: {
      get: function () {
        if (this.message.distant === false) {
          return 'message--right'
        } else {
          return 'message--left'
        }
      }
    },
    date: {
      get: function () {
        return this.message.date.getHours() + ':' + this.message.date.getMinutes()
      }
    },
    messageFormat: {
      get: function () {
        var content = this.message.content
        // window.emojione.toImage('$1')
        var values = content.match(/(:.+?:)/g)
        if (values) {
          for (var i = 0; i < values.length; i++) {
            content = content.replace(new RegExp(values[i]), window.emojione.toImage(values[i]))
          }
        }
        return content
      }
    }
  },
  components: {
    User
  }
}
</script>

<style lang="scss" scoped>
.message {
	margin-bottom: 20px;
	&--right {
		text-align: right;
	}
	&--left {
		text-align: left;
	}
	&__header {
		height: 25px;
		margin-bottom: 15px;
	}
	&__avatar {
		width: 25px;
		height: 25px;
		display: inline-block;
	}
	&__title {
		display: inline-block;
		transform: translateY(-8px);
		margin-left: 10px;
	}
}
.message .user {
	height: 20px;
	display: inline-block;
}
</style>
