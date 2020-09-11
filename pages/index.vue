<template>
  <div>
    <ThreadContainer></ThreadContainer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import ThreadContainer from '~/container/ThreadContainer.vue'

export default Vue.extend({
  components: {
    ThreadContainer,
  },
})
</script>
