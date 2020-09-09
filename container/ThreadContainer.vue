<template>
  <MainThread
    :name.sync="name"
    :comment.sync="comment"
    :posts="posts"
    @click-post-button="savePost"
  ></MainThread>
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
    savePost() {
      const post: Post = {
        createdUserName: this.name,
        comment: this.comment,
      }
      postsStore.save(post)
    },
  },
})
</script>
