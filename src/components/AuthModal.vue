<template>
  <div>
    <AButton class="bg-blue-600" type="primary" @click="showModal">{{
      title
    }}</AButton>
    <!-- {{ user }} -->
    <AModal odal v-model:open="open" :title="title" @ok="handleOk">
      <template #footer>
        <AButton key="back" @click="handleCancel">Cancel</AButton>
        <AButton
          key="submit"
          type="primary"
          class="bg-blue-500 text-white"
          @click="handleOk"
          >Submit</AButton
        >
      </template>

      <!-- {{ userCredentials.username }} -->
      <form class="grid grid-row-auto gap-2">
        <div v-if="!loading">
          <div v-if="!isLogin">
            <label for="userName">UserName</label>
            <AInput
              id="userName"
              type="text"
              v-model:value="userCredentials.username"
              placeholder="User Name"
              >User Name
            </AInput>
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
        </div>
        <div v-else class="spinner flex items-center justify-center h-[120px]">
          <ASpin />
        </div>
        <!-- <pre>{{ errorMessage }}</pre> -->
        <p v-if="errorMessage">{{ errorMessage }}</p>
      </form>
    </AModal>
  </div>
</template>
<script setup>
import { ref, defineProps, reactive } from "vue";
import { useUserStore } from "@/stores/users";
import { storeToRefs } from "pinia";

let props = defineProps(["isLogin"]);
let userStore = useUserStore();

const { errorMessage, loading, user } = storeToRefs(userStore);
// getters
const title = props.isLogin ? "Login" : "Signup";
let open = ref(false);
let userCredentials = reactive({
  email: "",
  password: "",
  username: "",
});

// Function
const showModal = () => {
  open.value = true;
  // userStore.getUser();
};
const clearUserCredentialsInput = () => {
  userCredentials.username = "";
  userCredentials.email = "";
  userCredentials.password = "";
  userStore.clearErrorMessage();
};
// const handleOk = async (e) => {
// if(props.isLogin){

// }
//   await userStore.handleSignup(userCredentials);
//   // userStore.handleLogin (userCredentials);
//   if (user.value) {
//     clearUserCredentialsInput();
//     open.value = false;
//     // userCredentials.email = "";
//     // userCredentials.password = "";
//     // userCredentials.username = "";
//   }

//   // open.value = false;
// };
// const handleOk = async (e) => {
//   if (props.isLogin) {
//     await userStore.handleLogin({
//       password: userCredentials.password,
//       email: userCredentials.email,
//     });
//   } else {
//     await userStore.handleSignup(userCredentials);
//   }

//   if (user.value) {
//     clearUserCredentialsInput();
//     open.value = false;
//   }
// };

const handleOk = async (e) => {
  if (props.isLogin) {
    await userStore.handleLogin({
      password: userCredentials.password,
      email: userCredentials.email,
    });
  } else {
    await userStore.handleSignup(userCredentials);
  }

  if (user.value) {
    clearUserCredentialsInput();
    open.value = false;
  }
};

function handleCancel() {
  userStore.clearErrorMessage();
  open.value = false;
}
</script>
<style scoped></style>
