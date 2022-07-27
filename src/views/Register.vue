<template>
  <div class="register-container ccontainer form-container">
      <div class="register-form-wrapper w-100">
          <h2 class="register-title form-title text-center">
              Create whispers account
          </h2>

          <form id="register-form" class="form" @submit.prevent="register">
              <div class="name-input-wrapper input-wrapper">
                  <label for="name" class="mb-1">Name</label>
                  <input type="text" name="name" 
                    id="name" 
                    class="name-inp inp mb-3" 
                    autocomplete="off" minlength="3" maxlength="20"
                    placeholder="Type your name here" v-model="name"
                  >
              </div>
              <div class="email-input-wrapper input-wrapper">
                  <label for="email" class="mb-1">Email</label>
                  <input type="email" name="email" 
                    id="email" 
                    class="email-inp inp mb-3" 
                    placeholder="Type your email here"
                    v-model="email"
                  >
              </div>
              <div class="pass-input-wrapper input-wrapper">
                  <label for="password" class="mb-1">Password</label>
                  <div class="pass w-100">
                    <input type="password" name="password" 
                        id="password" 
                        class="password-inp inp mb-3"
                        placeholder="Type your password here"
                        v-model="password"
                    >
                    <i class='bx bx-show' @click="showPass"></i>
                  </div>
              </div>
              <SubmitButton class="mb-2">
                  <span v-if="isRegistering">Creating an account...</span> <span v-else>Register</span>
                  
              </SubmitButton>
          </form>
          
          <div class="form bottom-form">
            <OrSeparator/>
            <GoogleSignIn @action="googleSignIn"/>
            <div class="footer-form">
                <router-link to="/login">
                    Already have an account? Login here
                </router-link>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import SubmitButton from '@/components/Buttons/SubmitButton.vue';
import OrSeparator from '@/components/OrSeparator.vue';
import GoogleSignIn from '@/components/Buttons/GoogleSignIn.vue';
import { ref } from "vue";
import Swal from 'sweetalert2';
import { useStore } from 'vuex';

export default {
    components: { SubmitButton, OrSeparator, GoogleSignIn },
    name: 'LoginPage',
    methods: {
        showPass() {
            let pass = document.querySelector('.password-inp');
            const icon = document.querySelector('.bx-show');
            if (pass.type === 'password') {
                pass.type = 'text';
                icon.classList.remove('bx-show');
                icon.classList.add('bx-hide');
            } else if(pass.type === 'text') {
                pass.type = 'password';
                document.querySelector('.bx-hide').classList.add('bx-show');
            }
        },
    },
    setup () {
      const store = useStore()
      const name = ref(''),
            email = ref(''),
            password = ref(''),
            isRegistering = ref(false);

      const register = async () => {
        if(!name.value || !email.value || !password.value) {

            Swal.fire({
                icon: 'error',
                iconColor: '#4B4949',
                title: 'There is empty field',
                color: '#1E1E1E',
                text: 'You need to fill all fields to register an account',
                confirmButtonColor: '#4B4949',
                background: 'linear-gradient(90deg, rgba(212,212,212,1) 0%, rgba(157,152,152,1) 100%)',
                confirmButtonText: 'OK I understand',
                showConfirmButton: true,
                showCancelButton: false,
            })
        } else {
            isRegistering.value = true;
            await store.dispatch('register', { name: name.value, email: email.value, password: password.value })
            isRegistering.value = false;
            name.value = '';
            email.value = '';
            password.value = '';
        }
      }

      const googleSignIn = async () => {
          await store.dispatch('googleLogin')
      }

      return {
        register, googleSignIn,
        name,
        email, password,
        isRegistering
      }
    }
}
</script>

<style>
.register-container {
    background: var(--bg-color);
}
.pass {
    position: relative;
}
.pass i {
    position: absolute;
    bottom: 30%;
    right: 2%;
    font-size: 1.3rem;
    cursor: pointer;
    height: 55%;
}
</style>