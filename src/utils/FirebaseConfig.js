// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1JTpjFDXH6IiZHsqVOmB3pPnatpYZsQY",
  authDomain: "ebroker01-1313c.firebaseapp.com",
  projectId: "ebroker01-1313c",
  storageBucket: "ebroker01-1313c.appspot.com",
  messagingSenderId: "723202323639",
  appId: "1:723202323639:web:4c40570940ae0f182ac932",
  measurementId: "G-VHF0HBSPVM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authentication = getAuth();

export {app, authentication };