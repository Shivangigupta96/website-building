// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "genwebai-50ef3.firebaseapp.com",
  projectId: "genwebai-50ef3",
  storageBucket: "genwebai-50ef3.firebasestorage.app",
  messagingSenderId: "657665935501",
  appId: "1:657665935501:web:a56c39aa46afe670237ac4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider=new GoogleAuthProvider()

export {auth,provider}