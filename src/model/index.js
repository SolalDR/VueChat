import io from 'socket.io-client'
import { bus } from '../main.js'

export default {
  install (Vue, options) {
    const socket = io(options.api)

    socket.on('connect', () => {
      console.log('connect')
    })

    socket.on('new message', (message) => {
      if (message.body) {
        bus.$emit('newMessage', message)
      }
    })

    socket.on('user connected', (user) => {
      bus.$emit('userConnected', user)
    })

    const store = new Vue({
      data: {
        user: {},
        messages: [],
        users: []
      }
    })

    Vue.prototype.store = store

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
