<template>
  <div id="app">
    <div class="container">
      <router-view :store="store" @login="onLogin"></router-view>
    </div>
  </div>
</template>

<script>
// A supprimer après prod
function getRandom (tab) {
  return tab[Math.floor(Math.random() * tab.length)]
}

export default {
  data: function () {
    var users = [
        { name: 'Franco', avatar: 1 },
        { name: 'Francine', avatar: 2 },
        { name: 'Jack', avatar: 3 }
    ]
    var messages = [{
      date: new Date(),
      content: 'Hello',
      author: getRandom(users)
    },
    {
      date: new Date(),
      content: 'Hello',
      author: getRandom(users)
    },
    {
      date: new Date(),
      content: 'Hello',
      author: getRandom(users)
    }]

    return {
      store: {
        messages: messages,
        users: users,
        user: 'Solal'
      }
    }
  },
  methods: {

    onLogin: function (name) {
      this.store.user = name
      this.$router.push({ path: '/' })
      console.log('Login')
    },

    findUserByName: function (name) {
      for (var i = 0; i < this.users.length; i++) {
        if (this.users[i].name === name) {
          return this.users[i]
        }
      }
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
