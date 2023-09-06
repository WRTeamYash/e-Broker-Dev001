"use client"
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb'
import CategoryCard from '@/Components/Cards/CategoryCard'
import Loader from '@/Components/Loader/Loader'
import CustomCategorySkeleton from '@/Components/Skeleton/CustomCategorySkeleton'
import { GetCategorieApi } from '@/store/actions/campaign'
import { translate } from '@/utils'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { MdOutlineVilla } from 'react-icons/md'

const AllCategories = () => {
    const [isLoading, setIsLoading] = useState(false)


    // GET CATEGORIES
    const [getCategories, setGetCategories] = useState()
    useEffect(() => {
        setIsLoading(true)
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
            <Breadcrumb title={translate("allCategories")} />
            <section id='view_all_cate_section'>
                <div className='cate_section'>
                    <div className="container">
                        <div className="row">
                            {isLoading ? (
                                // Show skeleton loading when data is being fetched
                                Array.from({ length: getCategories ? getCategories.length : 12 }).map((_, index) => (
                                    <div className='col-sm-12 col-md-6 col-lg-2 loading_data' key={index}>
                                        <CustomCategorySkeleton />
                                    </div>
                                ))
                                
                            ) :
                                getCategories && getCategories?.map((ele, index) => (
                                    (ele.properties_count !== 0 && ele.properties_count !== "") ? (
                                        <div className='col-sm-12 col-md-6 col-lg-2' key={index}>
                                            <Link href="/all-properties/[slug]" as={`/all-properties/${ele.id}`} passHref>
                                                <CategoryCard ele={ele} />
                                            </Link>
                                        </div>
                                    ) : null
                                ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AllCategories
