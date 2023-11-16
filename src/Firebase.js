import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBsL-ovcGv35V2y5bJw2op5bPgQaXWcTyo",
  authDomain: "e-commerce-project-c61ad.firebaseapp.com",
  projectId: "e-commerce-project-c61ad",
  storageBucket: "e-commerce-project-c61ad.appspot.com",
  messagingSenderId: "961999352214",
  appId: "1:961999352214:web:a6ba7a3114338315646db7",
  measurementId: "G-9VGWG063GF",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
