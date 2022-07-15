<template>
  <div class="home ccontainer d-flex align-items-center">
      <div class="home-content">
        <div class="logo mb-3">
          <img src="@/assets/logo.svg" alt="Whispers Logos">
        </div>

        <div class="text-wrapper mb-4">
          <h4 class="text">
            Whispers anonymous message to your friend
          </h4>
          <h6>
            Login or register an account to create a whispers site
          </h6>
        </div>

        <div class="btn-wrapper d-flex gap-4">
          <LoginButton/>
          <RegisterButton/>
        </div>
      </div>
      <SocialMedia/>
  </div>
</template>

<script>
import LoginButton from '@/components/Buttons/LoginButton.vue'
import RegisterButton from '@/components/Buttons/RegisterButton.vue'
import SocialMedia from '@/components/SocialMedia/SocialMedia.vue'
import { auth } from '@/firebase'
export default {
  components: { LoginButton, RegisterButton, SocialMedia },
  name: 'HomeView',
  mounted() {
    if(auth.currentUser) {
      this.$router.push('/dashboard')
    }
  }
}
</script>

<style>
.home {
  padding: 2rem 7rem;
  background: var(--bg-color);
  position: relative;
}
.logo img {
  width: 300px;
}

@media screen and (max-width: 868px) {
  .home {
    padding: 2rem 1rem;
  }
  .logo {
    width: 100%;
  }
  .logo img {
    width: 70%;
  }
}
</style>