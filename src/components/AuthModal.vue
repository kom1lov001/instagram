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
            v-model:value="value"
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
            v-model:value="value"
            id="email"
          ></AInput>
        </div>
        <div>
          <label for="password">Password</label>
          <AInput
            placeholder="Password"
            type="password"
            v-model:value="value"
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
let props = defineProps(["isLogin"]);

const title = props.isLogin ? "Login" : "Signup";
const user_name = ref("");
const emails = ref("");
const passwords = ref("");
const open = ref(false);

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
