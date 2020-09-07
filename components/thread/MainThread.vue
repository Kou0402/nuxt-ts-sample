<template>
  <section class="p-6 border-2 container">
    <h2 class="mb-4 text-3xl">掲示板</h2>
    <MainThreadComment
      v-for="post in posts"
      :key="post.createdUserName"
      :post="post"
      class="mx-auto mb-6"
    ></MainThreadComment>
    <MainThreadForm
      :name.sync="name"
      :comment.sync="comment"
      class="mx-auto"
    ></MainThreadForm>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

import MainThreadComment from '~/components/thread/MainThreadComment.vue'
import MainThreadForm from '~/components/thread/MainThreadForm.vue'
import { Post } from '~/models/post'

export default Vue.extend({
  components: {
    MainThreadComment,
    MainThreadForm,
  },
  props: {
    posts: {
      type: Array as () => Post[],
      required: false,
      default: undefined,
    },
  },
  data() {
    return {
      name: '',
      comment: '',
    }
  },
})
</script>
