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
import 'react-loading-skeleton/dist/skeleton.css'

const AllProperties = (propertySlugData) => {
  const [grid, setGrid] = useState(false);
  const [isLoading, setIsLoading] = useState(false)

  let AllPropertieSataticCards = [
    {
      id: 1,
      image: cardImg.src,
      feature: "Feature",
      sell: "Sell",
      price: "$1,999,000 / USD",
      prop_type: "Home",
      prop_loc: "Luxury villa in Rego Park",
      prop_city: "California City, CA, USA",
      bedroom: "5 Bedroom",
      bath: "2 Bath",
      sq_fit: "1200 sq fit",
      parking: "2 Parking",
      cctv: "4 CCTV",
      pool: "2 Pool",
      garden: "1 Garden",
      games: "1 Indoor Game"
    },
    {
      id: 2,
      image: cardImg.src,
      feature: "Feature",
      sell: "Sell",
      price: "$1,999,000 / USD",
      prop_type: "Home",
      prop_loc: "Luxury villa in Rego Park",
      prop_city: "California City, CA, USA",
      bedroom: "5 Bedroom",
      bath: "2 Bath",
      sq_fit: "1200 sq fit",
      parking: "2 Parking",
      cctv: "4 CCTV",
      pool: "2 Pool",
      garden: "1 Garden",
      games: "1 Indoor Game"

    },
    {
      id: 3,
      image: cardImg.src,
      feature: "Feature",
      sell: "Sell",
      price: "$1,999,000 / USD",
      prop_type: "Home",
      prop_loc: "Luxury villa in Rego Park",
      prop_city: "California City, CA, USA",
      bedroom: "5 Bedroom",
      bath: "2 Bath",
      sq_fit: "1200 sq fit",
      parking: "2 Parking",
      cctv: "4 CCTV",
      pool: "2 Pool",
      garden: "1 Garden",
      games: "1 Indoor Game"
    },
    {
      id: 4,
      image: cardImg.src,
      feature: "Feature",
      sell: "Sell",
      price: "$1,999,000 / USD",
      prop_type: "Home",
      prop_loc: "Luxury villa in Rego Park",
      prop_city: "California City, CA, USA",
      bedroom: "5 Bedroom",
      bath: "2 Bath",
      sq_fit: "1200 sq fit",
      parking: "2 Parking",
      cctv: "4 CCTV",
      pool: "2 Pool",
      garden: "1 Garden",
      games: "1 Indoor Game"
    },
    {
      id: 5,
      image: cardImg.src,
      feature: "Feature",
      sell: "Sell",
      price: "$1,999,000 / USD",
      prop_type: "Home",
      prop_loc: "Luxury villa in Rego Park",
      prop_city: "California City, CA, USA",
      bedroom: "5 Bedroom",
      bath: "2 Bath",
      sq_fit: "1200 sq fit",
      parking: "2 Parking",
      cctv: "4 CCTV",
      pool: "2 Pool",
      garden: "1 Garden",
      games: "1 Indoor Game"
    },
    {
      id: 6,
      image: cardImg.src,
      feature: "Feature",
      sell: "Sell",
      price: "$1,999,000 / USD",
      prop_type: "Home",
      prop_loc: "Luxury villa in Rego Park",
      prop_city: "California City, CA, USA",
      bedroom: "5 Bedroom",
      bath: "2 Bath",
      sq_fit: "1200 sq fit",
      parking: "2 Parking",
      cctv: "4 CCTV",
      pool: "2 Pool",
      garden: "1 Garden",
      games: "1 Indoor Game"
    },
    {
      id: 7,
      image: cardImg.src,
      feature: "Feature",
      sell: "Sell",
      price: "$1,999,000 / USD",
      prop_type: "Home",
      prop_loc: "Luxury villa in Rego Park",
      prop_city: "California City, CA, USA",
      bedroom: "5 Bedroom",
      bath: "2 Bath",
      sq_fit: "1200 sq fit",
      parking: "2 Parking",
      cctv: "4 CCTV",
      pool: "2 Pool",
      garden: "1 Garden",
      games: "1 Indoor Game"
    },
    {
      id: 8,
      image: cardImg.src,
      feature: "Feature",
      sell: "Sell",
      price: "$1,999,000 / USD",
      prop_type: "Home",
      prop_loc: "Luxury villa in Rego Park",
      prop_city: "California City, CA, USA",
      bedroom: "5 Bedroom",
      bath: "2 Bath",
      sq_fit: "1200 sq fit",
      parking: "2 Parking",
      cctv: "4 CCTV",
      pool: "2 Pool",
      garden: "1 Garden",
      games: "1 Indoor Game"
    },
  ]


  const [CategoryListByPropertyData, setCategoryListByPropertyData] = useState()
  useEffect(() => {
    if (propertySlugData && propertySlugData.propertySlugData) {
      // Update the state with the new data
      setCategoryListByPropertyData(propertySlugData.propertySlugData);
      // Turn off loading
      setIsLoading(false);
    }
  }, [propertySlugData]);

  // console.log(CategoryListByPropertyData)
  return (
    <>
      <Breadcrumb title="All Properties" />

      <div className='all-properties container'>

        <div id='all-prop-containt'>
          <div className='row ' id='main-all-prop'>
            <div className='col-12 col-md-12 col-lg-3'>
              <div className="card" id='filter-card'>
                <div className="card title" id='filter-title'>
                  <span>
                    Filter Properties
                  </span>
                  <button>
                    Clear Filter
                  </button>
                </div>
                <div className="card-body">
                  <div className='filter-button-box'>
                    <ButtonGroup id='propertie_button_grup'>
                      <ul className="nav nav-tabs" id="props-tabs">
                        <li className="">
                          <a className="nav-link active" aria-current="page" id="prop-sellbutton" onClick={(e) => {
                            e.target.classList.add('active')
                            document.getElementById('prop-rentbutton').classList.remove('active')
                          }}>For Sell</a>
                        </li>
                        <li className="">
                          <a className="nav-link" onClick={(e) => {
                            e.target.classList.add('active')
                            document.getElementById('prop-sellbutton').classList.remove('active')

                          }} aria-current="page" id="prop-rentbutton">For Rent</a>
                        </li>
                      </ul>
                    </ButtonGroup>
                  </div>
                  <div className='prop-type'>
                    <span>Propertie Type</span>
                    <select className="form-select" aria-label="Default select">
                      <option value="" defaultValue>Select Type</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className='prop-location'>
                    <span>Location</span>
                    <select className="form-select" aria-label="Default select">
                      <option defaultValue >Select Location (Optional)</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className='budget-price'>
                    <span>Budget(Price)</span>
                    <div className='budget-inputs'>
                      <input className='price-input' placeholder='Min Price' />
                      <input className='price-input' placeholder='Max Price' />
                    </div>
                  </div>
                  <div className='posted-since'>
                    <span>Posted Since</span>
                    <div className='posted-duration'>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                          Anytime
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                          Last Week
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                        <label className="form-check-label" htmlFor="flexRadioDefault3">
                          Yesterday
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className='apply-filter'>
                    <RiSendPlane2Line size={25} />
                    <button id='apply-filter-button'>
                      Apply Filter
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-12 col-lg-9'>
              <div className='all-prop-rightside'>
                <div className="card">
                  <div className="card-body" id='all-prop-headline-card'>
                    <div>
                      <span>{CategoryListByPropertyData ? ` ${CategoryListByPropertyData.length} Properties Found ` : 'Loading...'}</span>
                    </div>
                    <div >
                      <button className='mx-3' id='layout-buttons' onClick={() => setGrid(false)}>
                        <AiOutlineUnorderedList size={25} />
                      </button>
                      <button id='layout-buttons' onClick={() => setGrid(true)}>
                        <RiGridFill size={25} />
                      </button>
                    </div>
                  </div>
                </div>

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
                            <Card id='all_prop_main_card' key={ele.id}>
                              <div className='img_div'>
                                <img className='card-img' id='all_prop_card_img' src={ele.title_image} />
                              </div>
                              <div>
                                <Card.Body id='all_prop_card_body'>

                                  {ele.promoted ? (
                                    <span className='all_prop_feature'>
                                      Feature
                                    </span>
                                  ) : null}

                                  <span className='all_prop_like'>
                                    <AiOutlineHeart size={25} />
                                  </span>
                                  <span className='all_prop_sell'>
                                    {ele.propery_type}
                                  </span>
                                  <span className='all_prop_price'>
                                    $ {ele.price}
                                  </span>

                                  <div>
                                    <div id='all_prop_sub_body'>
                                      <div className="cate_image">
                                        <img src={ele.category.image} alt="" />
                                      </div>
                                      <span className='sub_body_title'> {ele.category.category}</span>
                                    </div>
                                    <div id='sub_body_middletext'>
                                      <span>
                                        {ele.title}
                                      </span>
                                      <p>
                                        {ele.city} , {ele.state},  {ele.country}
                                      </p>
                                    </div>
                                  </div>
                                  <Card.Footer id='all_prop_card_footer'>
                                    <div className='all_footer_body'>
                                      <div className="row">

                                        {ele.parameters && ele.parameters.slice(0, 6).map((elem, index) => (
                                          <div className="col-sm-12 col-md-4" key={index}>
                                            <div id='footer_content' key={index}>
                                              <Image src={elem.image} alt="" width={20} height={16} />
                                              <p className='text_footer'> {elem.name}</p>
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    </div>

                                  </Card.Footer>
                                </Card.Body>
                              </div>
                            </Card>
                          </Link>
                        ))}
                    </div>
                    :
                    //Column cards 
                    <div id='columnCards'>
                      <div className='row' id='all-prop-col-cards'>

                        {
                          CategoryListByPropertyData?.map((ele) => (
                            <div className='col-12 col-md-6 col-lg-4'>
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
                                    <span className='feture_body_title'> {ele.category.category}</span>
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

                                    {ele.parameters && ele.parameters.slice(0, 4).map((elem, index) => (
                                      <div className="col-sm-12 col-md-6" key={index}>
                                        <div id='footer_content' key={index}>
                                          <Image src={elem.image} alt="" width={20} height={16} />
                                          <p className='text_footer'> {elem.name}</p>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
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

  // Fetch data from the external API using the slug parameter in the URL
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}get_property?category_id=${slug}`);
    const propertySlugData = response.data.data; // Assuming your API response is a JSON object
    // console.log("list by category property Data", propertySlugData)
    return {
      props: { propertySlugData }
    };
  } catch (error) {
    console.error("Error fetching property data:", error);
    return {
      props: { propertySlugData: null } // You can handle the error case appropriately in your component
    };
  }
}

export default AllProperties
