import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"; // Import Firestore

const firebaseConfig = {
  apiKey: "AIzaSyAloq4Xhjy2pCQfKjCaf8wBiYqPkA9CqYc",
  authDomain: "coincidence-c0ae1.firebaseapp.com",
  projectId: "coincidence-c0ae1",
  storageBucket: "coincidence-c0ae1.appspot.com",
  messagingSenderId: "885324474516",
  appId: "1:885324474516:web:15f1ab0074a0a00e37ec81",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };

export const firestore = firebase.firestore(); // Export Firestore
export default firebase;
