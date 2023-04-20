// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKLG39U1Ob1yKbWzaq2apw1wdTdadVW2M",
  authDomain: "sound-factory-website.firebaseapp.com",
  projectId: "sound-factory-website",
  storageBucket: "sound-factory-website.appspot.com",
  messagingSenderId: "28532456516",
  appId: "1:28532456516:web:7387c7853fd6f0dd659011",
  measurementId: "G-0ZLF3X6Q08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);