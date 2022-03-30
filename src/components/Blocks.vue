<template>
  <div>
    <div class="flex flex-col border-8 p-3 relative">
      <table class="max-w-full">
        <thead class="border-b-2">
          <tr>
            <th>Detail</th>
            <th>Hash</th>
            <th>Last hash</th>
            <th>Nonce</th>
            <th>Difficulty</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(block, index) in blocks"
            :class="{ 'bg-gray-200': index % 2 === 1 }"
            :key="`block-${index}`"
          >
            <td class="truncate" style="min-width: 100px;">
              <button
                class="bg-blue-500 text-white px-4 py-1 rounded"
                @click="$router.push(`/blocks/${block.hash}`)"
              >
                Detail
              </button>
            </td>
            <td class="truncate w-1/2" style="max-width: 250px;">
              {{ block.hash }}
            </td>
            <td class="truncate w-1/2" style="max-width: 250px;">
              {{ block.lastHash }}
            </td>
            <td style="min-width: 100px;">
              {{ block.nonce }}
            </td>
            <td style="min-width: 100px;">
              {{ block.difficulty }}
            </td>
            <td style="min-width: 150px;">
              {{ new Date(block.timestamp).toLocaleString() }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

interface IBlock {
  data: any
  hash: string
  lastHash: string
  timestamp: number
  difficulty: number
  nonce: number
}

@Options({
  props: {
    blocks: []
  }
})
export default class Blocks extends Vue {
  blocks!: IBlock[]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
