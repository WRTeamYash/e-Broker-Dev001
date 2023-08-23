'use client'
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb'
import Loader from '@/Components/Loader/Loader'
import { settingsData } from '@/store/reducer/settingsSlice'
import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'


import { useSelector } from 'react-redux'




const page = () => {

    const privacyPolicyData = useSelector(settingsData)
    const PrivacyData = privacyPolicyData?.privacy_policy
    const [privacyData, setPrivacyData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // Simulate data fetching delay
        setTimeout(() => {
            // Simulate fetched data (replace with actual data fetching)
            const simulatedData = PrivacyData;
            setPrivacyData(simulatedData);
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <>
            <Breadcrumb title="Privacy Policy" />
            <section id="privacySect">
                <div className="container">
                    <div className='card'>
                        {isLoading ? (
                            // Show skeleton loading when data is being fetched
                            <div className="col-12 loading_data">
                            <Skeleton height={20} count={20} />
                        </div>
                            // <Loader />
                        ) : (
                            // Render the privacy policy data when not loading
                            <div dangerouslySetInnerHTML={{ __html: privacyData || '' }} />
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default page
