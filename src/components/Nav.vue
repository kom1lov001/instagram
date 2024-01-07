<template>
  <ALayout class="layout">
    <ALayoutHeader
      theme="dark"
      mode="horizontal"
      :style="{ lineHeight: '64px' }"
    >
      <Container>
        <div class="nav-container">
          <div class="right-content">
            <router-link to="/" class="text-white text-lg"
              >Instagram</router-link
            >
            <AInputSearch
              v-model:value="searchUserName"
              placeholder="input search text"
              style="width: 200px"
              @search="onSearch"
            ></AInputSearch>
          </div>
          <div class="left-content">
            <!-- <AButton type="primary">Signup</AButton> -->
            <!-- <AButton type="primary">Login</AButton> -->
            <AuthModal :isLogin="false" />
            <AuthModal :isLogin="true" />
          </div>
        </div>
      </Container>
    </ALayoutHeader>
  </ALayout>
</template>
<script setup>
import { RouterLink } from "vue-router";
import Container from "@/components/Container.vue";
import AuthModal from "./AuthModal.vue";
import { ref } from "vue";
let searchUserName = ref("");

function onSearch() {}
</script>
<style>
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
</style>
