<template>
  <div class="users-list">
    <h2 class="users-list__title">Utilisateurs</h2>
    <div class="users-list__container">
        <user v-for="user in users" :user="user"></user>
    </div>
  </div>
</template>

<script>
const COUNT_AVATAR = 8

function initPictos () {
  var table = []
  for (var i = 0; i < COUNT_AVATAR; i++) {
    table.push(0)
  }
  return table
}
var pictosAvailable = initPictos()

import User from './User'
export default {
  data: function () {
    return {
      pictoUse: pictosAvailable
    }
  },
  props: ['users'],
  computed: {},
  methods: {
    getNextAvatar: function () {
      var less = Infinity
      for (var i = 0; i < this.pictoUse.length; i++) {
        if (this.pictoUse[i] < less) {
          less = this.pictoUse[i]
        }
      }
      return less
    }
  },
  components: {
    User
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../styles/core/variable";

.users-list {
  background-color: $color-1;
  width: $sidebar-w;
  border: 4px solid black;
  box-sizing: border-box;
  .users-list__container {
    padding:$small-pad;
  }
  .users-list__title {
    text-align: left;
    padding: $small-pad;
    border-bottom: $border-w solid black;
  }
}

.users-list .user {
  display: block;
  height: 30px;
}

</style>
