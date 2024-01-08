<template>
  <div>
    <AButton class="buttonsbg" type="primary" @click="showModal">{{
      title
    }}</AButton>
    <AModal odal v-model:open="open" :title="title" @ok="handleOk">
      <form class="grid grid-row-auto gap-2">
        <div v-if="!isLogin">
          <label for="userName">UserName</label>
          <AInput
            id="userName"
            type="text"
            v-model:value="user_name"
            placeholder="User Name"
            >User Name</AInput
          >
          <p v-if="user_name">Enter your UserName</p>
        </div>
        <div>
          <label for="email">Email</label>
          <AInput
            placeholder="Email"
            type="email"
            v-model:value="emails"
            id="email"
          ></AInput>
        </div>
        <div>
          <label for="password">Password</label>
          <AInput
            placeholder="Password"
            type="password"
            v-model:value="passwords"
            id="password"
            >Password</AInput
          >
        </div>
      </form>
    </AModal>
  </div>
</template>
<script setup>
import { ref, defineProps } from "vue";
import { useUserStore } from "@/stores/users";

let props = defineProps(["isLogin"]);
let userStore = useUserStore();
let { handleSignup, errorMessage } = userStore;

const title = props.isLogin ? "Login" : "Signup";
let user_name = ref("");
let emails = ref("");
let passwords = ref("");
let open = ref(false);
// let userCredentials = reactive({
//   username: "",
//   email: "",
//   password: "",
// });

const showModal = () => {
  open.value = true;
};
const handleOk = (e) => {
  console.log(e);
  e.preventDefault();

  open.value = false;
};
</script>
<style scoped>
.buttonsbg {
  background-color: rgb(29, 29, 76);
}
</style>
