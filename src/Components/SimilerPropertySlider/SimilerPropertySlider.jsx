import React, { use, useEffect } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination'
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import Loader from '../Loader/Loader';
import VerticalCard from '../Cards/VerticleCard';
import axios from 'axios';
import { useRouter } from 'next/router';
import VerticalCardSkeleton from '../Skeleton/VerticalCardSkeleton';
import Link from 'next/link';



const SimilerPropertySlider = (props) => {

    const renderBullet = (index, className) => {
        return `<span class="${className}" style="background-color: #087c7c;
    outline: 1px solid #000;
    font-size: 20px;
    padding: 8px;
    border: 2px solid #fff;"></span>`;
    };


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
        <div div id='similer-properties'>
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
                    // loop={true}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                        renderBullet: renderBullet
                    }}
                    modules={[FreeMode, Pagination]}
                    className='similer-swiper'
                    breakpoints={breakpoints}
                    style={{
                        // width: "auto"
                    }}


                >
                    {props.isLoading ? (

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
                            className='most-view-swiper'
                            breakpoints={breakpoints}
                            style={{
                                // width: "auto"
                            }}


                        >
                            {Array.from({ length: 6 }).map((_, index) => (
                                <SwiperSlide>
                                    <div className="loading_data">
                                        <VerticalCardSkeleton />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                    ) :
                        props.data?.map((ele) => (
                            <SwiperSlide id="similer-swiper-slider" key={ele.id}>
                                <Link href="/properties-deatils/[slug]" as={`/properties-deatils/${ele.id}`} passHref>
                                    <VerticalCard ele={ele} />
                                </Link>
                            </SwiperSlide>
                        ))}
                        
                </Swiper>
            </div>
        </div>
    )
}


export default SimilerPropertySlider
