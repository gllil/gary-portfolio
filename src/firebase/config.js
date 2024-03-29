import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";
import "firebase/auth";

let firebaseConfig = {
  apiKey: "AIzaSyDSmiw3eT48kx0qPJcY4pkDpLuzLntS-v4",
  authDomain: "portfolio-4113a.firebaseapp.com",
  databaseURL: "https://portfolio-4113a.firebaseio.com",
  projectId: "portfolio-4113a",
  storageBucket: "portfolio-4113a.appspot.com",
  messagingSenderId: "479108787224",
  appId: "1:479108787224:web:eab1a7e6f867a28338e76d",
  measurementId: "G-9BRG4K4EDM",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const auth = firebase.auth();
const firestore = firebase.firestore();
const functions = firebase.functions();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { firestore, functions, storage, auth, timestamp };
