<template>
  <div class="chat-form">
    <form @submit.prevent="onSubmit">
      <input type="text" v-model="input" placeholder="Votre message..." class="chat-form__input">
      <input type="submit" value="envoyer" class="chat-form__submit">
    </form>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      input: ''
    }
  },
  methods: {
    onSubmit: function (e) {
      this.$emit('save-message', {
        content: this.input,
        date: Date.now()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/core/variable";

.chat-form {
  height: $medium-pad;
  background-color: #DDD;
  padding: $small-pad;
  position: absolute;
  bottom: $border-w;
  width: 100%;
  &__input {
    height: 30px;
  }
  &__submit {
    height: 30px;
  }
}
</style>
