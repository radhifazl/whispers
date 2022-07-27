<template>
  <div class="messages-page ccontainer">
    <Navbar :isUser="isLoggedIn ? true : false" :msgId="id"/>

    <div class="messages-wrapper p-4 mx-auto">
      <div class="form-wrapper mb-4">
        <h2>Send a message to <span class="name">{{ whispersOwner }}</span></h2>
        <p>{{ whispersOwner }} will never know who sent this message</p>

        <form id="form-msg" @submit.prevent="sendMessage">
          <textarea name="message" class="message-area" placeholder="Write secret message" v-model="message" maxlength="155"></textarea>
          <SendButton/>
        </form>
      </div>

      <div class="messages-list">
        <div class="message-title">
          <h4>Timeline of <span class="name">{{ whispersOwner }}</span></h4>

          <div class="message mb-3" v-for="message in messages" :key="message.id">
            <div class="message-content">
              <div class="message-text">
                <p>{{message.message}}</p>
              </div>
              <form id="comment-form" @submit.prevent="submitComment(message.id)">
                <input type="text" v-model="comment" name="comment" placeholder="Write a comment" class="form-control inp-comment">
                <button class="btn-comment sbtn" type="submit">Submit</button>
              </form>
              <div class="check mt-3" @click="checkReplies(message.id)">
                <i class='bx-fw bx bxs-chevron-right' :class="{checked: checked}"></i> <span v-if="!checked">Check Replies</span> <span v-else>Hide Replies</span>
              </div>
              <div class="replies mt-3" v-if="checked">
                <div class="reply-text mb-2" v-for="(reply, i) in replies" :key="i">
                  <span>{{reply.comment}}</span>
                  <div v-if="isLoggedIn" class="delete delete-reply" @click="deleteComment(message.id, reply.id)">
                    <i class='bx bxs-trash' ></i>
                  </div>
                </div>
                <div class="no-reply" v-if="!replies.length">
                  <span>No reply</span>
                </div>
              </div>
            </div>
            <div v-if="isLoggedIn" class="delete" @click="deleteMessage(message.id)">
              <i class='bx bxs-trash' ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { auth, db } from '@/firebase';
