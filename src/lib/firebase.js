// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "writewave-29df5.firebaseapp.com",
  projectId: "writewave-29df5",
  storageBucket: "writewave-29df5.appspot.com",
  messagingSenderId: "329285509577",
  appId: "1:329285509577:web:f77176d056c5e575f30818",
  measurementId: "G-S5E3DK65YV",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
