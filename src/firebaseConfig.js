// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdxvoNIisuXBU2NxLe8EhfcMUbATPQQAQ",
  authDomain: "doc-9474c.firebaseapp.com",
  projectId: "doc-9474c",
  storageBucket: "doc-9474c.appspot.com",
  messagingSenderId: "602905400194",
  appId: "1:602905400194:web:65cf0b6d6c8753574ff59b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)