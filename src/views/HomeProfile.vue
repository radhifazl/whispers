<template>
  <div class="home-profile ccontainer">
    <Navbar :isUser="true" :msgId="id"/>
    <div class="home-content">
      <div class="wraper">
        <div class="welcome-text mb-5">
          <h2>Hey <span>{{ username }}</span>, welcome to whispers</h2>
        </div>

        <div class="profile-data mb-5">
          <div class="avatar">
            <img :src="photoUrl">
          </div>

          <div class="datas">
            <div class="name">
              <h5>{{ username }}</h5>
            </div>

            <div class="email">
              <h6>{{ email }}</h6>
            </div>

            <div class="edit">
              <ProfileButton @edit="openEdit"/>
            </div>
          </div>
        </div>

        <Transition name="fade">
          <div class="edit-profile" v-if="isEdited">
            <div class="change-name change mb-3">
              <label for="name">Change Name</label> <br>
              <div class="action">
                <input type="text" class="edit-inp edit-name mt-2" id="name" @keyup="checkVal" v-model="editName">
                <EditButton :val="isNameEmpty" @edit="changeName"/>
              </div>
            </div>
            <div class="change-email change mb-3">
              <label for="email">Change Email</label> <br>
              <div class="action">
                <input type="text" class="edit-inp edit-email mt-2" id="email" @keyup="checkVal2" v-model="editEmail">
                <EditButton :val="isEmailEmpty" @edit="changeEmail"/>
              </div>
            </div>
          </div>
        </Transition>

        <p>Forgot your password? Reset by clicking button below</p>
        <button class="btn btn-danger" @click="$router.push('/forgot-password')">Reset Password</button>
      </div>
    </div>
  </div>
</template>

<script>
import { auth, db } from '@/firebase';
import { ref } from '@vue/reactivity';
import Navbar from '@/components/Navbar/Navbar.vue';
import ProfileButton from '@/components/Buttons/ProfileButton.vue';
import EditButton from '@/components/Buttons/EditButton.vue';
import { onMounted } from '@vue/runtime-core';
import { getDoc, doc } from "firebase/firestore";
import Swal from 'sweetalert2';
import { updateEmail, updateProfile } from 'firebase/auth';
import { Toast } from '@/components/Toast';
import { useStore } from 'vuex';

export default {
  components: { Navbar, ProfileButton, EditButton },
    name:'HomeProfile',
    setup () {
      const avatar = ref('');
      const username = ref(auth.currentUser.displayName);
      const email = ref(auth.currentUser.email);
      const photoUrl = ref(auth.currentUser.photoURL);
      const isEdited = ref(false)
      const editName = ref('')
      const editEmail = ref('')
      const isNameEmpty = ref(false)
      const isEmailEmpty = ref(false)
      const store = useStore()
      const id = ref('')

      const checkVal = () => {
        editName.value.length > 0 ? isNameEmpty.value = true : isNameEmpty.value = false
      }

      const checkVal2 = () => {
        editEmail.value.length > 0 ? isEmailEmpty.value = true : isEmailEmpty.value = false
      }

      const changeName = () => {
        Swal.fire({
          title: 'Change name?',
          text: "You will change your name to " + editName.value,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then(async result => {
          if(result.isConfirmed) {
            await updateProfile(auth.currentUser, {
              displayName: editName.value
            }).then(() => {
              isNameEmpty.value = false
              username.value = editName.value
              Swal.fire(
                'Changed!',
                'Your name has been changed.',
                'success'
              )
            }).catch((err) => {
              console.log(err)
              Toast.fire({
                icon: 'error',
                text: 'Something is wrong, please try again.'
              })
            }) 
          }
        })
      }

      const changeEmail = () => {
        Swal.fire({
          title: 'Change name?',
          text: "You will change your email to " + editEmail.value,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then(async result => {
          if(result.isConfirmed) {
            await updateEmail(auth.currentUser, editEmail.value)
            .then(() => {
              Swal.fire(
                'Changed!',
                'Your email has been changed.',
                'success'
              )
            }).catch(() => {
              Toast.fire({
                icon: 'error',
                text: 'Something is wrong, please try again.'
              })
            }) 
          }
        })
      }

      const getWhisperId = async () => {
        await getDoc(doc(db, 'users', auth.currentUser.uid))
          .then(docs => {
            id.value = store.state.id = docs.data().whisp_id
          })
      }

      const openEdit = () => {
        !isEdited.value ? isEdited.value = true : isEdited.value = false;
      }

      onMounted(async () => {
        await getWhisperId()
      })

      return {
        username, avatar, email, isEdited, editName, editEmail, isNameEmpty, isEmailEmpty,
        openEdit, photoUrl, id, checkVal, checkVal2, changeName, changeEmail
      }
    }
}
</script>

<style scoped>
.home-profile {
  background: #F5F5F5;
}

.home-content {
  display: grid;
  place-items: center;
  padding: 7rem 2rem;
  background: #FFF;
  width: 50%;
  min-height: 100vh;
  height: 100%;
  margin: auto;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

.welcome-text h2 {
  font-weight: 600;
}

.welcome-text h2 span {
  font-weight: 700;
}

.profile-data {
  display: flex;
  gap: 1rem;
}
.profile-data .name h5, .email h6 {
  color: #888;
}
.avatar img {
  width: 120px;
}
.edit-inp {
  border: none;
  outline: none;
  border: 3px solid transparent;
  background: #d6d5d5;
  width: 450px;
  padding: 0.3rem 1rem;
  transition: 0.3s ease;
}

.edit-inp:focus {
  border: 3px solid #6b6b6b;
}

.action {
  display: flex;
  align-items: center;
  gap: 1rem;
}

@media screen and (max-width: 868px) {
  .home-content {
    width: 100%;
  }

  .profile-data {
    flex-direction: column;
  }

  .action {
    flex-direction: column;
    align-items: flex-start;
  }

  .edit-inp {
    width: 100%;
  }
}
.fade-enter-active {
    animation: fadeIn 0.2s ease-in-out;
}

.fade-leave-active {
    animation: fadeOut 0.2s ease-in-out;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes fadeOut {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}
</style>