"use client"
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb'
import React, { useEffect, useState } from 'react'
import { GetFeturedListingsApi } from '@/store/actions/campaign'
import Link from 'next/link'
import VerticalCard from '@/Components/Cards/VerticleCard'
import VerticalCardSkeleton from '@/Components/Skeleton/VerticalCardSkeleton'


const index = () => {
    const [isLoading, setIsLoading] = useState(false)
    // GET MOST VIEWED PROPERTIES

    const [getFeaturedListing, setGetFeaturedListing] = useState()
    useEffect(() => {
        setIsLoading(true)
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