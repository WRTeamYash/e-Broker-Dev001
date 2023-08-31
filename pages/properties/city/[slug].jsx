"use client"
import React, { useEffect, useState } from 'react'

import Link from 'next/link'
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'
import VerticalCard from '@/Components/Cards/VerticleCard'
import FilterForm from '@/Components/AllPropertyUi/FilterForm'
import { useRouter } from 'next/router'
import GridCard from '@/Components/AllPropertyUi/GridCard'
import AllPropertieCard from '@/Components/AllPropertyUi/AllPropertieCard'
import ReactPaginate from 'react-paginate'
import { GetFeturedListingsApi } from '@/store/actions/campaign'
import CustomHorizontalSkeleton from '@/Components/Skeleton/CustomHorizontalSkeleton'


const AllProperties = () => {
  const [grid, setGrid] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const [CategoryListByPropertyData, setCategoryListByPropertyData] = useState()
  const [total, setTotal] = useState();
  const [offsetdata, setOffsetdata] = useState(0);
  const limit = 8
  console.log("offset data", offsetdata)

  const router = useRouter();
  const city = router.query
  console.log(city)
  useEffect(() => {
    setIsLoading(true);
    GetFeturedListingsApi(
      "",
      "",
      "",
      "",
      "",
      city,
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
  }, [offsetdata]);

  const handlePageChange = (selectedPage) => {
    const newOffset = selectedPage.selected * limit;
    setOffsetdata(newOffset);
  };

  // console.log("router", router)

  // useEffect(() => {
  //   if (propertySlugData && propertySlugData.data) {
  //     // Update the state with the new data
  //     setCategoryListByPropertyData(propertySlugData.data);
  //     // console.log(propertySlugData.data)
  //     // Turn off loading
  //     setIsLoading(false);
  //   }
  // }, [propertySlugData]);

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
                        Array.from({ length: 8 }).map((_, index) => (
                          <div className="col-sm-12  loading_data">
                            <CustomHorizontalSkeleton />
                          </div>
                        ))
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
              <div className="col-12">
                <ReactPaginate
                  previousLabel={"previous"}
                  nextLabel={"next"}
                  breakLabel="..."
                  breakClassName="break-me"
                  pageCount={Math.ceil(total / limit)}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
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
    </>
  )
}
// export async function getServerSideProps(context) {
//   // Get the slug parameter from the URL
//   const { slug } = context.query;
//   console.log("find slug", slug)
//   console.log("query", context.query)
//   // Fetch data from the external API using the slug parameter in the URL
//   try {

//     // this is for all Property data fetch 
//     const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}get_property?city=${slug}`);
//     const propertySlugData = response.data;// Assuming your API response is a JSON object

//     // console.log("==================================================================================== list by category property Data", propertySlugData)
//     return {
//       props: { propertySlugData }
//     };


//   } catch (error) {
//     console.error("Error fetching property data:", error);
//     return {
//       props: {
//         propertySlugData: null
//       } // You can handle the error case appropriately in your component
//     };
//   }
// }

export default AllProperties
