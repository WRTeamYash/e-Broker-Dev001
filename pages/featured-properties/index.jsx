'use client'
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb'
import React, { useEffect, useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { GetFeturedListingsApi } from '@/store/actions/campaign'
import Image from 'next/image'
import Link from 'next/link'
import Skeleton from 'react-loading-skeleton'
import VerticalCard from '@/Components/Cards/VerticleCard'


const index = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [getFeaturedListing, setGetFeaturedListing] = useState()
    useEffect(() => {
        GetFeturedListingsApi("1", "", "","", "",(response) => {
            const FeaturedListingData = response.data;
            // console.log("featured data ============", FeaturedListingData)
            setIsLoading(false)
            setGetFeaturedListing(FeaturedListingData);
        }, (error) => {
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
                            // Show skeleton loading when data is being fetched
                            <div className="col-12 loading_data">
                                <Skeleton height={20} count={20} />
                            </div>
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