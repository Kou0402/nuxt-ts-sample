<template>
  <div>
    <MainThread
      :name.sync="name"
      :comment.sync="comment"
      :posts="posts"
      @click-post-button="savePost"
      @click-error-button="testError"
    ></MainThread>
  </div>
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
  data() {
    return {
      name: '',
      comment: '',
    }
  },
  computed: {
    posts(): Post[] {
      return postsStore.posts
    },
  },
  async created(): Promise<void> {
    await postsStore.fetchAll()
  },
  methods: {
    async savePost() {
      const post: Post = {
        createdUserName: this.name,
        comment: this.comment,
      }
      await postsStore.save(post)
      this.clearForm()
    },
    testError() {
      postsStore.testError()
    },
    clearForm() {
      this.comment = ''
    },
  },
})
</script>
