<template>
  <div class="google-btn-wrapper mb-2">
      <button class="google-btn" @click="$emit('action')">
          <img src="@/assets/icons/google.svg" alt="Google Icon"> <span>Sign in with Google</span>
      </button>
  </div>
</template>

<script>
export default {
    name: 'GoogleSignIn',
}
</script>

<style>
.google-btn {
    width: 100%;
    background: #4B4949;
    font-weight: 600;
    padding: 0.5rem 0;
    color: #ffffff;
    border: none;
    outline: none;
    transition: 0.3s ease-in-out;
}
.google-btn span {
    color: #ffffff;
}
.google-btn:hover {
    background: var(--darker-primary-color);
}
</style>