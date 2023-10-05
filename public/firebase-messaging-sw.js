importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-messaging.js");

firebase.initializeApp({
    apiKey: "AIzaSyD6djyrbNtjhf_ssrww2YkXITUgsS6sYmo",
    authDomain: "ebroker-wrteam.firebaseapp.com",
    projectId: "ebroker-wrteam",
    storageBucket: "ebroker-wrteam.appspot.com",
    messagingSenderId: "63168540332",
    appId: "1:63168540332:web:d183e9ca13866ec5623909",
    measurementId: "G-W05KYC2K8P"
});

const messaging = firebase.messaging();