// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getApp, getApps, initializeApp } from "firebase/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAWwDUTEsKpSR7WNAqak8Ltg1LltH9FjMc",
    authDomain: "dispenserapp-acf60.firebaseapp.com",
    projectId: "dispenserapp-acf60",
    storageBucket: "dispenserapp-acf60.appspot.com",
    messagingSenderId: "700330205562",
    appId: "1:700330205562:web:9bbf7c59f4f9a07343b6c3",
    measurementId: "G-93QEMNBV7L"
  };

// Initialize Firebase
// Initialize Firebase
let app;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}
const auth = getAuth(app);

export { auth };
