<template>
  <main class='login center vertical-center'>
    <h2 class="login__title">Connexion</h2>
    <form class="login__form" @submit.prevent='onSubmit'>
      <p class="error" v-if="error">Le username est invalide</p>
      <input class="login__username" id="username" v-model="username" type='text'>
      <input class="login__submit" id="submit" type='submit' value="connexion">
    </form>
  </main>
</template>

<script>
export default {
  data: function () {
    return {
      username: '',
      error: false
    }
  },
  methods: {
    onSubmit: function (e) {
      if (this.username.match(/^\w{1,15}$/)) {
        this.$emit('login', this.username)
      } else {
        this.error = true
      }
    }
  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../../styles/core/variable";
  $form-height: 40px;
  .login {
    width: 500px;
    position: fixed;
    background-color: #EEE;
    padding: 32px;
    box-shadow: 0px -5px rgba(0,0,0,.2);
    top: 50%;
    left: 50%;
    display: block;
    position: relative;
    transform: translateX(-50%) translateY(-50%);
    padding-bottom: 50px;
    &__title {
      display: block;
      text-align: center;
      margin-bottom: $medium-pad;
      font-size: $size-big;
    }
    &__form {
      border: $border-w solid black;
      position: relative;
    }

    &__username {
      height: $form-height;
      border: 0;
      background-color: transparent;
      width: 100%;
      padding: 0 $small-pad;
      font-family: $main-font;
      width: calc(100% - 120px);
      font-size: $size-small;
    }


    &__submit {
      float: right;
      height: $form-height;
      border: 0;
      background-color: black;
      color: white;
      font-family: $main-font;
      text-transform: uppercase;
      padding: 0 $small-pad;
      position: absolute;
      top: 0;
      right: 0;
      font-size: $size-small;
    }
  }
  .vertical-center {
    position: fixed;
    top:40%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }
  .error {
    position: absolute;
    bottom: -26px;
    text-align: center;
    width: 100%;
  }
</style>
