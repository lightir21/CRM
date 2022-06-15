import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDo } from "firebase/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};
const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(firebaseApp);

export const signup = async (email, password, confirmPassword) => {
  if (!email || !password) return;
  if (password !== confirmPassword) return;

  return await createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      console.log("user creater:", cred);
    })
    .catch((err) => console.log(err.message));
};

export const signIn = (email, password) => {
  signInWithEmailAndPassword(auth, email, password);
};

export const logOut = async () => {
  return await signOut(auth)
    .then(console.log("the user logged out"))

    .catch((err) => console.log(err.message));
};
