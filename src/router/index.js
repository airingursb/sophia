import Vue from 'vue'
import Router from 'vue-router'

const Home = (resolve) => {
  import('components/home/home').then((module) => {
    resolve(module)
  })
}

const User = (resolve) => {
  import('components/user/user').then((module) => {
    resolve(module)
  })
}

const Creation = (resolve) => {
  import('components/creation/creation').then((module) => {
    resolve(module)
  })
}

const Editor = (resolve) => {
  import('components/editor/editor').then((module) => {
    resolve(module)
  })
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/user',
      component: User
    },
    {
      path: '/creation',
      component: Creation
    },
    {
      path: '/editor',
      component: Editor
    }
  ]
})
