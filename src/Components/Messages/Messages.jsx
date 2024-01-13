"use client"
import React, { useEffect, useState } from 'react'
import ChatApp from '@/Components/Messages/ChatApp'
import PushNotificationLayout from '@/Components/firebaseNotification/PushNotificationLayout'
import VerticleLayout from '../AdminLayout/VerticleLayout'



const Messages = () => {
    const [notificationData, setNotificationData] = useState(null);

    const handleNotificationReceived = (data) => {
        setNotificationData(data);
    };
    useEffect(() => { }, [notificationData])
    return (
        <PushNotificationLayout onNotificationReceived={handleNotificationReceived}>
            <VerticleLayout>
                <ChatApp notificationData={notificationData} />
            </VerticleLayout>
        </PushNotificationLayout>
    )
}

export default Messages
