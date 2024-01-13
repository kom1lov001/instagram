<script setup>
import { defineProps } from "vue";
// import UploadPhotoModal from ";
import { useRoute } from "vue-router";
import { useUserStore } from "../stores/counter";
import { storeToRefs } from "pinia";

const route = useRoute();
const userStore = useUserStore();

const { user } = storeToRefs(userStore);
const { username: profileUsername } = route.params;

const props = defineProps(["user", "userInfo", "addNewPost"]);
</script>

<template>
  <div class="userbar-container" v-if="props.user">
    <div class="top-content">
      <ATypographyTitle :level="2">{{ props.user.username }}</ATypographyTitle>
      <UploadPhotoModal
        v-if="user && profileUsername === user.username"
        :addNewPost="addNewPost"
      />
    </div>
    <div class="bottom-content">
      <ATypographyTitle :level="5"
        >{{ props.userInfo.posts }} posts</ATypographyTitle
      >
      <ATypographyTitle :level="5"
        >{{ props.userInfo.followers }} followers</ATypographyTitle
      >
      <ATypographyTitle :level="5"
        >{{ props.userInfo.following }} following</ATypographyTitle
      >
    </div>
  </div>
  <div class="userbar-container" v-else>
    <div class="top-content">
      <ATypographyTitle :level="2">User Not Found</ATypographyTitle>
    </div>
  </div>
</template>

<style scoped>
.userbar-container {
  padding-bottom: 75px;
}

.bottom-content {
  display: flex;
  align-items: center;
}

.bottom-content h5 {
  margin: 0 !important;
  padding: 0;
  margin-right: 30px !important;
  align-items: center;
}

.top-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

http://localhost:5173/profile/laithharb user.username {}
