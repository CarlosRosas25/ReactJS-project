import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7OHtliGPu1lmeK3D5YmJdGwhe-imzvkk",
  authDomain: "react-coderhouse-613ca.firebaseapp.com",
  projectId: "react-coderhouse-613ca",
  storageBucket: "react-coderhouse-613ca.appspot.com",
  messagingSenderId: "274048639700",
  appId: "1:274048639700:web:fe1b6447de1b43933c1141",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
