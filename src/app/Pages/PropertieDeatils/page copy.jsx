"use client"
import React, { useState } from 'react'
import ViewPageImg from "@/assets/Images/Breadcrumbs_BG.jpg"
import { ButtonGroup } from 'react-bootstrap'
// import ThreeSixty from 'react-360-view'
import { Pannellum } from 'pannellum-react'
import realistic_big_house from "@/assets/Images/realistic_big_house.jpg"
import realistic_villa01 from "@/assets/Images/realistic_villa01.jpg"
import realistic_villa from "@/assets/Images/realistic_villa.jpg"

import { RiSendPlane2Line, RiGridFill, RiHotelBedLine, RiParkingBoxLine, RiBuilding3Line, RiPlantLine } from 'react-icons/ri'
import { AiOutlinePlayCircle, AiOutlineHeart, AiOutlineArrowRight, AiOutlineWifi } from 'react-icons/ai'
import { Card } from 'react-bootstrap'
import { GiGamepad } from 'react-icons/gi'
import { MdSecurity, MdKitchen, MdBalcony } from 'react-icons/md'
import { TbAirConditioning } from "react-icons/tb"
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

import Image from 'next/image'
import { Fascinate } from 'next/font/google'
const PropertieDeatils = () => {


    const [currentScene, setCurrentScene] = useState(realistic_villa)



    return (
        <div className='all-properties'>

            <div id='breadcrumb02'
                style={{
                    backgroundImage: `url(${ViewPageImg.src})`,
                }}>
                <div
                    id='breadcrumb-content'
                >
                    <div className='left-side-content'>
                        <span className='prop-types'>House</span>
                        <span className='prop-name'>Serene Haven Retreat</span>
                        <span className='prop-Location'><CiLocationOn size={25} /> 778 Country St. Panama City, FL</span>
                        <div className='prop-sell-time'>
                            <span className='propertie-sell-tag'>Sell</span>
                            <span> <BiTime size={20} /> 6 Months ago</span>
                        </div>

                    </div>
                    <div className='right-side-content'>
                        <span> $1,999,000 </span>
                        <div>
                            <button><AiOutlineHeart size={25} /></button>
                            <button><SlDocs size={25} /></button>
                        </div>
                    </div>
                </div>
            </div>

            <div id='all-prop-deatil-containt'>
                <div id='all-content-deatil'>
                    <div className='row' id='prop-images'>
                        <div className='col-3 ' id='prop-left-images'>
                            <Image src={PropImg01} className='left-imgs01' />
                            <Image src={PropImg02} className='left-imgs02' />
                        </div>
                        <div className=' col-6' id='prop-main-image'>
                            <Image src={PropImg03} className='middle-img' />
                            <div className="img-overlay">
                                <button> See all Photos</button>
                            </div>
                        </div>
                        <div className='col-3' id='prop-right-images'>
                            <Image src={PropImg04} className='right-imgs01' />
                            <Image src={PropImg05} className='right-imgs02' />
                        </div>
                    </div>
                    <div className='row' id='prop-all-deatils-cards'>
                        <div className='col-9' id='prop-deatls-card'>
                            <div className="card about-propertie">
                                <div className="card-header">
                                    About Propertie
                                </div>
                                <div class="card-body">
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
                                <div class="card-body">
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
                                                    <span>Swimming Pool</span>
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
                                            width: "100%", height: "300px", style: "border:0", allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade",
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
                                    <div className='video-background container' style={{
                                        backgroundImage: `url("https://img.youtube.com/vi/y9j-BL5ocW8/maxresdefault.jpg")`,
                                    }}>
                                        <div id='video-play-button'>
                                            <Link href="https://youtu.be/y9j-BL5ocW8" target='_blank'>
                                                <AiOutlinePlayCircle size={80} backgroundColor='#FFFFFF14' />
                                            </Link>
                                        </div>
                                    </div>
                                    {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/LzCsPag3atw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                                </div>
                            </div>
                            <div className='card' id='prop-360-view'>
                                <div className="card-header">
                                    360° Virtual Tour
                                </div>
                                <div className='card-body'>
                                    <div id='virtual-view'>
                                        <Pannellum
                                            width="100%"
                                            height="100%"
                                            image={currentScene}
                                            yaw={300}
                                            hfov={110}
                                            autoLoad
                                            autoRoate={-5}
                                            compass={true}
                                            showZoomCtrl={false}
                                            mouseZoom={false}

                                        >
                                            <Pannellum.HotSpot
                                                type="custom"
                                                pitch={-10}
                                                yaw={-120}
                                                handleClick={(evt, name) =>
                                                    setCurrentScene(currentScene !== realistic_villa ? realistic_villa : realistic_villa01)
                                                }
                                            />
                                        </Pannellum>


                                        {/* <a-scene>
                                            <Image id='panorama' src={PropImg01} />
                                            <a-sky src="#panorama" rotation="0-90 0"></a-sky>
                                        </a-scene> */}
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <span>test</span>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default PropertieDeatils
