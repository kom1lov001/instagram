<script setup>
import Button from "./Button.vue";
import InputView from "./InputView.vue";
import { ref } from "vue";
let valid = ref(true);
</script>

<template>
  <main>
    <InputView
      :rules="{ required: true, min: 5 }"
      password="Password"
      :value="value"
      email="Email"
    />
    <Button background="red" color="white" :disabled="!valid"></Button>
  </main>
</template>
