<template>
  <Container>
    <div class="flex flex-col md:flex-row flex-wrap gap-3">
      <Card v-for="post of data" :key="post.id" :post="post" />
    </div>
  </Container>
</template>
<script setup>
import Container from "@/components/Container.vue";
import Card from "./Card.vue";
import { data } from "../stores/data";
</script>
<style lang=""></style>
