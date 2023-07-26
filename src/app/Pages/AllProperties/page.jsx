"use client"
import React from 'react'
import ViewPageImg from "@/assets/Images/Breadcrumbs_BG.jpg"
import { ButtonGroup } from 'react-bootstrap'
import { RiSendPlane2Line, RiGridFill, RiHotelBedLine, RiParkingBoxLine, RiBuilding3Line, RiPlantLine } from 'react-icons/ri'
import { AiOutlineUnorderedList, AiOutlineHeart } from 'react-icons/ai'
import { Card } from 'react-bootstrap'
import { GiGamepad } from 'react-icons/gi'
import cardImg from '@/assets/Images/Featured_List_1.jpg'
import { FiDroplet, FiCloudDrizzle } from 'react-icons/fi'
import { BiHomeSmile, BiCctv } from 'react-icons/bi'
import Link from 'next/link'
import Breadcrumb from '@/app/Components/Breadcrumb/Breadcrumb'

const AllProperties = () => {
  return (
    <>
      <Breadcrumb title={"All Properties"} />
      <div className='all-properties'>
        <div id='all-prop-containt'>
          <div className='row ' id='main-all-prop'>
            <div className='col-3'>
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
                    <ButtonGroup>
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
                      <option value="" selected>Select Type</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className='prop-location'>
                    <span>Location</span>
                    <select className="form-select" aria-label="Default select">
                      <option value="" selected>Select Location (Optional)</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className='budget-price'>
                    <span>Budget(Price)</span>
                    <div className='budget-inputs'>
                      <input className='price-input' placeholder='Min-Price' />
                      <input className='price-input' placeholder='Max-Price' />
                    </div>
                  </div>
                  <div className='posted-since'>
                    <span>Posted Since</span>
                    <div className='posted-duration'>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                        <label className="form-check-label" for="flexRadioDefault1">
                          Anytime
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label className="form-check-label" for="flexRadioDefault2">
                          Last Week
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                        <label className="form-check-label" for="flexRadioDefault3">
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
            <div className='col-9'>
              <div className='all-prop-rightside'>
                <div className="card">
                  <div className="card-body" id='all-prop-headline-card'>
                    <div>
                      <span>16 Properties Found of 53</span>
                    </div>
                    <div >
                      <button className='mx-3' id='layout-buttons'>
                        <AiOutlineUnorderedList size={25} />
                      </button>
                      <button id='layout-buttons'>
                        <RiGridFill size={25} />
                      </button>
                    </div>
                  </div>
                </div>
                <div className='all-prop-cards'>
                  <Link href="/Pages/PropertieDeatils">
                    <Card id='main-all-prop-card'>
                      <div>
                        <Card.Img variant="top" id='all-prop-card-img' src={cardImg.src} />
                      </div>
                      <div>
                        <Card.Body id='main-all-prop-card-body'>
                          <span className='all-prop_feature'>
                            Feature
                          </span>
                          <span className='all-prop_like'>
                            <AiOutlineHeart size={25} />
                          </span>
                          <span className='all-prop_sell'>
                            Sell
                          </span>
                          <span className='all-prop_price'>
                            $1,999,000 / USD
                          </span>

                          <div>
                            <div id='all-prop-sub-body'>
                              <BiHomeSmile size={23} />
                              <span className='all-sub-body_title'> House </span>
                            </div>
                            <div id='all-prop-card-middletext'>
                              <span>
                                Luxury villa in Rego Park
                              </span>
                              <p>
                                California City, CA, USA
                              </p>
                            </div>
                          </div>
                          <Card.Footer id='all-prop-card-footer'>
                            <div className='all-footer-body'>
                              <div id='all-footer-content'>
                                <div>
                                  <RiHotelBedLine size={25} />
                                  <span className='text_footer'> 3 Bedrooms </span>
                                </div>
                                <div>
                                  <BiCctv size={25} />
                                  <span className='text_footer'> 4 CCTV </span>
                                </div>
                              </div>
                              <div id='all-footer-content'>
                                <div>
                                  <RiBuilding3Line size={25} />
                                  <span className='text_footer'> 1200 Sqft </span>
                                </div>
                                <div>
                                  <FiDroplet size={25} />
                                  <span className='text_footer'> 1 Pool </span>
                                </div>
                              </div>
                              <div id='all-footer-content'>
                                <div>
                                  <FiCloudDrizzle size={25} />
                                  <span className='text_footer'> 4 Bathrooms </span>
                                </div>
                                <div>
                                  <RiPlantLine size={25} />
                                  <span className='text_footer'> 1 Garden </span>
                                </div>
                              </div>
                              <div id='all-footer-content'>
                                <div>
                                  <RiParkingBoxLine size={25} />
                                  <span className='text_footer'> 2 Parking </span>
                                </div>
                                <div>
                                  <GiGamepad size={25} />
                                  <span className='text_footer'> 1 Indoor Game </span>
                                </div>
                              </div>
                            </div>
                          </Card.Footer>
                        </Card.Body>
                      </div>
                    </Card>
                  </Link>
                  {/* <Card id='main-all-prop-card'>
                  <div>
                    <Card.Img variant="top" id='all-prop-card-img' src={cardImg.src} />
                  </div>
                  <div>
                  <Card.Body id='main-all-prop-card-body'>
                  <span className='all-prop_feature'>
                  Feature
                  </span>
                  <span className='all-prop_like'>
                  <AiOutlineHeart size={25} />
                  </span>
                  <span className='all-prop_sell'>
                  Sell
                      </span>
                      <span className='all-prop_price'>
                      $1,999,000 / USD
                      </span>

                      <div>
                        <div id='all-prop-sub-body'>
                          <BiHomeSmile size={23} />
                          <span className='all-sub-body_title'> House </span>
                        </div>
                        <div id='all-prop-card-middletext'>
                          <span>
                            Luxury villa in Rego Park
                          </span>
                          <p>
                            California City, CA, USA
                          </p>
                        </div>
                      </div>
                      <Card.Footer id='all-prop-card-footer'>
                        <div className='all-footer-body'>
                          <div id='all-footer-content'>
                            <div>
                              <RiHotelBedLine size={25} />
                              <span className='text_footer'> 3 Bedrooms </span>
                            </div>
                            <div>
                              <BiCctv size={25} />
                              <span className='text_footer'> 4 CCTV </span>
                            </div>
                          </div>
                          <div id='all-footer-content'>
                            <div>
                              <RiBuilding3Line size={25} />
                              <span className='text_footer'> 1200 Sqft </span>
                            </div>
                            <div>
                              <FiDroplet size={25} />
                              <span className='text_footer'> 1 Pool </span>
                            </div>
                          </div>
                          <div id='all-footer-content'>
                            <div>
                              <FiCloudDrizzle size={25} />
                              <span className='text_footer'> 4 Bathrooms </span>
                            </div>
                            <div>
                              <RiPlantLine size={25} />
                              <span className='text_footer'> 1 Garden </span>
                            </div>
                          </div>
                          <div id='all-footer-content'>
                              <div>
                                <RiParkingBoxLine size={25} />
                                <span className='text_footer'> 2 Parking </span>
                              </div>
                              <div>
                                <GiGamepad size={25} />
                                <span className='text_footer'> 1 Indoor Game </span>
                              </div>
                            </div>
                        </div>
                      </Card.Footer>
                    </Card.Body>
                  </div>
                </Card>
                <Card id='main-all-prop-card'>
                  <div>
                    <Card.Img variant="top" id='all-prop-card-img' src={cardImg.src} />
                  </div>
                  <div>
                    <Card.Body id='main-all-prop-card-body'>
                      <span className='all-prop_feature'>
                        Feature
                      </span>
                      <span className='all-prop_like'>
                        <AiOutlineHeart size={25} />
                      </span>
                      <span className='all-prop_sell'>
                        Sell
                      </span>
                      <span className='all-prop_price'>
                        $1,999,000 / USD
                      </span>

                      <div>
                        <div id='all-prop-sub-body'>
                          <BiHomeSmile size={23} />
                          <span className='all-sub-body_title'> House </span>
                        </div>
                        <div id='all-prop-card-middletext'>
                          <span>
                            Luxury villa in Rego Park
                          </span>
                          <p>
                            California City, CA, USA
                          </p>
                        </div>
                      </div>
                      <Card.Footer id='all-prop-card-footer'>
                        <div className='all-footer-body'>
                          <div id='all-footer-content'>
                            <div>
                              <RiHotelBedLine size={25} />
                              <span className='text_footer'> 3 Bedrooms </span>
                            </div>
                            <div>
                              <BiCctv size={25} />
                              <span className='text_footer'> 4 CCTV </span>
                            </div>
                          </div>
                          <div id='all-footer-content'>
                            <div>
                              <RiBuilding3Line size={25} />
                              <span className='text_footer'> 1200 Sqft </span>
                            </div>
                            <div>
                              <FiDroplet size={25} />
                              <span className='text_footer'> 1 Pool </span>
                            </div>
                          </div>
                          <div id='all-footer-content'>
                            <div>
                              <FiCloudDrizzle size={25} />
                              <span className='text_footer'> 4 Bathrooms </span>
                            </div>
                            <div>
                              <RiPlantLine size={25} />
                              <span className='text_footer'> 1 Garden </span>
                            </div>
                          </div>
                          <div id='all-footer-content'>
                              <div>
                                <RiParkingBoxLine size={25} />
                                <span className='text_footer'> 2 Parking </span>
                              </div>
                              <div>
                                <GiGamepad size={25} />
                                <span className='text_footer'> 1 Indoor Game </span>
                              </div>
                            </div>
                        </div>
                      </Card.Footer>
                    </Card.Body>
                  </div>
                </Card>
                <Card id='main-all-prop-card'>
                  <div>
                    <Card.Img variant="top" id='all-prop-card-img' src={cardImg.src} />
                  </div>
                  <div>
                    <Card.Body id='main-all-prop-card-body'>
                      <span className='all-prop_feature'>
                        Feature
                      </span>
                      <span className='all-prop_like'>
                        <AiOutlineHeart size={25} />
                      </span>
                      <span className='all-prop_sell'>
                        Sell
                      </span>
                      <span className='all-prop_price'>
                        $1,999,000 / USD
                      </span>

                      <div>
                        <div id='all-prop-sub-body'>
                          <BiHomeSmile size={23} />
                          <span className='all-sub-body_title'> House </span>
                        </div>
                        <div id='all-prop-card-middletext'>
                          <span>
                            Luxury villa in Rego Park
                          </span>
                          <p>
                            California City, CA, USA
                          </p>
                        </div>
                      </div>
                      <Card.Footer id='all-prop-card-footer'>
                        <div className='all-footer-body'>
                          <div id='all-footer-content'>
                            <div>
                              <RiHotelBedLine size={25} />
                              <span className='text_footer'> 3 Bedrooms </span>
                            </div>
                            <div>
                              <BiCctv size={25} />
                              <span className='text_footer'> 4 CCTV </span>
                            </div>
                          </div>
                          <div id='all-footer-content'>
                            <div>
                              <RiBuilding3Line size={25} />
                              <span className='text_footer'> 1200 Sqft </span>
                            </div>
                            <div>
                              <FiDroplet size={25} />
                              <span className='text_footer'> 1 Pool </span>
                            </div>
                          </div>
                          <div id='all-footer-content'>
                            <div>
                              <FiCloudDrizzle size={25} />
                              <span className='text_footer'> 4 Bathrooms </span>
                            </div>
                            <div>
                              <RiPlantLine size={25} />
                              <span className='text_footer'> 1 Garden </span>
                            </div>
                          </div>
                          <div id='all-footer-content'>
                              <div>
                                <RiParkingBoxLine size={25} />
                                <span className='text_footer'> 2 Parking </span>
                              </div>
                              <div>
                                <GiGamepad size={25} />
                                <span className='text_footer'> 1 Indoor Game </span>
                              </div>
                            </div>
                        </div>
                      </Card.Footer>
                    </Card.Body>
                  </div>
                </Card> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>

  )
}

export default AllProperties
