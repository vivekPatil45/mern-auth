// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-84104.firebaseapp.com",
  projectId: "mern-auth-84104",
  storageBucket: "mern-auth-84104.appspot.com",
  messagingSenderId: "332696083664",
  appId: "1:332696083664:web:358e45e883100b2731d2d5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);