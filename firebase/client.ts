// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyARdAfpj5rweEjwRpH3m1BNFKFm-nicOIc",
  authDomain: "preptime-32155.firebaseapp.com",
  projectId: "preptime-32155",
  storageBucket: "preptime-32155.firebasestorage.app",
  messagingSenderId: "920188938625",
  appId: "1:920188938625:web:451a2936c46ed88d432080",
  measurementId: "G-1WPBLV8X9M"
};

// Initialize Firebase
const app = !getApps.length ?  initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);