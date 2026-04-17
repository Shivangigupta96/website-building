import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-1e11a.firebaseapp.com",
  projectId: "interviewiq-1e11a",
  storageBucket: "interviewiq-1e11a.firebasestorage.app",
  messagingSenderId: "28775256202",
  appId: "1:28775256202:web:1cfacdbe8b248ec0459d73"
};

const app = initializeApp(firebaseConfig);

const auth= getAuth(app)

const provider = new GoogleAuthProvider()
export {auth, provider}