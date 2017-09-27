<template>
  <div class="message">
    <p>{{ message.author }}</p>
    <p>{{ message.content }}</p>
    <span>{{ message.date }}</span>
  </div>
</template>

<script>
  export default {
    props: ['message']
  }
</script>

<style lang="scss" scoped>

</style>
