<template>
  <div class="verify-page ccontainer d-flex align-items-center p-4">
      <div class="text">
        <h2>Verify your account</h2>
        <p>
          Please verify your account by clicking the link in the email we sent you. <br>
          If the email doesn't arrive in your inbox, check your spam folder.
        </p>
        <button class="verif-btn" @click="sendVerification" :disabled="isDisabled">
            <span v-if="isSended">Verification Sent, please wait to send a new verification</span> <span v-else>Send Verification Email</span>
        </button>
      </div>
  </div>
</template>

<script>

import { onBeforeMount, ref, watch } from "vue";
import router from "@/router";
import { auth } from "@/firebase";
import { sendEmailVerification, updateProfile } from "firebase/auth";

export default {
    name: 'VerifyPage',
    setup () {
        const isSended = ref(false)
        const isDisabled = ref(false)

        auth.languageCode = 'en'

        let actionCodeSettings = {
            url: 'https://whisperss.netlify.app/home',
            handleCodeInApp: false
        }

        const sendVerification = async () => {
            isSended.value = true;
            isDisabled.value = true
            await sendEmailVerification(auth.currentUser, actionCodeSettings)
                .then(() => {
                    setTimeout(() => {
                        isDisabled.value = false
                        isSended.value = false;
                    }, 60000)
                })
        }

        return {
            isSended, isDisabled,
            sendVerification
        }
    },
}
</script>

<style>
.verify-page {
    background: var(--bg-color);
}
.verif-btn {
    background: var(--primary-color);
    padding: 0.5rem 1rem;
    color: #FFFFFF;
    border: none;
    outline: none;
    transition: 0.3s ease-in-out;
}

.verif-btn:disabled {
    cursor: not-allowed;
    background: var(--darker-primary-color);
}
.verif-btn span {
    color: #FFFFFF;
}
.verif-btn:hover {
    background: var(--darker-primary-color);
}
</style>