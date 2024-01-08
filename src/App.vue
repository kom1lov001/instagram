<script setup>
import Nav from "@/components/Nav.vue";
import { useDark } from "@vueuse/core";
import { RouterView } from "vue-router";
let isDark = useDark("false");
</script>

<template>
  <div
    class="dark:bg-[#001529] bg-gray-800 dark:text-gray-100 text-gray-900 w-[100%] h-[100%]"
  >
    <header>
      <Nav>
        <template #darkMode>
          <div>
            <input type="checkbox" v-model="isDark" />
          </div>
        </template>
      </Nav>
      <router-view />
    </header>
  </div>
  <!-- <router-view></router-view> -->
</template>

<style scoped></style>
