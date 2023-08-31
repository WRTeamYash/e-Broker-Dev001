"use client"
import React, { useEffect, useState } from 'react'
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb'
import Skeleton from 'react-loading-skeleton'
import { GetCountByCitysCategorisApi } from '@/store/actions/campaign'
import Link from 'next/link'

const PropertiesNearbyCity = () => {

    const [isLoading, setIsLoading] = useState(true)


    // GET_COUNT_BY_CITIES_CATEGORIS
    const [getNearByCitysData, setGetNearByCitysData] = useState()
    useEffect(() => {
        GetCountByCitysCategorisApi((response) => {
            setIsLoading(true)
            const cityData = response.city_data
            // console.log(cityData)
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
                <div className="container">
                    <div className="all-city-images row">
                        {isLoading ? (
                            Array.from({ length: getNearByCitysData ? getNearByCitysData.length : 12 }).map((_, index) => (
                                <div className='col-sm-12 col-md-6 col-lg-3 loading_data' key={index}>
                                    <Skeleton width="100%" height="350px" />
                                </div>
                            ))

                        ) :
                            getNearByCitysData?.map((ele) => (

                                <div className='col-12 col-md-6 col-lg-3' key={ele.id}>
                                    <Link href={`/properties/city/${ele.City}`}>
                                        <div className="card bg-dark text-white mb-3" id='nearby-city-img'>
                                            <img src={ele.image} className="card-img" alt="..." id='city-img' />
                                            <div className="card-img-overlay">
                                                <div id='city_img_headlines'>
                                                    <h4 className="card-title">{ele.City}</h4>
                                                    <p className="card-text">{ele.Count} Properties</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>

                                </div>
                            ))

                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default PropertiesNearbyCity
