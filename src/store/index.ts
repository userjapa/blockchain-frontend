import { createStore } from 'vuex'

import { API_URL, RESPONSE_TYPES } from '@/config.ts'

interface IResponse {
  type: string
  message?: string
  data?: IWallet | IBlock[] | Object | Array<any>
}

interface IWallet {
  address: string
  balance: number
}

interface IBlock {
  data: any
  hash: string
  lastHash: string
  timestamp: number
  difficulty: number
  nonce: number
}

export default createStore({
  state: {
    wallet: {},
    blocks: [],
    transactionPool: {},
  },
  getters: {
    GET_WALLET ({ wallet }) {
      return wallet
    },
    GET_BLOCKS ({ blocks }) {
      return blocks
    },
    GET_TRANSACTION_POOL ({ transactionPool }) {
      return transactionPool
    }
  },
  mutations: {
    SET_WALLET (state, wallet) {
      state.wallet = wallet
    },
    SET_BLOCKS (state, blocks) {
      state.blocks = blocks
    },
    SET_TRANSACTION_POOL (state, transactionPool) {
      state.transactionPool = transactionPool
    }
  },
  actions: {
    async FETCH_WALLET ({ commit }) {
      try {
        const response = await fetch(`${API_URL}/api/wallet-info`),
              json     = await response.json() as IResponse

        if (json.type === RESPONSE_TYPES.ERROR)
          throw new Error(json.message)

        commit('SET_WALLET', json.data)
      } catch (error) {
        throw new Error(error.message)
      }
    },
    async FETCH_BLOCKS ({ commit }) {
      try {
        const response = await fetch(`${API_URL}/api/blocks`),
              json     = await response.json() as IResponse

        if (json.type === RESPONSE_TYPES.ERROR)
          throw new Error(json.message)

        commit('SET_BLOCKS', json.data)
      } catch (error) {
        throw new Error(error.message)
      }
    },
    async POST_TRANSACT (store, { recipient, amount }) {
      try {
        const response = await fetch(`${API_URL}/api/transact`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            recipient,
            amount
          })
        })

        const json = await response.json() as IResponse

        if (json.type === RESPONSE_TYPES.ERROR)
          throw new Error(json.message)
      } catch (error) {
        throw new Error(error.message)
      }
    },
    async FETCH_TRANSACTION_POOL ({ commit }) {
      try {
        const response = await fetch(`${API_URL}/api/transaction-pool-map`),
              json     = await response.json() as IResponse

        if (json.type === RESPONSE_TYPES.ERROR)
          throw new Error(json.message)

        commit('SET_TRANSACTION_POOL', json.data)
      } catch (error) {
        throw new Error(error.message)
      }
    },
    async MINE_TRANSACTIONS () {
      try {
        const response = await fetch(`${API_URL}/api/mine-transactions`),
              json     = await response.json() as IResponse

        if (json.type === RESPONSE_TYPES.ERROR)
          throw new Error(json.message)
      } catch (error) {
        throw new Error(error.message)
      }
    }
  },
})
