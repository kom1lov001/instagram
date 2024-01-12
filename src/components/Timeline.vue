<template>
  <Container>
    <div
      class="grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 justify-center"
    >
      <Card
        v-for="post of data"
        :key="post.id"
        :post="post"
        class="flex flex-col"
      />
    </div>
  </Container>
</template>
<script setup>
import Container from "@/components/Container.vue";
import Card from "./Card.vue";
import { data } from "../stores/data";
</script>
<style lang=""></style>
<!--<script setup>
import Container from "./Container.vue";
import Card from "./Card.vue";

const data = [
  {
    id: 1,
    username: "selena",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa8n4xN_NzBDHigVsfZhb_kT94DvHdC38jaq1tIg0tQiu9WiOm",
    caption: "i like pink",
  },
  {
    id: 2,
    username: "the weekend",
    url: "https://upload.wikimedia.org/wikipedia/commons/e/e0/The_Weeknd_%28253662129%29.jpeg",
    caption: "hello guys",
  },
];
</script>

<template>
  <Container>
    <div class="timeline-container">
      <Card v-for="post in data" :key="post.id" :post="post" />
    </div>
  </Container>
</template>

<style scoped>
.timeline-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
}
</style>
-->
