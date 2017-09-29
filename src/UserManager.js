export default {
  nbAvatar: 20,
  countAvatar: [],
  users: [],

  initCountAvatar: function () {
    for (var i = 0; i < this.nbAvatar; i++) {
      this.countAvatar[i] = 0
    }
  },

  getNextAvatar: function () {
    var rank = 0
    for (var i = 0; i < this.countAvatar.length; i++) {
      if (this.countAvatar[i] < this.countAvatar[rank]) {
        rank = i
      }
    }
    this.countAvatar[rank]++
    return rank + 1
  },

  generateUser: function (user, config) {
    user.avatar = this.getNextAvatar()
    user.typing = false
    this.users.push(user)
    return user
  }
}

