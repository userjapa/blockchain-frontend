<template>
  <div class="home flex flex-col m-10 mt-0">
    <div>
      <h2 class="text-2xl font-bold mb-2">Wallet</h2>
    </div>
    <form
      ref="transactForm"
      class="flex flex-col items-center border-8 p-3"
      @submit.prevent="createTransaction"
    >
      <div class="mb-2 flex">
        <div class="w-20 text-right">
          <label for="transact-recipient" class="mr-3 w-52">Recipient</label>
        </div>
        <div>
          <input id="transact-recipient" class="border-2 w-52" type="text" v-model="recipient" required>
        </div>
      </div>
      <div class="mb-2 flex">
        <div class="w-20 text-right">
          <label for="transact-amount" class="mr-3 w-52">Amount</label>
        </div>
        <div>
          <input id="transact-amount" class="border-2 w-52" type="number" min="1" v-model="amount" step="1" required>
        </div>
      </div>
      <div class="">
        <button
          class="bg-green-500 text-white my-2 px-5 py-2 rounded"
          type="submit"
        >
          Save
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import { mapGetters, mapActions } from 'vuex'

interface ITransact {
  recipient: string
  amount: number
}

@Options({
  methods: {
    ...mapActions({
      postTransact: 'POST_TRANSACT'
    })
  },
})

export default class WalletView extends Vue {
  recipient = ''
  amount    = 1

  postTransact!: (data: ITransact) => Promise<void>

  createTransaction () {
    const form = this.$refs.transactForm as HTMLFormElement

    if (form.reportValidity()) {
      this.postTransact({
        recipient: this.recipient,
        amount: this.amount
      })
        .then(() => {
          alert('Transaction created')

          this.recipient = ''
          this.amount    = 1
        })
        .catch(error => alert(error.message))
    }
  }
}
</script>
