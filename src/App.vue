<template>
  <div id="app">
    <div class="container">
      <router-view :store="store" @login="onLogin"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      store: {
        messages: [{
          date: new Date(),
          content: 'Hello',
          author: 'Franco'
        },
        {
          date: new Date(),
          content: 'Hello',
          author: 'Franco'
        },
        {
          date: new Date(),
          content: 'Hello',
          author: 'Franco'
        }],
        users: ['Franco', 'Marine'],
        user: 'Solal'
      }
    }
  },
  methods: {
    onLogin: function (name) {
      this.store.user = name
      this.$router.push({ path: '/' })
      console.log('Login')
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
}
.center {
  display: flex;
  margin: 30px;
}
.container {
  max-width: 1300px;
  margin: auto;
  margin-top: 100px;
}

h1, h2, h3, h4, h5, h6 {
  font-size: 16px;
  text-transform: uppercase;
}

</style>
