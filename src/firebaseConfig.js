import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkyz7MphvmU4GSPGs2PxjUf3gAqeB9k0c",
  authDomain: "xanthesproject.firebaseapp.com",
  databaseURL: "https://xanthesproject-default-rtdb.firebaseio.com",
  projectId: "xanthesproject",
  storageBucket: "xanthesproject.appspot.com",
  messagingSenderId: "654133624562",
  appId: "1:654133624562:web:120ccdae89e87fb5c81a6b",
  measurementId: "G-2ZF035JG36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
