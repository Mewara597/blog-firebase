// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKF1llmIvLcivKE73nurM__2CQTwq5OE4",
  authDomain: "blog-app-8a750.firebaseapp.com",
  projectId: "blog-app-8a750",
  storageBucket: "blog-app-8a750.appspot.com",
  messagingSenderId: "1057930578286",
  appId: "1:1057930578286:web:ff9b1de9459808bfe1997f",
  measurementId: "G-3G75EB2XNQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
