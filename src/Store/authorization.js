// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATJTzz5mXihvsasRuz-OCfN4QTGGI58Lo",
  authDomain: "lamreactjs.firebaseapp.com",
  projectId: "lamreactjs",
  storageBucket: "lamreactjs.appspot.com",
  messagingSenderId: "769067773604",
  appId: "1:769067773604:web:5334ba296672ee088f8031",
  measurementId: "G-QGEQCQ24Q4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);