<template>
  <div>
    <AButton class="buttonsbg" type="primary" @click="showModal">{{
      title
    }}</AButton>
    <AModal odal v-model:open="open" :title="title" @ok="handleOk">
      <!-- {{ userCredentials.username }} -->
      <form class="grid grid-row-auto gap-2">
        <div v-if="!isLogin">
          <label for="userName">UserName</label>
          <AInput
            id="userName"
            type="text"
            v-model:value="userCredentials.username"
            placeholder="User Name"
            >User Name</AInput
          >
          <!-- <p v-if="userCredentials.username ? userCredentials.username : ''">
            Enter your UserName
          </p> -->
        </div>
        <div>
          <label for="email">Email</label>
          <AInput
            placeholder="Email"
            type="email"
            v-model:value="userCredentials.email"
            id="email"
          ></AInput>
        </div>
        <div>
          <label for="password">Password</label>
          <AInput
            placeholder="Password"
            type="password"
            v-model:value="userCredentials.password"
            id="password"
            >Password</AInput
          >
        </div>
        <pre>{{ errorMessage }}</pre>
        <p v-if="errorMessage">{{ errorMessage }}</p>
      </form>
    </AModal>
  </div>
</template>
<script setup>
import { ref, defineProps, reactive, computed } from "vue";
import { useUserStore } from "@/stores/users";
// import { storeToRefs } from "pinia";

let props = defineProps(["isLogin"]);
let userStore = useUserStore();
const errorMessage = computed(() => userStore.errorMessage);

const title = props.isLogin ? "Login" : "Signup";
// let user_name = ref("");
// let emails = ref("");
// let passwords = ref("");
let open = ref(false);
let userCredentials = reactive({
  username: "",
  email: "",
  password: "",
});

const showModal = () => {
  open.value = true;
};
const handleOk = (e) => {
  // console.log(e);
  userStore.handleSignup(userCredentials);
  // userCredentials.email = "";
  // userCredentials.username = "";
  // userCredentials.password = "";
  // open.value = false;
};
</script>
<style scoped>
.buttonsbg {
  background-color: rgb(29, 29, 76);
}
</style>
