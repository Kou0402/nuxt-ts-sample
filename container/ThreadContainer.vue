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
import { SavePostRequest } from '~/models/payload/post-payload'

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
      const savePostRequest: SavePostRequest = {
        createdUserName: this.name,
        comment: this.comment,
      }
      postsStore.save(savePostRequest)
    },
  },
})
</script>
