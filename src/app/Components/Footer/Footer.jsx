import React from 'react'
// import "./FooterSectionSec.css"
import eBroker from '@/assets/eBrokerLogo.svg';

import { FiMail, FiPhone } from "react-icons/fi"
import { AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai"
import { CiFacebook } from "react-icons/ci"
import { ImPinterest2 } from "react-icons/im"
import playstore from "@/assets/ic_play_store.svg"
import appstore from "@/assets/ic_app_store.svg"
import Image from 'next/image';




const Footer = () => {
    return (
        <section id='footer'>
            <div id='main_footer'>
                <div className='row' id='footer_deatils'>
                    <div className='col-12 col-md-6 col-lg-3' id='footer_logo_section'>
                        <div>
                            <img src={eBroker.src} width={150}  height={60} alt="eBroker_logo" />
                        </div>
                        <div>
                            <FiMail size={25} /> <span className='footer_span'>Email</span> <br />
                            <span className='footer_span_value'>adminn@ebroker.in</span>
                        </div>
                        <div>
                            <FiPhone size={25} /> <span className='footer_span'>Contact one</span> <br />
                            <span className='footer_span_value'>7874664341</span>
                        </div>
                        <div>
                            <FiPhone size={25} /> <span className='footer_span'>Contact Two</span> <br />
                            <span className='footer_span_value'>1234567890</span>
                        </div>
                        <div>
                            <h4> Follow Us</h4>
                            <div id='follow_us'>
                                <CiFacebook size={28} />
                                <AiOutlineInstagram size={28} />
                                <ImPinterest2 size={25} />
                                <AiOutlineLinkedin size={28} />

                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-3' id='footer_prop_section'>
                        <div id='footer_headlines'>
                            <span> Properties</span>
                        </div>
                        <div className='prop_links'>
                            <span>
                                All Properties
                            </span>
                        </div>
                        <div className='prop_links'>
                            <span>
                                Featured Properties
                            </span>
                        </div>

                        <div className='prop_links'>
                            <span>
                                Most Viewed Properties
                            </span>
                        </div>

                        <div className='prop_links'>
                            <span>
                                Nearby Cities Properties
                            </span>
                        </div>

                        <div className='prop_links'>
                            <span>
                                Most Favorites Properties
                            </span>
                        </div>

                        <div className='prop_links'>
                            <span>
                                List by Agents Properties
                            </span>
                        </div>

                    </div>
                    <div className='col-12 col-md-6 col-lg-3' id='footer_page_section'>
                        <div id='footer_headlines'>
                            <span> Pages</span>
                        </div>
                        <div className='page_links'>
                            <span>
                                Subscription Plan
                            </span>
                        </div>
                        <div className='page_links'>
                            <span>
                                Articles
                            </span>
                        </div>

                        <div className='page_links'>
                            <span>
                                Area Converter
                            </span>
                        </div>

                        <div className='page_links'>
                            <span>
                                Terms & Condition
                            </span>
                        </div>

                        <div className='page_links'>
                            <span>
                                Privacy Policy
                            </span>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-3' id='footer_download_section'>
                        <div id='footer_headlines'>
                            <span> Download Apps</span>
                        </div>
                        <div className='download_app_desc'>
                            <span>Get the latest resources for downloading, installing, and updating eBroker app. Select your device platform and Use Our app.</span>
                        </div>

                        <div className='download_app_platforms'>
                            <div id='playstore_logo'>
                                <img src={playstore.src} alt="" />
                            </div>
                            <div className='playstore_desc'>
                                <span id='span_headline'>GET IT ON</span>
                                <span className='span_title'>Google play</span>
                            </div>
                        </div>
                        <div className='download_app_platforms'>
                            <div id='appstore_logo'>
                                <img src={appstore.src} alt="" />
                            </div>
                            <div className='appstore_desc'>
                                <span id='span_headline'>Download on the</span>
                                <span className='span_title'>App Store</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='rights_footer'>
                <hr />
                <h6>Copyright @ 2023 eBroker. All Rights Reserved</h6>
            </div>
        </section>
    )
}

export default Footer
