import { auth, db } from "@/firebase";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, signInWithPopup,
    GoogleAuthProvider, signOut, updateProfile
} from "firebase/auth";
import router from "@/router";
import { Toast } from "@/components/Toast";
import Swal from "sweetalert2"
import { createStore } from "vuex";
import ShortUniqueId from "short-unique-id";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

export default createStore({
    state: {
        user: null,
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user;
        },
        CLEAR_USER(state) {
            state.user = null;
        }
    },
    actions: {
        async login({ commit }, { email, password }) {
            try {
                await signInWithEmailAndPassword(auth, email, password)
                .then(() => {
                    router.push('/home')
                    Toast.fire({
                        icon: 'success',
                        text: 'Login succesfull, welcome to whispers!'
                    })
                })
            } catch(err) {
                switch(err.code) {
                    case 'auth/user-not-found':
                        Toast.fire({
                            icon: 'error',
                            title: 'You have entered an invalid username or password',
                        })
                        break;
                    case 'auth/wrong-password':
                        Toast.fire({
                            icon: 'error',
                            title: 'You have entered an invalid username or password',
                        })
                        break;
                    default:
                        Toast.fire({
                            icon: 'error',
                            title: 'Something went wrong',
                        })
                }
                return
            }

            commit('SET_USER', auth.currentUser)
        },
        async register({ commit }, {name, email, password }) {
            try {
                await createUserWithEmailAndPassword(auth, email, password)
                .then(async (credential) => {
                    await addDoc(collection(db, credential.user.uid), {
                        name: name,
                        email: email,
                        uid: credential.user.uid,
                    })
                    await fetch(`https://ui-avatars.com/api/?name=${name}`)
                    .then(res => {
                        updateProfile(auth.currentUser, {
                            photoURL: res.url
                        })
                    })
                    router.push('/home')
                })
                
                await updateProfile(auth.currentUser, {
                    displayName: name
                })

                const shortId = new ShortUniqueId().randomUUID(10);
                localStorage.setItem('whispers_id', shortId)

                const whispersId = localStorage.getItem('whispers_id')

                await setDoc(doc(db, 'users', whispersId), {
                    whisp_name: name,
                    whisp_email: email,
                    whisp_uid: auth.currentUser.uid,
                    whisp_id: whispersId
                })
            } catch(err) {
                switch(err.code) {
                    case 'auth/email-already-in-use':
                        Toast.fire({
                            icon: 'error',
                            title: 'Email already in use',
                        })
                        break;
                    case 'auth/invalid-email':
                        Toast.fire({
                            icon: 'error',
                            title: 'Invalid email',
                        })
                        break;
                    case 'auth/weak-password':
                        Toast.fire({
                            icon: 'error',
                            title: 'Your password is too weak',
                        })
                        break;
                    default:
                        setTimeout(() => {
                            console.log(err)
                        }, 1000)
                }
                return
            }
            commit('SET_USER', auth.currentUser)
        },
        async googleLogin({ commit }) {
            try {
                await signInWithPopup(auth, new GoogleAuthProvider())
                .then(() => {
                    Toast.fire({
                        icon: 'success',
                        title: 'Welcome to Whispers',
                        text: 'You are now logged in',
                    })
                    router.push('/home')
                })

                const shortId = new ShortUniqueId().randomUUID(10);
                localStorage.setItem('whispers_id', shortId)

                const whispersId = localStorage.getItem('whispers_id')

                await setDoc(doc(db, 'users', whispersId), {
                    whisp_name: auth.currentUser.displayName,
                    whisp_email: auth.currentUser.email,
                    whisp_uid: auth.currentUser.uid,
                    whisp_id: whispersId
                })
            } catch(error) {
                switch(error.code) {
                case 'auth/account-exists-with-different-credential':
                    Toast.fire({
                        icon: 'error',
                        title: 'Email already in use with different credential',
                    })
                    break
                case 'auth/cancelled-popup-request':
                    Toast.fire({
                        icon: 'error',
                        title: 'The popup has been closed',
                    })
                    break
                case 'auth/popup-blocked':
                    Toast.fire({
                        icon: 'error',
                        title: 'The popup was blocked by the browser',
                    })
                    break
                case 'auth/popup-closed-by-user':
                    Toast.fire({
                        icon: 'error',
                        title: 'The popup window was closed',
                    })
                    break
                default:
                    Toast.fire({
                        icon: 'error',
                        title: 'An undefined error occurred.',
                    })
                }
            }

            commit('SET_USER', auth.currentUser)
        },
        async logout({ commit }) {
            await signOut(auth)
            commit('CLEAR_USER')
            router.push('/')
        }
    }
})