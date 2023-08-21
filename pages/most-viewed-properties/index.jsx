"use client"
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb'
import React, { useEffect, useState } from 'react'
import cardImg from '@/assets/Images/Featured_List_1.jpg'
import { RiBuilding3Line, RiHotelBedLine, RiParkingBoxLine } from 'react-icons/ri'
import { FiCloudDrizzle } from 'react-icons/fi'
import { AiOutlineHeart } from 'react-icons/ai'
import { BiHomeSmile } from 'react-icons/bi'
import Loader from '@/Components/Loader/Loader'
import Skeleton from 'react-loading-skeleton'
import { GetFeturedListingsApi } from '@/store/actions/campaign'
import Link from 'next/link'
import Image from 'next/image'
import VerticalCard from '@/Components/Cards/VerticleCard'


const index = () => {
    const [isLoading, setIsLoading] = useState(true)
    // GET MOST VIEWED PROPERTIES
    
    const [getFeaturedListing, setGetFeaturedListing] = useState()
    useEffect(() => {
        GetFeturedListingsApi("", "1", "", "", "", (response) => {
            const MostViewed = response.data;
            // console.log("most viewed data ============", MostViewed)
            setIsLoading(false)
            setGetFeaturedListing(MostViewed);
        }, (error) => {
            console.log(error)
        })
    }, [])


    return (
        <>
            <Breadcrumb title="Most Viewed Properties" />
            <section id='most_viewed_prop_section'>
                <div className='container'>
                    <div id='feature_cards' className='row'>
                        {isLoading ? (
                            // Show skeleton loading when data is being fetched
                            <div className="col-12 loading_data">
                                <Skeleton height={20} count={20} />
                            </div>
                            // <Loader />
                        ) :
                            getFeaturedListing?.map((ele, index) => (
                                <div className='col-sm-12 col-md-6 col-lg-3' key={index}>
                                    <Link href="/properties-deatils/[slug]" as={`/properties-deatils/${ele.id}`} passHref>
                                      <VerticalCard ele={ele}/>
                                    </Link>
                                </div>
                            ))}

                    </div>
                </div>
            </section>
        </>
    )
}

export default index