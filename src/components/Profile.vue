<template>
  <Container>
    <div class="flex-flex-col items-center">
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

let data = [
  {
    id: 1,
    url: "https://cdn.dummyjson.com/product-images/1/3.jpg",
  },
  {
    id: 2,
    url: "https://cdn.dummyjson.com/product-images/2/1.jpg",
  },
  {
    id: 3,
    url: "https://cdn.dummyjson.com/product-images/3/1.jpg",
  },
  {
    id: 4,
    url: "https://cdn.dummyjson.com/product-images/4/2.jpg",
  },
  {
    id: 5,
    url: "https://cdn.dummyjson.com/product-images/5/2.jpg",
  },
];
</script>
<style></style>
