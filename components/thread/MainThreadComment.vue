<template>
  <article class="w-5/6">
    <h3 class="mb-1">
      <span>{{ post.createdUserName }}</span>
      <span>{{ post.createdAt }}</span>
    </h3>
    <p class="px-4">{{ post.comment }}</p>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'

import { Post } from '~/models/post'

export default Vue.extend({
  props: {
    post: {
      type: Object as () => Post,
      required: true,
    },
  },
})
</script>
