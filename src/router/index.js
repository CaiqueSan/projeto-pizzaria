import Vue from 'vue'
import VueRouter from 'vue-router'

import ControlePedidos from '@/views/ControlePedidos'
import ListagemPizza from '@/views/ListagemPizza'
import ListagemBebida from '@/views/ListagemBebida'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'controle-pedidos',
    component: ControlePedidos
  },
  {
    path: '/pizzas',
    name: 'listagem-pizzas',
    component: ListagemPizza
  },
  {
    path: '/bebidas',
    name: 'listagem-bebidas',
    component: ListagemBebida
  }
]

const router = new VueRouter({
  routes
})

export default router
