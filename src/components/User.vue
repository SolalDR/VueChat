<template>
  <div class="user">
    <img class="user__profil" :src="avatarFormat">
    <p class="user__name">{{ user.username }}<span v-if="date"> // {{ date }}</span></p>
  </div>
</template>

<script>
  export default {
    props: ['user', 'date'],
    computed: {
      avatarFormat: {
        get: function () {
          if (this.user.avatar) {
            return '/static/avatars/avatar' + this.user.avatar + '.svg'
          }
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "../styles/core/variable";
  .user {
    height: 30px;
    margin: 5px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    &__profil {
      position: absolute;
      top: -7px;
      left: 0;
    }
    &__name {
      margin-left: $medium-pad;
    }
  }
</style>
