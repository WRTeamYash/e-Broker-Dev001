"use client"
import React, { useEffect, useState } from 'react'

import { RiSendPlane2Line, RiHotelBedLine, RiParkingBoxLine, RiBuilding3Line, RiPlantLine, RiThumbUpFill } from 'react-icons/ri'
import { AiOutlineArrowRight, AiOutlineHeart } from 'react-icons/ai'
import { Card } from 'react-bootstrap'
import { CiLocationOn } from 'react-icons/ci'
import PropImg01 from "@/assets/Images/Featured_List_4.jpg"
import PropImg02 from "@/assets/Images/Featured_List_5.jpg"
import PropImg03 from "@/assets/Images/Featured_List_6.jpg"
import PropImg04 from "@/assets/Images/Featured_List_7.jpg"
import PropImg05 from "@/assets/Images/Featured_List_8.jpg"
import cardImg from '@/assets/Images/Featured_List_1.jpg'
import { FiCloudDrizzle, FiMail, FiMessageSquare, FiPhoneCall } from 'react-icons/fi'
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb';
import Loader from '@/Components/Loader/Loader';
import axios from 'axios';

import { PiPlayCircleThin } from 'react-icons/pi';
import ReactPlayer from 'react-player';
import SimilerPropertySlider from '@/Components/SimilerPropertySlider/SimilerPropertySlider'
import { settingsData } from '@/store/reducer/settingsSlice'
import { useSelector } from 'react-redux'
import Map from '@/Components/GoogleMap/GoogleMap'
import Skeleton from 'react-loading-skeleton'
import { languageData } from '@/store/reducer/languageSlice'
import { translate } from '@/utils'
import { store } from '@/store/store'
import { useRouter } from 'next/router'
import { GetFeturedListingsApi } from '@/store/actions/campaign'




