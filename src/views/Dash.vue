<template>
  <h1>Dashboard</h1>
  <h3>Hi, {{ username }}</h3>
  <button @click="logout">Logout</button>
</template>

<script>
import { auth } from "@/firebase";
import { signOut } from "firebase/auth";
import router from "@/router";
import { ref } from '@vue/reactivity';
export default {
    name:'DashboardPage',
    setup () {
      const username = ref(auth.currentUser.displayName);
      const logout = async () => {
        await signOut(auth)
        router.push('/')
      }
      return {
        logout, username
      }
    }
}
</script>

<style>

</style>