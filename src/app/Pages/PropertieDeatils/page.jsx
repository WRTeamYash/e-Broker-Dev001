"use client"
import React, { useEffect, useState } from 'react'
import ViewPageImg from "@/assets/Images/Breadcrumbs_BG.jpg"
import { ButtonGroup } from 'react-bootstrap'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { RiSendPlane2Line, RiGridFill, RiHotelBedLine, RiParkingBoxLine, RiBuilding3Line, RiPlantLine, RiThumbUpFill } from 'react-icons/ri'
import { AiOutlinePlayCircle, AiOutlineHeart, AiOutlineArrowRight, AiOutlineWifi, AiFillPlayCircle } from 'react-icons/ai'
import { Card } from 'react-bootstrap'
import { GiGamepad } from 'react-icons/gi'
import { MdSecurity, MdKitchen, MdBalcony } from 'react-icons/md'
import { TbAirConditioning } from "react-icons/tb"
import { FiArrowRightCircle, FiCloudDrizzle, FiEye } from 'react-icons/fi'
import { PiPlayCircleThin } from 'react-icons/pi'
import { BiHomeSmile, BiCctv, BiTime } from 'react-icons/bi'
import { CiLocationOn } from 'react-icons/ci'
import { LiaDumbbellSolid, LiaSwimmingPoolSolid } from 'react-icons/lia'
import { SlDocs } from 'react-icons/sl'
import Link from 'next/link'
import PropImg01 from "@/assets/Images/Featured_List_4.jpg"
import PropImg02 from "@/assets/Images/Featured_List_5.jpg"
import PropImg03 from "@/assets/Images/Featured_List_6.jpg"
import PropImg04 from "@/assets/Images/Featured_List_7.jpg"
import PropImg05 from "@/assets/Images/Featured_List_8.jpg"
import agentimg from "@/assets/Images/Superman.jpeg"
import realistic_villa from "@/assets/Images/realistic_villa.jpg"
import cardImg from '@/assets/Images/Featured_List_1.jpg'


import Image from 'next/image'
import { Fascinate } from 'next/font/google'
import { FiMail, FiMessageSquare, FiPhoneCall } from 'react-icons/fi'
import Breadcrumb from '@/app/Components/Breadcrumb/Breadcrumb';

