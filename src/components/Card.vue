<template>
  <a-card hoverable class="md:w-max-[235px] sm:w-min-[220px]">
    <template #cover>
      <img alt="example" class="" :src="props.post.url" />
    </template>
    <a-card-meta class="" :title="props.post.title">
      <template #description>
        <span class="">
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
<!--
<script setup>
import { defineProps } from "vue";

const props = defineProps(["post"]);
</script>

<template>
  <ACard hoverable style="width: 240px" class="card">
    <template #cover>
      <img alt="example" :src="post.url" />
    </template>
    <ACardMeta :title="post.username">
      <template #description>{{ post.caption }}</template>
    </ACardMeta>
  </ACard>
</template>

<style scoped>
.card {
  margin-bottom: 20px;
}
</style>
-->
