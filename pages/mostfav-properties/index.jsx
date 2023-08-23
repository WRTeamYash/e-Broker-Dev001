"use client"
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GetFeturedListingsApi } from '@/store/actions/campaign'
import VerticalCard from '@/Components/Cards/VerticleCard'
import VerticalCardSkeleton from '@/Components/Skeleton/VerticalCardSkeleton'


const index = () => {
    const [isLoading, setIsLoading] = useState(false)


    // GET MOST Fav PROPERTIES

    const [getMostFavProperties, setGetMostFavProperties] = useState()
    useEffect(() => {
        setIsLoading(true)
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

                            Array.from({ length: getMostFavProperties ? getMostFavProperties.length : 12 }).map((_, index) => (
                                <div className='col-sm-12 col-md-6 col-lg-3 loading_data' key={index}>
                                    <VerticalCardSkeleton />
                                </div>
                            ))

                        ) :
                        getMostFavProperties?.map((ele, index) => (
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