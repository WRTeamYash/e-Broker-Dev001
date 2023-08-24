'use client'
import Link from 'next/link';
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { IoIosArrowForward } from 'react-icons/io';

const MobileHeadline = (props) => {
    const { data } = props;

    return (
        <>
            <div className="container">
                <div id='mobile-headlines'>
                    <div className='main-headline'>
                        <span className='headline' data-aos="fade-right" data-aos-duration="1000">
                            {data.start} <span
                            // className="hovertext1" 
                            >
                                <span
                                    // className="text" data-text="Featured"
                                    className='highlight'
                                    data-aos="fade-left" data-aos-duration="5000"
                                > {data.center}</span>
                            </span> {data.end}
                        </span>
                    </div>
                    <div>
                        <Link href={data.link}>
                            <button className="mobileViewArrow" >
                                <IoIosArrowForward  size={25}/>
                            </button>


                        </Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export default MobileHeadline