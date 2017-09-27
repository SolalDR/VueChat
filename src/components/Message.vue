<template>
  <div class="message">
    <p>{{ author }}</p>
    <p>{{ content }}</p>
    <span>{{ date }}</span>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        author: '',
        content: '',
        date: ''
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
