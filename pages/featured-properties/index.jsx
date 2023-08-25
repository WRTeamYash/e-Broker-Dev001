'use client'
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb'
import React, { useEffect, useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { GetFeturedListingsApi } from '@/store/actions/campaign'
import Image from 'next/image'
import Link from 'next/link'
import VerticalCard from '@/Components/Cards/VerticleCard'
import VerticalCardSkeleton from '@/Components/Skeleton/VerticalCardSkeleton'


const index = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [getFeaturedListing, setGetFeaturedListing] = useState()
    useEffect(() => {
        setIsLoading(true)
        GetFeturedListingsApi("1", "", "", "", "", "","", (response) => {
            const FeaturedListingData = response.data;
            // console.log("featured data ============", FeaturedListingData)
            setIsLoading(false)
            setGetFeaturedListing(FeaturedListingData);
        }, (error) => {
            setIsLoading(false)
            console.log(error)
        })
    }, [])

    return (
        <>
            <Breadcrumb title="Featured All Properties" />
            <section id='featured_prop_section'>
                <div className='container'>
                    <div id='feature_cards' className='row'>
                        {isLoading ? (

                            Array.from({ length: getFeaturedListing ? getFeaturedListing.length : 12 }).map((_, index) => (
                                <div className='col-sm-12 col-md-6 col-lg-3 loading_data' key={index}>
                                    <VerticalCardSkeleton />
                                </div>
                            ))

                        ) :

                            getFeaturedListing?.map((ele, index) => (

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