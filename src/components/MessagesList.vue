<template>
  <div class="messages">
    <message v-for="message in $store.messages" :message="message"></message>
  </div>
</template>

<script>
import Message from './Message'

export default {
  computed: {
    messageCount: {
      get: function () {
        return this.$store.messages.length
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
  height: calc(100vh - 421px);
  overflow-x: hidden;

}

.messages::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  background-color: transparent;
}
.messages::-webkit-scrollbar {
  width: 6px;
  background-color: transparent;
}
.messages::-webkit-scrollbar-thumb {
  background-color: #000000;
}

</style>
