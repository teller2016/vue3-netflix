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

    return {
      id,
      password,
      loginByEmail,
    };
  },
};
</script>

<style>
</style>