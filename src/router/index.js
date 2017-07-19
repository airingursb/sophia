import Vue from 'vue'
import Router from 'vue-router'

const Home = (resolve) => {
  import('components/home/home').then((module) => {
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
    }
  ]
})
