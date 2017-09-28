<template>
  <div class="messages">
    <message v-for="message in messages" :message="message"></message>
  </div>
</template>

<script>
import Message from './Message'

export default {
  props: ['messages'],
  computed: {
    messageCount: {
      get: function () {
        return this.messages.length
      }
    }
  },
  components: {
    Message
  },
  methods: {
    // Scroll to end of message-list
    scrollToEnd: function () {
      this.$el.scrollTop = this.$el.scrollHeight
    }
  },
  watch: {
    messageCount: function (val, old) {
      var that = this
      setTimeout(function () {
        that.scrollToEnd()
      }, 50)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

@import "../styles/core/variable";

.messages {
	height: 300px;
	overflow-y: scroll;
	padding: $small-pad;
}

</style>
