// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Bourgeon from 'bourgeon'
import App from './App'
import VueSession from 'vue-session'
import model from './model'

Vue.use(Bourgeon, {
  locales: ['fr', 'en']
})

Vue.use(VueSession)
Vue.use(model, {
  api: 'http://bddi-chat2017.herokuapp.com'
})

export const bus = new Vue()

/* eslint-disable no-new */
new Vue({
  render: h => h(App)
}).$mount('#app')
