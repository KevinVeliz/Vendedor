import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBoNGC4-DIn430Zjg2m9HVJarpnrgiqxik",
  authDomain: "di2021-a.firebaseapp.com",
  projectId: "di2021-a",
  storageBucket: "di2021-a.appspot.com",
  messagingSenderId: "18720027199",
  appId: "1:18720027199:web:e75fde29e3f7862b6bfe8a"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export{auth,fs,storage}
