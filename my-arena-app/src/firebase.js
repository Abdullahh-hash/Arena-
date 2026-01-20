// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjZnSAnfAb2mLWfXBIet6PZ6n3yGX7Ew",
  authDomain: "arena-spectate.firebaseapp.com",
  projectId: "arena-spectate",
  storageBucket: "arena-spectate.firebasestorage.app",
  messagingSenderId: "1067219129638",
  appId: "1:1067219129638:web:16cf4bb2f52f80aa73dde7",
  measurementId: "G-2JMJYTVHEG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);