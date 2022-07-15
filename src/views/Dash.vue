<template>
  <h1>Dashboard</h1>
  <button @click="logout">Logout</button>
</template>

<script>
import { auth } from "@/firebase";
import { signOut } from "firebase/auth";
import router from "@/router";
export default {
    name:'DashboardPage',
    setup () {
      const logout = async () => {
        await signOut(auth)
        router.push('/')
      }
      return {
        logout
      }
    }
}
</script>

<style>

</style>