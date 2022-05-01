// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Fi frrebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPaFnLCwZ2GXlCBaSlxVC3OueIlM7XDnM",
  authDomain: "pt-pokemon-1122e.firebaseapp.com",
  databaseURL: "https://pt-pokemon-1122e-default-rtdb.firebaseio.com",
  projectId: "pt-pokemon-1122e",
  storageBucket: "pt-pokemon-1122e.appspot.com",
  messagingSenderId: "981249576323",
  appId: "1:981249576323:web:42dd72485cb8d60c27fab6",
  measurementId: "G-LB70YZFPBC"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider()
const baseDato = getFirestore()

export {
  app, 
  google, 
  baseDato
}