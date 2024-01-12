<script setup>
import Nav from "@/components/Nav.vue";
import { useDark } from "@vueuse/core";
import { RouterView } from "vue-router";
import { useUserStore } from "./stores/users";
import { onMounted } from "vue";

let useStore = useUserStore();
let isDark = useDark("false");

onMounted(() => {
  useStore.getUser();
});
// import { supabase } from "@/superbase";
</script>

<template>
  <div class="dark:bg-[#001529] w-[100%] h-[2000px] bg-gray-400">
    <header>
      <Nav>
        <template #darkMode>
          <div>
            <input type="checkbox" v-model="isDark" />
          </div>
        </template>
      </Nav>
    </header>
    <router-view />
  </div>
  <!-- <router-view></router-view> -->
</template>

<style scoped></style>
