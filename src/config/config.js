import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBQ8XA6rtMAzRpyVkjDav-o4j-uXTZuUmU",
    authDomain: "nueva-prueba-b744a.firebaseapp.com",
    projectId: "nueva-prueba-b744a",
    storageBucket: "nueva-prueba-b744a.appspot.com",
    messagingSenderId: "894394668589",
    appId: "1:894394668589:web:c85cae2ce64cc470d78aa4"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export{auth,fs,storage}
