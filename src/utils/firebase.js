// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHgUXJ6YgzqL0EFCPgvtwYSsrXdLeZnXU",
  authDomain: "project-eco--discova.firebaseapp.com",
  projectId: "project-eco--discova",
  storageBucket: "project-eco--discova.appspot.com",
  messagingSenderId: "328879395988",
  appId: "1:328879395988:web:defd5a3c1a96b33677d081",
  measurementId: "G-RG58702QT1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
export default app;

