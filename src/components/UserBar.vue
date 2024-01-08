<template>
  <div class="pb-[75px]">
    <div class="top">
      <!-- <ATypographyTitle :level="2">Iaithharb</ATypographyTitle> -->
      <h1>Iaithharb</h1>
    </div>
    <div class="flex text-center flex-row gap-4 items-start">
      <!-- <ATypographyTitle :level="5">Iaithharb</ATypographyTitle>
      <ATypographyTitle :level="5">Iaithharb</ATypographyTitle>
      <ATypographyTitle :level="5">Iaithharb</ATypographyTitle> -->
      <h5>
        <span class="text-lg">{{ props.userInfo.posts }}</span> Posts
      </h5>
      <h5>
        <span class="text-lg">{{ props.userInfo.followers }}</span>
        Followers
      </h5>
      <h5>
        <span class="text-lg">{{ props.userInfo.following }}</span> Following
      </h5>
    </div>
  </div>
</template>
<script setup>
import { ref, defineProps } from "vue";
const props = defineProps(["userInfo"]);
// let postCount = ref("105");
// let followersCount = ref("809K");
// let followCount = ref("160");
</script>
<style></style>
