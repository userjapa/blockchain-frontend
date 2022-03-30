<template>
  <div class="home flex flex-col m-10 mt-0">
    <div>
      <h2 class="text-2xl font-bold mb-2">Block</h2>
      <div class="flex justify-center">
        <button
          class="bg-blue-500 text-white my-2 px-5 py-2 rounded"
          @click="updateBooks"
        >
          Update
        </button>
        <button
          class="bg-yellow-500 text-white my-2 ml-2 px-5 py-2 rounded"
          @click="$router.go(-1)"
        >
          Back
        </button>
      </div>
    </div>
    <div class="flex flex-col items-center mb-2">
      <div class="flex items-center">
        <div class="w-32 text-right">
          <h3 class="font-bold text-lg">Hash</h3>
        </div>
        <div style="width: 200px;" class="text-left ml-3 truncate">
          {{ block.hash }}
        </div>
      </div>
      <div class="flex items-center">
        <div class="w-32 text-right">
          <h3 class="font-bold text-lg">Last hash</h3>
        </div>
        <div style="width: 200px;" class="text-left ml-3 truncate">
          {{ block.lastHash }}
        </div>
      </div>
      <div class="flex items-center">
        <div class="w-32 text-right">
          <h3 class="font-bold text-lg">Nonce</h3>
        </div>
        <div style="width: 200px;" class="text-left ml-3">
          {{ block.nonce }}
        </div>
      </div>
      <div class="flex items-center">
        <div class="w-32 text-right">
          <h3 class="font-bold text-lg">Difficulty</h3>
        </div>
        <div style="width: 200px;" class="text-left ml-3">
          {{ block.difficulty }}
        </div>
      </div>
    </div>
    <div>
      <h3 class="font-bold text-lg">Data</h3>
    </div>
    <Transactions :transactions="block.data"/>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import { mapGetters, mapActions } from 'vuex'

import Transactions from '@/components/Transactions.vue' // @ is an alias to /src

@Options({
  computed: {
    ...mapGetters({
      blocks: 'GET_BLOCKS'
    })
  },
  components: {
    Transactions,
  },
  methods: {
    ...mapActions({
      fetchBlocks: 'FETCH_BLOCKS'
    })
  },
})

export default class BlockView extends Vue {
  fetchBlocks!: () => Promise<void>
  blocks!: any[]
  block_hash!: string | string[]
  block!: any

  updateBooks () {
    this.fetchBlocks()
      .then(() => {
        this.block = this.blocks.find(b => b.hash === this.block_hash)
      })
      .catch(error => alert(error.message))
  }

  beforeCreate () {
    this.block_hash = this.$route.params.hash

    if (!this.block_hash)
      return this.$router.go(-1)
  }

  beforeMount () {
    this.block = this.blocks.find(b => b.hash === this.block_hash)

    if (!this.block)
      return this.$router.go(-1)
  }
}
</script>
