<template>
  <section class="m-1 p-3 border-2 rounded">
    <p :class="{ 'text-red-600': isError }">{{ message }}</p>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    message: {
      type: String,
      required: true,
    },
    isError: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
})
</script>
