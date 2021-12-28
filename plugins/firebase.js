// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjX6sk3Erq0tXFZq6SXIRNI-iBNgFvuq0",
  authDomain: "todo-app-firestore-59e18.firebaseapp.com",
  projectId: "todo-app-firestore-59e18",
  storageBucket: "todo-app-firestore-59e18.appspot.com",
  messagingSenderId: "785883253335",
  appId: "1:785883253335:web:5f244b8501e8b7d2c97112"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
