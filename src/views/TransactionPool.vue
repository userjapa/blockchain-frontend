<template>
  <div class="home flex flex-col m-10 mt-0">
    <div>
      <h2 class="text-2xl font-bold mb-2">Transaction Pool</h2>
      <div class="flex justify-center">
        <button
          class="bg-blue-500 text-white my-2 px-5 py-2 rounded"
          @click="updateTransactionPool"
        >
          Update
        </button>
        <button
          class="ml-2 bg-yellow-500 text-white my-2 px-5 py-2 rounded"
          @click="mine"
        >
          Mine transactions
        </button>
      </div>
    </div>
    <Transactions :transactions="transactions"/>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import { mapGetters, mapActions } from 'vuex'

import Transactions from '@/components/Transactions.vue' // @ is an alias to /src

@Options({
  computed: {
    ...mapGetters({
      transactions: 'GET_TRANSACTION_POOL'
    })
  },
  components: {
    Transactions,
  },
  methods: {
    ...mapActions({
      fetchTransactionPool: 'FETCH_TRANSACTION_POOL',
      mineTransactions: 'MINE_TRANSACTIONS'
    })
  },
})

export default class BlocksView extends Vue {
  fetchTransactionPool!: () => Promise<void>
  mineTransactions!: () => Promise<void>

  updateTransactionPool () {
    this.fetchTransactionPool()
      .catch(error => alert(error.message))
  }

  mine () {
    this.mineTransactions()
      .then(() => {
        this.$router.push('/blocks')
      })
      .catch(error => alert(error.message))
  }

  mounted () {
    this.updateTransactionPool()
  }
}
</script>
