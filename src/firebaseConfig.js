import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_31bbjR6ySm_GpeArflsKL6v94a7N0NM",
  authDomain: "blogassignment-50f84.firebaseapp.com",
  projectId: "blogassignment-50f84",
  storageBucket: "blogassignment-50f84.appspot.com",
  messagingSenderId: "790660692743",
  appId: "1:790660692743:web:6fdcbcd038881f8580a3a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
