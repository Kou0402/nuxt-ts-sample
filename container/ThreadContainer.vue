<template>
  <MainThread :posts="posts"></MainThread>
</template>

<script lang="ts">
import Vue from 'vue'

import { postsStore } from '~/store'
import { Post } from '~/models/post'
import MainThread from '~/components/thread/MainThread.vue'

export default Vue.extend({
  components: {
    MainThread,
  },
  computed: {
    posts(): Post[] {
      return postsStore.posts
    },
  },
  async created(): Promise<void> {
    await postsStore.fetchAll()
  },
})
</script>
