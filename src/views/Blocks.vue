<template>
  <div class="home flex flex-col m-10 mt-0">
    <div>
      <h2 class="text-2xl font-bold mb-2">Blocks</h2>
      <button
        class="bg-blue-500 text-white my-2 px-5 py-2 rounded"
        @click="updateBooks"
      >
        Update
      </button>
    </div>
    <Blocks :blocks="blocks"/>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import { mapGetters, mapActions } from 'vuex'

import Blocks from '@/components/Blocks.vue' // @ is an alias to /src

@Options({
  computed: {
    ...mapGetters({
      blocks: 'GET_BLOCKS'
    })
  },
  components: {
    Blocks,
  },
  methods: {
    ...mapActions({
      fetchBlocks: 'FETCH_BLOCKS'
    })
  },
})

export default class BlocksView extends Vue {
  fetchBlocks!: () => Promise<void>

  updateBooks () {
    this.fetchBlocks()
      .catch(error => alert(error.message))
  }

  mounted () {
    this.updateBooks()
  }
}
</script>
