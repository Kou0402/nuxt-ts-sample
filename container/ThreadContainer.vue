<template>
  <MainThread></MainThread>
</template>

<script lang="ts">
import Vue from 'vue'

import MainThread from '~/components/thread/MainThread.vue'

export default Vue.extend({
  components: {
    MainThread,
  },
})
</script>
