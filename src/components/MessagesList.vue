<template>
  <div class="messages">
    <message v-for="message in messages" :message="message"></message>
  </div>
</template>

<script>
import Message from './Message'

export default {
  props: ['messages'],
  methods: {},
  components: {
    Message
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

@import "../styles/core/variable";

.messages {
	height: 300px;
	overflow: scroll;
	padding: $small-pad;
}

</style>
