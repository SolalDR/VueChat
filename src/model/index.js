import io from 'socket.io-client'
import { bus } from '../main.js'

export default {
  install (Vue, options) {
    const socket = io(options.api)

    const store = new Vue({
      data: {
        user: {},
        messages: [],
        users: []
      }
    })
    Vue.prototype.$store = store

    socket.on('connect', () => {
      console.log('connect')
    })

    socket.on('getUsers', function (response) {
      bus.$emit('createUsers', response)
    })

    socket.on('user joined', function (response) {
      if (response.new.id !== store.user.id) {
        bus.$emit('createUser', response.new)
        store.messages.push({
          body: response.new.username + ' vient de se connecter',
          isBot: true,
          createdAt: new Date().getTime(),
          author: response.new
        })
      }
    })

    socket.on('wizz', function (user) {
      store.messages.push({
        body: user.id === store.user.id ? 'Vous avez envoyé un wizz' : user.username + ' vous a envoyé un wizz',
        createdAt: new Date().getTime(),
        author: user,
        isBot: true
      })
      bus.$emit('receiveWizz', user)
    })

    socket.on('typing', function (user) {
      for (var i = 0; i < store.users.length; i++) {
        if (store.users[i].id === user.id) {
          store.users[i].typing = true
        }
      }
    })

    socket.on('stop typing', function (user) {
      for (var i = 0; i < store.users.length; i++) {
        if (store.users[i].id === user.id) {
          store.users[i].typing = false
        }
      }
    })

    socket.on('new message', (message) => {
      store.messages.push(message)
    })

    socket.on('user connected', (user) => {
      bus.$emit('userConnected', user)
    })

    Vue.mixin({
      methods: {
        sendMessage (text) {
          socket.emit('new message', text)
        },
        sendWizz () {
          socket.emit('wizz')
          console.log('wizz send')
        },
        connect: function (username) {
          socket.emit('user connected', {
            username: username,
            avatarUrl: null
          })
        },
        disconnect: function () {
          socket.emit('disconnect')
        },
        typing: function (isTyping) {
          if (isTyping === true) {
            socket.emit('typing', store.user)
          } else {
            socket.emit('stop typing', store.user)
          }
        }
      }
    })
  }
}
