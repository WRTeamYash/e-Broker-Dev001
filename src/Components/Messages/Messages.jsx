import React, { useEffect, useState } from 'react'
import ChatApp from '@/Components/Messages/ChatApp'
import Breadcrumb from "@/Components/Breadcrumb/Breadcrumb";
import PushNotificationLayout from '@/Components/firebaseNotification/PushNotificationLayout'


const Messages = () => {
    const [notificationData, setNotificationData] = useState(null);

    const handleNotificationReceived = (data) => {
        setNotificationData(data);
    };
    useEffect(() => { }, [notificationData])
    return (
        <PushNotificationLayout onNotificationReceived={handleNotificationReceived}>
            <>
                {/* <Breadcrumb title="Messages" /> */}
                <ChatApp notificationData={notificationData} />
            </>
        </PushNotificationLayout>
    )
}

export default Messages
