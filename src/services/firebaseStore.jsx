// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import firebase from "firebase"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_deKCWKw5EHt5xRZPhcnMhBE1nLYags4",
  authDomain: "pocketnote-149b5.firebaseapp.com",
  projectId: "pocketnote-149b5",
  storageBucket: "pocketnote-149b5.appspot.com",
  messagingSenderId: "966104574034",
  appId: "1:966104574034:web:a947445ac9fb29614c578b",
  measurementId: "G-X5F9Y706MJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new firebase.auth.GoogleAuthProvider(); 
