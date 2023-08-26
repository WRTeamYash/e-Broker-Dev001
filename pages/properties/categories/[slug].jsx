"use client"
import React, { useEffect, useState } from 'react'
import ViewPageImg from "@/assets/Images/Breadcrumbs_BG.jpg"
import { ButtonGroup, Col, Row } from 'react-bootstrap'
import { RiSendPlane2Line, RiGridFill, RiHotelBedLine, RiParkingBoxLine, RiBuilding3Line, RiPlantLine } from 'react-icons/ri'
import { AiOutlineUnorderedList, AiOutlineHeart } from 'react-icons/ai'
import { Card } from 'react-bootstrap'
import { GiGamepad } from 'react-icons/gi'
import cardImg from '@/assets/Images/Featured_List_1.jpg'

import Link from 'next/link'
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb'
import Loader from '@/Components/Loader/Loader'
import axios from 'axios'
import Image from 'next/image'
import Skeleton from 'react-loading-skeleton'
import VerticalCard from '@/Components/Cards/VerticleCard'
import FilterForm from '@/Components/AllPropertyUi/FilterForm'
import { useRouter } from 'next/router'
import GridCard from '@/Components/AllPropertyUi/GridCard'
import AllPropertieCard from '@/Components/AllPropertyUi/AllPropertieCard'


const AllProperties = ({ propertySlugData }) => {
  const [grid, setGrid] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const [CategoryListByPropertyData, setCategoryListByPropertyData] = useState()

  const router = useRouter();

  // console.log("router", router)

  useEffect(() => {
    if (propertySlugData && propertySlugData.data) {
      // Update the state with the new data
      setCategoryListByPropertyData(propertySlugData.data);
      // console.log(propertySlugData.data)
      // Turn off loading
      setIsLoading(false);
    }
  }, [propertySlugData]);

  // console.log(CategoryListByPropertyData)
  return (
    <>
      <Breadcrumb title="All Properties" />


      <div id='all-prop-containt'>
        <div className='all-properties container'>
          <div className='row ' id='main-all-prop'>
            <div className='col-12 col-md-12 col-lg-3'>
              <FilterForm />
            </div>
            <div className='col-12 col-md-12 col-lg-9'>
              <div className='all-prop-rightside'>
                <GridCard propertySlugData={propertySlugData} setGrid={setGrid} />

                {
                  !grid ?
                    // Row cards
                    <div className='all-prop-cards' id='rowCards'>
                      {isLoading ? (
                        // Show skeleton loading when data is being fetched
                        <div className="col-12 loading_data">
                          <Skeleton height={20} count={22} />
                        </div>
                        // <Loader />
                      ) :
                        CategoryListByPropertyData?.map((ele) => (
                          <Link href="/properties-deatils/[slug]" as={`/properties-deatils/${ele.id}`} passHref>
                            <AllPropertieCard ele={ele} />
                          </Link>
                        ))}
                    </div>
                    :
                    //Column cards 
                    <div id='columnCards'>
                      <div className='row' id='all-prop-col-cards'>

                        {
                          CategoryListByPropertyData?.map((ele, index) => (
                            <div className='col-12 col-md-6 col-lg-4' key={index}>
                              <Link href="/properties-deatils/[slug]" as={`/properties-deatils/${ele.id}`} passHref>
                                <VerticalCard ele={ele} />
                              </Link>
                            </div>
                          ))}
                      </div>
                    </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export async function getServerSideProps(context) {
  // Get the slug parameter from the URL
  const { slug } = context.query;
  console.log("find slug", slug)
  console.log("query", context.query)
  // Fetch data from the external API using the slug parameter in the URL
  try {

    // this is for all Property data fetch 
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}get_property?category_id=${slug}`);
    const propertySlugData = response.data;// Assuming your API response is a JSON object

    // console.log("==================================================================================== list by category property Data", propertySlugData)
    return {
      props: { propertySlugData }
    };


  } catch (error) {
    console.error("Error fetching property data:", error);
    return {
      props: {
        propertySlugData: null
      } // You can handle the error case appropriately in your component
    };
  }
}

export default AllProperties
