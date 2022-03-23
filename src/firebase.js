// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore"
import "firebase/compat/auth"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDp933Bsmm4-UWr8U3QHPonrhHUDf9HP1E",
  authDomain: "react-89d66.firebaseapp.com",
  projectId: "react-89d66",
  storageBucket: "react-89d66.appspot.com",
  messagingSenderId: "940680337380",
  appId: "1:940680337380:web:b62b10e9d2699e04add9f1",
  measurementId: "G-R459GR8PCL"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
const db = app.firestore()
export {db,auth}