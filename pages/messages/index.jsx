"use client"
import React, { useEffect, useState } from 'react'
import ChatApp from '../../src/Components/Messages/ChatApp'
import Breadcrumb from "@/Components/Breadcrumb/Breadcrumb";
import Layout from "@/Components/Layout/Layout";
import PushNotificationLayout from '@/Components/firebaseNotification/PushNotificationLayout';


const index = () => {

  const [notificationData, setNotificationData] = useState(null);

  const handleNotificationReceived = (data) => {
    // Handle the received notification data in the parent component
    console.log('Received notification data in parent:', data);
    setNotificationData(data);
  };
  useEffect(() => {
  console.log(notificationData)

  },[notificationData])

  return (
    <PushNotificationLayout onNotificationReceived={handleNotificationReceived}>
      <Layout>
        <Breadcrumb title="Messages" />
        <ChatApp notificationData={notificationData}/>
      </Layout>
    </PushNotificationLayout>
  )
}

export default index
