import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCTAJiH-THafOH4j2crnFEYS-wHsrQ6lc",
  authDomain: "whispers-d520a.firebaseapp.com",
  projectId: "whispers-d520a",
  storageBucket: "whispers-d520a.appspot.com",
  messagingSenderId: "899886474938",
  appId: "1:899886474938:web:102c59ad422150c22a0483"
};

const app = initializeApp(firebaseConfig); 
const auth = getAuth(app);
const db = getFirestore(app)

export { auth, db }