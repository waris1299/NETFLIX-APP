// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth  , signInWithPopup , GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUhpG0UpZYzMyv8SknN81VejBBv6ZvrH4",
  authDomain: "netflix-db-79f42.firebaseapp.com",
  projectId: "netflix-db-79f42",
  storageBucket: "netflix-db-79f42.appspot.com",
  messagingSenderId: "276823105721",
  appId: "1:276823105721:web:a2a117687ec2d3ab2d3b68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt : "select_accont"
});

export const auth = getAuth;
export const signInwithGooglePopup = () => signInWithPopup(auth , provider);
