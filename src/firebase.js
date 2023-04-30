import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBG-ckLt8QSPoi5Erxp3OvYNww88jYiTQw",
  authDomain: "chatx-f96f8.firebaseapp.com",
  projectId: "chatx-f96f8",
  storageBucket: "chatx-f96f8.appspot.com",
  messagingSenderId: "328553413954",
  appId: "1:328553413954:web:8ce2576af38d25edacdcdb",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const storage = getStorage();
export const db=getFirestore();
