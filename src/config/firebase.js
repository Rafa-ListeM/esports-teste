// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJR4c6gUH5II2ZPUwhl2Dql8gedH90FiA",
  authDomain: "app-fatec-e39f3.firebaseapp.com",
  projectId: "app-fatec-e39f3",
  storageBucket: "app-fatec-e39f3.appspot.com",
  messagingSenderId: "190273368062",
  appId: "1:190273368062:web:dac42f11bf64ef7afe1aaf",
  measurementId: "G-0JCZVXVMPL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);