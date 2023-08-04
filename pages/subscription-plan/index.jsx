'use client'
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { BiSolidCheckCircle } from 'react-icons/bi';

const page = () => {
    const renderBullet = (index, className) => {
        return `<span class="${className}" style="background-color: #087c7c;
    outline: 1px solid #000;
    font-size: 20px;
    padding: 8px;
    border: 2px solid #fff;"></span>`;
    };
    const [isLoading, setIsLoading] = useState(false)
    const breakpoints = {
        320: {
            slidesPerView: 1,
        },
        375: {
            slidesPerView: 1.5,
        },
        576: {
            slidesPerView: 1.5,

        },
        768: {
            slidesPerView: 2,

        },
        992: {
            slidesPerView: 2,

        },
        1200: {
            slidesPerView: 3
        },
        1400: {
            slidesPerView: 4
        }
    };
    return (
        <>
            <Breadcrumb title="Subscription plan" />

            <section id='subscription'>
                <div className='container'>
                    <span className='headline' data-aos="fade-right" data-aos-duration="1000">
                        Choose a <span >
                            <span className='highlight' data-aos="fade-left" data-aos-duration="5000"> Plan</span>
                        </span> that's right for you
                    </span>

                    <div className="subsCards-Wrapper">

                        <div className="subsCards">
                            <Swiper
                                slidesPerView={4}
                                // loop={true}
                                spaceBetween={30}
                                freeMode={true}
                                pagination={{
                                    clickable: true,
                                    renderBullet: renderBullet
                                }}
                                modules={[FreeMode, Pagination]}
                                className='subscription-swiper'
                                breakpoints={breakpoints}
                                style={{
                                    // width: "auto"
                                }}


                            >
                                <SwiperSlide>
                                    <div className="card text-white" id='current_pakage_card'
                                    >
                                        <div id='pakage_headlines'>
                                            <span className="card_title">Current Package</span>
                                            <h1 className="card_text">$7000</h1>
                                        </div>

                                        <div className="subs_content">
                                            <div className="limits">

                                                <span className='limits_content'>
                                                    <span><BiSolidCheckCircle size={20} /> </span>
                                                    <span> Advertisement limit is : Unlimited </span>
                                                </span>
                                                <span className='limits_content'>
                                                    <span><BiSolidCheckCircle size={20} /> </span>
                                                    <span> Property limit is : Unlimited</span>
                                                </span>
                                                <span className='limits_content'>
                                                    <span><BiSolidCheckCircle size={20} /> </span>
                                                    <span> Started on May 27, 2023 & will end on Jun 26, 2024</span>
                                                </span>

                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card text-white" id='other_pakage_card'
                                    >
                                        <div id='pakage_headlines'>
                                            <span className="other_card_title">Current Package</span>
                                            <h1 className="card_text">$6.7</h1>
                                        </div>

                                        <div className="subs_other_content">
                                            <div className="limits">

                                                <span className='limits_content'>
                                                    <span><BiSolidCheckCircle size={20} /> </span>
                                                    <span> Advertisement limit is : Unlimited </span>
                                                </span>
                                                <span className='limits_content'>
                                                    <span><BiSolidCheckCircle size={20} /> </span>
                                                    <span> Property limit is : Unlimited</span>
                                                </span>
                                                <span className='limits_content'>
                                                    <span><BiSolidCheckCircle size={20} /> </span>
                                                    <span> Started on May 27, 2023 & will end on Jun 26, 2024</span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                        <div className='subscribe_button'>
                                                <button>
                                                Subscribe
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card text-white" id='other_pakage_card'
                                    >
                                        <div id='pakage_headlines'>
                                            <span className="other_card_title">Current Package</span>
                                            <h1 className="card_text">$6.7</h1>
                                        </div>

                                        <div className="subs_other_content">
                                            <div className="limits">

                                                <span className='limits_content'>
                                                    <span><BiSolidCheckCircle size={20} /> </span>
                                                    <span> Advertisement limit is : Unlimited </span>
                                                </span>
                                                <span className='limits_content'>
                                                    <span><BiSolidCheckCircle size={20} /> </span>
                                                    <span> Property limit is : Unlimited</span>
                                                </span>
                                                <span className='limits_content'>
                                                    <span><BiSolidCheckCircle size={20} /> </span>
                                                    <span> Started on May 27, 2023 & will end on Jun 26, 2024</span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                        <div className='subscribe_button'>
                                                <button>
                                                Subscribe
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card text-white" id='other_pakage_card'
                                    >
                                        <div id='pakage_headlines'>
                                            <span className="other_card_title">Current Package</span>
                                            <h1 className="card_text">$6.7</h1>
                                        </div>

                                        <div className="subs_other_content">
                                            <div className="limits">

                                                <span className='limits_content'>
                                                    <span><BiSolidCheckCircle size={20} /> </span>
                                                    <span> Advertisement limit is : Unlimited </span>
                                                </span>
                                                <span className='limits_content'>
                                                    <span><BiSolidCheckCircle size={20} /> </span>
                                                    <span> Property limit is : Unlimited</span>
                                                </span>
                                                <span className='limits_content'>
                                                    <span><BiSolidCheckCircle size={20} /> </span>
                                                    <span> Started on May 27, 2023 & will end on Jun 26, 2024</span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                        <div className='subscribe_button'>
                                                <button>
                                                Subscribe
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card text-white" id='other_pakage_card'
                                    >
                                        <div id='pakage_headlines'>
                                            <span className="other_card_title">Current Package</span>
                                            <h1 className="card_text">$6.7</h1>
                                        </div>

                                        <div className="subs_other_content">
                                            <div className="limits">

                                                <span className='limits_content'>
                                                    <span><BiSolidCheckCircle size={20} /> </span>
                                                    <span> Advertisement limit is : Unlimited </span>
                                                </span>
                                                <span className='limits_content'>
                                                    <span><BiSolidCheckCircle size={20} /> </span>
                                                    <span> Property limit is : Unlimited</span>
                                                </span>
                                                <span className='limits_content'>
                                                    <span><BiSolidCheckCircle size={20} /> </span>
                                                    <span> Started on May 27, 2023 & will end on Jun 26, 2024</span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                        <div className='subscribe_button'>
                                                <button>
                                                Subscribe
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                
                            </Swiper>



                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default page
