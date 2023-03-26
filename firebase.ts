// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtQju88mb7Y5wXG7xl2uXG4h9L1nAMiNo",
  authDomain: "chatgpt-messenger-16cef.firebaseapp.com",
  projectId: "chatgpt-messenger-16cef",
  storageBucket: "chatgpt-messenger-16cef.appspot.com",
  messagingSenderId: "727494486402",
  appId: "1:727494486402:web:457429d51ff8be1e0bc79b"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };