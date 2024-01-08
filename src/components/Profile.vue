<template>
  <Container>
    <div class="">
      <UserBar
        :userInfo="{
          posts: 55,
          followers: 100,
          following: 650,
        }"
      />
      IMAGEGALLERY
      <ImageGallery :posts="data" />
    </div>
  </Container>
</template>
<script setup>
import Container from "@/components/Container.vue";
import UserBar from "./UserBar.vue";
import ImageGallery from "./ImageGallery.vue";
import { data } from "../stores/data";
</script>
<style></style>
