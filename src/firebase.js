import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// eslint-disable-next-line no-unused-vars
const firebaseConfig = {
  apiKey: "AIzaSyAoFSixruCpESFcWI5DRfkTM5PqdsGHNnc",
  authDomain: "clone-6f2fb.firebaseapp.com",
  databaseURL: "https://clone-6f2fb.firebase.com",
  projectId: "clone-6f2fb",
  storageBucket: "clone-6f2fb.appspot.com",
  messagingSenderId: "970017965049",
  appId: "1:970017965049:web:230cfb9fe7578d1345b328",
  measurementId: "G-345MF3YRT0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