const PropertieDeatils = () => {


    // const [currentScene, setCurrentScene] = useState(realistic_big_house)
    const renderBullet = (index, className) => {
        return `<span class="${className}" style="background-color: #087c7c;
    outline: 1px solid #000;
    font-size: 20px;
    padding: 8px;
    border: 2px solid #fff;"></span>`;
    };
    // const krpanoConfigPath = '../../Components/Panorama/js/krpano.xml'; // Replace with the correct path to your krpano.xml file

    const handleShowPlayer = () => {
        const videoBackgroundContainer = document.querySelector('.video-background.container');
        const videoIframe = document.getElementById('video-iframe');
        const playButton = document.getElementById('video-play-button');

        // Hide the video background container and show the iframe
        videoBackgroundContainer.style.display = 'none';
        videoIframe.style.display = 'block';

        // Show the play button when the video is paused
        videoIframe.addEventListener('pause', () => {
            playButton.style.display = 'block';
        });

        // Hide the play button when the video is playing
        videoIframe.addEventListener('play', () => {
            playButton.style.display = 'none';
        });


    }
    useEffect(() => {
        pannellum.viewer('panorama', {
            "type": "equirectangular",
            "panorama": realistic_villa.src,
            "autoLoad": true

        });
    }, [])
    const [play, setPlay] = useState(false)
    return (
        <>
       <Breadcrumb data={{
                type:"House",
                title:"Serene Haven Retreat",
                loc:"778 Country St. Panama City, FL",
                propertyType: "Sell",
                time:"6 months ago",
                price:"$999999"

            }}/>
        <div className='properties-deatil-page'>

        

            <div id='all-prop-deatil-containt'>
                <div id='all-content-deatil'>
                    <div className='row' id='prop-images'>
                        <div className='col-lg-3 col-md-4 col-sm-12' id='prop-left-images'>
                            <Image src={PropImg01} className='left-imgs01' />
                            <Image src={PropImg02} className='left-imgs02' />
                        </div>
                        <div className='col-lg-6 col-md-4 col-sm-12 text-center' id='prop-main-image'>
                            <Image src={PropImg03} className='middle-img' />
                            <div className="img-overlay">
                                <button> See all Photos</button>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-12' id='prop-right-images'>
                            <Image src={PropImg04} className='right-imgs01' />
                            <Image src={PropImg05} className='right-imgs02' />
                        </div>
                    </div>
                    <div className='row' id='prop-all-deatils-cards'>
                        <div className='col-12 col-md-12 col-lg-9' id='prop-deatls-card'>
                            <div className="card about-propertie">
                                <div className="card-header">
                                    About Propertie
                                </div>
                                <div className="card-body">
                                    <p>
                                        Introducing a captivating property that embodies timeless elegance and modern luxury. Nestled in a picturesque location, this exquisite residence offers the perfect blend of sophistication and comfort. As you step through the grand entrance, you are greeted by an impressive foyer adorned with stunning architectural details, setting the tone for the exceptional craftsmanship that awaits. </p>
                                    <p>
                                        The expansive living spaces showcase impeccable attention to detail, with high ceilings, large windows, and an abundance of natural light that bathes the interior in a warm glow. The open floor plan seamlessly connects the living, dining, and entertaining areas, providing a seamless flow for both intimate gatherings and grand soirees. </p>
                                    <p>
                                        The gourmet kitchen is a culinary enthusiast's dream, featuring top-of-the-line appliances, custom cabinetry, and a center island that invites creativity and culinary exploration. Adjoining the kitchen is a cozy breakfast nook, ideal for enjoying a morning coffee while overlooking the serene landscaped gardens.
                                    </p>

                                    <button>Read More <AiOutlineArrowRight className="mx-2" size={18} /></button>
                                </div>
                            </div>
                            <div className="card " id='features-amenities'>
                                <div className="card-header">
                                    Features & Amenities
                                </div>
                                <div className="card-body">
                                    <div className='uper-specification'>
                                        <div id='specification'>
                                            <div className='spec-icon'>
                                                <LiaDumbbellSolid size={35} />
                                            </div>
                                            <div id='specs-deatils'>
                                                <div>
                                                    <span>Fitness</span>
                                                </div>
                                                <div>
                                                    <span id='spacs-count'>1</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div id='specification'>
                                            <div className='spec-icon'>
                                                <MdSecurity size={35} />
                                            </div>
                                            <div id='specs-deatils'>
                                                <div>
                                                    <span>Security</span>
                                                </div>
                                                <div>
                                                    <span id='spacs-count'>2</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div id='specification'>
                                            <div className='spec-icon'>
                                                <MdKitchen size={35} />
                                            </div>
                                            <div id='specs-deatils'>
                                                <div>
                                                    <span>Kitchen</span>
                                                </div>
                                                <div>
                                                    <span id='spacs-count'>1</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div id='specification'>
                                            <div className='spec-icon'>
                                                <RiPlantLine size={35} />
                                            </div>
                                            <div id='specs-deatils'>
                                                <div>
                                                    <span>Garden</span>
                                                </div>
                                                <div>
                                                    <span id='spacs-count'>1</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div id='specification'>
                                            <div className='spec-icon'>
                                                <RiParkingBoxLine size={35} />
                                            </div>
                                            <div id='specs-deatils'>
                                                <div>
                                                    <span>Parking</span>
                                                </div>
                                                <div>
                                                    <span id='spacs-count'>2</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='down-specification'>
                                        <div id='specification'>
                                            <div className='spec-icon'>
                                                <MdBalcony size={35} />
                                            </div>
                                            <div id='specs-deatils'>
                                                <div>
                                                    <span>Balcony</span>
                                                </div>
                                                <div>
                                                    <span id='spacs-count'>2</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div id='specification'>
                                            <div className='spec-icon'>
                                                <LiaSwimmingPoolSolid size={35} />
                                            </div>
                                            <div id='specs-deatils'>
                                                <div>
                                                    <span>Pool</span>
                                                </div>
                                                <div>
                                                    <span id='spacs-count'>1</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div id='specification'>
                                            <div className='spec-icon'>
                                                <TbAirConditioning size={35} />
                                            </div>
                                            <div id='specs-deatils'>
                                                <div>
                                                    <span>AC</span>
                                                </div>
                                                <div>
                                                    <span id='spacs-count'>5</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div id='specification'>
                                            <div className='spec-icon'>
                                                <BiCctv size={35} />
                                            </div>
                                            <div id='specs-deatils'>
                                                <div>
                                                    <span>CCTV</span>
                                                </div>
                                                <div>
                                                    <span id='spacs-count'>5</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div id='specification'>
                                            <div className='spec-icon'>
                                                <AiOutlineWifi size={35} />
                                            </div>
                                            <div id='specs-deatils'>
                                                <div>
                                                    <span>Wifi</span>
                                                </div>
                                                <div>
                                                    <span id='spacs-count'>2</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='card' id='propertie-address'>
                                <div className="card-header">
                                    Address
                                </div>
                                <div className='card-body'>
                                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4" id='prop-address'>
                                        <div className="col adrs">
                                            <div className=''>
                                                <span>Address</span>
                                            </div>
                                            <div className=''>
                                                <span>City</span>
                                            </div>
                                            <div className=''>
                                                <span>State</span>
                                            </div>
                                        </div>
                                        <div className='col adrs-value'>
                                            <div>
                                                <span className=''>bhuj near dmart</span>
                                            </div>
                                            <div>
                                                <span className=''>Bhuj</span>
                                            </div>
                                            <div>
                                                <span className=''>Gujarat</span>
                                            </div>
                                        </div>
                                        <div className="col adrs">
                                            <div className=''>
                                                <span>Country</span>
                                            </div>
                                            <div className=''>
                                                <span>Zip Code</span>
                                            </div>
                                            <div className=''>
                                                <span>Client Address</span>
                                            </div>
                                        </div>
                                        <div className='col adrs-value'>
                                            <div>
                                                <span className=''>India</span>
                                            </div>
                                            <div>
                                                <span className=''>370001</span>
                                            </div>
                                            <div>
                                                <span className=''>bhuj kodki road near dmart bhuj kutch</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='prop-location-map'>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.2756631211932!2d69.64143297622796!3d23.233053779026758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3950e1e328911c2f%3A0xd3fbdee849719bee!2sShree%20Softech!5e0!3m2!1sen!2sin!4v1689831653200!5m2!1sen!2sin"
                                        style={{
                                            width: "100%", height: "300px", style: "border:0", allowFullScreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade",
                                            borderRadius: "12px"

                                        }}
                                    >
                                    </iframe>
                                </div>
                            </div>
                            <div className='card' id='prop-video'>
                                <div className="card-header">
                                    Video
                                </div>
                                <div className="card-body">
                                    {!play
                                        ?
                                        <div className='video-background container' style={{
                                            backgroundImage: `url("https://img.youtube.com/vi/y9j-BL5ocW8/maxresdefault.jpg")`,
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
                                            <iframe
                                                width="100%"
                                                height="500"
                                                src="https://www.youtube.com/embed/y9j-BL5ocW8"
                                                title="YouTube video player"
                                                frameborder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                allowfullscreen
                                                id="video-iframe"
                                                onPause={() => setPlay(false)}
                                            ></iframe>
                                        </div>
                                    }

                                </div>
                            </div>
                            <div className="card" id="prop-360-view">
                                <div className="card-header">
                                    360° Virtual Tour
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
                        </div>
                        <div className='col-12 col-md-12 col-lg-3'>
                            <div className="card" id='owner-deatils-card'>
                                <div className="card-header" id='card-owner-header'>
                                    <div>
                                        <img src={agentimg.src} className='owner-img' alt="" />
                                    </div>
                                    <div className='owner-deatils'>
                                        <span className='owner-name'> Michael Smith </span>
                                        <span className='owner-add'> <CiLocationOn size={20} />  Los Angeles </span>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className='owner-contact'>
                                        <div ><FiPhoneCall id='call-o' size={60} /></div>
                                        <div className='deatilss'>
                                            <span className='o-d'>Call</span>
                                            <span className='value'>01234 56789</span>
                                        </div>

                                    </div>
                                    <div className='owner-contact'>
                                        <div ><FiMail id='mail-o' size={60} /></div>
                                        <div className='deatilss'>
                                            <span className='o-d'>Mail</span>
                                            <span className='value'>michael.smith@example.com</span>
                                        </div>

                                    </div>
                                    <div className='owner-contact'>
                                        <div ><FiMessageSquare id='chat-o' size={60} /></div>
                                        <div className='deatilss'>
                                            <span className='o-d'>Chat</span>
                                            <span className='value'>Start a chat</span>
                                        </div>
                                    </div>
                                    <div className='enquiry'>
                                        <button className='enquiry-buttons'> <RiSendPlane2Line className='mx-1' size={20} /> Send Enquiry</button>
                                        <button className='enquiry-buttons'> <RiThumbUpFill className='mx-1' size={20} />Interest</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section id='similer-properties'>
                        <div className='similer-headline'>
                            <span className='headline'
                                data-aos="fade-right" data-aos-duration="1000"
                            >
                                Similar  <span
                                >
                                    <span
                                        className='highlight'
                                        // data-aos="fade-left" data-aos-duration="5000"
                                    > Properties</span>
                                </span>
                            </span>
                        </div>
                        <div className='similer-prop-slider'>
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={30}
                                freeMode={true}
                                pagination={{
                                    clickable: true,
                                    renderBullet: renderBullet
                                }}
                                modules={[FreeMode, Pagination]}
                                className='similer-swiper'
                            // className="mySwiper"
                            // style={{
                            //     width: "1200px ", height: "450px"
                            // }}
                            >
                                <SwiperSlide id="similer-swiper-slider" >
                                    <Card id='similer-main_card'>
                                        <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                        <Card.Body>
                                            <span className='similer-feture_tag'>
                                                Feature
                                            </span>
                                            <span className='similer-like_tag'>
                                                <AiOutlineHeart size={25} />
                                            </span>
                                            <span className='similer-sell_tag'>
                                                Sell
                                            </span>
                                            <span className='similer-price_tag'>
                                                $1,999,000 / USD
                                            </span>

                                            <div>
                                                <div id='feature_card_mainbody'>
                                                    <BiHomeSmile size={23} />
                                                    <span className='feture_body_title'> Home </span>
                                                </div>
                                                <div id='feature_card_middletext'>
                                                    <span>
                                                        Luxury villa in Rego Park
                                                    </span>
                                                    <p>
                                                        California City, CA, USA
                                                    </p>
                                                </div>
                                            </div>
                                        </Card.Body>

                                        <Card.Footer id='feature_card_footer'>
                                            <div className='footer_body'>
                                                <div id='footer_content'>
                                                    <RiHotelBedLine size={22} />
                                                    <p className='text_footer'> 3 Bedrooms </p>
                                                </div>
                                                <div id='footer_content'>
                                                    <RiBuilding3Line size={22} />
                                                    <p className='text_footer'> 1200 Sqft </p>
                                                </div>

                                            </div>
                                            <div className='footer_body'>
                                                <div id='footer_content'>
                                                    <FiCloudDrizzle size={22} />
                                                    <p className='text_footer'> 4 Bathrooms </p>
                                                </div>
                                                <div id='footer_content'>
                                                    <RiParkingBoxLine size={22} />
                                                    <p className='text_footer'> 2 Parking </p>
                                                </div>

                                            </div>
                                        </Card.Footer>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide id="similer-swiper-slider" >
                                    <Card id='similer-main_card'>
                                        <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                        <Card.Body>
                                            <span className='similer-feture_tag'>
                                                Feature
                                            </span>
                                            <span className='similer-like_tag'>
                                                <AiOutlineHeart size={25} />
                                            </span>
                                            <span className='similer-sell_tag'>
                                                Sell
                                            </span>
                                            <span className='similer-price_tag'>
                                                $1,999,000 / USD
                                            </span>

                                            <div>
                                                <div id='feature_card_mainbody'>
                                                    <BiHomeSmile size={23} />
                                                    <span className='feture_body_title'> Home </span>
                                                </div>
                                                <div id='feature_card_middletext'>
                                                    <span>
                                                        Luxury villa in Rego Park
                                                    </span>
                                                    <p>
                                                        California City, CA, USA
                                                    </p>
                                                </div>
                                            </div>
                                        </Card.Body>

                                        <Card.Footer id='feature_card_footer'>
                                            <div className='footer_body'>
                                                <div id='footer_content'>
                                                    <RiHotelBedLine size={22} />
                                                    <p className='text_footer'> 3 Bedrooms </p>
                                                </div>
                                                <div id='footer_content'>
                                                    <RiBuilding3Line size={22} />
                                                    <p className='text_footer'> 1200 Sqft </p>
                                                </div>

                                            </div>
                                            <div className='footer_body'>
                                                <div id='footer_content'>
                                                    <FiCloudDrizzle size={22} />
                                                    <p className='text_footer'> 4 Bathrooms </p>
                                                </div>
                                                <div id='footer_content'>
                                                    <RiParkingBoxLine size={22} />
                                                    <p className='text_footer'> 2 Parking </p>
                                                </div>

                                            </div>
                                        </Card.Footer>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide id="similer-swiper-slider" >
                                    <Card id='similer-main_card'>
                                        <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                        <Card.Body>
                                            <span className='similer-feture_tag'>
                                                Feature
                                            </span>
                                            <span className='similer-like_tag'>
                                                <AiOutlineHeart size={25} />
                                            </span>
                                            <span className='similer-sell_tag'>
                                                Sell
                                            </span>
                                            <span className='similer-price_tag'>
                                                $1,999,000 / USD
                                            </span>

                                            <div>
                                                <div id='feature_card_mainbody'>
                                                    <BiHomeSmile size={23} />
                                                    <span className='feture_body_title'> Home </span>
                                                </div>
                                                <div id='feature_card_middletext'>
                                                    <span>
                                                        Luxury villa in Rego Park
                                                    </span>
                                                    <p>
                                                        California City, CA, USA
                                                    </p>
                                                </div>
                                            </div>
                                        </Card.Body>

                                        <Card.Footer id='feature_card_footer'>
                                            <div className='footer_body'>
                                                <div id='footer_content'>
                                                    <RiHotelBedLine size={22} />
                                                    <p className='text_footer'> 3 Bedrooms </p>
                                                </div>
                                                <div id='footer_content'>
                                                    <RiBuilding3Line size={22} />
                                                    <p className='text_footer'> 1200 Sqft </p>
                                                </div>

                                            </div>
                                            <div className='footer_body'>
                                                <div id='footer_content'>
                                                    <FiCloudDrizzle size={22} />
                                                    <p className='text_footer'> 4 Bathrooms </p>
                                                </div>
                                                <div id='footer_content'>
                                                    <RiParkingBoxLine size={22} />
                                                    <p className='text_footer'> 2 Parking </p>
                                                </div>

                                            </div>
                                        </Card.Footer>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide id="similer-swiper-slider" >
                                    <Card id='similer-main_card'>
                                        <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                        <Card.Body>
                                            <span className='similer-feture_tag'>
                                                Feature
                                            </span>
                                            <span className='similer-like_tag'>
                                                <AiOutlineHeart size={25} />
                                            </span>
                                            <span className='similer-sell_tag'>
                                                Sell
                                            </span>
                                            <span className='similer-price_tag'>
                                                $1,999,000 / USD
                                            </span>

                                            <div>
                                                <div id='feature_card_mainbody'>
                                                    <BiHomeSmile size={23} />
                                                    <span className='feture_body_title'> Home </span>
                                                </div>
                                                <div id='feature_card_middletext'>
                                                    <span>
                                                        Luxury villa in Rego Park
                                                    </span>
                                                    <p>
                                                        California City, CA, USA
                                                    </p>
                                                </div>
                                            </div>
                                        </Card.Body>

                                        <Card.Footer id='feature_card_footer'>
                                            <div className='footer_body'>
                                                <div id='footer_content'>
                                                    <RiHotelBedLine size={22} />
                                                    <p className='text_footer'> 3 Bedrooms </p>
                                                </div>
                                                <div id='footer_content'>
                                                    <RiBuilding3Line size={22} />
                                                    <p className='text_footer'> 1200 Sqft </p>
                                                </div>

                                            </div>
                                            <div className='footer_body'>
                                                <div id='footer_content'>
                                                    <FiCloudDrizzle size={22} />
                                                    <p className='text_footer'> 4 Bathrooms </p>
                                                </div>
                                                <div id='footer_content'>
                                                    <RiParkingBoxLine size={22} />
                                                    <p className='text_footer'> 2 Parking </p>
                                                </div>

                                            </div>
                                        </Card.Footer>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide id="similer-swiper-slider" >
                                    <Card id='similer-main_card'>
                                        <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                        <Card.Body>
                                            <span className='similer-feture_tag'>
                                                Feature
                                            </span>
                                            <span className='similer-like_tag'>
                                                <AiOutlineHeart size={25} />
                                            </span>
                                            <span className='similer-sell_tag'>
                                                Sell
                                            </span>
                                            <span className='similer-price_tag'>
                                                $1,999,000 / USD
                                            </span>

                                            <div>
                                                <div id='feature_card_mainbody'>
                                                    <BiHomeSmile size={23} />
                                                    <span className='feture_body_title'> Home </span>
                                                </div>
                                                <div id='feature_card_middletext'>
                                                    <span>
                                                        Luxury villa in Rego Park
                                                    </span>
                                                    <p>
                                                        California City, CA, USA
                                                    </p>
                                                </div>
                                            </div>
                                        </Card.Body>

                                        <Card.Footer id='feature_card_footer'>
                                            <div className='footer_body'>
                                                <div id='footer_content'>
                                                    <RiHotelBedLine size={22} />
                                                    <p className='text_footer'> 3 Bedrooms </p>
                                                </div>
                                                <div id='footer_content'>
                                                    <RiBuilding3Line size={22} />
                                                    <p className='text_footer'> 1200 Sqft </p>
                                                </div>

                                            </div>
                                            <div className='footer_body'>
                                                <div id='footer_content'>
                                                    <FiCloudDrizzle size={22} />
                                                    <p className='text_footer'> 4 Bathrooms </p>
                                                </div>
                                                <div id='footer_content'>
                                                    <RiParkingBoxLine size={22} />
                                                    <p className='text_footer'> 2 Parking </p>
                                                </div>

                                            </div>
                                        </Card.Footer>
                                    </Card>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </section>
                </div>
            </div>
        </div >
        </>
    )
}

export default PropertieDeatils
