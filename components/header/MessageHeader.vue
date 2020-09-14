<template>
  <section class="m-1 p-3 border-2 rounded">
    <p :class="{ 'text-red-600': globalMessage.level == 'Error' }">
      {{ globalMessage.message }}
    </p>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

import { GlobalMessage } from '~/models/global-message'

export default Vue.extend({
  props: {
    globalMessage: {
      type: Object as () => GlobalMessage,
      required: false,
      default: undefined,
    },
  },
})
</script>
