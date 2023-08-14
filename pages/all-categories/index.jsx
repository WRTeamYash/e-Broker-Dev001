"use client"
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb'
import Loader from '@/Components/Loader/Loader'
import { GetCategorieApi } from '@/store/actions/campaign'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { MdOutlineVilla } from 'react-icons/md'

const AllCategories = () => {
    const [isLoading, setIsLoading] = useState(false)


    // GET CATEGORIES
    const [getCategories, setGetCategories] = useState()
    useEffect(() => {
        GetCategorieApi((response) => {
            const categoryData = response.data;
            // console.log("slider Data =========", sliderData.data)
            setIsLoading(false)
            setGetCategories(categoryData);
            // console.log("category data ================",categoryData)
        }, (error) => {
            console.log(error)
        })
    }, [])


    return (
        <>
            <Breadcrumb title="All Categories" />
            <section id='view_all_cate_section'>
                <div className='cate_section'>
                    <div className="container">
                        <div className="row">
                            {isLoading ? (
                                // Show skeleton loading when data is being fetched
                                <Loader />
                            ) :
                                getCategories?.map((ele) => (


                                    <div className="col-12 col-md-6 col-lg-2" key={ele.id}>
                                        <Card id='main_aprt_card'>
                                            <Card.Body>
                                                <div className='apart_card_content'>
                                                    <div id='apart_icon'>
                                                        <img src={ele.image} alt="" className='solo_icon' />
                                                    </div>
                                                    <div id='apart_name'>
                                                        {ele.category}
                                                        <div id='propertie_count'>{ele.properties_count} Propertis</div>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AllCategories
