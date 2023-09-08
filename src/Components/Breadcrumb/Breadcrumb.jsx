'use client'
import React, { useEffect } from 'react'
import ViewPageImg from "@/assets/Images/Breadcrumbs_BG.jpg"

import { CiLocationOn } from 'react-icons/ci'
import { RiSendPlane2Line, RiGridFill, RiHotelBedLine, RiParkingBoxLine, RiBuilding3Line, RiPlantLine, RiThumbUpFill } from 'react-icons/ri'
import { AiOutlinePlayCircle, AiOutlineHeart, AiOutlineArrowRight, AiOutlineWifi, AiFillPlayCircle } from 'react-icons/ai'
import { SlDocs } from 'react-icons/sl'

import { BiHomeSmile, BiCctv, BiTime } from 'react-icons/bi'
import { useSelector } from 'react-redux'
import { settingsData } from '@/store/reducer/settingsSlice'
import { languageData } from '@/store/reducer/languageSlice'
import { translate } from '@/utils'



const Breadcrumb = (props) => {

    let { data, title } = props;
    const priceSymbol = useSelector(settingsData)
    const CurrencySymbol = priceSymbol && priceSymbol.currency_symbol




 

    return (
        <div id='breadcrumb'
            style={{
                backgroundImage: `url(${ViewPageImg.src})`,
            }}>
            {!props.data ?
                <div className='container'
                    id='breadcrumb-headline'
                >

                    <h2>{props.title}</h2>
                </div>
                : <>
                    <div id='breadcrumb-content' className='container'>

                        <div className='left-side-content'>
                            <span className='prop-types'>{data.type}</span>
                            <span className='prop-name'>{data.title}</span>
                            <span className='prop-Location'><CiLocationOn size={25} /> {data.loc}</span>
                            <div className='prop-sell-time'>
                                <span className='propertie-sell-tag'>{data.propertyType}</span>
                                <span> <BiTime size={20} /> {data.time}</span>
                            </div>

                        </div>
                        <div className='right-side-content'>
                            <span> {CurrencySymbol} {data.price} </span>
                            <div>
                                <button><AiOutlineHeart size={25} /></button>
                                <button><SlDocs size={25} /></button>
                            </div>
                        </div>
                    </div>
                </>}
        </div>
    )
}

export default Breadcrumb
