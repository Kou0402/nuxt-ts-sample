<template>
  <section class="container mx-auto p-6 border-2">
    <h2 class="mb-4 text-3xl">掲示板</h2>
    <MainThreadComment
      v-for="post in posts"
      :key="post.comment"
      :post="post"
      class="mx-auto mb-6"
    ></MainThreadComment>
    <MainThreadForm
      class="mx-auto"
      :name="name"
      :comment="comment"
      @update:name="$emit('update:name', $event)"
      @update:comment="$emit('update:comment', $event)"
      @click-post-button="$emit('click-post-button')"
      @click-error-button="$emit('click-error-button')"
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
    name: {
      type: String,
      required: false,
      default: '',
    },
    comment: {
      type: String,
      required: false,
      default: '',
    },
  },
})
</script>
