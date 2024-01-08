<template>
  <div class="flex justify-start flex-wrap">
    <img
      v-for="post of posts"
      :key="post.id"
      class="m-5 w-[200px]"
      :src="post.url"
      alt=""
    />
  </div>
</template>
<script setup>
import { defineProps } from "vue";

let props = defineProps(["posts"]);
</script>
<style scoped></style>
