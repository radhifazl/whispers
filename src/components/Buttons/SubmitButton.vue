<template>
  <div class="submit-btn-wrapper">
      <button class="submit-btn" @click="$emit('action')" type="submit">
          <slot/>
      </button>
  </div>
</template>

<script>
export default {
    name: 'SubmitButton',
}
</script>

<style>
.submit-btn {
    width: 100%;
    background: var(--primary-color);
    padding: 0.5rem 0;
    color: #FFFFFF;
    border: none;
    outline: none;
    transition: 0.3s ease-in-out;
}
.submit-btn span {
    color: #FFFFFF;
}
.submit-btn:hover {
    background: var(--darker-primary-color);
}
</style>