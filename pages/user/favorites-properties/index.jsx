import React, { useEffect, useState } from 'react'
import VerticleLayout from '@/Components/AdminLayout/VerticleLayout'
import { useSelector } from 'react-redux';
import { GetFavPropertyApi } from '@/store/actions/campaign';
import VerticalCardSkeleton from '@/Components/Skeleton/VerticalCardSkeleton';
import VerticalCard from '@/Components/Cards/VerticleCard';
import Link from 'next/link';
import { languageData } from '@/store/reducer/languageSlice';
import Pagination from '@/Components/Pagination/ReactPagination'

const index = () => {
  const lang = useSelector(languageData)
  // console.log("languageData",lang)
  // useSelector(languageData)  
  useEffect(() => {
    // console.log("render")
  }, [lang]);
  const [isLoading, setIsLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [getFavProp, setGetFavProp] = useState([])
  const [offsetdata, setOffsetdata] = useState(0);

  // console.log("offset data", offsetdata)
  const limit = 8;
  console.log(limit)
  const isLoggedIn = useSelector((state) => state.User_signup);
  const userCurrentId = isLoggedIn && isLoggedIn.data ? isLoggedIn.data.data.id : null;



  useEffect(() => {
    GetFavPropertyApi(
      offsetdata.toString(),
      limit.toString(),
      (response) => {
        setTotal(response.total);
        const favPropData = response.data;
        console.log(favPropData)
        setIsLoading(false)
        setGetFavProp(favPropData);
      }, (error) => {
        console.log(error)
      })
  }, [offsetdata])

  const removeCard = (cardId) => {
    // Filter out the card with the given ID from getFavProp
    const updatedFavProp = getFavProp.filter((ele) => ele.id !== cardId);
    setGetFavProp(updatedFavProp);
  };
  const handlePageChange = (selectedPage) => {

    const newOffset = selectedPage.selected * limit;
    setOffsetdata(newOffset);
    window.scrollTo(0, 0);

  };

  return (
    <VerticleLayout>
      <div className="container">
        <div className="dashboard_titles">
          <h3>Favorites</h3>
        </div>
        <div className="fav_card">
          <div className="row">
            {isLoading ? (
              Array.from({ length: 8 }).map((_, index) => (
                <div className='col-sm-12 col-md-6 col-lg-3 loading_data' key={index}>
                  <VerticalCardSkeleton />
                </div>
              ))
            ) : (
              <>
                {getFavProp?.map((ele, index) => (
                  <div className='col-sm-12 col-md-6 col-lg-3' key={index}>
                    <Link href="/properties-deatils/[slug]" as={`/properties-deatils/${ele.id}`} passHref>
                      <VerticalCard ele={ele} onRemoveCard={removeCard} />
                    </Link>
                  </div>
                ))}
                <div className="col-12">
                  <Pagination pageCount={Math.ceil(total / limit)} onPageChange={handlePageChange} />
                </div>
              </>
            )}
          </div>
        </div>

      </div>
    </VerticleLayout>
  )
}

export default index
