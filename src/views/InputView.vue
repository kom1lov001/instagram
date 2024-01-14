<template>
  <div>
    <form @ok="handleOk">
      <label for="username">User Name</label>
      <input
        type="text"
        v-model="UserName"
        id="username"
        :placeholder="username"
      />
      <label for="email">Email</label>
      <input type="text" v-model="Email" id="email" :placeholder="email" />
      <label for="password">Password</label>
      <input
        type="text"
        v-model="Password"
        id="password"
        :placeholder="password"
      />
      <p>{{ errorMessage }}</p>
    </form>
  </div>
</template>
<script setup>
import { ref, defineProps, computed } from "vue";
let props = defineProps(["username", "email", "password", "roles"]);
let UserName = ref("");
let Email = ref("");
let Password = ref("");
// let value = ref("");
let errorMessage = ref("");
let error = computed(() => {
  if (this.roles.required && UserName.length === 4) {
    errorMessage = "Email should be 5 letter";
  }
});
function handleOk(e) {}
</script>
<style></style>
