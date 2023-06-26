<template>
  <h2>Login</h2>
  <input
    type="text"
    v-model="id"
  >
  <input
    type="password"
    v-model="password"
  >
  <button
    type="button"
    @click="loginByEmail"
  >로그인</button>
  <button
    type="button"
    @click="signInByEmail"
  >회원가입</button>
</template>

<script>
import { AuthAPI } from "@/utils/auth";
import { ref } from "vue";
export default {
  setup() {
    const id = ref("");
    const password = ref("");

    const loginByEmail = () => {
      const login = new AuthAPI(id.value, password.value);
      console.log(login);
      login.login();
    };
    const signInByEmail = () => {
      const login = new AuthAPI(id.value, password.value);
      console.log(login);
      login.signIn();
    };

    return {
      id,
      password,
      loginByEmail,
      signInByEmail,
    };
  },
};
</script>

<style>
</style>