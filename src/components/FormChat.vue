<template>
  <div class="chat-form">
    <form class="chat-form__form" @submit.prevent="onSubmit">
      <input type="text" v-model="input" placeholder="Votre message..." class="chat-form__input">
      <input type="submit" value="Ok !" class="chat-form__submit">
    </form>
  </div>
</template>

<script>
export default {

  data: function () {
    return {
      input: '',                        // String: Value of input
      lastType: new Date().getTime(),   // Number: Timstamp of last typing event of current user
      isTyping: false                   // Boolean
    }
  },

  watch: {
    // Watch input value and update typing
    input: function () {
      this.lastType = new Date().getTime()
      if (this.isTyping === false) this.typing(true) // emit event 'typing'
      this.isTyping = true

      setTimeout(() => {
        var date = new Date().getTime()
        if (date - this.lastType > 2000) {
          this.typing(false) // emit event 'stop typing'
          this.isTyping = false
        }
      }, 2000)
    }
  },

  methods: {
    // Callback submit form
    onSubmit: function (e) {
      if (this.input !== '') {
        this.$emit('send-message', this.input)
        this.input = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/core/variable";

$form-height : 60px;
.chat-form {
  position: relative;
  bottom: 0;
  left: 0;
  background-color: $color-1;
  width: calc(100% - 40px);
  padding: $small-pad;
  border-top: $border-w solid black;
  &__form {
    border: $border-w solid black;
    height: $form-height;
    display: block;
    position: relative;
  }
  &__input {
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
    font-size: $size-small;
    right: 0;
  }
}
</style>
