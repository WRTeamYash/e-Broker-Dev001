'use client'
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb'
import React, { useEffect, useState } from 'react'
import { CiFacebook, CiLocationOn } from 'react-icons/ci'
import { FiCloudDrizzle, FiDroplet, FiMail, FiMessageSquare, FiPhoneCall } from 'react-icons/fi'
import { RiBuilding3Line, RiGridFill, RiHotelBedLine, RiParkingBoxLine, RiPlantLine, RiSendPlane2Line, RiThumbUpFill } from 'react-icons/ri'
import agentimg from "@/assets/Images/Superman.jpeg"
import { AiFillCaretDown, AiFillTwitterCircle, AiOutlineHeart, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineStar, AiOutlineUnorderedList } from 'react-icons/ai'
import { BsFacebook, BsLinkedin, BsMap, BsPinterest } from 'react-icons/bs'
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { ButtonGroup, Card } from 'react-bootstrap'
import Link from 'next/link'
import cardImg from '@/assets/Images/Featured_List_1.jpg'
import { BiCctv, BiHomeSmile } from 'react-icons/bi'
import { GiGamepad } from 'react-icons/gi'
import Loader from '@/Components/Loader/Loader'
import { languageData } from '@/store/reducer/languageSlice'
import { useSelector } from 'react-redux'

