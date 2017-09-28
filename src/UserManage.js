export default {
  nbAvatar: 8,
  countAvatar: [],
  users: [],
  findUserByName: function (name) {
    for (var i = 0; i < this.users.length; i++) {
      if (this.users[i].name === name) {
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
  generateUser: function (name, config) {
    if (name) {
      var user = {
        name: name,
        distant: config.distant,
        avatar: this.getNextAvatar()
      }
      this.users.push(user)
      return user
    }
  },
  seeds: function () {
    this.generateUser('Franco', {})
    this.generateUser('Francine', {})
    this.generateUser('Jack', {})
    this.generateUser('Joe', {})
    return this.users
  }
}

