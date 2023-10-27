//firebase config key setup
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCpLkRGAawz0Ux7Vr-wtK1e6Cm6R04L07A",
  authDomain: "taskify-6ba79.firebaseapp.com",
  projectId: "taskify-6ba79",
  storageBucket: "taskify-6ba79.appspot.com",
  messagingSenderId: "702526951889",
  appId: "1:702526951889:web:5b97b1e9c3ee1f76d810f0",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
