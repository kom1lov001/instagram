import { ref } from "vue";
import { defineStore } from "pinia";
import { supabase } from "@/superbase";
// import userStore= useUserStore()
export const useUserStore = defineStore("users", () => {
  let user = ref(null);
  let errorMessage = ref("");
  const loading = ref(false);
  const loadingUser = ref(false);

  let validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  // HandleSignup
  //                     HandleSignup  start
  // HandleSignup

  // let handleSignup = async (credentials) => {
  //   const { email, password, username } = credentials;
  //   if (!validateEmail(email)) {
  //     return (errorMessage.value = "Email is invalid");
  //   }
  //   loading.value = true;
  //   // errorMessage.value = "";
  //   if (password.length < 3) {
  //     errorMessage.value = "Password cannot be empty";
  //   }
  //   if (username.length < 4) {
  //     errorMessage.value = "Username length is too short";
  //   }

  //   // Validate if user Exists
  //   const { error } = await supabase.auth.signUp({
  //     email,
  //     password,
  //     username,
  //   });
  //   // console.log({ response });
  //   if (error) {
  //     open.value = false;
  //     return (errorMessage.value = error.message);
  //   }
  //   // Supabase
  //   await supabase.from("users").insert({
  //     username,
  //     email,
  //     password,
  //   });
  //   open.value = false;

  //   const { data: userWithUsername } = await supabase
  //     .from("users")
  //     .select()
  //     .eq("username", username)
  //     .single();
  //   if (userWithUsername) {
  //     open.value = false;
  //     // loading.value = false;
  //     console.log((errorMessage.value = "User already registered"));
  //     return (errorMessage.value = "User already registered");
  //   }
  //   errorMessage.value = "";

  //   // const { data: newUser } = await supabase
  //   //   .from("users")
  //   //   .select()
  //   //   .eq("email", email)
  //   //   .single();
  // };
  // const handleSignup = async (credentials) => {
  //   const { email, password, username } = credentials;

  //   password.length < 6
  //     ? (errorMessage.value = "Password length is too short")
  //     : "";

  //   !validateEmail(email) ? (errorMessage.value = "Email is invalid") : "";
  //   username.length < 4
  //     ? (errorMessage.value = "Username length is too short")
  //     : (loading.value = true);

  //   const { data: userWithUsername } = await supabase
  //     .from("users")
  //     .select()
  //     .eq("username", username) //equal = //
  //     .single();

  //   if (userWithUsername) {
  //     loading.value = false;
  //     return (errorMessage.value = "User already registered");
  //   }

  //   errorMessage.value = "";

  //   const { error } = await supabase.auth.signUp({
  //     email,
  //     username,
  //     password,
  //   });

  //   if (error) {
  //     loading.value = false;
  //     return (errorMessage.value = error.message);
  //   }

  //   await supabase.from("users").insert({
  //     username,
  //     email,
  //     password,
  //   });
  //   // supabase.from("users").insert({
  //   //   username,
  //   //   email,
  //   //   password,
  //   // });
  //   const { data: newUser } = await supabase
  //     .from("users")
  //     .select()
  //     .eq("email", email)
  //     .single();

  //   user.value = {
  //     id: newUser.id,
  //     email: newUser.email,
  //     username: newUser.username,
  //   };

  //   loading.value = false;
  // };

  // HandleSignup The End
  // HandleSignup The End
  // HandleSignup The End

  // HandleProfile
  //                        HandleProfile start
  // HandleProfile
  const handleLogout = async () => {
    await supabase.auth.signOut();
    user.value = null;
  };
  // HandleProfile The end
  // HandleProfile The end
  // HandleProfile The end

  // handleLogin
  //              handleLogin    start
  // handleLogin

  // const handleLogin = async (credentials) => {
  //   const { email, password } = credentials;

  //   if (!validateEmail(email)) {
  //     return (errorMessage.value = "Email is invalid");
  //   }

  //   if (!password.length) {
  //     return (errorMessage.value = "Password cannot be empty");
  //   }

  //   loading.value = true;

  //   const { error } = await supabase.auth.signInWithPassword({
  //     email,
  //     password,
  //   });

  //   if (error) {
  //     loading.value = false;
  //     return (errorMessage.value = error.message);
  //   }

  //   const { data: existingUser } = await supabase
  //     .from("users")
  //     .select()
  //     .eq("email", email)
  //     .single();

  //   user.value = {
  //     email: existingUser.email,
  //     username: existingUser.username,
  //     id: existingUser.id,
  //   };
  //   loading.value = false;
  //   errorMessage.value = "";
  // };
  const handleLogin = async (credentials) => {
    const { email, password } = credentials;

    // if(){}
    !validateEmail(email) ? (errorMessage.value = "Email is invalid") : "";
    // if (!validateEmail(email)) {
    //   return (errorMessage.value = "Email is invalid");
    // }

    !password.length ? (errorMessage.value = "Password cannot be empty") : "";
    loading.value = true;

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      loading.value = false;
      return (errorMessage.value = error.message);
    }

    const { data: existingUser } = await supabase
      .from("users")
      .select()
      .eq("email", email)
      .single();

    user.value = {
      email: existingUser.email,
      username: existingUser.username,
      id: existingUser.id,
    };
    loading.value = false;
    errorMessage.value = "";
  };

  const handleSignup = async (credentials) => {
    // email, password, username lani handlesignup credentialsga tenglanmoqda sababi authmodalda ishlatish aniqrogi function parametirga tenglanmoqda shu yol bilan manulot almashiladi
    const { email, password, username } = credentials;
    // email, password, username agar etilgan satr toliq bomasa error qaytarishi uchun yozish if sharti
    password.length < 6
      ? (errorMessage.value = "Password length is too short")
      : "";

    username.length < 4
      ? (errorMessage.value = "Username length is too short")
      : "";

    if (!validateEmail(email)) {
      errorMessage.value = "Email is invalid";
      return (loading.value = true);
    }

    const { data: userWithUsername } = await supabase
      .from("users")
      .select()
      .eq("username", username)
      .single();

    if (userWithUsername) {
      loading.value = false;
      return (errorMessage.value = "User already registered");
    }

    errorMessage.value = "";

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      loading.value = false;
      return (errorMessage.value = error.message);
    }

    await supabase.from("users").insert({
      username,
      email,
      password,
    });

    const { data: newUser } = await supabase
      .from("users")
      .select()
      .eq("email", email)
      .single();

    user.value = {
      id: newUser.id,
      email: newUser.email,
      username: newUser.username,
    };

    loading.value = false;
  };
  // handleLogin
  // handleLogin The End
  // handleLogin

  // GetUser
  //            GetUser    start
  // GetUser

  // let getUser = async () => {
  //   loading.value = true;
  //   const { data } = await supabase.auth.getUser();

  //   if (!data.user) {
  //     loading.value = false;
  //     return (user.value = null);
  //   }
  //   const { data: userWithEmail } = await supabase
  //     .from("users")
  //     .select()
  //     .eq("email", data.user.email)
  //     .single();
  //   // console.log({ response });
  //   user.value = {
  //     username: userWithEmail.username,
  //     email: userWithEmail.email,
  //     id: userWithEmail.id,
  //   };
  //   loading.value = false;
  // };
  const getUser = async () => {
    loadingUser.value = true;
    const { data } = await supabase.auth.getUser();

    if (!data.user) {
      loadingUser.value = false;
      return (user.value = null);
    }

    const { data: userWithEmail } = await supabase
      .from("users")
      .select()
      .eq("email", data.user.email)
      .single();

    user.value = {
      username: userWithEmail.username,
      email: userWithEmail.email,
      id: userWithEmail.id,
    };

    loadingUser.value = false;
  };
  // GetUser
  // GetUser    The End
  // GetUser

  // ClearErrorMessage
  // ClearErrorMessage    start
  // ClearErrorMessage
  const clearErrorMessage = () => {
    errorMessage.value = "";
  };
  // ClearErrorMessage
  // ClearErrorMessage    The End
  // ClearErrorMessage

  return {
    user,
    loading,
    user,
    getUser,
    handleLogin,
    loadingUser,
    handleLogout,
    errorMessage,
    handleSignup,
    // handleProfile,
    clearErrorMessage,
  };
});
