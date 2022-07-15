<template>
  <button class="action-btn btn-register" @click="routeToRegister">
      Register
  </button>
</template>

<script>
export default {
    name: 'LoginButton',
    methods: {
        routeToRegister() {
            this.$router.push('/register');
        }
    }
}
</script>

<style>
.btn-register {
    background: transparent;
    border: 2px solid var(--primary-color);
}
.btn-register:hover {
    background: var(--primary-color);
    color: var(--white);
}
</style>