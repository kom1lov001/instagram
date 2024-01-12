import { onMounted } from "vue";
import { useStore } from "./App.vue";

onMounted(() => {
  useStore.getUser();
});
