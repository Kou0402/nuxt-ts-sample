<template>
  <section class="p-6 border-2 container">
    <h2 class="mb-4 text-3xl">掲示板</h2>
    <MainThreadComment class="mx-auto mb-4"></MainThreadComment>
    <MainThreadComment class="mx-auto"></MainThreadComment>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

import MainThreadComment from '~/components/thread/MainThreadComment.vue'

export default Vue.extend({
  components: {
    MainThreadComment,
  },
})
</script>
