<template>
  <div class="user">
    <img class="user__profil" :src="avatarFormat">
    <p class="user__name">{{ user.username }}<span v-if="date"> // {{ dateFormat }}</span><span class='user__typing' v-if='user.typing'></span></p>
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
      },
      dateFormat: {
        get: function () {
          var date = new Date(this.date)
          return date.getHours() + ':' + date.getMinutes()
        }
      },
      isTyping: {
        get: function () {
          for (var i = 0; i < this.$store.users.length; i++) {
            if (this.$store.users[i].id === this.user.id) {
              return true
            }
          }
          return false
        }
      }
    },
    created: function () {
      for (var i = 0; i < this.$store.users.length; i++) {
        if (this.$store.users[i].id === this.user.id) {
          this.user.avatar = this.$store.users[i].avatar
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
      width:25px;
    }
    &__name {
      margin-left: $medium-pad;
    }
    &__typing {
      position: absolute;
      right: 0;
      height: 25px;
      width: 50px;
      background-image: url('/static/loader.gif');
      background-position: center;
      background-size: 60px;
      background-repeat: no-repeat;
    }
  }
</style>
