<template>
  <section class="p-6 border-2 container">
    <h2 class="mb-4 text-3xl">掲示板</h2>
    <MainThreadComment
      v-for="post in posts"
      :key="post.createdUserName"
      :post="post"
      class="mx-auto mb-6"
    ></MainThreadComment>
    <MainThreadForm :name.sync="name" :comment.sync="comment" class="mx-auto"></MainThreadForm>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

import MainThreadComment from '~/components/thread/MainThreadComment.vue'
import MainThreadForm from '~/components/thread/MainThreadForm.vue'
import { Post } from '~/models/post'

const postsSample: Post[] = [
  {
    createdUserName: 'スズキ',
    createdAt: new Date(),
    comment: 'コメントコメントコメントコメントコメントコメントコメント',
  },
  {
    createdUserName: 'タナカ',
    createdAt: new Date(),
    comment: 'コメントコメントコメントコメントコメントコメントコメント',
  },
  {
    createdUserName: 'コバヤシ',
    createdAt: new Date(),
    comment: 'コメントコメントコメントコメントコメントコメントコメント',
  },
]

export default Vue.extend({
  components: {
    MainThreadComment,
    MainThreadForm,
  },
  data() {
    return {
      posts: postsSample,
      name: '',
      comment: '',
    }
  },
})
</script>
