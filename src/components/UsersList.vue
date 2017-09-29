<template>
  <div class="users-list">
    <h2 class="users-list__title">Utilisateurs</h2>
    <div class="users-list__container">
        <user v-for="user in users" :user="user"></user>
    </div>
  </div>
</template>

<script>
import User from './User'
export default {
  props: ['users'],
  computed: {},
  components: {
    User
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../styles/core/variable";

.users-list {
  background-color: $color-1;
  width: $sidebar-w;
  border: 4px solid black;
  box-sizing: border-box;
  max-height: calc(100vh - 200px - 90px);
  overflow-y: scroll;
  .users-list__container {
    padding:$small-pad;
  }
  .users-list__title {
    text-align: left;
    padding: $small-pad;
    border-bottom: $border-w solid black;
    font-size: $size-big;
  }
}

.users-list::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0);
  background-color: transparent;
}
.users-list::-webkit-scrollbar {
  width: 6px;
  background-color: transparent;
}
.users-list::-webkit-scrollbar-thumb {
  background-color: transparent;
}

.users-list .user {
  display: block;
  height: 30px;
}

</style>
