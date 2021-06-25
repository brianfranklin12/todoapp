import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const fire = firebase.initializeApp({
  apiKey: "AIzaSyD1dzNM58pcqT9dQRar51Iue40ZeCt5lfY",
  authDomain: "todoapp-2395d.firebaseapp.com",
  projectId: "todoapp-2395d",
  storageBucket: "todoapp-2395d.appspot.com",
  messagingSenderId: "617762373774",
  appId: "1:617762373774:web:272529aa58a5b09c7749df"
});

export const auth = fire.auth();
export const db = fire.firestore();
export default { fire };