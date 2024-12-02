import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxNAVgflN_edduW7qXReKQ2Fw9o6AolAw",
  authDomain: "final-like-for-reals.firebaseapp.com",
  projectId: "final-like-for-reals",
  storageBucket: "final-like-for-reals.appspot.com", // Corrected storage bucket URL
  messagingSenderId: "113264564781",
  appId: "1:113264564781:web:430390119c2a2fbf6d76a4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export {
  auth,
  googleProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
};