const page = () => {
    const lang = useSelector(languageData)
    // console.log("languageData",lang)
      // useSelector(languageData)  
      useEffect(()=>{
        translate()
        // console.log("breadcrumb render")
      },[lang]);

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
    return (
        <>

            <section id='agentDetailsSect'>
                <Breadcrumb title="" />
                <div className="agentContainer container">
                    <div>
                        <div className="card" id='owner_deatils_card'>
                            <div className="card-body" id='card_owner_body'>
                                <div className="row">
                                    <div className='owner_all_deatils'>
                                        <div className="owner_img_div">
                                            <img src={agentimg.src} className='owner_img' alt="" />
                                        </div>
                                        <div className='owner_deatils'>
                                            <div className='owner_title'>
                                                <span className='owner_name'> Michael Smith </span>
                                                <div className="ownerRowDetails">
                                                    <span className='owner_add'> <AiOutlineStar size={20} /> 5.0 49 Reviews</span>

                                                    <span className='owner_add'> <CiLocationOn size={20} />  Los Angeles </span>
                                                    <span className='owner_add'><BsMap /> 627 Vernon Street, Los Angeles, California - 90017</span>

                                                </div>
                                            </div>
                                            <div id='owner_contact_deatils'>
                                                <div className="card_sub_body">
                                                    <div className='owner_contact' >
                                                        <div ><FiPhoneCall id='call-o' size={60} /></div>
                                                        <div className='deatilss'>
                                                            <span className='o-d'>Call</span>
                                                            <span className='value'>01234 56789</span>
                                                        </div>

                                                    </div>


                                                    <div className='owner_contact'>
                                                        <div ><FiMail id='mail-o' size={60} /></div>
                                                        <div className='deatilss'>
                                                            <span className='o-d'>Mail</span>
                                                            <span className='value'>michael.smith@example.com</span>
                                                        </div>
                                                    </div>


                                                    <div className='owner_contact'>
                                                        <div ><FiMessageSquare id='chat-o' size={60} /></div>
                                                        <div className='deatilss'>
                                                            <span className='o-d'>Chat</span>
                                                            <span className='value'>Start a chat</span>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className='owner_enquiry'>
                                                    <span>Follow </span>
                                                    <div className="followIcons">
                                                        <BsFacebook color='#1d0f7f' />
                                                        <AiFillTwitterCircle color='#26d3e7' />
                                                        <BsPinterest color='#ff3f00' />
                                                        <BsLinkedin color='#2faeef' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-3 agentDetailsDiv3">
                        <div className='col-12 col-md-12 col-lg-3'>
                            <div className="card" id='filter-card'>
                                <div className="card title" id='filter-title'>
                                    <span>
                                        Real Estate Inquiry Form
                                    </span>
                                </div>
                                <div className="card-body">
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
                                        <span>Name</span>
                                        <input placeholder='Enter Your Name' className='price-input' />
                                    </div>
                                    <div className='prop-location'>
                                        <span>Email</span>
                                        <input placeholder='Enter Your Email' className='price-input' />
                                    </div>
                                    <div className='prop-location'>
                                        <span>Phone</span>
                                        <input placeholder='Enter Your Phone' className='price-input' />
                                    </div>
                                    <div className='budget-price'>
                                        <span>Budget(Price)</span>
                                        <div className='budget-inputs'>
                                            <input className='price-input' placeholder='Min Price' />
                                            <input className='price-input' placeholder='Max Price' />
                                        </div>
                                    </div>
                                    <div className='apply-filter'>
                                        <RiSendPlane2Line size={25} />
                                        <button id='apply-filter-button' type='submit'>
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-12 col-lg-9'>
                            <div className="row aboutOwnerRow2">
                                <div>
                                    <div className="aboutOwner card">
                                        <span className="ownerNameSpan">About <span id='ownerName'>Michael Smith</span></span>
                                        <p>With a passion for real estate and a dedication to helping clients achieve their dreams, I am Michael Smith, a licensed real estate agent with extensive experience in the industry. I specialize in residential properties, catering to both buyers and sellers in the vibrant market of Gujarat</p>
                                        <span className='aboutHeadline2'>Professional Expertise: </span>
                                        <p>Having worked in the real estate industry for over a decade, I possess in-depth knowledge of the local market trends, property values, and neighborhoods.</p>
                                        <p>My expertise lies in guiding clients through the entirereal estate process, ensuring a seamless and successful transaction.</p>

                                        <span className='readMore'>Read More <AiFillCaretDown /> </span>
                                    </div>
                                </div>
                                <div className='col-12 col-md-12 col-lg-12'>
                                    <div className='all-prop-rightside'>
                                        <div className="card">
                                            <div className="card-body" id='all-prop-headline-card'>
                                                <div>
                                                    <span>16 Properties Found of 53</span>
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
                                                        // <div className="col-12 loading_data">
                                                        //     <Skeleton height={20} count={22} />
                                                        // </div>
                                                        <Loader />
                                                    ) :
                                                        AllPropertieSataticCards?.map((ele) => (
                                                            <Link href="">
                                                                <Card id='all_prop_main_card' key={ele.id}>
                                                                    <div>
                                                                        <Card.Img variant="top" id='all_prop_card_img' src={ele.image} />
                                                                    </div>
                                                                    <div>
                                                                        <Card.Body id='all_prop_card_body'>
                                                                            <span className='all_prop_feature'>
                                                                                {ele.feature}
                                                                            </span>
                                                                            <span className='all_prop_like'>
                                                                                <AiOutlineHeart size={25} />
                                                                            </span>
                                                                            <span className='all_prop_sell'>
                                                                                {ele.sell}
                                                                            </span>
                                                                            <span className='all_prop_price'>
                                                                                {ele.price}
                                                                            </span>

                                                                            <div>
                                                                                <div id='all_prop_sub_body'>
                                                                                    <BiHomeSmile size={23} />
                                                                                    <span className='sub_body_title'> {ele.prop_type} </span>
                                                                                </div>
                                                                                <div id='sub_body_middletext'>
                                                                                    <span>
                                                                                        {ele.prop_loc}
                                                                                    </span>
                                                                                    <p>
                                                                                        {ele.prop_city}
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                            <Card.Footer id='all_prop_card_footer'>
                                                                                <div className='all_footer_body'>
                                                                                    <div className='row'>
                                                                                        <div className='col-sm-12 col-md-6 col-lg-3'>
                                                                                            <RiHotelBedLine size={25} />
                                                                                            <span className='text_footer'> {ele.bedroom} </span>
                                                                                        </div>
                                                                                        <div className='col-sm-12 col-md-6 col-lg-3'>
                                                                                            <BiCctv size={25} />
                                                                                            <span className='text_footer'> {ele.cctv} </span>
                                                                                        </div>

                                                                                        <div className='col-sm-12 col-md-6 col-lg-3'>
                                                                                            <RiBuilding3Line size={25} />
                                                                                            <span className='text_footer'> {ele.sq_fit} </span>
                                                                                        </div>
                                                                                        <div className='col-sm-12 col-md-6 col-lg-3'>
                                                                                            <FiDroplet size={25} />
                                                                                            <span className='text_footer'> {ele.pool} </span>
                                                                                        </div>
                                                                                        <div className='col-sm-12 col-md-6 col-lg-3'>
                                                                                            <FiCloudDrizzle size={25} />
                                                                                            <span className='text_footer'> {ele.bath} </span>
                                                                                        </div>
                                                                                        <div className='col-sm-12 col-md-6 col-lg-3'>
                                                                                            <RiPlantLine size={25} />
                                                                                            <span className='text_footer'> {ele.garden} </span>
                                                                                        </div>
                                                                                        <div className='col-sm-12 col-md-6 col-lg-3'>
                                                                                            <RiParkingBoxLine size={25} />
                                                                                            <span className='text_footer'> {ele.parking} </span>
                                                                                        </div>
                                                                                        <div className='col-sm-12 col-md-6 col-lg-3'>
                                                                                            <GiGamepad size={25} />
                                                                                            <span className='text_footer'> {ele.games}</span>
                                                                                        </div>
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
                                                            AllPropertieSataticCards?.map((ele) => (
                                                                <div className='col-12 col-md-6 col-lg-4'>
                                                                    <div className='card' id='main_card'>
                                                                        <img className='card-img' id='card_img' src={ele.image} />
                                                                        <div className="card-img-overlay">
                                                                            <span className='feture_tag'>
                                                                                {ele.feature}
                                                                            </span>
                                                                            <span className='like_tag'>
                                                                                <AiOutlineHeart size={25} />
                                                                            </span>
                                                                        </div>

                                                                        <div className='card-body'>
                                                                            <span className='sell_teg'>
                                                                                {ele.sell}
                                                                            </span>
                                                                            <span className='price_teg'>
                                                                                {ele.price}
                                                                            </span>
                                                                            <div id='feature_card_mainbody'>

                                                                                <BiHomeSmile size={23} />
                                                                                <span className='feture_body_title'> {ele.prop_type} </span>
                                                                            </div>
                                                                            <div id='feature_card_middletext'>
                                                                                <span>
                                                                                    {ele.prop_loc}
                                                                                </span>
                                                                                <p>
                                                                                    {ele.prop_city}
                                                                                </p>
                                                                            </div>
                                                                        </div>


                                                                        <div className='card-footer' id='feature_card_footer'>
                                                                            <div className='footer_body'>
                                                                                <div id='footer_content'>
                                                                                    <RiHotelBedLine size={22} />
                                                                                    <p className='text_footer'> {ele.bedroom} </p>
                                                                                </div>
                                                                                <div id='footer_content'>
                                                                                    <RiBuilding3Line size={22} />
                                                                                    <p className='text_footer'> {ele.sq_fit} </p>
                                                                                </div>

                                                                            </div>
                                                                            <div className='footer_body'>
                                                                                <div id='footer_content'>
                                                                                    <FiCloudDrizzle size={22} />
                                                                                    <p className='text_footer'> {ele.bath} </p>
                                                                                </div>
                                                                                <div id='footer_content'>
                                                                                    <RiParkingBoxLine size={22} />
                                                                                    <p className='text_footer'> {ele.parking} </p>
                                                                                </div>

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
                </div>

            </section >

        </>
    )
}

export default page
