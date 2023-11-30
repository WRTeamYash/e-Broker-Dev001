"use client"
import React, { useEffect, useState } from 'react'
import 'firebase/messaging'
import { toast } from 'react-hot-toast'
import FirebaseData from '../../utils/Firebase'

const PushNotificationLayout = ({ children, onNotificationReceived }) => {
  const [notification, setNotification] = useState(null)
  const [userToken, setUserToken] = useState(null)
  const [isTokenFound, setTokenFound] = useState(false)
  const [fcmToken, setFcmToken] = useState('')
  const { fetchToken, onMessageListener } = FirebaseData()

  useEffect(() => {
    handleFetchToken()
  }, [])

  const handleFetchToken = async () => {
    await fetchToken(setTokenFound, setFcmToken)
    
  }

  useEffect(() => {
    if (typeof window !== undefined) {
      setUserToken(localStorage.getItem('token'))
      //userToken = window.localStorage.getItem('token')
    }
  }, [userToken])

  useEffect(() => {
    onMessageListener()
      .then(payload => {
        setNotification(payload.data)
        toast.success(payload.data.title)
        onNotificationReceived(payload.data);
      })
      .catch(err => toast(err))
    if (notification) {

      toast.success(
        `<div class="stack" style="cursor: pointer; width: 300px;">
          <div>${notification.title}</div>
          <div>${notification.body}</div>
        </div>`
      )
    }
  }, [notification , onNotificationReceived])
console.log(notification, "notification")
  
  // / service worker
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('/firebase-messaging-sw.js').then(
          function (registration) {
            console.log('Service Worker registration successful with scope: ', registration.scope)
          },
          function (err) {
            console.log('Service Worker registration failed: ', err)
          }
        )
      })
    }
  }, [])
  return <div>{React.cloneElement(children)}</div>;
}

export default PushNotificationLayout
