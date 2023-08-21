"use client"
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb'
import React, { useEffect, useState } from 'react'
import cardImg from '@/assets/Images/Featured_List_1.jpg'
import { RiBuilding3Line, RiHotelBedLine, RiParkingBoxLine } from 'react-icons/ri'
import { FiCloudDrizzle } from 'react-icons/fi'
import { AiOutlineHeart } from 'react-icons/ai'
import { BiHomeSmile } from 'react-icons/bi'
import Loader from '@/Components/Loader/Loader'
import Link from 'next/link'
import Image from 'next/image'
import { GetFeturedListingsApi } from '@/store/actions/campaign'
import VerticalCard from '@/Components/Cards/VerticleCard'


const index = () => {
    const [isLoading, setIsLoading] = useState(false)


    // GET MOST Fav PROPERTIES

    const [getMostFavProperties, setGetMostFavProperties] = useState()
    useEffect(() => {
        GetFeturedListingsApi("", "", "", "", "1", (response) => {
            const MostFav = response.data;
            // console.log("most fav data ============", MostFav)
            setIsLoading(false)
            setGetMostFavProperties(MostFav);
        }, (error) => {
            console.log(error)
        })
    }, [])

    return (
        <>
            <Breadcrumb title="Most Favorites Properties" />
            <section id='most_fav_prop_section'>
                <div className='container'>
                    <div id='feature_cards' className='row'>
                        {isLoading ? (
                            // Show skeleton loading when data is being fetched
                            <div className="col-12 loading_data">
                                <Skeleton height={20} count={22} />
                            </div>
                            // <Loader />
                        ) :
                            getMostFavProperties?.map((ele) => (
                                <div className='col-sm-12 col-md-6 col-lg-3' key={index}>
                                    <Link href="/properties-deatils/[slug]" as={`/properties-deatils/${ele.id}`} passHref>
                                        <VerticalCard ele={ele} />
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