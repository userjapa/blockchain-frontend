import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const Wallet          = () => import(/* webpackChunkName: "wallet" */ '../views/Wallet.vue')
const Blocks          = () => import(/* webpackChunkName: "blocks" */ '../views/Blocks.vue')
const Block           = () => import(/* webpackChunkName: "block" */ '../views/Block.vue')
const Transact        = () => import(/* webpackChunkName: "transact" */ '../views/Transact.vue')
const TransactionPool = () => import(/* webpackChunkName: "transaction-pool" */ '../views/TransactionPool.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Wallet',
    component: Wallet
  },
  {
    path: '/blocks',
    name: 'Blocks',
    component: Blocks
  },
  {
    path: '/blocks/:hash',
    name: 'Block',
    component: Block
  },
  {
    path: '/transact',
    name: 'Transact',
    component: Transact
  },
  {
    path: '/transaction-pool',
    name: 'TransactionPool',
    component: TransactionPool
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
