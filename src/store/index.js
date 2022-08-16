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
        id: null,
        name: null
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user;
        },
        CLEAR_USER(state) {
            state.user = null;
        },
        SET_ID(state, id) {
            state.id = id
        },
        SET_NAME(state, name) {
            state.name = name
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
                const shortId = new ShortUniqueId().randomUUID(8)
                await createUserWithEmailAndPassword(auth, email, password)
                .then(async (credential) => {
                    const uid = credential.user.uid
                    await setDoc(doc(db, 'users', uid), {
                        whisp_name: name,
                        whisp_email: email,
                        whisp_uid: uid,
                        whisp_id: shortId
                    })
                    await setDoc(doc(db, 'usernames', shortId), {
                        name: name
                    })
                    await fetch(`https://ui-avatars.com/api/?name=${name}`)
                    .then(res => {
                        updateProfile(auth.currentUser, {
                            displayName: name,
                            photoURL: res.url
                        })
                    })
                    router.push('/home')
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
        async logout({ commit }) {
            await signOut(auth)
            commit('CLEAR_USER')
            router.push('/')
        }
    }
})