<template>
  <div class="nav-social nav-link d-lg-none">
      <a href="https://www.instagram.com/difazl/" class="-nav-sm instagram">
          <img src="@/assets/icons/instagram.svg" alt="Instagram">
      </a>
      <a href="https://github.com/radhifazl" class="-nav-sm github">
          <img src="@/assets/icons/github.svg" alt="GitHub">
      </a>
      <a href="https://twitter.com/radhiffazli" class="-nav-sm twitter">
          <img src="@/assets/icons/twitter.svg" alt="Twitter">
      </a>
  </div>
</template>

<script>
export default {
    name: 'NavSocial'
}
</script>

<style>
.nav-social {
    display: flex;
    gap: 1.5rem;
    position: absolute;
    bottom: 5%;
}

.-nav-sm img {
    width: 30px;
}
</style>