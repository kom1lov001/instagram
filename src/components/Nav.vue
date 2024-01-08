<template>
  <ALayout class="layout dark:bg-[#001529] bg-gray-400">
    <ALayoutHeader :style="{ lineHeight: '64px' }">
      <Container>
        <div class="nav-container">
          <div class="right-content">
            <router-link to="/" class="text-white text-lg"
              >Defender</router-link
            >
            <!-- Instagram -->
            <AInputSearch
              v-model:value="searchUserName"
              placeholder="input search text"
              style="width: 200px"
              class="inputSearch"
              @search="onSearch"
            ></AInputSearch>
          </div>
          <div class="left-content">
            <div v-if="!isAuthenticated" class="flex gap-3">
              <AuthModal :isLogin="false" />
              <AuthModal :isLogin="true" />
            </div>
            <div class="flex gap-3" v-else>
              <AButton type="primary">Profil</AButton>
              <AButton type="primary">LogOut</AButton>
            </div>
            <slot name="darkMode"></slot>
          </div>
        </div>
      </Container>
    </ALayoutHeader>
  </ALayout>
</template>
<script setup>
import { RouterLink, useRoute, useRouter } from "vue-router";
import Container from "@/components/Container.vue";
import AuthModal from "./AuthModal.vue";
import { ref } from "vue";
let searchUserName = ref("");
const route = useRoute();
const router = useRouter();
let isAuthenticated = ref(false);

function onSearch() {
  if (searchUserName.value) {
    router.push(`/profile/${searchUserName.value}`);
    searchUserName.value = "";
  }
}
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.right-content {
  display: flex;
  align-items: center;
  gap: 30px;
}
.left-content {
  display: flex;
  align-items: center;
  gap: 30px;
}
.text-white {
  color: white;
  font-size: 20px;
}
</style>
