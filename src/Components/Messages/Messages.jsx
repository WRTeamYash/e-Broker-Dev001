"use client"
import React, { useEffect, useState } from 'react'
import ChatApp from '@/Components/Messages/ChatApp'
import Breadcrumb from "@/Components/Breadcrumb/Breadcrumb";
import PushNotificationLayout from '@/Components/firebaseNotification/PushNotificationLayout'
import Layout from '../Layout/Layout';


const Messages = () => {
    const [notificationData, setNotificationData] = useState(null);

    const handleNotificationReceived = (data) => {
        setNotificationData(data);
    };
    useEffect(() => { }, [notificationData])
    return (
        <PushNotificationLayout onNotificationReceived={handleNotificationReceived}>
            <Layout>
                {/* <Breadcrumb title="Messages" /> */}
                <ChatApp notificationData={notificationData} />
            </Layout>
        </PushNotificationLayout>
    )
}

export default Messages
