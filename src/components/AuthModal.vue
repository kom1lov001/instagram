<template>
  <div>
    <AButton type="primary" @click="showModal">{{ title }}</AButton>
    <AModal odal v-model:open="open" :title="title" @ok="handleOk">
      <div class="grid grid-row-auto gap-4">
        <AInput v-if="!isLogin" placeholder="User Name">User Name</AInput>
        <p v-if="user_name">Enter your UserName</p>
        <AInput placeholder="Email"></AInput>
        <AInput placeholder="Password">Password</AInput>
      </div>
    </AModal>
  </div>
</template>
<script setup>
import { ref, defineProps } from "vue";
let props = defineProps(["isLogin"]);
const title = props.isLogin ? "Login" : "Signup";

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
