import Vue from 'vue'
import Router from 'vue-router'
import Usuarios from '@/components/Users'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'usuarios',
      component: Usuarios
    }
  ]
})
