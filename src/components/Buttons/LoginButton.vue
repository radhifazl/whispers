<template>
  <button class="action-btn btn-login" @click="routeToLogin">
      Login
  </button>
</template>

<script>
export default {
    name: 'LoginButton',
    methods: {
        routeToLogin() {
            this.$router.push('/login');
        }
    }
}
</script>

<style>
.btn-login {
    background-color: var(--primary-color);
    border: none;
    color: var(--white);
}
.btn-login:hover {
    background-color: #616060;
}
</style>