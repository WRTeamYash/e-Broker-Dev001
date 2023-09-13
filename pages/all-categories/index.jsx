
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb'
import CategoryCard from '@/Components/Cards/CategoryCard'
import Layout from '@/Components/Layout/Layout'
import Loader from '@/Components/Loader/Loader'
import CustomCategorySkeleton from '@/Components/Skeleton/CustomCategorySkeleton'
import { GetCategorieApi } from '@/store/actions/campaign'
import { languageData } from '@/store/reducer/languageSlice'
import { translate } from '@/utils'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { MdOutlineVilla } from 'react-icons/md'
import { useSelector } from 'react-redux'

const AllCategories = () => {

    const lang = useSelector(languageData)
    // console.log("languageData",lang)
      // useSelector(languageData)  
      useEffect(()=>{
        translate()
        // console.log("breadcrumb render")
      },[lang]);


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
        <Layout>
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
                                              <Link href={`/properties/categories/${ele.id}`}>
                                                <CategoryCard ele={ele} />
                                            </Link>
                                        </div>
                                    ) : null
                                ))}
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default AllCategories
