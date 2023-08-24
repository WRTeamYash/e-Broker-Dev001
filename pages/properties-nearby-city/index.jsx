"use client"
import React, { useEffect, useState } from 'react'
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb'
import cityImage01 from "@/assets/Images/City_1.jpg"
import cityImage02 from "@/assets/Images/City_2.jpg"
import cityImage03 from "@/assets/Images/City_3.jpg"
import cityImage04 from "@/assets/Images/City_4.jpg"
import cityImage05 from "@/assets/Images/City_5.jpg"
import cityImage06 from "@/assets/Images/City_6.jpg"
import cityImage07 from "@/assets/Images/City_2.jpg"
import cityImage08 from "@/assets/Images/City_4.jpg"
import Skeleton from 'react-loading-skeleton'
import Loader from '@/Components/Loader/Loader'
import { GetCountByCitysCategorisApi } from '@/store/actions/campaign'

const PropertiesNearbyCity = () => {

    const [isLoading, setIsLoading] = useState(false)
    let staticData = [
        {
            id: 1,
            image: cityImage01.src,
            title: "San Francisco",
            decs: "13 properties"
        },
        {
            id: 2,
            image: cityImage02.src,
            title: "San Francisco",
            decs: "14 properties"
        },
        {
            id: 3,
            image: cityImage03.src,
            title: "San Francisco",
            decs: "15 properties"
        },
        {
            id: 4,
            image: cityImage04.src,
            title: "San Francisco",
            decs: "16 properties"
        },
        {
            id: 5,
            image: cityImage05.src,
            title: "San Francisco",
            decs: "17 properties"
        },
        {
            id: 6,
            image: cityImage06.src,
            title: "San Francisco",
            decs: "18 properties"
        },
        {
            id: 7,
            image: cityImage07.src,
            title: "San Francisco",
            decs: "19 properties"
        },
        {
            id: 8,
            image: cityImage08.src,
            title: "San Francisco",
            decs: "20 properties"
        },
    ]

     // GET_COUNT_BY_CITIES_CATEGORIS
     const [getNearByCitysData, setGetNearByCitysData] = useState()
     useEffect(() => {
         GetCountByCitysCategorisApi((response) => {
 
             const cityData = response.city_data
             console.log(cityData)
             setIsLoading(false)
             setGetNearByCitysData(cityData);
         },
             (error) => {
                 console.log(error)
             })
     }, [])
    return (
        <>
            <Breadcrumb title='Properties Nearby Cities' />
            <section id='all-nearby-citys'>
                <div className="all-city-images row">
                    {isLoading ? (
                        // Show skeleton loading when data is being fetched
                        // <div className="col-12 loading_data">
                        //     <Skeleton height={20} count={22} />
                        // </div>
                        <Loader />
                    ) :
                    getNearByCitysData?.map((ele) => (

                            <div className='col-12 col-md-6 col-lg-3' key={ele.id}>
                                <div className="card bg-dark text-white mb-3" id='nearby-city-img'>
                                    <img src={ele.image} className="card-img" alt="..." id='city-img' />
                                    <div className="card-img-overlay">
                                        <div id='city_img_headlines'>
                                            <h4 className="card-title">{ele.City}</h4>
                                            <p className="card-text">{ele.Count} Properties</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    
                }
                </div>
            </section>
        </>
    )
}

export default PropertiesNearbyCity
