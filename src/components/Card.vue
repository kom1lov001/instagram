<template>
  <a-card hoverable style="width: 240px" class="bg-gray-800 text-gray-400">
    <template #cover>
      <img alt="example" :src="props.post.url" />
      <!-- https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png -->
    </template>
    <a-card-meta class="text-gray-400" :title="props.post.title">
      <template #description>
        <span class="text-gray-400">
          {{ props.post.caption }}
        </span>
      </template>
    </a-card-meta>
    <p>{{ props.post.brand }}</p>
  </a-card>
</template>
<script setup>
import { defineProps } from "vue";
let props = defineProps(["post"]);
</script>
<style scoped></style>
