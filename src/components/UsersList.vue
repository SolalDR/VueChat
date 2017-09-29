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
  components: {
    User
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/core/variable";

.users-list {
  background-color: $color-1;
  width: $sidebar-w;
  border: 4px solid black;
  box-sizing: border-box;
  max-height: calc(80vh - 200px - 90px);

  .users-list__container {
    padding:$small-pad;
    overflow-y: scroll;
    max-height: calc(80vh - 410px);
  }
  .users-list__title {
    text-align: left;
    padding: $small-pad;
    border-bottom: $border-w solid black;
    font-size: $size-big;
  }
}

.users-list__container::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 3px rgba(0,0,0,0.3);
  background-color: transparent;
}
.users-list__container::-webkit-scrollbar {
  width: 3px;
  background-color: transparent;
}
.users-list__container::-webkit-scrollbar-thumb {
  background-color: #000000;
}

.users-list .user {
  display: block;
  height: 30px;
}

</style>
