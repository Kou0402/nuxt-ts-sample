<template>
  <section class="p-6 border-2 container">
    <h2 class="mb-4 text-3xl">掲示板</h2>
    <MainThreadComment class="mx-auto mb-4" :post="post"></MainThreadComment>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

import MainThreadComment from '~/components/thread/MainThreadComment.vue'
import { Post } from '~/models/post'

const postSample: Post = {
  createdUserName: 'スズキ',
  createdAt: new Date(),
  comment: 'コメントコメントコメントコメントコメントコメントコメント',
}

export default Vue.extend({
  components: {
    MainThreadComment,
  },
  data() {
    return {
      post: postSample,
    }
  },
})
</script>
