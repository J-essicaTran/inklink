// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyzrAKQDjobpCOHFjn73aoiWPbJl7cAY0",
  authDomain: "inklink-853ef.firebaseapp.com",
  projectId: "inklink-853ef",
  storageBucket: "inklink-853ef.appspot.com",
  messagingSenderId: "1078264218025",
  appId: "1:1078264218025:web:0cdd7c4b09df1451b584b8"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth();

// Get database reference
const db = getDatabase();

export {app, auth, db}