<template>
  <div>
    <div class="flex flex-col border-8 p-3">
      <div
        class="border-2 px-4 py-2"
        v-for="(transaction, id) in transactions"
        :key="`transaction-${id}`"
      >
        <div class="text-left flex">
          <div>
            <span class="font-bold mr-2">From:</span>
          </div>
          <div class="flex-1 truncate">
            {{ transaction.input.address }}
          </div>
          <div class="w-32 ml-2">
            | Balance: {{ transaction.input.amount }}
          </div>
        </div>
        <div
          class="ml-6 text-left flex"
          v-for="(recipient, index) in Object.keys(transaction.outputMap)"
          :key="`recipient-${index}`"
        >
          <div class="flex-1 truncate">
            To: {{ recipient }}
          </div>
          <div class="w-32 ml-2">
            | Sent: {{ transaction.outputMap[recipient] }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    transactions: []
  }
})

export default class Transactions extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
