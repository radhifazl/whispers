<template>
  <div class="forgot-pass-page ccontainer p-lg-4">
      <div class="forgot-pass-content">
          <h1>Forgot Password</h1>
          <p>A link to reset your password will be sent to the email address you provided when you signed up. <br class="d-none d-lg-block">
             You can request a password reset by clicking the button below. 
          </p>
          <form class="forgot-pass-form mb-3" @submit.prevent="sendForgotPasswordRequest">
            <input type="email" name="email" id="email" 
              class="inp mb-3" placeholder="Type your email here" v-model="email"
            >
            <button class="forgot-btn" type="submit">
                <span v-if="isSended">Email sent</span> <span v-else>Request Password Reset</span>
            </button>
          </form>

          <div class="go-back" @click="goBack">
              <i class='bx-fw bx bx-arrow-to-left'></i> <span>Go Back</span>
          </div>
      </div>
  </div>
</template>

<script>
import router from '@/router'
import { ref } from "vue";
import { sendPasswordResetEmail } from '@firebase/auth';
import { auth } from '@/firebase';
import Swal from 'sweetalert2';
import { Toast } from '@/components/Toast';
export default {
    name: 'ForgotPasswordPage',
    methods: {
        goBack() {
            router.back()
        }
    },
    setup () {
        const isSended = ref(false)
        const email = ref('')
        const sendForgotPasswordRequest = async () => {
            if(!email.value) {
                Swal.fire({
                    title: 'Error',
                    text: 'Please enter your email',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#4B4949'
                })
            } else {
                isSended.value = true
                await sendPasswordResetEmail(auth, email.value)
                    .then(() => {
                        Toast.fire({
                            icon: 'success',
                            title: 'Email sent'
                        })
                        isSended.value = false
                    }).catch(error => {
                        isSended.value = false
                        switch(error.code) {
                            case 'auth/user-not-found':
                                Swal.fire({
                                    title: 'Error',
                                    text: 'Cannot find user with this email',
                                    confirmButtonText: 'OK',
                                    confirmButtonColor: '#4B4949'
                                })
                                break;
                            case 'auth/invalid-email':
                                Swal.fire({
                                    title: 'Error',
                                    text: 'Invalid email',
                                    confirmButtonText: 'OK',
                                    confirmButtonColor: '#4B4949'
                                })
                                break;
                            default:
                                Swal.fire({
                                    title: 'Error',
                                    text: 'Something went wrong',
                                    confirmButtonText: 'OK',
                                    confirmButtonColor: '#4B4949'
                                })
                                break;
                        }
                    })
            }
        }
        return {
            isSended, email,
            sendForgotPasswordRequest
        }
    }
}
</script>

<style>
.forgot-pass-page {
    background: var(--bg-color);
    display: flex;
    align-items: center;
    padding: 0 1rem;
}
.forgot-btn {
    background: var(--primary-color);
    padding: 0.5rem 1rem;
    color: #FFFFFF;
    border: none;
    outline: none;
    transition: 0.3s ease-in-out;
}
.forgot-btn span {
    color: #FFFFFF;
}
.forgot-btn:hover {
    background: var(--darker-primary-color);
}
.go-back {
    cursor: pointer;
}
.go-back i {
    margin-bottom: -3px;
}
.go-back span {
    font-weight: 600;
}
.go-back:hover i , .go-back:hover span {
    color: var(--darker-primary-color);
}
</style>