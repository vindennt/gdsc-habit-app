//Version 9
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBH2nZQdYbZvXTM59UPk_ZVD-z4CuXs-kA",
  authDomain: "habittracker-25e78.firebaseapp.com",
  projectId: "habittracker-25e78",
  storageBucket: "habittracker-25e78.appspot.com",
  messagingSenderId: "671237119334",
  appId: "1:671237119334:web:8272ad83dc3169786c7ca7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export { db, auth };
