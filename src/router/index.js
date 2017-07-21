import Vue from 'vue'
import Router from 'vue-router'

const Home = (resolve) => {
  import('components/home/home').then((module) => {
    resolve(module)
  })
}

const Write = (resolve) => {
  import('components/write/write').then((module) => {
    resolve(module)
  })
}

const Statistics = (resolve) => {
  import('components/statistics/statistics').then((module) => {
    resolve(module)
  })
}

const User = (resolve) => {
  import('components/user/user').then((module) => {
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
      path: '/write',
      component: Write
    },
    {
      path: '/statistics',
      component: Statistics
    },
    {
      path: '/user',
      component: User
    }
  ]
})
