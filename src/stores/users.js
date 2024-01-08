import { ref } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("users", () => {
  let user = ref(null);
  let handleLogin = () => {};
  let errorMessage = ref("");
  let validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  let handleSignup = (credentials) => {
    const { email, password, username } = credentials;
    if (!validateEmail(email)) {
      return (errorMessage.value = "Email is invalid");
    }
    if (password.length < 6) {
      return (errorMessage.value = "Password length is too short");
    }
    if (username.length < 4) {
      return (errorMessage.value = "Username length is too short");
    }
  };
  let handleProfile = () => {};
  let getUser = () => {};
  return { user, handleLogin, handleProfile, handleSignup, getUser };
});
