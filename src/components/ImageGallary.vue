<!-- <script setup>
import {defineProps} from "vue"

const props = defineProps(['posts'])
</script>

<template>
    <div class="image-gallary-container">
        <img 
            v-for="post in props.posts" 
            :key="post.id" 
            :src="`https://khjqwdvruapghddwzaju.supabase.co/storage/v1/object/public/images/${post.url}`" 
        >
    </div>
</template>

<style scoped>
.image-gallary-container {
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
}

img {
    margin: 5px;
    width: 200px
}
</style> -->
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
