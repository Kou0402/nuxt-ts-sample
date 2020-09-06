<template>
  <section class="w-5/6">
    <div class="flex mb-2">
      <label class="inline-block w-24">名前</label>
      <input
        :value="name"
        type="text"
        class="border border-indigo w-full"
        @input="$emit('update:name', $event.target.value)"
      />
    </div>
    <div class="flex mb-4">
      <label class="inline-block w-24">コメント</label>
      <input
        :value="comment"
        type="text"
        class="border border-indigo w-full"
        @input="$emit('update:comment', $event.target.value)"
      />
    </div>
    <button
      class="bg-blue hover:bg-blue-600 text-white font-bold py-2 px-4 border-b-2 border-black hover:border-blue-400 rounded"
    >
      投稿
    </button>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
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