import { getDoc, doc, addDoc, collection, onSnapshot, query, orderBy, serverTimestamp, deleteDoc } from "firebase/firestore";
import Navbar from '@/components/Navbar/Navbar.vue';
import { useRoute } from 'vue-router';
import SendButton from '@/components/Buttons/SendButton.vue';
import Swal from 'sweetalert2';
import { getDoc, doc } from "firebase/firestore";
export default {
  components: { Navbar, SendButton },
    name: 'MessagePage',
    setup () {
      const isLoggedIn = ref(false)
      const whispersOwner = ref('')
      const whispCode = useRoute().params.id
      const message = ref('')
      const comment = ref('')
      const checked = ref(false)

      const messages = ref([])
      const replies = ref([])
      const id = ref('')

      const whispersId = localStorage.getItem('whispers_id')
      
      const getWhisperId = async () => {
        await getDoc(doc(db, 'users', whispersId))
          .then(docs => {
            id.value = docs.data().whisp_id
          })
      }

      const getMessages = async () => {
        const msgRef = collection(db, 'users', whispCode, 'messages')
        const q = query(msgRef, orderBy('createdAt', 'asc'))
        onSnapshot(q, (snapshot) => {
          messages.value = []
          snapshot.docs.forEach(doc => {
            messages.value.push({
              id: doc.id,
              ...doc.data()
            })
          })
        })
      }

      const checkReplies = async (id) => {
        if(!checked.value) {
          checked.value = true
          const replyRef = collection(db, 'users', whispCode, 'messages', id, 'replies')
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
        } else {
          checked.value = false
        }
      }

      const getWhispName = async () => {
        await getDoc(doc(db, 'users', whispCode))
          .then(docs => {
            whispersOwner.value = docs.data().whisp_name
          })
      }

      function getDate(date) {
        function padTo2Digits(num) {
          return num.toString().padStart(2, '0')
        }

        const ddmmyyy = padTo2Digits(date.getDate()) + '-' + padTo2Digits(date.getMonth()+1) + '-' + date.getFullYear()
        const now = ddmmyyy 
        return now
      }

      const sendMessage = async () => {
        if(!message.value) {
          Swal.fire({
            title: 'Oops...',
            text: 'You need to write a message',
            icon: 'error',
            confirmButtonText: 'OK'
          })
        } else {
          try {
            await addDoc(collection(db, 'users', whispCode, 'messages'), {
              message: message.value,
              createdAt: serverTimestamp(),
              date: getDate(new Date())
            }).then(() => {
              Swal.fire({
                title: 'Message sent!',
                text: 'Your message has been sent',
                icon: 'success',
                confirmButtonText: 'OK'
              })
              message.value = ''
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

      const deleteMessage = (id) => {
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
              const docRef = doc(db, 'users', whispCode, 'messages', id)
              await deleteDoc(docRef)
                .then(() => {
                  Swal.fire({
                    title: 'Deleted!',
                    text: 'Message has been deleted',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
                }).finally(() => {
                  getMessages()
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
              const docRef = doc(db, 'users', whispCode, 'messages', msgId, 'replies', cmtId)
              await deleteDoc(docRef)
                .then(() => {
                  Swal.fire({
                    title: 'Deleted!',
                    text: 'Comment has been deleted',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
                }).finally(() => {
                  checkReplies(msgId)
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

      const submitComment = async (id) => {
        if(!comment.value) {
          Swal.fire({
            title: 'Oops...',
            text: 'You need to write a message',
            icon: 'error',
            confirmButtonText: 'OK'
          })
        } else {
          try {
            await addDoc(collection(db, 'users', whispCode, 'messages', id, 'replies'), {
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

      const logStatus = () => {
        auth.onAuthStateChanged(user => {
          if (user) {
            isLoggedIn.value = true
          } else {
            isLoggedIn.value = false
          }
        })
      }

      onMounted(() => {
        getWhisperId()
        getWhispName()
        getMessages()
        logStatus()
      })

      return {
        isLoggedIn, whispersOwner, checked,
        message, sendMessage, messages, replies, 
        comment, submitComment, checkReplies,
        deleteMessage, deleteComment, id
      }
    }
}
</script>

<style>
.messages-page {
  height: 100%;
  min-height: 100vh;
  background: var(--bg-color);
  padding-top: 7rem;
}
.messages-wrapper {
  width: 70%;
  height: 100%;
  min-height: 100vh;
  background: #FFF;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}
.name {
  font-weight: 700;
}
.check {
  cursor: pointer;
}
.bxs-chevron-right {
  transition: transform 0.3s ease;
  font-size: 1.2rem;
}
.checked {
  transform: rotate(90deg);
}
.message-area {
  resize: none;
  width: 100%;
  height: 150px;
  border-radius: 5px;
  border: 1px solid var(--primary-color);
  padding: 0.5rem 1rem;
}

.message-area:focus {
  border: 2px solid var(--primary-color);
}
.message {
  border: 1px solid #888;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  width: 100%;
  height: fit-content;
  position: relative;
  overflow-x: hidden ;
}
.message-text {
  width: 100%;
  height: 100%;
}
.delete {
  position: absolute;
  right: 0.5%;
  top: 5%;
  cursor: pointer;
}

.delete-reply {
  top: 55%;
  transform: translateY(-50%);
}

.delete i {
  font-size: 1.2rem;
  color: var(--primary-color);
}

.delete i:hover {
  color: #e74040;
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
.reply-text {
  width: 100%;
  position: relative;
  background: #92929248;
  padding: 0.3rem 0.7rem;
}
.reply-text span {
  color: #636363;
}
@media screen and (max-width: 868px) {
  .messages-page {
    padding-top: 5rem;
  }
  .messages-wrapper {
    width: 90%;
  }
}
</style>