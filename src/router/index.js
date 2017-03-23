import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Blog from '@/components/Blog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Blog',
      component: Blog
    },{
      path: '/Hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
