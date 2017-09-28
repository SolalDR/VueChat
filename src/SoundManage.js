export default {
  sounds: {
    wizz: { selector: '#wizz' },
    send: { selector: '#send' },
    receive: { selector: '#receive' }
  },
  play: function (name) {
    var el = document.querySelector(this.sounds[name].selector)
    if (el) {
      el.play()
    }
  }
}
