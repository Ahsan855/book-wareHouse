// Import the functions you need from the SDKs you need
import {getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0BA_nribLo0MhguMj0yqDsPXKAR_OQ2s",
  authDomain: "book-store-e6ec1.firebaseapp.com",
  projectId: "book-store-e6ec1",
  storageBucket: "book-store-e6ec1.appspot.com",
  messagingSenderId: "34238047363",
  appId: "1:34238047363:web:051a288d9012734831a7b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;