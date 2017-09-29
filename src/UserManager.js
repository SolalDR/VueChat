export default {
  nbAvatar: 20,
  countAvatar: [],
  users: [],
  findUserByName: function (username) {
    for (var i = 0; i < this.users.length; i++) {
      if (this.users[i].username === username) {
        return this.users[i]
      }
    }
  },
  findUserById: function (id) {
    for (var i = 0; i < this.users.length; i++) {
      if (this.users[i].id === id) {
        return this.users[i]
      }
    }
  },
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

  startTyping: function (user) {
    var u = this.findUserById(user.id)
    u.typing = true
    console.log(u.username + ' start typing')
  },

  stopTyping: function (user) {
    var u = this.findUserById(user.id)
    u.typing = false
    console.log(u.username + ' stop typing')
  },

  generateUser: function (user, config) {
    user.avatar = this.getNextAvatar()
    user.typing = false
    this.users.push(user)
    return user
  }
}

