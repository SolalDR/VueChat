import ChatComponent from 'components/views/Chat'
import LoginComponent from 'components/views/Login'

export default [
  {
    path: '/',
    component: ChatComponent,
    beforeEnter: function (to, from, next) {
      next()
    }
  },
  {
    path: '/login',
    component: LoginComponent
  }
]
