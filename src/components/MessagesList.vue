<template>
  <div class="messages-list">
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
<style lang="stylus" scoped>
h1
  color green
</style>
