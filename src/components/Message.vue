<template>
  <div class="message" :class="side">
  	<user v-if="!message.type" :user="message.author" :date="date"></user>
    <p class="message__content">{{ message.body }}</p>
  </div>
</template>

<script>
import User from './User'

export default {
  props: ['message'],
  computed: {
    side: {
      get: function () {
        if (this.message.author.id === this.$store.user.id) {
          return 'message--right'
        } else {
          return 'message--left'
        }
      }
    },
    date: {
      get: function () {
        return this.message.createdAt
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
