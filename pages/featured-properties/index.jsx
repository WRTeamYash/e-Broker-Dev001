'use client'
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb'
import React, { useEffect, useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { GetFeturedListingsApi } from '@/store/actions/campaign'
import Image from 'next/image'
import Link from 'next/link'
import Skeleton from 'react-loading-skeleton'


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
                                        <div className='card' id='main_card'>
                                            <img className='card-img' id='card_img' src={ele.title_image} />
                                            <div className="card-img-overlay">

                                                {ele.promoted ? (
                                                    <span className='feture_tag'>
                                                        Feature
                                                    </span>
                                                ) : null}
                                                <span className='like_tag'>
                                                    <AiOutlineHeart size={25} />
                                                </span>


                                            </div>



                                            <div className='card-body'>
                                                <span className='sell_teg'>
                                                    {ele.propery_type}
                                                </span>
                                                <span className='price_teg'>
                                                    $ {ele.price}
                                                </span>
                                                <div id='feature_card_mainbody'>

                                                    <div className="cate_image">
                                                        <img src={ele.category.image} alt="" />
                                                    </div>
                                                    <span className='feture_body_title'> {ele.category.category} </span>
                                                </div>
                                                <div id='feature_card_middletext'>
                                                    <span>
                                                        {ele.title}
                                                    </span>
                                                    <p>
                                                        {ele.city} , {ele.state},  {ele.country}
                                                    </p>
                                                </div>
                                            </div>


                                            <div className='card-footer' id='feature_card_footer'>
                                                <div className="row">

                                                    {ele.parameters && ele.parameters.slice(0, 6).map((elem, index) => (
                                                        <div className="col-sm-12 col-md-12" key={index}>
                                                            <div id='footer_content' key={index}>
                                                                <Image src={elem.image} alt="" width={20} height={16} />
                                                                <p className='text_footer'> {elem.name}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
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