'use client'
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getMessaging, getToken, onMessage, isSupported } from 'firebase/messaging'
import firebase from "firebase/compat/app"
import { getAuth } from "firebase/auth";

const FirebaseData = () => {
  let firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
  }

  // eslint-disable-next-line
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  } else {
    firebase.app() // if already initialized, use that one
  }

  const app = initializeApp(firebaseConfig)

  const authentication = getAuth(app)

  // const messaging = getMessaging(app)

  const firebaseApp = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApp();
  
  const messagingIntance = (async () => {
    try {
      const isSupportedBrowser = await isSupported();
      if (isSupportedBrowser) {
        return getMessaging(firebaseApp);
      }
      return null;
    } catch (err) {
      return null;
    }
  })();
  
  const fetchToken = async (setTokenFound, setFcmToken) => {
    return getToken(await messagingIntance, {
      vapidKey: process.env.NEXT_PUBLIC_VAPID_KEY,
    })
      .then((currentToken) => {
        if (currentToken) {
          localStorage.setItem("token",currentToken);
          // console.log(currentToken)
          setTokenFound(true);
          setFcmToken(currentToken);
  
          // Track the token -> client mapping, by sending to backend server
          // show on the UI that permission is secured
        } else {
          setTokenFound(false);
          setFcmToken();
          // shows on the UI that permission is required
        }
      })
      .catch((err) => {
        console.error(err);
        // catch error while creating client token
      });
  };
  
  const onMessageListener = async () =>
    new Promise((resolve) =>
      (async () => {
        const messagingResolve = await messagingIntance;
        onMessage(messagingResolve, (payload) => {
          resolve(payload);
        });
      })()
    );

  return { firebase, authentication, fetchToken, onMessageListener }
}

export default FirebaseData