const PropertieDeatils = () => {


    const router = useRouter();
    const propId = router.query
    console.log(propId)
    const [isLoading, setIsLoading] = useState(true)
    const [expanded, setExpanded] = useState(false);
    const [getPropData, setPropData] = useState()
    const [getSimilerData, setSimilerData] = useState()

    const GoogleMapData = useSelector(settingsData)
    const GoogleMapApiKey = GoogleMapData && GoogleMapData.place_api_key
    const lang = useSelector(languageData)

    useEffect(() => {

    }, [lang]);
    const isLoggedIn = useSelector((state) => state.User_signup);
    const userCurrentId = isLoggedIn && isLoggedIn.data ? isLoggedIn.data.data.id : null;


    useEffect(() => {
        setIsLoading(true);

        GetFeturedListingsApi(
            "",
            "",
            propId,
            "",
            "",
            "",
            "",
            "",
            "",
            isLoggedIn ? userCurrentId : "",
            (response) => {

                const propertyData = response.data;
                console.log(propertyData)
                setIsLoading(false);
                setPropData(propertyData[0]);
                console.log(getPropData)
            },
            (error) => {
                setIsLoading(false);
                console.log(error);
            }
        );

    }, [isLoggedIn]);
    useEffect(() => {
        setIsLoading(true);

        GetFeturedListingsApi(
            "",
            "",
            propId,
            "",
            "",
            "",
            "1",
            "",
            "",
            isLoggedIn ? userCurrentId : "",
            (response) => {

                const propertyData = response.data;
                console.log(propertyData)
                setIsLoading(false);
                setSimilerData(propertyData);
                // console.log(CategoryListByPropertyData)
            },
            (error) => {
                setIsLoading(false);
                console.log(error);
            }
        );

    }, [isLoggedIn]);









    const renderBullet = (index, className) => {
        return `<span class="${className}" style="background-color: #087c7c;
    outline: 1px solid #000;
    font-size: 20px;
    padding: 8px;
    border: 2px solid #fff;"></span>`;
    };
    const [imageURL, setImageURL] = useState('');

    useEffect(() => {
        if (getPropData && getPropData.threeD_image) {
            setImageURL(getPropData.threeD_image);
        }
    }, [getPropData]);

    useEffect(() => {
        if (imageURL) {
            pannellum.viewer('panorama', {
                "type": "equirectangular",
                "panorama": imageURL,
                "autoLoad": true
            });
        }
    }, [imageURL]);

    const [play, setPlay] = useState(false)

    const videoLink = getPropData && getPropData.video_link;
    const videoId = videoLink ? videoLink.split('/').pop() : null;

    const backgroundImageUrl = videoId
        ? `url(https://img.youtube.com/vi/${videoId}/maxresdefault.jpg)`
        : 'none';

    return (
        <>
            <Breadcrumb data={{
                type: getPropData && getPropData.category.category,
                title: getPropData && getPropData.title,
                loc: getPropData && getPropData.address,
                propertyType: getPropData && getPropData.propery_type,
                time: getPropData && getPropData.post_created,
                price: getPropData && getPropData.price,
                is_favourite: getPropData && getPropData.is_favourite
            }} />
            <section className='properties-deatil-page'>



                <div id='all-prop-deatil-containt'>
                    <div className='container'>
                        <div className='row' id='prop-images'>
                            <div className='col-lg-3 col-md-4 col-sm-12' id='prop-left-images'>
                                <div>
                                    <img src={PropImg01.src} className='left-imgs01' />
                                </div>
                                <div>
                                    <img src={PropImg02.src} className='left-imgs02' />
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-4 col-sm-12 text-center' id='prop-main-image'>
                                <img src={PropImg03.src} className='middle-img' />
                                <div className="img-overlay">
                                    <button> {translate("seeAllPhotos")}</button>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-4 col-sm-12' id='prop-right-images'>
                                <div>
                                    <img src={PropImg04.src} className='right-imgs01' />
                                </div>
                                <div>
                                    <img src={PropImg05.src} className='right-imgs02' />
                                </div>
                            </div>
                        </div>
                        <div className='row' id='prop-all-deatils-cards'>
                            <div className='col-12 col-md-12 col-lg-9' id='prop-deatls-card'>
                                <div className="card about-propertie">
                                    <div className="card-header">
                                        {translate("aboutProp")}
                                    </div>
                                    <div className="card-body">
                                        {getPropData && getPropData.description && (
                                            <>
                                                <p>
                                                    {expanded
                                                        ? getPropData.description
                                                        : getPropData.description.substring(0, 100) + '...'}
                                                </p>
                                                {getPropData.description.length > 100 && (
                                                    <button onClick={() => setExpanded(!expanded)}>
                                                        {expanded ? 'Show Less' : 'Show More'}
                                                        <AiOutlineArrowRight className="mx-2" size={18} />
                                                    </button>
                                                )}
                                            </>
                                        )}
                                    </div>
                                </div>
                                <div className="card " id='features-amenities'>
                                    <div className="card-header">
                                        {translate("aboutProp")}
                                    </div>
                                    <div className="card-body">

                                        <div className="row">


                                            {getPropData && getPropData.parameters && getPropData.parameters.map((elem, index) => (
                                                // Check if the value is an empty string
                                                (elem.value !== "" && elem.value !== "0") ? (
                                                    <div className="col-sm-12 col-md-6 col-lg-4" key={index}>
                                                        <div id='specification'>
                                                            <div className='spec-icon'>
                                                                <img src={elem.image} width={20} height={16} />
                                                            </div>
                                                            <div id='specs-deatils'>
                                                                <div>
                                                                    <span>{elem.name}</span>
                                                                </div>
                                                                <div className='valueDiv'>
                                                                    {/* Check if the value is a link */}
                                                                    {typeof elem.value === 'string' && elem.value.startsWith('https://') ? (
                                                                        <a id='spacs-count' href={elem.value} target="_blank" rel="noopener noreferrer">
                                                                            {elem.value}
                                                                        </a>
                                                                    ) : (
                                                                        <span id='spacs-count'>{elem.value}</span>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : null
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className='card' id='propertie_address'>
                                    <div className="card-header">
                                        {translate("feature&Amenties")}
                                    </div>
                                    <div className='card-body'>
                                        <div className="row" id='prop-address'>
                                            <div className="adrs">
                                                <div>
                                                    <span> {translate("address")}</span>
                                                </div>
                                                <div className=''>
                                                    <span> {translate("city")}</span>
                                                </div>
                                                <div className=''>
                                                    <span> {translate("state")}</span>
                                                </div>
                                                <div className=''>
                                                    <span> {translate("country")}</span>
                                                </div>
                                            </div>
                                            <div className="adrs02">
                                                <div className="adrs_value">
                                                    <span>{getPropData && getPropData.address}</span>
                                                </div>
                                                <div className="adrs_value">
                                                    <span className=''>{getPropData && getPropData.city}</span>
                                                </div>

                                                <div className="adrs_value">
                                                    <span className=''>{getPropData && getPropData.state}</span>
                                                </div>
                                                <div className="adrs_value">
                                                    <span className=''>{getPropData && getPropData.country}</span>
                                                </div>
                                            </div>

                                        </div>
                                        {getPropData ? (
                                            <Card className='google_map'>
                                                {GoogleMapApiKey ? (
                                                    <Map
                                                        latitude={getPropData.latitude}
                                                        longitude={getPropData.longitude}
                                                        google={GoogleMapApiKey}
                                                    />
                                                ) : (
                                                    <div>
                                                        <Skeleton height={200} width={"100%"} />
                                                    </div>
                                                )}
                                            </Card>
                                        ) : (
                                            null
                                        )}

                                    </div>
                                </div>


                                {getPropData && getPropData.video_link ? (


                                    <div className='card' id='prop-video'>
                                        <div className="card-header">
                                            {translate("video")}
                                        </div>
                                        {/* {console.log(getPropData.video_link)}
                                        {console.log(getPropData.video_link.slice(17))}
                                        {console.log(videoId)}
                                        {console.log(videoLink)} */}
                                        <div className="card-body">
                                            {!play
                                                ?
                                                <div className='video-background container' style={{
                                                    backgroundImage: backgroundImageUrl,
                                                    backgroundSize: 'cover', // You might want to adjust the background size based on your design
                                                    backgroundPosition: 'center center', // You might want to adjust the position based on your design
                                                }}>
                                                    <div id='video-play-button'>
                                                        <button onClick={() => setPlay(true)}
                                                        // href="https://youtu.be/y9j-BL5ocW8" target='_blank'
                                                        >
                                                            <PiPlayCircleThin className='button-icon' size={80} />
                                                        </button>
                                                    </div>
                                                </div>
                                                :
                                                <div >
                                                    <ReactPlayer
                                                        width="100%"
                                                        height="500px"
                                                        url={getPropData && getPropData.video_link}
                                                        playing={play}
                                                        controls={true}
                                                        onPlay={() => setPlay(true)}
                                                        onPause={() => setPlay(false)}
                                                    />
                                                </div>
                                            }

                                        </div>
                                    </div>
                                ) :
                                    null
                                }


                                {getPropData && getPropData.threeD_image ? (

                                    <div className="card" id="prop-360-view">
                                        <div className="card-header">
                                            {translate("vertualView")}
                                        </div>
                                        <div className="card-body">

                                            <div id="virtual-view">

                                                <div id="panorama"></div>
                                                {/* <iframe width="100%" height="500" allowfullscreen style={{
                                            backgroundImage: `url(${ViewPageImg.src})`,
                                            borderStyle: "none",
                                            borderRadius: "12px"
                                        }}
                                            src="https://cdn.pannellum.org/2.5/pannellum.htm#panorama=
                                            https://thumbs.dreamstime.com/b/grodno-belarus-september-full-panorama-equirectangular-spherical-equidistant-projection-interier-banquet-hall-ancient-138802019.jpg?w=2048"
                                            aut></iframe> */}
                                            </div>
                                        </div>
                                    </div>
                                ) :
                                    null
                                }

                            </div>
                            <div className='col-12 col-md-12 col-lg-3'>
                                <div className="card" id='owner-deatils-card'>
                                    <div className="card-header" id='card-owner-header'>
                                        <div>
                                            <img src={getPropData && getPropData.profile} className='owner-img' alt="" />
                                        </div>
                                        <div className='owner-deatils'>
                                            <span className='owner-name'> {getPropData && getPropData.customer_name}</span>
                                            <span className='owner-add'> <CiLocationOn size={20} />{getPropData && getPropData.address}</span>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className='owner-contact'>
                                            <div ><FiPhoneCall id='call-o' size={60} /></div>
                                            <div className='deatilss'>
                                                <span className='o-d'> {translate("call")}</span>
                                                <span className='value'>{getPropData && getPropData.mobile}</span>
                                            </div>

                                        </div>
                                        <div className='owner-contact'>
                                            <div ><FiMail id='mail-o' size={60} /></div>
                                            <div className='deatilss'>
                                                <span className='o-d'> {translate("mail")}</span>
                                                <span className='value'>{getPropData && getPropData.email}</span>
                                            </div>

                                        </div>
                                        <div className='owner-contact'>
                                            <div ><FiMessageSquare id='chat-o' size={60} /></div>
                                            <div className='deatilss'>
                                                <span className='o-d'> {translate("chat")}</span>
                                                <span className='value'> {translate("startAChat")}</span>
                                            </div>
                                        </div>
                                        <div className='enquiry'>
                                            <button className='enquiry-buttons'> <RiSendPlane2Line className='mx-1' size={20} />{translate("sendEnquiry")}</button>
                                            <button className='enquiry-buttons'> <RiThumbUpFill className='mx-1' size={20} />{translate("intrest")}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <SimilerPropertySlider isLoading={isLoading} data={getSimilerData} />

                    </div>
                </div>
            </section >
        </>
    )
}
// export async function getServerSideProps(context) {
//     // Get the slug parameter from the URL
//     const { slug } = context.query;

//     try {
//         // Fetch data from the first API endpoint
//         const response1 = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}get_property?id=${slug}`);
//         const propertySlugData = response1.data.data; // Assuming your API response is a JSON object
//         // Fetch data from the second API endpoint
//         const response2 = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}get_property?id=${slug}&get_simiilar=1`);
//         const propertySlugData2 = response2.data.data; // Assuming your API response is a JSON object
//         // console.log("=====================", propertySlugData2)
//         // You can now use propertySlugData1 and propertySlugData2 in your component
//         return {
//             props: { propertySlugData, propertySlugData2 }
//         };
//     } catch (error) {
//         console.error("Error fetching property data:", error);
//         return {
//             props: { propertySlugData: null, propertySlugData2: null } // You can handle the error case appropriately in your component
//         };
//     }
// }
export default PropertieDeatils
