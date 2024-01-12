<template>
  <div
    class="grid xl:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-4 grid-cols-1 justify-center flex-wrap"
  >
    <img
      v-for="post of posts"
      :key="post.id"
      class="m-5 w-[280px] rounded-xl h-[250px] cursor-pointer"
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
