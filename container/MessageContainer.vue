<template>
  <div>
    <MessageHeader
      v-if="globalMessage.message"
      :message="globalMessage.message"
      :is-error="globalMessage.isError"
    ></MessageHeader>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { globalMessageStore } from '~/store'
import { GlobalMessage } from '~/models/global-message'
import MessageHeader from '~/components/header/MessageHeader.vue'

export default Vue.extend({
  components: {
    MessageHeader,
  },
  computed: {
    globalMessage(): GlobalMessage {
      return globalMessageStore.globalMessage
    },
  },
})
</script>
