// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB3fD8eaq3d9_gesF0WGF6pudW8G3pj4ig",
  authDomain: "clone-1f128.firebaseapp.com",
  projectId: "clone-1f128",
  storageBucket: "clone-1f128.appspot.com",
  messagingSenderId: "318700453770",
  appId: "1:318700453770:web:f903c70d45f2641dab5273",
  measurementId: "G-SP0YNQ8LKB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };