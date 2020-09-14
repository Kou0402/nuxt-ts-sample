<template>
  <article class="w-5/6">
    <h3 class="mb-1">
      <span class="font-bold" data-testid="createdUserName">{{
        post.createdUserName
      }}</span>
      <span data-testid="createdAt">{{ post.createdAt | moment }}</span>
    </h3>
    <p class="px-4" data-testid="comment">{{ post.comment }}</p>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import moment from 'moment'

import { Post } from '~/models/post'

export default Vue.extend({
  filters: {
    moment(date: Date): string {
      return moment(date).format('YYYY-MM-DD HH:mm:ss')
    },
  },
  props: {
    post: {
      type: Object as () => Post,
      required: true,
    },
  },
})
</script>
