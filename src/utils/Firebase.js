'use client'
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getMessaging, getToken, onMessage, isSupported } from 'firebase/messaging'
import firebase from "firebase/compat/app"
import { getAuth } from "firebase/auth";
import toast from 'react-hot-toast';
import { getFcmToken } from '@/store/reducer/settingsSlice';

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

  if (!firebase.apps.length) {

    firebase.initializeApp(firebaseConfig);
  }

  const app = initializeApp(firebaseConfig);
  const authentication = getAuth(app);
  const firebaseApp = !getApps().length
    ? initializeApp(firebaseConfig)
    : getApp();

  const messagingInstance = async () => {
    try {
      const isSupportedBrowser = await isSupported();
      if (isSupportedBrowser) {
        return getMessaging(firebaseApp);
      } else {
        // Display a toast message indicating that messaging is not supported
        toast.error('Messaging is not supported on this browser.');
        return null;
      }
    } catch (err) {
      console.error('Error checking messaging support:', err);
      return null;
    }
  };
  const fetchToken = async (setTokenFound, setFcmToken) => {
    const messaging = await messagingInstance();
    if (!messaging) {
      console.error('Messaging not supported.');
      return;
    }

    getToken(messaging, {
      vapidKey: process.env.NEXT_PUBLIC_VAPID_KEY,

    })
      .then((currentToken) => {
        // console.log(currentToken)
        if (currentToken) {
          setTokenFound(true);
          setFcmToken(currentToken);
          getFcmToken(currentToken)
          // console.log("token", currentToken)
        } else {
          setTokenFound(false);
          setFcmToken(null);
          toast.error('Permission is required for get notification');
          // console.log(currentToken)
        }
      })
      .catch((err) => {
        console.error(err);
        // console.log(currentToken)
      });
  };

  const onMessageListener = async () => {
    const messaging = await messagingInstance();
    if (messaging) {
      return new Promise((resolve) => {
        onMessage(messaging, (payload) => {
          resolve(payload);
        });
      });
    } else {
      console.error('Messaging not supported.');
      return null;
    }
  };

  return { firebase, authentication, fetchToken, onMessageListener }
}

export default FirebaseData;
