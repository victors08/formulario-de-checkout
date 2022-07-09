import { createRouter, createWebHistory } from 'vue-router'
import CarrinhoView from '../views/CarrinhoViewView.vue'
import CheckoutView from '../views/CheckoutView.vue'

const routes = [
  {
    path: '/',
    name: 'carrinho',
    component: CarrinhoView
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckoutView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
