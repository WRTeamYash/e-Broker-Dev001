
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
import { useSelector } from 'react-redux'
import { languageData } from '@/store/reducer/languageSlice'
import Pagination from '@/Components/Pagination/ReactPagination'
import Layout from '@/Components/Layout/Layout'
import { translate } from '@/utils'


const AllProperties = () => {
  const [grid, setGrid] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const [CategoryListByPropertyData, setCategoryListByPropertyData] = useState()
  const [cateName, setCateName] = useState("")
  const [total, setTotal] = useState();
  const [offsetdata, setOffsetdata] = useState(0);
  const limit = 8
  // console.log("offset data", offsetdata)

  const router = useRouter();
  const cateId = router.query
  // console.log(cateId)
  const isLoggedIn = useSelector((state) => state.User_signup);
  const userCurrentId = isLoggedIn && isLoggedIn.data ? isLoggedIn.data.data.id : null;

  const lang = useSelector(languageData)
  // console.log("languageData",lang)
  // useSelector(languageData)  
  useEffect(() => {
    // console.log("render")
  }, [lang]);


  useEffect(() => {
    setIsLoading(true);

    GetFeturedListingsApi(
      "",
      "",
      "",
      cateId,
      "",
      "",
      "",
      offsetdata.toString(),
      limit.toString(),
      isLoggedIn ? userCurrentId : "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      (response) => {
        setTotal(response.total);
        const propertyData = response.data;
        setIsLoading(false);
        setCategoryListByPropertyData(propertyData);
        // console.log(CategoryListByPropertyData)
        // const Category = CategoryListByPropertyData && CategoryListByPropertyData[0].category.category
        setCateName(propertyData && propertyData[0].category.category)
        // console.log(cateName)

      },
      (error) => {
        setIsLoading(false);
        console.log(error);
      }
    );

  }, [offsetdata, isLoggedIn]);
  const handlePageChange = (selectedPage) => {
    const newOffset = selectedPage.selected * limit;
    setOffsetdata(newOffset);
    window.scrollTo(0, 0);
  };

  return (
    <Layout>
      <Breadcrumb title={cateName ? `${cateName} Properties` : `No Properties in ${cateName}`} />


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
                <Pagination pageCount={Math.ceil(total / limit)} onPageChange={handlePageChange} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
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
//     const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}get_property?category_id=${slug}`);
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
