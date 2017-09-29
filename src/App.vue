<template>
  <div id="app">
    <div class="container">
      <a @click.prevent="simulateUser" href="">Simulate User</a>
      <router-view :store="store"></router-view>
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
  watch: {
    users: function (val) {
      console.log(val)
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

h1, h2, h3, h4, h5, h6 {
  font-size: 16px;
  text-transform: uppercase;
}

</style>
