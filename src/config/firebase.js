import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDpJHtj9rtyLfpgy-MOH7urZHFw5ff125c",
  authDomain: "tiktok---jornada-e2411.firebaseapp.com",
  projectId: "tiktok---jornada-e2411",
  storageBucket: "tiktok---jornada-e2411.appspot.com",
  messagingSenderId: "32274927393",
  appId: "1:32274927393:web:7375b59c3757cef87a3860"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;