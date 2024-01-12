<template>
  <div>
    <AButton @click="showModal" class="text-gray-200">Upload Photo</AButton>
    <AModal v-model:visible="visible" title="BASIC TITLE" @ok="handleOk">
      <p>some Content...</p>
      <p>some Content...</p>
      <p>some Content...</p>
      <template #footer>
        <AButton key="back" @click="handleCancel">Cancel</AButton>
        <AButton
          key="ok"
          type="primary"
          @click="handleOk"
          class="bg-blue-500 text-white"
          >OK</AButton
        >
      </template>
    </AModal>
  </div>
</template>
<script setup>
import { ref } from "vue";
let visible = ref(false);
function showModal() {
  return (visible.value = true);
}
function handleOk(e) {}
</script>
<style></style>
