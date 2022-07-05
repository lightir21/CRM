import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
  getDoc,
  query,
  where,
  collectionGroup,
  getDocs,
  updateDoc,
} from "firebase/firestore";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { setCurrentCustomer } from "../redux/customersSlice";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};
export const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = getAuth();

export const signup = async (email, password, confirmPassword) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signIn = (email, password) => {
  signInWithEmailAndPassword(auth, email, password);
};

export const logOutUser = async () => {
  return await signOut(auth)
    .then(console.log("the user logged out"))

    .catch((err) => console.log(err.message));
};

export const createAdminDocumentFromAuth = async (adminAuth) => {
  if (!adminAuth) return;
  const adminDocRef = doc(db, "admins", adminAuth.uid);

  const { email } = adminAuth;

  try {
    await setDoc(adminDocRef, { email });
  } catch (err) {
    console.log(err);
  }

  return adminDocRef;
};

export const createNewCustomer = async (adminAuth, data) => {
  if (!adminAuth) return;

  const { uid } = adminAuth;

  const adminDocRef = doc(db, "admins", uid);
  const adminColRef = collection(adminDocRef, "customers");

  try {
    await addDoc(adminColRef, data);
  } catch (err) {
    console.log(err);
  }
};

export const queryForCustomer = async (adminAuth, id) => {
  if (!adminAuth) return;
  let customer = "";
  const { uid } = adminAuth;

  const customers = query(
    collectionGroup(db, "customers"),
    where("id", "==", id),
    where("admin", "==", uid)
  );
  const customerSnapshot = await getDocs(customers);
  customerSnapshot.forEach((doc) => {
    return (customer = { currentCustomer: doc.data(), id: doc.id });
  });
  return customer;
};

export const updateCustomer = async (adminAuth, currentCustomerId, data) => {
  if (!adminAuth) return;
  const { uid } = adminAuth;
  const adminDocRef = db.doc(`admins/${uid}/customers/${currentCustomerId}`);

  await updateDoc(adminDocRef, data);
};

export const getCustomersList = async (adminAuth) => {
  if (!adminAuth) return;

  const { uid } = adminAuth;
  const customers = [];

  const customersCollectionSnapShot = await getDocs(
    collection(db, `admins/${uid}/customers`)
  );

  customersCollectionSnapShot.forEach((doc) => {
    return customers.push(doc.data());
  });

  return customers;
};
