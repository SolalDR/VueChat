export default {
  install (Vue, options) {
    var sounds = {
      wizz: { selector: '#wizz' },
      send: { selector: '#send' },
      receive: { selector: '#receive' },
      login: { selector: '#login' },
      error: { selector: '#error' }
    }
    Vue.mixin({
      methods: {
        soundPlay: function (name) {
          var el = document.querySelector(sounds[name].selector)
          if (el) {
            el.play()
          }
        }
      }
    })
  }
}
