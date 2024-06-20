// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCc0U4KrCdMPRNJl86vAnT1v__zblnWe1Y",
  authDomain: "netflixgpt-f2252.firebaseapp.com",
  projectId: "netflixgpt-f2252",
  storageBucket: "netflixgpt-f2252.appspot.com",
  messagingSenderId: "771889567334",
  appId: "1:771889567334:web:e6e446c9e26ab6cd663fa7",
  measurementId: "G-MVSYSYDJXV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();