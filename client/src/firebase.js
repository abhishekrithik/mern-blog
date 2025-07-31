// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-6a6aa.firebaseapp.com",
  projectId: "mern-blog-6a6aa",
  storageBucket: "mern-blog-6a6aa.firebasestorage.app",
  messagingSenderId: "844968142198",
  appId: "1:844968142198:web:2be82e53382abbf8aec657"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);