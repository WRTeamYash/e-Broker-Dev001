
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb'
import Loader from '@/Components/Loader/Loader'
import { settingsData } from '@/store/reducer/settingsSlice'
import { useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { translate } from '@/utils'
import { languageData } from '@/store/reducer/languageSlice'
import Layout from '@/Components/Layout/Layout'




const page = () => {
    const lang = useSelector(languageData)
    // console.log("languageData",lang)
      // useSelector(languageData)  
      useEffect(()=>{
        // translate()
        // console.log("about render")
      },[lang]);

    const AboutUs = useSelector(settingsData)
    const AboutUsData = AboutUs?.about_us
    const [aboutData, setAboutData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // Simulate data fetching delay
        setTimeout(() => {
            // Simulate fetched data (replace with actual data fetching)
            const simulatedData = AboutUsData;
            setAboutData(simulatedData);
            // console.log(simulatedData)
            setIsLoading(false);
        }, 2000);
    }, []);
    const stripHtmlTags = (htmlString) => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = htmlString;
        return tempDiv.textContent || tempDiv.innerText || '';
    };

    return (
        <Layout>
            <Breadcrumb title={translate("aboutUs")} />
            <section id="termsSect">
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
                            <div dangerouslySetInnerHTML={{ __html: aboutData || '' }} />
                        )}
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default page
