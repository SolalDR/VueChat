<template>
  <div id="app">
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import UserManager from './UserManager.js'
import { bus } from './main.js'

export default {
  data: function () {
    UserManager.initCountAvatar()
    return {
      userManager: UserManager
    }
  },
  methods: {
    simulateUser: function () {
      this.userManager.generateUser({username: 'test'}, {})
    }
  },
  computed: {
    users: {
      get: function () {
        return this.$store.users
      }
    }
  },
  created: function (val, old) {
    UserManager.initCountAvatar()
    var users = UserManager.users
    this.$store.users = users

    bus.$on('userConnected', (user) => {
      this.$store.user = this.userManager.generateUser(user, { distant: false })
      this.$router.push({ path: '/' })
    })

    bus.$on('createUsers', (users) => {
      for (var i = 0; i < users.length; i++) {
        this.userManager.generateUser(users[i])
      }
    })

    bus.$on('createUser', (user) => {
      this.userManager.generateUser(user)
    })

    bus.$on('startTyping', (user) => {
      this.userManager.startTyping(user)
    })

    bus.$on('stopTyping', (user) => {
      this.userManager.stopTyping(user)
    })

    if (!this.$store.user) {
      this.$router.push({path: '/login'})
    }
  }
}
</script>

<style lang="scss">
@import "styles/core/reset";
@import "styles/core/variable";
@import "styles/core/mixin";
@import "styles/core/grid-S";
@import "styles/core/font";
body {
  background-image: url("./assets/bg_trame.png");
  background-size: 3px;
  font-family: $main-font;
  font-size: $size-small;
  cursor: url("/static/cursor2.png");
}
.center {
  display: flex;
  margin: 30px;
  align-items: start;
}
.container {
  max-width: 1000px;
  margin: auto;
  margin-top: 100px;
}

input {
  outline: none;
}

h1, h2, h3, h4, h5, h6 {
  font-size: 16px;
  text-transform: uppercase;
}

</style>
