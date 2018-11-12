import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/Index'
import Scroll from '@/pages/Scroll'
import Markdown from '@/pages/Markdown'
import list from '@/pages/list'
import scroll_1 from '@/pages/scroll_1'
import HelloWorld from '@/pages/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: Index
  }, {
    path: '/scroll',
    name: 'scroll',
    component: Scroll
  }, {
    path: '/markdown',
    name: 'markdown',
    component: Markdown
  }, {
    path: '/list',
    name: 'list',
    component: list
  }, {
    path: '/scroll_1',
    name: 'scroll_1',
    component: scroll_1
  },{
     path: '/HelloWorld',
    name: 'HelloWorld',
    component: HelloWorld
  }
  ]
})
