import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQI8muctZ4BIHp_cp1Qr65caB2WzrqwC4",
  authDomain: "react-practice-project-608a9.firebaseapp.com",
  projectId: "react-practice-project-608a9",
  storageBucket: "react-practice-project-608a9.firebasestorage.app",
  messagingSenderId: "684152341896",
  appId: "1:684152341896:web:787044d0939643101e663d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
