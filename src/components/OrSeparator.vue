<template>
    <div class="or-text w-100">
      <p class="or">or</p>
    </div>
</template>

<script>
export default {
    name: 'OrSeparator'
}
</script>

<style>
.or-text {
  position: relative;
  text-align: center;
}
.or-text .or::before, .or::after {
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48%;
  height: 1px;
  background: var(--text-color);
}
.or-text .or::before {
  left: 0;
}
.or-text .or::after {
  right: 0;
}
</style>