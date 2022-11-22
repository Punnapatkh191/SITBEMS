

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
 
var firebaseConfig = {
    apiKey: "AIzaSyBEohYirwzLcCIpPzAvfeGY1ir8opqpT-k",
    authDomain: "sit-bem.firebaseapp.com",
    projectId: "sit-bem",
    storageBucket: "sit-bem.appspot.com",
    messagingSenderId: "450988002891",
    appId: "1:450988002891:web:08dfaa25487fe4591e07ce"
  };
   
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  // Use these for db & auth
  const db = firebaseApp.firestore();
  
  export { db };