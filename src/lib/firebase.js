// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "writewave2.firebaseapp.com",
  projectId: "writewave2",
  storageBucket: "writewave2.appspot.com",
  messagingSenderId: "285326755458",
  appId: "1:285326755458:web:cd7a1d934062ec79f3169b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
