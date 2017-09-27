<template>
  <div class="user">
    <img class="user__profil" :src="avatarFormat">
    <p class="user__name">{{ user.name }}</p>
  </div>
</template>

<script>
  export default {
    props: ['user'],
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
    &__profil {
      position: absolute;
    }
    &__name {
      margin-left: $medium-pad;
    }
  }
</style>
