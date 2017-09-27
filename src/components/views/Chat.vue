<template>
  <main class="chat center">
    <users-list :users="store.users"></users-list>
    <div class="body">
        <messages-list :messages="store.messages"></messages-list>
        <form-chat @save-message="onSaveMessage"></form-chat>
    </div>
  </main>
</template>

<script>
import FormChat from '../FormChat'
import MessagesList from '../MessagesList'
import UsersList from '../UsersList'

export default {
  props: ['store'],
  methods: {
    onSaveMessage: function (message) {
      message.author = this.store.user
      this.messages.push(message)
    }
  },
  components: {
    FormChat,
    MessagesList,
    UsersList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../../styles/core/variable";

.body {
  width: calc(100% - 300px);
  margin-left: 32px;
  float: left;
  border: $border-w solid black;
  position: relative;
}

</style>
