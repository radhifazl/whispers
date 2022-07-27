<template>
  <div class="login-container ccontainer form-container">
      <div class="login-form-wrapper w-100">
          <h2 class="login-title form-title text-center">
              Login to whispers
          </h2>

          <form id="login-form" class="form" @submit.prevent="Login">
              <div class="email-input-wrapper input-wrapper">
                  <label for="email" class="mb-1">Email</label>
                  <input type="email" name="email" 
                    id="email" 
                    class="email-inp inp mb-3" 
                    placeholder="Type your email here" v-model="email"
                  >
              </div>
              <div class="pass-input-wrapper input-wrapper">
                  <label for="password" class="mb-1">Password</label>
                  <div class="pass w-100">
                    <input type="password" name="password" 
                        id="password" 
                        class="password-inp inp mb-3"
                        placeholder="Type your password here" v-model="password"
                    >
                    <i class='bx bx-show' @click="showPass"></i>
                  </div>
              </div>
              <SubmitButton class="mb-2">
                  <span v-if="isLogging">Logging in...</span> <span v-else>Login</span>
              </SubmitButton>
          </form>
          
          <div class="form bottom-form">
            <OrSeparator/>
            <GoogleSignIn @action="googleSignIn"/>
            <div class="footer-form d-flex justify-content-between align-items-lg-center flex-column flex-lg-row">
              <router-link to="/forgot-password">
                      Forgot password?
              </router-link>
              <router-link to="/register">
                  Didn't have an account? Register here
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
import { Toast } from "@/components/Toast";
import { ref } from "vue";
import router from "@/router";
import { auth } from "@/firebase";
import { 
    signInWithEmailAndPassword, signOut, 
    signInWithPopup, GoogleAuthProvider
} from "firebase/auth";
import Swal from "sweetalert2";
import { useStore } from 'vuex'


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
        }
    },
    setup () {
        const store = useStore();
        const email = ref('');
        const password = ref('');
        const isLogging = ref(false);

        const Login = async () => {
            if(!email.value || !password.value) {
                Swal.fire({
                    icon: 'error',
                    iconColor: '#4B4949',
                    title: 'There is empty field',
                    color: '#1E1E1E',
                    text: 'You need to fill all fields to login to your account',
                    confirmButtonColor: '#4B4949',
                    background: 'linear-gradient(90deg, rgba(212,212,212,1) 0%, rgba(157,152,152,1) 100%)',
                    confirmButtonText: 'OK I understand',
                    showConfirmButton: true,
                    showCancelButton: false,
                })
                return;
            } else {
                isLogging.value = true;
                isLogging.value = true;
                await store.dispatch('login', {email: email.value, password: password.value})
                    .then(() => {
                        isLogging.value = false;
                    })
                email.value = '';
                password.value = '';
            }
            
        }

        const googleSignIn = async () => {
            isLogging.value = true;
            await store.dispatch('googleLogin')
                .then(() => {
                    Toast.fire({
                        icon: 'success',
                        text: 'Login succesfull, welcome to whispers!'
                    })
                    isLogging.value = false;
                })
        }

        return {
            email,
            password,
            isLogging,
            Login, googleSignIn
        }
    }
}
</script>

<style>
.login-container {
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