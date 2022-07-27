<template>
  <div class="v-navbar w-100">
      <div class="navbar-logo">
          <router-link to="/home">
            <img src="@/assets/logo.svg" alt="Whispers Logo">
          </router-link>

          <div class="hamburger-menu" @click="openNav" :class="{open: isOpen}">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
      </div>

      <div class="nav-items" :class="{open: isOpen}" v-if="isUser">
        <router-link to="/home" class="nav-link">
          <div class="nav-item">
            <i class='bx-fw bx bxs-home'></i>
            <span class="text-link">Home</span>
          </div>
        </router-link>

        <router-link :to="'/msg/'+msgId" class="nav-link">
          <div class="nav-item">
            <i class='bx-fw bx bxs-chat'></i>
            <span class="text-link">Messages</span>
          </div>
        </router-link>

        <div class="nav-link">
          <button class="btn-logout" @click="Logout">
            <i class='bx-fw bx bx-log-out'></i> <span class="logout-text">Log out</span>
          </button>
        </div>

        <NavSocial/>
      </div>

      <button class="sbtn btn-create" v-if="!isUser" @click="$router.push('/register')">
        Create Whispers
      </button>
  </div>
</template>

<script>
import { auth, db } from '@/firebase';
import { ref } from '@vue/reactivity';
import { useStore } from 'vuex'
import NavSocial from '../SocialMedia/NavSocial.vue';
import { Toast } from '../Toast';
import { doc, getDoc } from 'firebase/firestore';
import { onMounted } from 'vue';
export default {
  components: { NavSocial },
    name: 'NavbarComp ',
    props: {
      isUser: {
        type: Boolean,
        default: false
      },
      msgId: {
        type: String,
        default: ''
      }
    },
    setup () {
      const isOpen = ref(false)
      const store = useStore();

      const openNav = () => {
        !isOpen.value ? isOpen.value = true : isOpen.value = false;
      }
      const Logout = async () => {
        await store.dispatch('logout')
          .then(() => {
            Toast.fire({
              icon: 'success',
              text: 'Log out successfull'
            })
          })
      }
      return {
        Logout,
        openNav,
        isOpen, msgId
      }
    }
}
</script>

<style>
.v-navbar {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: #FFFFFF;
  box-shadow:  5px 5px 21px #949494,
              -5px -5px 21px #ffffff;
  z-index: 100;
}

.navbar-logo {
  display: flex;
  align-items: center;
}

.nav-items {
  display: flex;
  align-items: center;
  gap: 5rem;
}


@media screen and (max-width: 864px) {
  .v-navbar {
    display: block;
  }

  .navbar-logo {
    justify-content: space-between;
  }

  .nav-items {
    position: fixed;
    top: 0;
    left: -100%;
    opacity: 0;
    visibility: hidden;
    background: var(--nav-glassbg);
    box-shadow: var(--nav-glassboxshadow);
    backdrop-filter: blur( 50px );
    -webkit-backdrop-filter: blur( 10px );
    border: var(--nav-glassborder);
    flex-direction: column;
    align-items: flex-start;
    width: 80%;
    height: 100vh;
    padding: 4rem 0;
    gap: 3rem;
    transition: all 0.3s ease-in-out;
    z-index: 1000;
  }

  .nav-items.open {
    left: 0;
    opacity: 1;
    visibility: visible;
  }

  .hamburger-menu {
    width: 28px;
    height: 25px;
    margin-right: -0.5rem;
    margin-bottom: -0.3rem;
    cursor: pointer;
  }
  .bar {
    display: block;
    width: 100%;
    height: 13%;
    background: var(--text-color);
    margin-bottom: 0.3rem;
    transition: all 0.3s ease-in-out;
  }

  .hamburger-menu.open .bar:nth-child(1) {
    width: 30%;
  }

  .hamburger-menu.open .bar:nth-child(2) {
    width: 70%;
  }
}

.nav-item i {
  margin-right: 0.3rem;
}

.nav-items .nav-link .text-link {
  position: relative;
}
.nav-items .nav-link.router-link-exact-active .text-link::after {
  opacity: 1;
  height: 2px;
}

.nav-items .nav-item:hover .text-link::after {
  opacity: 1;
  height: 2px;
}

.text-link::after {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 100%;
  height: 0;
  margin: auto;
  background: var(--text-color);
  border-radius: 20%;
  opacity: 0;
  transition: all 0.3s ease-in-out;
}



.btn-logout {
  border: none;
  outline: none;
  background: transparent;
}

.bx-log-out, .logout-text {
  transition: 0.35s ease;
}

.btn-logout .bx-log-out {
  color: #fa8b8b;
}

.btn-logout .logout-text {
  color: #fa8b8b;
  font-weight: 600;
}

.btn-logout:hover .bx-log-out {
  color: #ff0000;
} 

.btn-logout:hover .logout-text {
  color: #ff0000;
}

.btn-create {
  padding: 0.5rem 1rem;
}
</style>