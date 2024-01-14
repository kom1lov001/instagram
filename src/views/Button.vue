<template>
  <div>
    <button
      class="py-1 px-2 rounded-xl"
      :style="{ background, color, disabled }"
      :disabled="disabled"
      :roles="roles"
    >
      Lorem
    </button>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
let props = defineProps(["background", "color", "disabled"]);
</script>
<style></style>
