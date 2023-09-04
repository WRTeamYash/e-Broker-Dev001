"use client"
import React from 'react'
import eBroker from '@/assets/eBrokerLogo.svg';
import { FiMail, FiPhone } from "react-icons/fi"
import { AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai"
import { CiFacebook } from "react-icons/ci"
import { ImPinterest2 } from "react-icons/im"
import playstore from "../../assets/playStore.png"
import appstore from "../../assets/appStore.png"
import Link from 'next/link';




const Footer = () => {
    return (
        <section id='footer'>
            <div className='container'>
                <div className='row' id='footer_deatils'>
                    <div className='col-12 col-md-6 col-lg-3' >
                        <div id='footer_logo_section'>
                            <div>
                                <img src={eBroker.src} alt="eBroker_logo" />
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
                    </div>
                    <div className='col-12 col-md-6 col-lg-3' >
                        <div id='footer_prop_section'>
                            <div id='footer_headlines'>
                                <span>Properties</span>
                            </div>
                            <div className='prop_links'>
                                <Link href="/properties/all-properties">
                                    All Properties
                                </Link>
                            </div>
                            <div className='prop_links'>
                                <Link href="/featured-properties">
                                    Featured Properties
                                </Link>
                            </div>

                            <div className='prop_links'>
                                <Link href="/most-viewed-properties">
                                    Most Viewed Properties
                                </Link>
                            </div>

                            <div className='prop_links'>
                                <Link href="/properties-nearby-city">
                                    Nearby Cities Properties
                                </Link>
                            </div>

                            <div className='prop_links'>
                                <Link href="/mostfav-properties">
                                    Most Favorites Properties
                                </Link>
                            </div>

                            <div className='prop_links'>
                                <Link href="/listby-agents">
                                    List by Agents Properties
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-3' >
                        <div id='footer_page_section'>
                            <div id='footer_headlines'>
                                <span> Pages</span>
                            </div>
                            <div className='page_links'>
                                <Link href="/subscription-plan">
                                    Subscription Plan
                                </Link>
                            </div>
                            <div className='page_links'>
                                <Link href="/articles">
                                    Articles
                                </Link>
                            </div>
                            <div className='page_links'>
                                <Link href="/terms&condition">
                                    Terms & Condition
                                </Link>
                            </div>

                            <div className='page_links'>
                                <Link href="/privacy-policy">
                                    Privacy Policy
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-3'>
                        <div id='footer_download_section'>
                            <div id='footer_headlines'>
                                <span>Download Apps</span>
                            </div>
                            <div className='download_app_desc'>
                                <span>Get the latest resources for downloading, installing, and updating eBroker app. Select your device platform and Use Our app.</span>
                            </div>

                            <div className='download_app_platforms'>
                                <div id='playstore_logo'>
                                    <img src={playstore.src} alt="" />
                                </div>

                                <div id='appstore_logo'>
                                    <img src={appstore.src} alt="" />
                                </div>
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
