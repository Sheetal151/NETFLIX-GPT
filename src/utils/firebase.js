// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_b1uirVthFp-Upd5JD_7_fa4UAndpQnU",
  authDomain: "netflixgpt-425ba.firebaseapp.com",
  projectId: "netflixgpt-425ba",
  storageBucket: "netflixgpt-425ba.appspot.com",
  messagingSenderId: "442423920124",
  appId: "1:442423920124:web:28806c6cfa9b5784691e79",
  measurementId: "G-X7QJSRFGVG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();