<template>
  <div class="replies-page ccontainer">
      <Navbar :isUser="isLoggedIn ? true : false" :msgId="id"/>
        <div class="back-btn-wrapper mb-3">
            <button class="back-btn" @click="back">
                <i class="bx-fw bx bxs-chevron-left"></i>
                <span>Back</span>
            </button>
        </div>
      <div class="replies-content p-4">
        <div class="message-info">
            <p>
                {{ message }}
            </p>
        </div>
        <form id="comment-form" @submit.prevent="submitComment">
          <input type="text" v-model="comment" name="comment" placeholder="Reply to this message" class="form-control inp-comment">
          <button class="btn-comment sbtn" type="submit">Submit</button>
        </form>
        <div class="mt-3">Replies</div>
        <div class="replies mt-4">
            <div class="reply-text mb-2" v-for="reply in replies" :key="reply.id">
                <span>
                    {{ reply.comment }}
                </span>
                <div class="delete delete-reply" v-if="isLoggedIn" @click="deleteComment(message_id, reply.id)">
                    <i class="bx bxs-trash"></i>
                </div>
            </div>
        </div>

        <p style="color: #888" v-if="!replies.length">
            There is no replies yet.
        </p>
      </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar/Navbar.vue'
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
import { auth, db } from "@/firebase";
import router from '@/router';
import { useRoute } from 'vue-router';
import { 
    getDoc, doc, addDoc, collection, onSnapshot, 
    query, orderBy, serverTimestamp, deleteDoc 
} from "firebase/firestore";
import Swal from 'sweetalert2';
export default {
  components: { Navbar },
    name: 'RepliesPage',
    setup () {
        const isLoggedIn = ref(false)
        const id = ref('')
        const comment = ref('')
        const whisp_id = useRoute().params.id;
        const message_id = useRoute().params.msgId;
        const message = ref('')
        const replies = ref([])

        const logStatus = () => {
            auth.onAuthStateChanged(user => {
            if (user) {
                isLoggedIn.value = true
            } else {
                isLoggedIn.value = false
            }
            })
        }

        const back = () => {
            router.back()
        }

        const getMessage = async () => {
            await getDoc(doc(db, 'users', whisp_id, 'messages', message_id))
                .then(docs => {
                    message.value = docs.data().message
                })
        }
        
        const getReplies = async () => {
          const replyRef = collection(db, 'users', whisp_id, 'messages', message_id, 'replies')
          const q = query(replyRef, orderBy('createdAt', 'asc'))
          onSnapshot(q, (snapshot) => {
            replies.value = []
            snapshot.docs.forEach(doc => {
              replies.value.push({
                id: doc.id,
                ...doc.data()
              })
            })
          })
        }

        const submitComment = async () => {
            if(!comment.value) {
            Swal.fire({
                title: 'Oops...',
                text: 'You need to write a message',
                icon: 'error',
                confirmButtonText: 'OK'
            })
            } else {
            try {
                await addDoc(collection(db, 'users', whisp_id, 'messages', message_id, 'replies'), {
                comment: comment.value,
                createdAt: serverTimestamp(),
                }).then(() => {
                Swal.fire({
                    title: 'Comment sent!',
                    text: 'Your comment has been sent',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
                    comment.value = ''
                })
            } catch (error) {
                Swal.fire({
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
            }
            }
        }

        const deleteComment = (msgId, cmtId) => {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then(async (result) => {
                if(result.isConfirmed) {
                    try {
                    const docRef = doc(db, 'users', whisp_id, 'messages', msgId, 'replies', cmtId)
                    await deleteDoc(docRef)
                        .then(() => {
                        Swal.fire({
                            title: 'Deleted!',
                            text: 'Comment has been deleted',
                            icon: 'success',
                            confirmButtonText: 'OK'
                        })
                        }).finally(() => {
                            getReplies()    
                        })
                    } catch (error) {
                    Swal.fire({
                        title: 'Oops...',
                        text: 'Something went wrong!',
                        icon: 'error',
                        confirmButtonText: 'OK'
                    })
                    }
                }
            })
        }

        onMounted(() => {
            logStatus()
            getMessage()
            getReplies()
        })

        return {
            isLoggedIn, message_id, replies, back,
            id, message, comment, deleteComment, submitComment
        }
    }
}
</script>

<style>
.replies-page {
    height: 100%;
    min-height: 100vh;
    padding-top: 7rem;
    background: var(--bg-color);
}

.replies-content {
    width: 90%;
    height: 100%;
    min-height: 100vh;
    background: #FFF;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    margin: auto;
}

#comment-form {
  width: 100%;
  height: 40px;
  position: relative;
}

.inp-comment {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border: 1px solid var(--primary-color);
  padding: 0.5rem 1rem;
}
.btn-comment {
  position: absolute;
  right: 1%;
  top: 50%;
  transform: translateY(-50%);
}

.delete-reply {
    position: absolute;
    right: 2%;
  top: 55%;
  transform: translateY(-50%);
}

.reply-text {
  width: 100%;
  position: relative;
  background: #92929248;
  padding: 0.3rem 0.7rem;
}
.reply-text span {
  color: #636363;
}
.message-info {
    width: 100%;
    height: fit-content;
}
.back-btn {
    border: none;
    outline: none;
    background: transparent;
}
.back-btn span {
    font-weight: 600;
}

.back-btn-wrapper {
    padding-left: 1rem;
}
</style>