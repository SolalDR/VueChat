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

    socket.on('connect', () => {
      console.log('connect')
    })

    Vue.prototype.$store = store

    socket.on('new message', (message) => {
      message = message.body
      console.log(message)
      if (message.body && message.author.id !== store.user.id) {
        bus.$emit('newMessage', message)
      }
    })

    socket.on('user connected', (user) => {
      bus.$emit('userConnected', user)
    })

    Vue.mixin({
      methods: {
        sendMessage (text) {
          socket.emit('new message', text)
        },
        connect: function (username) {
          socket.emit('user connected', {
            username: username,
            avatarUrl: null
          })
        }
      }
    })
  }
}
