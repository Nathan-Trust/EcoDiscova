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
  apiKey: "AIzaSyBNVZM5cx17o_kpRhO7xSnvrDcS_pH5JHA",
  authDomain: "projectecodiscova.firebaseapp.com",
  projectId: "projectecodiscova",
  storageBucket: "projectecodiscova.appspot.com",
  messagingSenderId: "120258205360",
  appId: "1:120258205360:web:54ff074447f06669460d75",
  measurementId: "G-TYKLYRP86P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
export default app;

