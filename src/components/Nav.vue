<template>
  <ALayout class="layout dark:bg-[#001529]">
    <ALayoutHeader>
      <Container>
        <div
          class="grid sm:grid-cols-2 grid-cols-1 justify-between items-center gap-16"
        >
          <div class="right-content">
            <router-link to="/" class="text-white text-lg"
              >Defender</router-link
            >
            <AInputSearch
              v-model:value="searchUsername"
              placeholder="input search text"
              style="width: 200px"
              class="inputSearch"
              @search="onSearch"
            ></AInputSearch>
          </div>
          <!-- <div
            class="hidden gap-3 sm:flex justify-self-end"
            v-if="!loadingUser"
          >
            <div v-if="!isAuthenticated" class="flex gap-3">
              <AuthModal :isLogin="false" />
              <AuthModal :isLogin="true" />
            </div>
            <div class="flex gap-3" v-else>
              <AButton
                type="primary"
                @click="goToUsersProfile"
                class="!px-3 !py-2 flex items-center"
                >Profil</AButton
              >
              <AButton
                type="primary"
                @click="handleLogout"
                class="!px-3 !py-2 flex items-center"
                >LogOut</AButton
              >
            </div>
            <slot name="darkMode"></slot>
          </div> -->
          <div
            class="hidden gap-3 sm:flex justify-self-end"
            v-if="!loadingUser"
          >
            <div class="flex gap-3" v-if="!isAuthenticated">
              <AuthModal :isLogin="false" />
              <AuthModal :isLogin="true" />
            </div>
            <div class="flex gap-3" v-else>
              <AButton
                type="primary"
                class="!px-3 !py-2 flex items-center"
                @click="goToUsersProfile"
                >Profile</AButton
              >
              <AButton
                type="primary"
                class="!px-3 !py-2 flex items-center"
                @click="handleLogout"
                >Logout</AButton
              >
            </div>
            <slot name="darkMode"></slot>
          </div>
        </div>
      </Container>
    </ALayoutHeader>
  </ALayout>
</template>
<script setup>
import { useRoute, useRouter } from "vue-router";
import Container from "@/components/Container.vue";
import AuthModal from "./AuthModal.vue";
import { useruseStore } from "../stores/users";
import { storeToRefs } from "pinia";
import { ref } from "vue";

// const { user } = storeToRefs(useStore);
let useStore = useruseStore();
const { user, loadingUser } = storeToRefs(useStore);
const router = useRouter();
const searchUsername = ref("");
const route = useRoute();
let isAuthenticated = ref(false);

const onSearch = () => {
  if (searchUsername.value) {
    router.push(`/profile/${searchUsername.value}`);
    searchUsername.value = "";
  }
};
const handleLogout = async () => {
  await useStore.handleLogout();
};
const goToUsersProfile = () => {
  console.log(user);
  router.push(`/profile/${user.value.username}`);
};
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
<!--<script setup>
import { RouterLink, useRouter } from "vue-router";
import Container from "./Container.vue";
import AuthModal from "./AuthModal.vue";
import { useruseStore } from "../stores/users";
import { ref } from "vue";
import { storeToRefs } from "pinia";

const useStore = useruseStore();

const { user, loadingUser } = storeToRefs(useStore);
const router = useRouter();
const searchUsername = ref("");

const onSearch = () => {
  if (searchUsername.value) {
    router.push(`/profile/${searchUsername.value}`);
    searchUsername.value = "";
  }
};

const handleLogout = async () => {
  await useStore.handleLogout();
};

const goToUsersProfile = () => {
  console.log(user);
  router.push(`/profile/${user.value.username}`);
};
</script>

<template>
  <ALayoutHeader>
    <Container>
      <div class="nav-container">
        <div class="right-content">
          <RouterLink to="/">Instagram</RouterLink>
          <AInputSearch
            v-model:value="searchUsername"
            placeholder="username..."
            style="width: 200px"
            @search="onSearch"
          />
        </div>
        <div class="content" v-if="!loadingUser">
          <div class="left-content" v-if="!user">
            <AuthModal :isLogin="false" />
            <AuthModal :isLogin="true" />
          </div>
          <div class="left-content" v-else>
            <AButton type="primary" @click="goToUsersProfile">Profile</AButton>
            <AButton type="primary" @click="handleLogout">Logout</AButton>
          </div>
        </div>
      </div>
    </Container>
  </ALayoutHeader>
</template>

<style scoped>
.nav-container {
  display: flex;
  justify-content: space-between;
}

.content {
  display: flex;
  align-items: center;
}

.right-content {
  display: flex;
  align-items: center;
}

.right-content a {
  margin-right: 10px;
}

.left-content {
  display: flex;
  align-items: center;
}

.left-content button {
  margin-left: 10px;
}
</style>
-->
