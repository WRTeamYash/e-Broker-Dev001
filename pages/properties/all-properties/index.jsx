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
import ReactPaginate from 'react-paginate'
import { AddFavourite, GetFeturedListingsApi } from '@/store/actions/campaign'
import CustomHorizontalSkeleton from '@/Components/Skeleton/CustomHorizontalSkeleton'
import { useSelector } from 'react-redux'



const AllProperties = ({ propertySlugData, pageIndex }) => {
  const [grid, setGrid] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const [CategoryListByPropertyData, setCategoryListByPropertyData] = useState()
  const [total, setTotal] = useState();
  const [offsetdata, setOffsetdata] = useState(0);
  const limit = 8
  console.log("offset data", offsetdata)
  const isLoggedIn = useSelector((state) => state.User_signup);
  const userCurrentId = isLoggedIn && isLoggedIn.data ? isLoggedIn.data.data.id : null;
  console.log(userCurrentId)
  
  useEffect(() => {
    setIsLoading(true);
    if(!isLoggedIn){
      GetFeturedListingsApi(
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        offsetdata.toString(),
        limit.toString(),
        "",
        (response) => {
          setTotal(response.total);
          const propertyData = response.data;
          setIsLoading(false);
          setCategoryListByPropertyData(propertyData);
          console.log(CategoryListByPropertyData)
        },
        (error) => {
          setIsLoading(false);
          console.log(error);
        }
      );
    }else{
      GetFeturedListingsApi(
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        offsetdata.toString(),
        limit.toString(),
        userCurrentId,
        (response) => {
          setTotal(response.total);
          const propertyData = response.data;
          setIsLoading(false);
          setCategoryListByPropertyData(propertyData);
          console.log(CategoryListByPropertyData)
        },
        (error) => {
          setIsLoading(false);
          console.log(error);
        }
      );
    }
  }, [offsetdata]);

  const handlePageChange = (selectedPage) => {
    const newOffset = selectedPage.selected * limit;
    setOffsetdata(newOffset);
  };
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
                <GridCard total={total} setGrid={setGrid} />

                {
                  !grid ?
                    // Row cards
                    <div className='all-prop-cards' id='rowCards'>
                      {isLoading ? (
                        // Show skeleton loading when data is being fetched
                        Array.from({ length: 8 }).map((_, index) => (
                          <div className="col-sm-12  loading_data">
                            <CustomHorizontalSkeleton />
                          </div>
                        ))
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
              <div className="col-12">
                <ReactPaginate
                  previousLabel={"previous"}
                  nextLabel={"next"}
                  breakLabel="..."
                  breakClassName="break-me"
                  pageCount={Math.ceil(total / limit)}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={2}
                  onPageChange={handlePageChange}
                  containerClassName={"pagination"}
                  previousLinkClassName={"pagination__link"}
                  nextLinkClassName={"pagination__link"}
                  disabledClassName={"pagination__link--disabled"}
                  activeClassName={"pagination__link--active"}
                />
              </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

// export async function getServerSideProps({ query: { page = 1 } }) {
//   try {
//     const pageIndex = parseInt(page);
//     const rangeStart = (pageIndex - 1) * limit;
//     const rangeEnd = rangeStart + limit;

//     const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}get_property?offset=${rangeStart}&limit=${rangeEnd}`);
//     const propertySlugData = response.data;

//     return {
//       props: { propertySlugData, pageIndex }
//     };
//   } catch (error) {
//     console.error("Error fetching property data:", error);
//     return {
//       props: {
//         propertySlugData: null
//       }
//     };
//   }
// }

export default AllProperties;
