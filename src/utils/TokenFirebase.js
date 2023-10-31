import "firebase/messaging";
import firebase from 'firebase/compat/app'
import localforage from "localforage";
import { getMessaging } from "firebase/messaging";

const firebaseCloudMessaging = {
    init: async () => {
        if (!firebase?.apps?.length) {

            // Initialize the Firebase app with the credentials
            const firebaseConfig = {
                apiKey: "AIzaSyD6djyrbNtjhf_ssrww2YkXITUgsS6sYmo",
                authDomain: "ebroker-wrteam.firebaseapp.com",
                projectId: "ebroker-wrteam",
                storageBucket: "ebroker-wrteam.appspot.com",
                messagingSenderId: "63168540332",
                appId: "1:63168540332:web:d183e9ca13866ec5623909",
                measurementId: "G-W05KYC2K8P"
              }
              
              // apiKey: process.env.REACT_APP_APIKEY,
              // authDomain: process.env.REACT_APP_AUTHDOMAIN,
              // projectId: process.env.REACT_APP_PROJECTID,
              // storageBucket: process.env.REACT_APP_STORAGEBUCKET,
              // messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
              // appId: process.env.REACT_APP_APPID,
              // measurementId: process.env.REACT_APP_MESASUREMENTID
              // eslint-disable-next-line
            //   if (!firebase.apps.length) {
            //     firebase.initializeApp(firebaseConfig);
            //   } else {
            //     firebase.app(); // if already initialized, use that one
            //   }
              
            try {
                const app = initializeApp(firebaseConfig);
                const messaging = getMessaging(app)
                const tokenInLocalForage = await localforage.getItem("fcm_token");

                // Return the token if it is alredy in our local storage
                if (tokenInLocalForage !== null) {
                    return tokenInLocalForage;
                }

                // Request the push notification permission from browser
                const status = await Notification.requestPermission();

                if (status && status === "granted") {
                    // Get new token from Firebase
                    const fcm_token = await messaging.getToken({
                        vapidKey: "BKuKBCfQ8UIhVTFfCDWb-qkGKOHqiABjMkqOI6rzl0Ewla58Kka2x46Sp6cQbS7ANeFzaQma0Xy2HnxA-gKAqCU",
                    });
                    // Set token in our local storage
                    if (fcm_token) {
                        localforage.setItem("fcm_token", fcm_token);
                        return fcm_token;
                    }
                }
            } catch (error) {
                console.error(error);
                return null;
            }
        }
    },
};
export { firebaseCloudMessaging };