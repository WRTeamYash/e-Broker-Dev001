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
     
           // Display a sticky note at the bottom if messaging is not supported
        const stickyNote = document.createElement('div');
        stickyNote.style.position = 'fixed';
        stickyNote.style.bottom = '0';
        stickyNote.style.width = '100%';
        stickyNote.style.backgroundColor = '#ffffff'; // White background
        stickyNote.style.color = '#FF0000'; // Black text
        stickyNote.style.padding = '10px';
        stickyNote.style.textAlign = 'center';
        stickyNote.style.fontSize = '12px';
        stickyNote.style.zIndex = '99999';
        stickyNote.innerText =`Chat and notification features are not supported on this browser. For a better user experience, please use our mobile application. <a href=${process.env.NEXT_PUBLIC_APPSTORE}style="text-decoration: underline; color: #3498db;">Download Now</a>.`;

        document.body.appendChild(stickyNote);I

        return null;
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
  
      try {
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
          getToken(messaging, {
            vapidKey: process.env.NEXT_PUBLIC_VAPID_KEY,
          })
            .then((currentToken) => {
              if (currentToken) {
                setTokenFound(true);
                setFcmToken(currentToken);
                getFcmToken(currentToken);
              } else {
                setTokenFound(false);
                setFcmToken(null);
                toast.error('Permission is required to receive notifications.');
              }
            })
            .catch((err) => {
              console.error('Error retrieving token:', err);
            });
        } else {
          setTokenFound(false);
          setFcmToken(null);
          toast.error('Permission is required for notifications.');
        }
      } catch (err) {
        console.error('Error requesting notification permission:', err);
      }
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
