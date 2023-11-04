//firebase config key setup
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import {
  EXPO_PRIVATE_FIREBASE_API_KEY,
  EXPO_PRIVATE_FIREBASE_AUTH_DOMAIN,
  EXPO_PRIVATE_FIREBASE_PROJECT_ID,
  EXPO_PRIVATE_FIREBASE_STORAGE_BUCKET,
  EXPO_PRIVATE_FIREBASE_MESSAGING_SENDER_ID,
  EXPO_PRIVATE_FIREBASE_APP_ID,
} from "@env";

const firebaseConfig = {
  apiKey: EXPO_PRIVATE_FIREBASE_API_KEY,
  authDomain: EXPO_PRIVATE_FIREBASE_AUTH_DOMAIN,
  projectId: EXPO_PRIVATE_FIREBASE_PROJECT_ID,
  storageBucket: EXPO_PRIVATE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: EXPO_PRIVATE_FIREBASE_MESSAGING_SENDER_ID,
  appId: EXPO_PRIVATE_FIREBASE_APP_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
