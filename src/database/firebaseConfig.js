import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAloq4Xhjy2pCQfKjCaf8wBiYqPkA9CqYc",
  authDomain: "coincidence-c0ae1.firebaseapp.com",
  projectId: "coincidence-c0ae1",
  storageBucket: "coincidence-c0ae1.appspot.com",
  messagingSenderId: "885324474516",
  appId: "1:885324474516:web:15f1ab0074a0a00e37ec81",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
