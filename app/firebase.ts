// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyzrAKQDjobpCOHFjn73aoiWPbJl7cAY0",
  authDomain: "inklink-853ef.firebaseapp.com",
  projectId: "inklink-853ef",
  storageBucket: "gs://inklink-853ef.appspot.com", // Link to Cloud Storage bucket
  messagingSenderId: "1078264218025",
  appId: "1:1078264218025:web:0cdd7c4b09df1451b584b8"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth();

// Get database reference to REALTIME DATABASE
const db = getDatabase();

// Initialize Firestore and get reference to the database service
const firestoreDB = getFirestore(app);

// Initialize Cloud Storage and get reference to the Cloud Storage service
const storage = getStorage(app);

export {app, auth, db, firestoreDB, storage}