<template>
  <button class="btn-send w-100 mt-3" type="submit">
      <i class='bx-fw bx bxs-send'></i> Send Message
  </button>
</template>

<script>
export default {
    name: 'SendButton',
}
</script>

<style>
.btn-send {
    border: none;
    outline: none;
    background: var(--primary-color);
    color: #FFF;
    padding: 0.5rem;
    border-radius: 10px;
    transition: 0.3s ease-in-out;
}

.btn-send:hover {
    background: var(--darker-primary-color);
}

.btn-send i {
    color: #FFF;
}
</style>