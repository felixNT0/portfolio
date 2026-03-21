import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Replace these with your actual Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgEYUb4ayuyINIEUo95HGo5b2Qu1hWjz4",
  authDomain: "my-todo-app-aa1e2.firebaseapp.com",
  databaseURL: "https://my-todo-app-aa1e2-default-rtdb.firebaseio.com",
  projectId: "my-todo-app-aa1e2",
  storageBucket: "my-todo-app-aa1e2.firebasestorage.app",
  messagingSenderId: "825828962826",
  appId: "1:825828962826:web:d05879978d874adca865f3",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
