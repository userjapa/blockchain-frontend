<template>
  <div>
    <div class="flex flex-col border-8 p-3">
      <div class="flex flex-col mb-3">
        <div class="text-left text-lg font-semibold">
          <h3>Public Key</h3>
        </div>
        <div class="border-2 text-left px-4 py-2 break-words">
          {{ wallet.address }}
        </div>
      </div>
      <div class="flex flex-col">
        <div class="text-left text-lg font-semibold">
          <h3>Balance</h3>
        </div>
        <div class="border-2 text-left px-4 py-2">
          {{ wallet.balance }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

interface IWallet {
  address: string
  balance: number
}

@Options({
  props: {
    wallet: {}
  }
})
export default class Wallet extends Vue {
  wallet!: IWallet | null
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
