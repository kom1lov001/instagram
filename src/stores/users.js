import { ref } from "vue";
import { defineStore } from "pinia";
// import { supabase } from "@/superbase";
// import { supabase } from "@/superbase";

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

  let handleSignup = async (credentials) => {
    const { email, password, username } = credentials;
    if (!validateEmail(email)) {
      errorMessage.value = "Email is invalid";
    }
    // errorMessage.value = "";
    if (password.length < 3) {
      errorMessage.value = "Password length is too short";
    }
    if (username.length < 4) {
      errorMessage.value = "Username length is too short";
    }
    // const response = await supabase.auth.signUp({
    //   email,
    //   password,
    // });
  };
  let handleProfile = () => {};
  let getUser = () => {};
  return {
    user,
    handleLogin,
    handleProfile,
    handleSignup,
    getUser,
    errorMessage,
  };
});
