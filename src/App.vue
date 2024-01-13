<script setup>
import Nav from "@/components/Nav.vue";
import { useDark } from "@vueuse/core";
import { RouterView } from "vue-router";
import { useruseStore } from "./stores/users";
import { onMounted } from "vue";

let useStore = useruseStore();
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
</template>

<style scoped></style>

<!-- <script setup>
import { ref } from "vue";

const product = ref(null);

// PUT request using fetch with async/await
const requestOptions = {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Vue 3 PUT Request Example" }),
};
const response = await fetch(
  "https://testapi.jasonwatmore.com/products/1",
  requestOptions
);
const data = await response.json();
product.value = data;
</script>

<template>
  <div class="card text-center m-3">
    <h5 class="card-header">PUT Request with Async/Await</h5>
    <div class="card-body">Updated at: {{ product }}</div>
  </div>
</template> -->
<!--<template>
  <div>
    <form>
      <label for="user">User</label>
      <input v-model="form.user" type="text" placeholder="User" />
      <label for="user">Email</label>
      <input v-model="form.email" type="text" placeholder="Email" />
      <label for="user">Password</label>
      <input v-model="form.password" type="text" placeholder="Password" />
    </form>
  </div>
</template>
<script setup>
import { ref } from "vue";
let form = ref({
  user: "",
  email: "",
  password: "",
});
function formfunction(fofunc) {
  let { email } = focontent;
}
</script>
<style></style>-->
