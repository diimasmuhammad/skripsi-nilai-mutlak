import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBpTdh6aHqGekJHbp5DgTb9ZFyanSbmNy4",
  authDomain: "skripsi-database-f5191.firebaseapp.com",
  projectId: "skripsi-database-f5191",
  storageBucket: "skripsi-database-f5191.appspot.com",
  messagingSenderId: "255878414548",
  appId: "1:255878414548:web:b022c68b04525541bffb41",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const autentikasi = getAuth(app);
