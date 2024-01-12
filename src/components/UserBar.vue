<template>
  <div
    class="flex flex-col dark:text-gray-200 text-black pb-[36px] gap-16 my-0 mx-auto"
  >
    <div class="flex justify-between">
      <!-- <ATypographyTitle :level="2">Iaithharb</ATypographyTitle> -->
      <h1>Iaithharb</h1>
      <UploadPhotoModal />
    </div>
    <div class="flex flex-row gap-4">
      <!-- <ATypographyTitle :level="5">Iaithharb</ATypographyTitle  pographyTitle>
      <ATypographyTitle :level="5">Iaithharb</ATypographyTitle>
      <ATypographyTitle :level="5">Iaithharb</ATypographyTitle> -->
      <h5>
        <span class="text-lg">{{ userInfo.posts }}</span> Posts
      </h5>
      <h5>
        <span class="text-lg">{{ userInfo.followers }}</span>
        Followers
      </h5>
      <h5>
        <span class="text-lg">{{ userInfo.following }}</span> Following
      </h5>
    </div>
  </div>
</template>
<script setup>
import { ref, defineProps } from "vue";
import UploadPhotoModal from "./UploadPhotoModal.vue";
const props = defineProps(["userInfo"]);
// let postCount = ref("105");
// let followersCount = ref("809K");
// let followCount = ref("160");
</script>
<style></style>
