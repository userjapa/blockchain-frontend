<template>
  <div class="home flex flex-col m-10 mt-0">
    <div>
      <h2 class="text-2xl font-bold mb-2">Wallet</h2>
      <button
        class="bg-blue-500 text-white my-2 px-5 py-2 rounded"
        @click="updateWallet"
      >
        Update
      </button>
    </div>
    <Wallet :wallet="wallet" v-if="!!wallet"/>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import { mapGetters, mapActions } from 'vuex'

import Wallet from '@/components/Wallet.vue' // @ is an alias to /src

@Options({
  computed: {
    ...mapGetters({
      wallet: 'GET_WALLET'
    })
  },
  components: {
    Wallet,
  },
  methods: {
    ...mapActions({
      fetchWallet: 'FETCH_WALLET'
    })
  },
})

export default class WalletView extends Vue {
  fetchWallet!: () => Promise<void>

  updateWallet () {
    this.fetchWallet()
      .catch(error => alert(error.message))
  }

  mounted () {
    this.updateWallet()
  }
}
</script>
