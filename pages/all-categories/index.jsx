"use client"
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb'
import Loader from '@/Components/Loader/Loader'
import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { MdOutlineVilla } from 'react-icons/md'

const AllCategories = () => {
    const [isLoading, setIsLoading] = useState(false)
    let ApartStaticData = [
        {
            id: 1,
            apart_name: "Villa",
            apart_prop_count: "22 Properties"
        },
        {
            id: 1,
            apart_name: "Banglow",
            apart_prop_count: "22 Properties"
        },
        {
            id: 2,
            apart_name: "Panthouse",
            apart_prop_count: "22 Properties"
        },
        {
            id: 3,
            apart_name: "House",
            apart_prop_count: "22 Properties"
        },
        {
            id: 4,
            apart_name: "Land",
            apart_prop_count: "22 Properties"
        },
        {
            id: 5,
            apart_name: "Villa",
            apart_prop_count: "22 Properties"
        },
        {
            id: 6,
            apart_name: "Villa",
            apart_prop_count: "22 Properties"
        },
    ]
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
                                ApartStaticData?.map((ele) => (


                                    <div className="col-12 col-md-6 col-lg-2" key={ele.id}>
                                        <Card id='main_cate_card'>
                                            <Card.Body>
                                                <div className='cate_card_content'>
                                                    <div id='cate_icon'>
                                                        <MdOutlineVilla size={40} className='cate_solo_icon' />
                                                    </div>
                                                    <div id='cate_name'>
                                                        {ele.apart_name}
                                                        <div id='propertie_count'>{ele.apart_prop_count}</div>
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
