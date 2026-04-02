import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCs06nOhmJaq4pzJiBu04tFfkc9nM5lMBw",
  authDomain: "bakfig-auth.firebaseapp.com",
  projectId: "bakfig-auth",
  storageBucket: "bakfig-auth.firebasestorage.app",
  messagingSenderId: "43851979216",
  appId: "1:43851979216:web:2982cdd45c6538c5d4c1d5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();