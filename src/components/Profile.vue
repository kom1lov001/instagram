<template>
  <Container>
    <UserBar
      :userInfo="{
        posts: 55,
        followers: 100,
        following: 650,
      }"
    />
    <div class="flex flex-col items-center dark:text-gray-200 text-black">
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

<!--
<script setup>
import Container from "./Container.vue";
import UserBar from "./UserBar.vue";
import ImageGallary from "./ImageGallery.vue";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { supabase } from "@/superbase";

const route = useRoute();
const user = ref(null);
const { username } = route.params;
const posts = ref([]);
const loading = ref(false);

const addNewPost = (post) => {
  posts.value.unshift(post);
};

const fetchData = async () => {
  loading.value = true;
  const { data: userData } = await supabase
    .from("users")
    .select()
    .eq("username", username)
    .single();

  if (!userData) {
    loading.value = false;
    return (user.value = null);
  }

  user.value = userData;

  const { data: postsData } = await supabase
    .from("posts")
    .select()
    .eq("owner_id", user.value.id);

  posts.value = postsData;

  loading.value = false;
};

onMounted(() => {
  fetchData();
});
</script>

<template>
  <Container>
    <div class="profile-container" v-if="!loading">
      <UserBar
        :key="$route.params.username"
        :user="user"
        :userInfo="{
          posts: 4,
          followers: 100,
          following: 342,
        }"
        :addNewPost="addNewPost"
      />
      <ImageGallary :posts="posts" />
    </div>
    <div v-else class="spinner">
      <ASpin />
    </div>
  </Container>
</template>

<style scoped>
.profile-container {
  display: flex;
  flex-direction: column;
  padding: 20px 0;
}

.spinner {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 85vh;
}
</style>
-->
