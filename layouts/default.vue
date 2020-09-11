<template>
  <div>
    <div class="mb-6">
      <MainHeader></MainHeader>
      <MessageContainer></MessageContainer>
    </div>
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import MainHeader from '~/components/header/MainHeader.vue'
import MessageContainer from '~/container/MessageContainer.vue'

export default Vue.extend({
  components: {
    MainHeader,
    MessageContainer,
  },
})
</script>
