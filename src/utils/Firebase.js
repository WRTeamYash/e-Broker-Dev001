// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import firebase from 'firebase/compat/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6djyrbNtjhf_ssrww2YkXITUgsS6sYmo",
  authDomain: "ebroker-wrteam.firebaseapp.com",
  projectId: "ebroker-wrteam",
  storageBucket: "ebroker-wrteam.appspot.com",
  messagingSenderId: "63168540332",
  appId: "1:63168540332:web:d183e9ca13866ec5623909",
  measurementId: "G-W05KYC2K8P"
};


// Initialize Firebase
// / eslint-disable-next-line
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}
const app = initializeApp(firebaseConfig);
const authentication = getAuth();

export { app, authentication }; 