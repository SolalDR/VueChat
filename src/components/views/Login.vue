<template>
  <main class='login center'>
    <form @submit.prevent='onSubmit'>
      <p v-if="error">Le username est invalide</p>
      <input id="username" v-model="username" type='text'>
      <input id="submit" type='submit' value="connexion">
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
  .login {
    width: 500px;
    position: fixed;
    background-color: #EEE;
    padding: 32px;
    box-shadow: 0px -5px rgba(0,0,0,.2);
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    form {
      input#name {
        width: 100%;
        padding: 5px;
      }
      #submit {
        background-color: black;
        color: white;
        border: 0;
        padding: 10px;
        margin: auto;
        display: block;
        margin-top: 32px;
      }
    }
  }
</style>
