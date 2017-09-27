<template>
  <div class="users-list">
    <user v-for="user in users"></user>
  </div>
</template>

<script>
import User from './User'

export default {
  props: ['users'],
  components: {
    User
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../styles/core/variable";

.users-list {
  background-color: white;
  width: $sidebar-w;
  padding: $medium-pad;
  border: 4px solid black;
  padding: 30px;
  box-sizing: border-box;
}

</style>
