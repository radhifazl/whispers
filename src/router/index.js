import { createRouter, createWebHistory } from 'vue-router'
import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";
import Home from '@/views/Home.vue'
const Login = () => import('@/views/Login.vue')
const Register = () => import('@/views/Register.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/verify',
    name: 'VerifyPage',
    meta: {
      requiresAuth: true
    },
    component: () => import('@/views/Verify.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    meta: {
      requiresAuth: true,
      requiresVerified: true
    },
    component: () => import('@/views/Dash.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      unsubscribe()
      resolve(user)
    }, reject)
  })
}

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const requiresVerified = to.matched.some(record => record.meta.requiresVerified)
  
  if(to.path === '/login' || to.path === '/register') {
    if(await getCurrentUser()) {
      next('/dashboard')
      return
    }
  } 

  if (requiresAuth && !await getCurrentUser()) {
    next('/login')
  } else if (requiresVerified && !auth.currentUser.emailVerified) {
    next('/verify')
  } else {
    next()
  }
})

export default router
