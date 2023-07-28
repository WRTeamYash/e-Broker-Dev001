import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
// import a from 'react-dom'
import HeroSlider, {
    Slide, ButtonsNav
} from "hero-slider";
import Wrapper from "@/Components/Wrapper/Wrapper"
import SlideImage01 from "@/assets/Images/Most_View_1.jpg"
import SlideImage02 from "@/assets/Images/Most_View_2.jpg"
import SlideImage03 from "@/assets/Images/Most_View_3.jpg"
import cityImage01 from "@/assets/Images/City_1.jpg";
import cityImage02 from "@/assets/Images/City_2.jpg";
import cityImage03 from "@/assets/Images/City_3.jpg"
import adminlogo from "@/assets/Images/Superman.jpeg"
import cardImg from '@/assets/Images/Featured_List_1.jpg'
import Catagory from "@/assets/Images/Category_BG.jpg"
import agentimg from "@/assets/Images/Superman.jpeg"


import { FiArrowRightCircle, FiCloudDrizzle, FiEye } from 'react-icons/fi'
import { AiOutlineArrowRight, AiOutlineHeart } from 'react-icons/ai'
import { BiHomeSmile } from 'react-icons/bi'
import { RiHotelBedLine, RiParkingBoxLine, RiBuilding3Line } from 'react-icons/ri'
import { BsArrowRight } from "react-icons/bs"
import { FaEye } from 'react-icons/fa'
import { FiSearch, FiArrowRight } from 'react-icons/fi'
import { GoPlay } from 'react-icons/go'
import { BiFilter } from 'react-icons/bi'
import { MdOutlineVilla } from "react-icons/md";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import FilterModal from '../Filter/FilterModal';







const HomePage = () => {
    // console.log(SlideImage01.src)
    const renderBullet = (index, className) => {
        return `<span class="${className}" style="background-color: #087c7c;
    outline: 1px solid #000;
    font-size: 20px;
    padding: 8px;
    border: 2px solid #fff;"></span>`;
    };

    const [showFilterModal, setShowFilterModal] = useState(false);
    const handleOpenFilterModal = () => {
        setShowFilterModal(true);
    };

    const handleCloseModal = () => {
        setShowFilterModal(false);
    };
    const handleFilter = () => {
        console.log("test")
        handleOpenFilterModal()
    }
    return (
        <>  
            <section id='mainheroImage'>
                <HeroSlider
                    height={"90vh"}
                    slidingAnimation="fade"
                    orientation="horizontal"
                    initialSlide={1}
                    onBeforeChange={(previousSlide, nextSlide) =>
                        console.log("onBeforeChange", previousSlide, nextSlide)
                    }
                    onChange={(nextSlide) => console.log("onChange", nextSlide)}
                    onAfterChange={(nextSlide) => console.log("onAfterChange", nextSlide)}
                    settings={{
                        slidingDuration: 400,
                        slidingDelay: 100,
                        shouldAutoplay: true,
                        shouldDisplayButtons: true,
                        autoplayDuration: 8000,
                        height: "100vh"
                    }}
                >
                    {/* <div id='herotexts'>
                        <div>
                            <span className='btn' id='priceteg'> $1,999,000</span>
                            <h1 id="hero_headlines">Serene Haven Retreat</h1>
                            <span id='specifiaction'>Bedrooms: 5, Bathrooms: 4, Balcony: 2, Pool: 1</span>
                        </div>
                        <div>

                        </div>
                        <div id='viewall_hero_prop'>
                            <button className='view_prop'>
                                <FaEye size={20} className='icon' />
                                view Properties
                            </button>
                            <div>
                                <GoPlay className='playbutton' size={50} />
                            </div>
                        </div>

                    </div> */}

                    <Slide
                        background={{
                            backgroundImageSrc: SlideImage01.src,
                        }}

                    >
                        <Wrapper>
                            <div id='herotexts'>
                                <div>
                                    <span className='btn' id='priceteg'> $1,999,000</span>
                                    <h1 id="hero_headlines">Serene Haven Retreat</h1>
                                    <span id='specifiaction'>Bedrooms: 5, Bathrooms: 4, Balcony: 2, Pool: 1</span>
                                </div>

                                <div id='viewall_hero_prop'>
                                    <button className='view_prop'>
                                        <FaEye size={20} className='icon' />
                                        view Properties
                                    </button>
                                    <div>
                                        <GoPlay className='playbutton' size={50} />
                                    </div>
                                </div>

                            </div>
                        </Wrapper>
                    </Slide>

                    <Slide
                        background={{
                            backgroundImageSrc: SlideImage02.src,
                        }}
                    >
                        <Wrapper>
                            <div id='herotexts'>
                                <div>
                                    <span className='btn' id='priceteg'> $1,999,000</span>
                                    <h1 id="hero_headlines">Serene Haven Retreat</h1>
                                    <span id='specifiaction'>Bedrooms: 5, Bathrooms: 4, Balcony: 2, Pool: 1</span>
                                </div>

                                <div id='viewall_hero_prop'>
                                    <button className='view_prop'>
                                        <FaEye size={20} className='icon' />
                                        view Properties
                                    </button>
                                    <div>
                                        <GoPlay className='playbutton' size={50} />
                                    </div>
                                </div>

                            </div>
                        </Wrapper>
                    </Slide>

                    <Slide
                        background={{
                            backgroundImageSrc: SlideImage03.src,
                        }}
                    >
                        <Wrapper>
                            <div id='herotexts'>
                                <div>
                                    <span className='btn' id='priceteg'> $1,999,000</span>
                                    <h1 id="hero_headlines">Serene Haven Retreat</h1>
                                    <span id='specifiaction'>Bedrooms: 5, Bathrooms: 4, Balcony: 2, Pool: 1</span>
                                </div>

                                <div id='viewall_hero_prop'>
                                    <button className='view_prop'>
                                        <FaEye size={20} className='icon' />
                                        view Properties
                                    </button>
                                    <div>
                                        <GoPlay className='playbutton' size={50} />
                                    </div>
                                </div>

                            </div>
                        </Wrapper>
                    </Slide>

                    {/* <ButtonsNav /> */}

                </HeroSlider>
                <div className="container" id='searchbox'>
                    <ButtonGroup >
                        <ul className="nav nav-tabs" id="tabs">
                            <li className=""  >
                                <a className="nav-link tab-active" aria-current="page" id="sellbutton" onClick={(e) => {
                                    e.target.classList.add('tab-active')
                                    document.getElementById('rentbutton').classList.remove('tab-active')
                                }}>Sell</a>
                            </li>
                            <li className="">
                                <a className="nav-link" onClick={(e) => {
                                    e.target.classList.add('tab-active')
                                    document.getElementById('sellbutton').classList.remove('tab-active')

                                }} aria-current="page" id="rentbutton">Rent</a>
                            </li>
                        </ul>
                    </ButtonGroup>
                    <div id='searchcard'>
                        <div id='searchbuttoon'>
                            <FiSearch size={20} />
                            <input className='searchinput' placeholder='Search your propery' />
                        </div>
                        <div id='leftside-buttons'>
                            <button className='filter' onClick={()=>{
                                console.log("showFilterModal")
                                setShowFilterModal(true)

                                }}> <BiFilter size={25}  /> Filter</button>
                            <button className='find'>Search</button>

                        </div>
                    </div>
                </div>
                <FilterModal isOpen={showFilterModal} onClose={handleCloseModal} />
            </section>



            {/* Feature Section  */}
            <section id='feature'>
                <div className='feature_sec'>

                    <div id='main_features'>
                        <div className='feature_header'
                        >

                            <span className='headline' data-aos="fade-right" data-aos-duration="1000">
                                Discover Our <span
                                // className="hovertext1" 
                                >
                                    <span
                                        // className="text" data-text="Featured"
                                        className='highlight'
                                        data-aos="fade-left" data-aos-duration="5000"
                                    > Featured</span>
                                </span> Listings
                            </span>
                            <div className='rightside_header'>
                                <button className="learn-more" id="viewall">
                                    <span aria-hidden="true" className="circle">
                                        <span className="icon arrow"></span>
                                    </span>
                                    <span className="button-text">See All Properties</span>
                                </button>
                                {/* <button id="viewall01">
                                    <AiOutlineArrowRight className='mx-3' id="arrow" size={25} />
                                    <span >See All Properties</span>
                                </button> */}
                            </div>

                        </div>
                        <div className='mobile_view_headline01'>
                            <div className='apart_headline'>
                                <span className='headline'>
                                    Discover Our <span className="hovertext1">
                                        <span className="text" data-text="Featured"> Featured</span>
                                    </span> Listings
                                </span>
                            </div>
                            <div>
                                <button className='view_all_arrow'><BsArrowRight size={25} /></button>
                            </div>
                        </div>
                    </div>
                    <div className='laptop_view'>
                        <Row id='feature_cards'>
                            <Col sm className='mt-2'>
                                <Card id='main_card'>
                                    <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                    <Card.Body>
                                        <span className='feture_tag'>
                                            Feature
                                        </span>
                                        <span className='like_tag'>
                                            <AiOutlineHeart size={25} />
                                        </span>
                                        <span className='sell_teg'>
                                            Sell
                                        </span>
                                        <span className='price_teg'>
                                            $1,999,000 / USD
                                        </span>

                                        <div>
                                            <div id='feature_card_mainbody'>
                                                <BiHomeSmile size={23} />
                                                <span className='feture_body_title'> Home </span>
                                            </div>
                                            <div id='feature_card_middletext'>
                                                <span>
                                                    Luxury villa in Rego Park
                                                </span>
                                                <p>
                                                    California City, CA, USA
                                                </p>
                                            </div>
                                        </div>
                                    </Card.Body>

                                    <Card.Footer id='feature_card_footer'>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <RiHotelBedLine size={22} />
                                                <p className='text_footer'> 3 Bedrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiBuilding3Line size={22} />
                                                <p className='text_footer'> 1200 Sqft </p>
                                            </div>

                                        </div>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <FiCloudDrizzle size={22} />
                                                <p className='text_footer'> 4 Bathrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiParkingBoxLine size={22} />
                                                <p className='text_footer'> 2 Parking </p>
                                            </div>

                                        </div>
                                    </Card.Footer>
                                </Card>
                            </Col>
                            <Col sm className='mt-2'>
                                <Card id='main_card'>
                                    <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                    <Card.Body>
                                        <span className='feture_tag'>
                                            Feature
                                        </span>
                                        <span className='like_tag'>
                                            <AiOutlineHeart size={25} />
                                        </span>
                                        <span className='sell_teg'>
                                            Sell
                                        </span>
                                        <span className='price_teg'>
                                            $1,999,000 / USD
                                        </span>

                                        <div>
                                            <div id='feature_card_mainbody'>
                                                <BiHomeSmile size={23} />
                                                <span className='feture_body_title'> Home </span>
                                            </div>
                                            <div id='feature_card_middletext'>
                                                <span>
                                                    Luxury villa in Rego Park
                                                </span>
                                                <p>
                                                    California City, CA, USA
                                                </p>
                                            </div>
                                        </div>
                                    </Card.Body>

                                    <Card.Footer id='feature_card_footer'>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <RiHotelBedLine size={22} />
                                                <p className='text_footer'> 3 Bedrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiBuilding3Line size={22} />
                                                <p className='text_footer'> 1200 Sqft </p>
                                            </div>

                                        </div>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <FiCloudDrizzle size={22} />
                                                <p className='text_footer'> 4 Bathrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiParkingBoxLine size={22} />
                                                <p className='text_footer'> 2 Parking </p>
                                            </div>

                                        </div>
                                    </Card.Footer>
                                </Card>
                            </Col>
                            <Col sm className='mt-2'>
                                <Card id='main_card'>
                                    <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                    <Card.Body>
                                        <span className='feture_tag'>
                                            Feature
                                        </span>
                                        <span className='like_tag'>
                                            <AiOutlineHeart size={25} />
                                        </span>
                                        <span className='sell_teg'>
                                            Sell
                                        </span>
                                        <span className='price_teg'>
                                            $1,999,000 / USD
                                        </span>

                                        <div>
                                            <div id='feature_card_mainbody'>
                                                <BiHomeSmile size={23} />
                                                <span className='feture_body_title'> Home </span>
                                            </div>
                                            <div id='feature_card_middletext'>
                                                <span>
                                                    Luxury villa in Rego Park
                                                </span>
                                                <p>
                                                    California City, CA, USA
                                                </p>
                                            </div>
                                        </div>
                                    </Card.Body>

                                    <Card.Footer id='feature_card_footer'>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <RiHotelBedLine size={22} />
                                                <p className='text_footer'> 3 Bedrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiBuilding3Line size={22} />
                                                <p className='text_footer'> 1200 Sqft </p>
                                            </div>

                                        </div>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <FiCloudDrizzle size={22} />
                                                <p className='text_footer'> 4 Bathrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiParkingBoxLine size={22} />
                                                <p className='text_footer'> 2 Parking </p>
                                            </div>

                                        </div>
                                    </Card.Footer>
                                </Card>
                            </Col>
                            <Col sm className='mt-2'>
                                <Card id='main_card'>
                                    <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                    <Card.Body>
                                        <span className='feture_tag'>
                                            Feature
                                        </span>
                                        <span className='like_tag'>
                                            <AiOutlineHeart size={25} />
                                        </span>
                                        <span className='sell_teg'>
                                            Sell
                                        </span>
                                        <span className='price_teg'>
                                            $1,999,000 / USD
                                        </span>

                                        <div>
                                            <div id='feature_card_mainbody'>
                                                <BiHomeSmile size={23} />
                                                <span className='feture_body_title'> Home </span>
                                            </div>
                                            <div id='feature_card_middletext'>
                                                <span>
                                                    Luxury villa in Rego Park
                                                </span>
                                                <p>
                                                    California City, CA, USA
                                                </p>
                                            </div>
                                        </div>
                                    </Card.Body>

                                    <Card.Footer id='feature_card_footer'>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <RiHotelBedLine size={22} />
                                                <p className='text_footer'> 3 Bedrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiBuilding3Line size={22} />
                                                <p className='text_footer'> 1200 Sqft </p>
                                            </div>

                                        </div>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <FiCloudDrizzle size={22} />
                                                <p className='text_footer'> 4 Bathrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiParkingBoxLine size={22} />
                                                <p className='text_footer'> 2 Parking </p>
                                            </div>

                                        </div>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        </Row>
                        <Row id='feature_cards_bottom'>
                            <Col sm className='mt-2'>
                                <Card id='main_card'>
                                    <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                    <Card.Body>
                                        <span className='feture_tag'>
                                            Feature
                                        </span>
                                        <span className='like_tag'>
                                            <AiOutlineHeart size={25} />
                                        </span>
                                        <span className='sell_teg'>
                                            Sell
                                        </span>
                                        <span className='price_teg'>
                                            $1,999,000 / USD
                                        </span>

                                        <div>
                                            <div id='feature_card_mainbody'>
                                                <BiHomeSmile size={23} />
                                                <span className='feture_body_title'> Home </span>
                                            </div>
                                            <div id='feature_card_middletext'>
                                                <span>
                                                    Luxury villa in Rego Park
                                                </span>
                                                <p>
                                                    California City, CA, USA
                                                </p>
                                            </div>
                                        </div>
                                    </Card.Body>

                                    <Card.Footer id='feature_card_footer'>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <RiHotelBedLine size={22} />
                                                <p className='text_footer'> 3 Bedrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiBuilding3Line size={22} />
                                                <p className='text_footer'> 1200 Sqft </p>
                                            </div>

                                        </div>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <FiCloudDrizzle size={22} />
                                                <p className='text_footer'> 4 Bathrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiParkingBoxLine size={22} />
                                                <p className='text_footer'> 2 Parking </p>
                                            </div>

                                        </div>
                                    </Card.Footer>
                                </Card>
                            </Col>
                            <Col sm className='mt-2'>
                                <Card id='main_card'>
                                    <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                    <Card.Body>
                                        <span className='feture_tag'>
                                            Feature
                                        </span>
                                        <span className='like_tag'>
                                            <AiOutlineHeart size={25} />
                                        </span>
                                        <span className='sell_teg'>
                                            Sell
                                        </span>
                                        <span className='price_teg'>
                                            $1,999,000 / USD
                                        </span>

                                        <div>
                                            <div id='feature_card_mainbody'>
                                                <BiHomeSmile size={23} />
                                                <span className='feture_body_title'> Home </span>
                                            </div>
                                            <div id='feature_card_middletext'>
                                                <span>
                                                    Luxury villa in Rego Park
                                                </span>
                                                <p>
                                                    California City, CA, USA
                                                </p>
                                            </div>
                                        </div>
                                    </Card.Body>

                                    <Card.Footer id='feature_card_footer'>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <RiHotelBedLine size={22} />
                                                <p className='text_footer'> 3 Bedrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiBuilding3Line size={22} />
                                                <p className='text_footer'> 1200 Sqft </p>
                                            </div>

                                        </div>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <FiCloudDrizzle size={22} />
                                                <p className='text_footer'> 4 Bathrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiParkingBoxLine size={22} />
                                                <p className='text_footer'> 2 Parking </p>
                                            </div>

                                        </div>
                                    </Card.Footer>
                                </Card>
                            </Col>
                            <Col sm className='mt-2'>
                                <Card id='main_card'>
                                    <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                    <Card.Body>
                                        <span className='feture_tag'>
                                            Feature
                                        </span>
                                        <span className='like_tag'>
                                            <AiOutlineHeart size={25} />
                                        </span>
                                        <span className='sell_teg'>
                                            Sell
                                        </span>
                                        <span className='price_teg'>
                                            $1,999,000 / USD
                                        </span>

                                        <div>
                                            <div id='feature_card_mainbody'>
                                                <BiHomeSmile size={23} />
                                                <span className='feture_body_title'> Home </span>
                                            </div>
                                            <div id='feature_card_middletext'>
                                                <span>
                                                    Luxury villa in Rego Park
                                                </span>
                                                <p>
                                                    California City, CA, USA
                                                </p>
                                            </div>
                                        </div>
                                    </Card.Body>

                                    <Card.Footer id='feature_card_footer'>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <RiHotelBedLine size={22} />
                                                <p className='text_footer'> 3 Bedrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiBuilding3Line size={22} />
                                                <p className='text_footer'> 1200 Sqft </p>
                                            </div>

                                        </div>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <FiCloudDrizzle size={22} />
                                                <p className='text_footer'> 4 Bathrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiParkingBoxLine size={22} />
                                                <p className='text_footer'> 2 Parking </p>
                                            </div>

                                        </div>
                                    </Card.Footer>
                                </Card>
                            </Col>
                            <Col sm className='mt-2'>
                                <Card id='main_card'>
                                    <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                    <Card.Body>
                                        <span className='feture_tag'>
                                            Feature
                                        </span>
                                        <span className='like_tag'>
                                            <AiOutlineHeart size={25} />
                                        </span>
                                        <span className='sell_teg'>
                                            Sell
                                        </span>
                                        <span className='price_teg'>
                                            $1,999,000 / USD
                                        </span>

                                        <div>
                                            <div id='feature_card_mainbody'>
                                                <BiHomeSmile size={23} />
                                                <span className='feture_body_title'> Home </span>
                                            </div>
                                            <div id='feature_card_middletext'>
                                                <span>
                                                    Luxury villa in Rego Park
                                                </span>
                                                <p>
                                                    California City, CA, USA
                                                </p>
                                            </div>
                                        </div>
                                    </Card.Body>

                                    <Card.Footer id='feature_card_footer'>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <RiHotelBedLine size={22} />
                                                <p className='text_footer'> 3 Bedrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiBuilding3Line size={22} />
                                                <p className='text_footer'> 1200 Sqft </p>
                                            </div>

                                        </div>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <FiCloudDrizzle size={22} />
                                                <p className='text_footer'> 4 Bathrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiParkingBoxLine size={22} />
                                                <p className='text_footer'> 2 Parking </p>
                                            </div>

                                        </div>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                    <div className='tablat_view'>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            freeMode={true}
                            pagination={{
                                clickable: true,
                                renderBullet: renderBullet
                            }}
                            modules={[FreeMode, Pagination]}
                        // className="mySwiper"
                        // style={{
                        //     width: "1030px", height: "450px"
                        // }}
                        >
                            <SwiperSlide >
                                <Card id='fea_main_card'>
                                    <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                    <Card.Body>
                                        <span className='feture_tag'>
                                            Feature
                                        </span>
                                        <span className='like_tag'>
                                            <AiOutlineHeart size={25} />
                                        </span>
                                        <span className='sell_teg'>
                                            Sell
                                        </span>
                                        <span className='price_teg'>
                                            $1,999,000 / USD
                                        </span>

                                        <div>
                                            <div id='feature_card_mainbody'>
                                                <BiHomeSmile size={23} />
                                                <span className='feture_body_title'> Home </span>
                                            </div>
                                            <div id='feature_card_middletext'>
                                                <span>
                                                    Luxury villa in Rego Park
                                                </span>
                                                <p>
                                                    California City, CA, USA
                                                </p>
                                            </div>
                                        </div>
                                    </Card.Body>

                                    <Card.Footer id='feature_card_footer'>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <RiHotelBedLine size={22} />
                                                <p className='text_footer'> 3 Bedrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiBuilding3Line size={22} />
                                                <p className='text_footer'> 1200 Sqft </p>
                                            </div>

                                        </div>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <FiCloudDrizzle size={22} />
                                                <p className='text_footer'> 4 Bathrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiParkingBoxLine size={22} />
                                                <p className='text_footer'> 2 Parking </p>
                                            </div>

                                        </div>
                                    </Card.Footer>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide >
                                <Card id='fea_main_card'>
                                    <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                    <Card.Body>
                                        <span className='feture_tag'>
                                            Feature
                                        </span>
                                        <span className='like_tag'>
                                            <AiOutlineHeart size={25} />
                                        </span>
                                        <span className='sell_teg'>
                                            Sell
                                        </span>
                                        <span className='price_teg'>
                                            $1,999,000 / USD
                                        </span>

                                        <div>
                                            <div id='feature_card_mainbody'>
                                                <BiHomeSmile size={23} />
                                                <span className='feture_body_title'> Home </span>
                                            </div>
                                            <div id='feature_card_middletext'>
                                                <span>
                                                    Luxury villa in Rego Park
                                                </span>
                                                <p>
                                                    California City, CA, USA
                                                </p>
                                            </div>
                                        </div>
                                    </Card.Body>

                                    <Card.Footer id='feature_card_footer'>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <RiHotelBedLine size={22} />
                                                <p className='text_footer'> 3 Bedrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiBuilding3Line size={22} />
                                                <p className='text_footer'> 1200 Sqft </p>
                                            </div>

                                        </div>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <FiCloudDrizzle size={22} />
                                                <p className='text_footer'> 4 Bathrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiParkingBoxLine size={22} />
                                                <p className='text_footer'> 2 Parking </p>
                                            </div>

                                        </div>
                                    </Card.Footer>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide >
                                <Card id='fea_main_card'>
                                    <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                    <Card.Body>
                                        <span className='feture_tag'>
                                            Feature
                                        </span>
                                        <span className='like_tag'>
                                            <AiOutlineHeart size={25} />
                                        </span>
                                        <span className='sell_teg'>
                                            Sell
                                        </span>
                                        <span className='price_teg'>
                                            $1,999,000 / USD
                                        </span>

                                        <div>
                                            <div id='feature_card_mainbody'>
                                                <BiHomeSmile size={23} />
                                                <span className='feture_body_title'> Home </span>
                                            </div>
                                            <div id='feature_card_middletext'>
                                                <span>
                                                    Luxury villa in Rego Park
                                                </span>
                                                <p>
                                                    California City, CA, USA
                                                </p>
                                            </div>
                                        </div>
                                    </Card.Body>

                                    <Card.Footer id='feature_card_footer'>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <RiHotelBedLine size={22} />
                                                <p className='text_footer'> 3 Bedrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiBuilding3Line size={22} />
                                                <p className='text_footer'> 1200 Sqft </p>
                                            </div>

                                        </div>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <FiCloudDrizzle size={22} />
                                                <p className='text_footer'> 4 Bathrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiParkingBoxLine size={22} />
                                                <p className='text_footer'> 2 Parking </p>
                                            </div>

                                        </div>
                                    </Card.Footer>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide >
                                <Card id='fea_main_card'>
                                    <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                    <Card.Body>
                                        <span className='feture_tag'>
                                            Feature
                                        </span>
                                        <span className='like_tag'>
                                            <AiOutlineHeart size={25} />
                                        </span>
                                        <span className='sell_teg'>
                                            Sell
                                        </span>
                                        <span className='price_teg'>
                                            $1,999,000 / USD
                                        </span>

                                        <div>
                                            <div id='feature_card_mainbody'>
                                                <BiHomeSmile size={23} />
                                                <span className='feture_body_title'> Home </span>
                                            </div>
                                            <div id='feature_card_middletext'>
                                                <span>
                                                    Luxury villa in Rego Park
                                                </span>
                                                <p>
                                                    California City, CA, USA
                                                </p>
                                            </div>
                                        </div>
                                    </Card.Body>

                                    <Card.Footer id='feature_card_footer'>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <RiHotelBedLine size={22} />
                                                <p className='text_footer'> 3 Bedrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiBuilding3Line size={22} />
                                                <p className='text_footer'> 1200 Sqft </p>
                                            </div>

                                        </div>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <FiCloudDrizzle size={22} />
                                                <p className='text_footer'> 4 Bathrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiParkingBoxLine size={22} />
                                                <p className='text_footer'> 2 Parking </p>
                                            </div>

                                        </div>
                                    </Card.Footer>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide >
                                <Card id='fea_main_card'>
                                    <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                    <Card.Body>
                                        <span className='feture_tag'>
                                            Feature
                                        </span>
                                        <span className='like_tag'>
                                            <AiOutlineHeart size={25} />
                                        </span>
                                        <span className='sell_teg'>
                                            Sell
                                        </span>
                                        <span className='price_teg'>
                                            $1,999,000 / USD
                                        </span>

                                        <div>
                                            <div id='feature_card_mainbody'>
                                                <BiHomeSmile size={23} />
                                                <span className='feture_body_title'> Home </span>
                                            </div>
                                            <div id='feature_card_middletext'>
                                                <span>
                                                    Luxury villa in Rego Park
                                                </span>
                                                <p>
                                                    California City, CA, USA
                                                </p>
                                            </div>
                                        </div>
                                    </Card.Body>

                                    <Card.Footer id='feature_card_footer'>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <RiHotelBedLine size={22} />
                                                <p className='text_footer'> 3 Bedrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiBuilding3Line size={22} />
                                                <p className='text_footer'> 1200 Sqft </p>
                                            </div>

                                        </div>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <FiCloudDrizzle size={22} />
                                                <p className='text_footer'> 4 Bathrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiParkingBoxLine size={22} />
                                                <p className='text_footer'> 2 Parking </p>
                                            </div>

                                        </div>
                                    </Card.Footer>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide >
                                <Card id='fea_main_card'>
                                    <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                    <Card.Body>
                                        <span className='feture_tag'>
                                            Feature
                                        </span>
                                        <span className='like_tag'>
                                            <AiOutlineHeart size={25} />
                                        </span>
                                        <span className='sell_teg'>
                                            Sell
                                        </span>
                                        <span className='price_teg'>
                                            $1,999,000 / USD
                                        </span>

                                        <div>
                                            <div id='feature_card_mainbody'>
                                                <BiHomeSmile size={23} />
                                                <span className='feture_body_title'> Home </span>
                                            </div>
                                            <div id='feature_card_middletext'>
                                                <span>
                                                    Luxury villa in Rego Park
                                                </span>
                                                <p>
                                                    California City, CA, USA
                                                </p>
                                            </div>
                                        </div>
                                    </Card.Body>

                                    <Card.Footer id='feature_card_footer'>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <RiHotelBedLine size={22} />
                                                <p className='text_footer'> 3 Bedrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiBuilding3Line size={22} />
                                                <p className='text_footer'> 1200 Sqft </p>
                                            </div>

                                        </div>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <FiCloudDrizzle size={22} />
                                                <p className='text_footer'> 4 Bathrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiParkingBoxLine size={22} />
                                                <p className='text_footer'> 2 Parking </p>
                                            </div>

                                        </div>
                                    </Card.Footer>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide >
                                <Card id='fea_main_card'>
                                    <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                    <Card.Body>
                                        <span className='feture_tag'>
                                            Feature
                                        </span>
                                        <span className='like_tag'>
                                            <AiOutlineHeart size={25} />
                                        </span>
                                        <span className='sell_teg'>
                                            Sell
                                        </span>
                                        <span className='price_teg'>
                                            $1,999,000 / USD
                                        </span>

                                        <div>
                                            <div id='feature_card_mainbody'>
                                                <BiHomeSmile size={23} />
                                                <span className='feture_body_title'> Home </span>
                                            </div>
                                            <div id='feature_card_middletext'>
                                                <span>
                                                    Luxury villa in Rego Park
                                                </span>
                                                <p>
                                                    California City, CA, USA
                                                </p>
                                            </div>
                                        </div>
                                    </Card.Body>

                                    <Card.Footer id='feature_card_footer'>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <RiHotelBedLine size={22} />
                                                <p className='text_footer'> 3 Bedrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiBuilding3Line size={22} />
                                                <p className='text_footer'> 1200 Sqft </p>
                                            </div>

                                        </div>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <FiCloudDrizzle size={22} />
                                                <p className='text_footer'> 4 Bathrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiParkingBoxLine size={22} />
                                                <p className='text_footer'> 2 Parking </p>
                                            </div>

                                        </div>
                                    </Card.Footer>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide >
                                <Card id='fea_main_card'>
                                    <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                    <Card.Body>
                                        <span className='feture_tag'>
                                            Feature
                                        </span>
                                        <span className='like_tag'>
                                            <AiOutlineHeart size={25} />
                                        </span>
                                        <span className='sell_teg'>
                                            Sell
                                        </span>
                                        <span className='price_teg'>
                                            $1,999,000 / USD
                                        </span>

                                        <div>
                                            <div id='feature_card_mainbody'>
                                                <BiHomeSmile size={23} />
                                                <span className='feture_body_title'> Home </span>
                                            </div>
                                            <div id='feature_card_middletext'>
                                                <span>
                                                    Luxury villa in Rego Park
                                                </span>
                                                <p>
                                                    California City, CA, USA
                                                </p>
                                            </div>
                                        </div>
                                    </Card.Body>

                                    <Card.Footer id='feature_card_footer'>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <RiHotelBedLine size={22} />
                                                <p className='text_footer'> 3 Bedrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiBuilding3Line size={22} />
                                                <p className='text_footer'> 1200 Sqft </p>
                                            </div>

                                        </div>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <FiCloudDrizzle size={22} />
                                                <p className='text_footer'> 4 Bathrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiParkingBoxLine size={22} />
                                                <p className='text_footer'> 2 Parking </p>
                                            </div>

                                        </div>
                                    </Card.Footer>
                                </Card>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className='mobile_view'>
                        <Swiper
                            slidesPerView={1.5}
                            spaceBetween={30}
                            freeMode={true}
                            pagination={{
                                clickable: true,
                                renderBullet: renderBullet
                            }}
                            modules={[FreeMode, Pagination]}
                        // className="mySwiper"
                        // style={{
                        //     width: "478px ", height: "450px"
                        // }}
                        >
                            <SwiperSlide id="prop-mobile-swiper-slider" >
                                <Card id='main_card'>
                                    <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                    <Card.Body>
                                        <span className='feture_tag'>
                                            Feature
                                        </span>
                                        <span className='like_tag'>
                                            <AiOutlineHeart size={25} />
                                        </span>
                                        <span className='sell_teg'>
                                            Sell
                                        </span>
                                        <span className='price_teg'>
                                            $1,999,000 / USD
                                        </span>

                                        <div>
                                            <div id='feature_card_mainbody'>
                                                <BiHomeSmile size={23} />
                                                <span className='feture_body_title'> Home </span>
                                            </div>
                                            <div id='feature_card_middletext'>
                                                <span>
                                                    Luxury villa in Rego Park
                                                </span>
                                                <p>
                                                    California City, CA, USA
                                                </p>
                                            </div>
                                        </div>
                                    </Card.Body>

                                    <Card.Footer id='feature_card_footer'>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <RiHotelBedLine size={22} />
                                                <p className='text_footer'> 3 Bedrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiBuilding3Line size={22} />
                                                <p className='text_footer'> 1200 Sqft </p>
                                            </div>

                                        </div>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <FiCloudDrizzle size={22} />
                                                <p className='text_footer'> 4 Bathrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiParkingBoxLine size={22} />
                                                <p className='text_footer'> 2 Parking </p>
                                            </div>

                                        </div>
                                    </Card.Footer>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide id="prop-mobile-swiper-slider" >
                                <Card id='main_card'>
                                    <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                    <Card.Body>
                                        <span className='feture_tag'>
                                            Feature
                                        </span>
                                        <span className='like_tag'>
                                            <AiOutlineHeart size={25} />
                                        </span>
                                        <span className='sell_teg'>
                                            Sell
                                        </span>
                                        <span className='price_teg'>
                                            $1,999,000 / USD
                                        </span>

                                        <div>
                                            <div id='feature_card_mainbody'>
                                                <BiHomeSmile size={23} />
                                                <span className='feture_body_title'> Home </span>
                                            </div>
                                            <div id='feature_card_middletext'>
                                                <span>
                                                    Luxury villa in Rego Park
                                                </span>
                                                <p>
                                                    California City, CA, USA
                                                </p>
                                            </div>
                                        </div>
                                    </Card.Body>

                                    <Card.Footer id='feature_card_footer'>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <RiHotelBedLine size={22} />
                                                <p className='text_footer'> 3 Bedrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiBuilding3Line size={22} />
                                                <p className='text_footer'> 1200 Sqft </p>
                                            </div>

                                        </div>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <FiCloudDrizzle size={22} />
                                                <p className='text_footer'> 4 Bathrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiParkingBoxLine size={22} />
                                                <p className='text_footer'> 2 Parking </p>
                                            </div>

                                        </div>
                                    </Card.Footer>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide id="prop-mobile-swiper-slider" >
                                <Card id='main_card'>
                                    <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                    <Card.Body>
                                        <span className='feture_tag'>
                                            Feature
                                        </span>
                                        <span className='like_tag'>
                                            <AiOutlineHeart size={25} />
                                        </span>
                                        <span className='sell_teg'>
                                            Sell
                                        </span>
                                        <span className='price_teg'>
                                            $1,999,000 / USD
                                        </span>

                                        <div>
                                            <div id='feature_card_mainbody'>
                                                <BiHomeSmile size={23} />
                                                <span className='feture_body_title'> Home </span>
                                            </div>
                                            <div id='feature_card_middletext'>
                                                <span>
                                                    Luxury villa in Rego Park
                                                </span>
                                                <p>
                                                    California City, CA, USA
                                                </p>
                                            </div>
                                        </div>
                                    </Card.Body>

                                    <Card.Footer id='feature_card_footer'>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <RiHotelBedLine size={22} />
                                                <p className='text_footer'> 3 Bedrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiBuilding3Line size={22} />
                                                <p className='text_footer'> 1200 Sqft </p>
                                            </div>

                                        </div>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <FiCloudDrizzle size={22} />
                                                <p className='text_footer'> 4 Bathrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiParkingBoxLine size={22} />
                                                <p className='text_footer'> 2 Parking </p>
                                            </div>

                                        </div>
                                    </Card.Footer>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide id="prop-mobile-swiper-slider" >
                                <Card id='main_card'>
                                    <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                    <Card.Body>
                                        <span className='feture_tag'>
                                            Feature
                                        </span>
                                        <span className='like_tag'>
                                            <AiOutlineHeart size={25} />
                                        </span>
                                        <span className='sell_teg'>
                                            Sell
                                        </span>
                                        <span className='price_teg'>
                                            $1,999,000 / USD
                                        </span>

                                        <div>
                                            <div id='feature_card_mainbody'>
                                                <BiHomeSmile size={23} />
                                                <span className='feture_body_title'> Home </span>
                                            </div>
                                            <div id='feature_card_middletext'>
                                                <span>
                                                    Luxury villa in Rego Park
                                                </span>
                                                <p>
                                                    California City, CA, USA
                                                </p>
                                            </div>
                                        </div>
                                    </Card.Body>

                                    <Card.Footer id='feature_card_footer'>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <RiHotelBedLine size={22} />
                                                <p className='text_footer'> 3 Bedrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiBuilding3Line size={22} />
                                                <p className='text_footer'> 1200 Sqft </p>
                                            </div>

                                        </div>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <FiCloudDrizzle size={22} />
                                                <p className='text_footer'> 4 Bathrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiParkingBoxLine size={22} />
                                                <p className='text_footer'> 2 Parking </p>
                                            </div>

                                        </div>
                                    </Card.Footer>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide id="prop-mobile-swiper-slider" >
                                <Card id='main_card'>
                                    <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                    <Card.Body>
                                        <span className='feture_tag'>
                                            Feature
                                        </span>
                                        <span className='like_tag'>
                                            <AiOutlineHeart size={25} />
                                        </span>
                                        <span className='sell_teg'>
                                            Sell
                                        </span>
                                        <span className='price_teg'>
                                            $1,999,000 / USD
                                        </span>

                                        <div>
                                            <div id='feature_card_mainbody'>
                                                <BiHomeSmile size={23} />
                                                <span className='feture_body_title'> Home </span>
                                            </div>
                                            <div id='feature_card_middletext'>
                                                <span>
                                                    Luxury villa in Rego Park
                                                </span>
                                                <p>
                                                    California City, CA, USA
                                                </p>
                                            </div>
                                        </div>
                                    </Card.Body>

                                    <Card.Footer id='feature_card_footer'>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <RiHotelBedLine size={22} />
                                                <p className='text_footer'> 3 Bedrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiBuilding3Line size={22} />
                                                <p className='text_footer'> 1200 Sqft </p>
                                            </div>

                                        </div>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <FiCloudDrizzle size={22} />
                                                <p className='text_footer'> 4 Bathrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiParkingBoxLine size={22} />
                                                <p className='text_footer'> 2 Parking </p>
                                            </div>

                                        </div>
                                    </Card.Footer>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide id="prop-mobile-swiper-slider" >
                                <Card id='main_card'>
                                    <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                    <Card.Body>
                                        <span className='feture_tag'>
                                            Feature
                                        </span>
                                        <span className='like_tag'>
                                            <AiOutlineHeart size={25} />
                                        </span>
                                        <span className='sell_teg'>
                                            Sell
                                        </span>
                                        <span className='price_teg'>
                                            $1,999,000 / USD
                                        </span>

                                        <div>
                                            <div id='feature_card_mainbody'>
                                                <BiHomeSmile size={23} />
                                                <span className='feture_body_title'> Home </span>
                                            </div>
                                            <div id='feature_card_middletext'>
                                                <span>
                                                    Luxury villa in Rego Park
                                                </span>
                                                <p>
                                                    California City, CA, USA
                                                </p>
                                            </div>
                                        </div>
                                    </Card.Body>

                                    <Card.Footer id='feature_card_footer'>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <RiHotelBedLine size={22} />
                                                <p className='text_footer'> 3 Bedrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiBuilding3Line size={22} />
                                                <p className='text_footer'> 1200 Sqft </p>
                                            </div>

                                        </div>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <FiCloudDrizzle size={22} />
                                                <p className='text_footer'> 4 Bathrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiParkingBoxLine size={22} />
                                                <p className='text_footer'> 2 Parking </p>
                                            </div>

                                        </div>
                                    </Card.Footer>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide id="prop-mobile-swiper-slider" >
                                <Card id='main_card'>
                                    <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                    <Card.Body>
                                        <span className='feture_tag'>
                                            Feature
                                        </span>
                                        <span className='like_tag'>
                                            <AiOutlineHeart size={25} />
                                        </span>
                                        <span className='sell_teg'>
                                            Sell
                                        </span>
                                        <span className='price_teg'>
                                            $1,999,000 / USD
                                        </span>

                                        <div>
                                            <div id='feature_card_mainbody'>
                                                <BiHomeSmile size={23} />
                                                <span className='feture_body_title'> Home </span>
                                            </div>
                                            <div id='feature_card_middletext'>
                                                <span>
                                                    Luxury villa in Rego Park
                                                </span>
                                                <p>
                                                    California City, CA, USA
                                                </p>
                                            </div>
                                        </div>
                                    </Card.Body>

                                    <Card.Footer id='feature_card_footer'>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <RiHotelBedLine size={22} />
                                                <p className='text_footer'> 3 Bedrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiBuilding3Line size={22} />
                                                <p className='text_footer'> 1200 Sqft </p>
                                            </div>

                                        </div>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <FiCloudDrizzle size={22} />
                                                <p className='text_footer'> 4 Bathrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiParkingBoxLine size={22} />
                                                <p className='text_footer'> 2 Parking </p>
                                            </div>

                                        </div>
                                    </Card.Footer>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide id="prop-mobile-swiper-slider" >
                                <Card id='main_card'>
                                    <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                    <Card.Body>
                                        <span className='feture_tag'>
                                            Feature
                                        </span>
                                        <span className='like_tag'>
                                            <AiOutlineHeart size={25} />
                                        </span>
                                        <span className='sell_teg'>
                                            Sell
                                        </span>
                                        <span className='price_teg'>
                                            $1,999,000 / USD
                                        </span>

                                        <div>
                                            <div id='feature_card_mainbody'>
                                                <BiHomeSmile size={23} />
                                                <span className='feture_body_title'> Home </span>
                                            </div>
                                            <div id='feature_card_middletext'>
                                                <span>
                                                    Luxury villa in Rego Park
                                                </span>
                                                <p>
                                                    California City, CA, USA
                                                </p>
                                            </div>
                                        </div>
                                    </Card.Body>

                                    <Card.Footer id='feature_card_footer'>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <RiHotelBedLine size={22} />
                                                <p className='text_footer'> 3 Bedrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiBuilding3Line size={22} />
                                                <p className='text_footer'> 1200 Sqft </p>
                                            </div>

                                        </div>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <FiCloudDrizzle size={22} />
                                                <p className='text_footer'> 4 Bathrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiParkingBoxLine size={22} />
                                                <p className='text_footer'> 2 Parking </p>
                                            </div>

                                        </div>
                                    </Card.Footer>
                                </Card>
                            </SwiperSlide>
                        </Swiper>
                    </div>

                </div>
            </section >



            {/* APARTMENT SECTION */}
            <section id='apartments'>
                <div id='apartment_all_content'>
                    <div id='view_appartment'
                        style={{
                            backgroundImage: `url(${Catagory.src})`,
                        }}
                    >
                        <div className='container' id='appartment_text'>
                            <h1>
                                Explore Apartment Types
                            </h1>
                            <button className='view_apart'>
                                <FaEye size={20} className='icon' />
                                See all categories
                            </button>
                        </div>

                    </div>
                    <div className='mobile_view_headline02'>
                        <div className='apart_headline'>
                            <span className='headline'>
                                Explore Our <span className="hovertext1">
                                    <span className="text" data-text="Apartment"> Apartment</span>
                                </span> Types
                            </span>
                        </div>
                        <div>
                            <button className='view_all_arrow'><BsArrowRight size={25} /></button>
                        </div>
                    </div>
                    <div className='aprt_cards'>
                        <Swiper
                            id='apart_swiper'
                            slidesPerView={4.5}
                            spaceBetween={30}
                            freeMode={true}
                            pagination={{
                                clickable: true,
                                renderBullet: renderBullet
                            }}
                            modules={[FreeMode, Pagination]}
                            // // className="mySwiper"
                            style={{
                                width: "1200px ", height: "330px"
                            }}
                        >
                            <SwiperSlide id="aprt-swiper-slider" >
                                <Card id='main_aprt_card'>
                                    <Card.Body>
                                        <div className='apart_card_content'>
                                            <div id='apart_icon'>
                                                <MdOutlineVilla size={40} className='solo_icon' />
                                            </div>
                                            <div id='apart_name'>
                                                Villa
                                                <div id='propertie_count'>22 Properties</div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide id="aprt-swiper-slider" >
                                <Card id='main_aprt_card'>
                                    <Card.Body>
                                        <div className='apart_card_content'>
                                            <div id='apart_icon'>
                                                <MdOutlineVilla size={40} className='solo_icon' />
                                            </div>
                                            <div id='apart_name'>
                                                Villa
                                                <div id='propertie_count'>22 Properties</div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide id="aprt-swiper-slider" >
                                <Card id='main_aprt_card'>
                                    <Card.Body>
                                        <div className='apart_card_content'>
                                            <div id='apart_icon'>
                                                <MdOutlineVilla size={40} className='solo_icon' />
                                            </div>
                                            <div id='apart_name'>
                                                Villa
                                                <div id='propertie_count'>22 Properties</div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide id="aprt-swiper-slider" >
                                <Card id='main_aprt_card'>
                                    <Card.Body>
                                        <div className='apart_card_content'>
                                            <div id='apart_icon'>
                                                <MdOutlineVilla size={40} className='solo_icon' />
                                            </div>
                                            <div id='apart_name'>
                                                Villa
                                                <div id='propertie_count'>22 Properties</div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide id="aprt-swiper-slider" >
                                <Card id='main_aprt_card'>
                                    <Card.Body>
                                        <div className='apart_card_content'>
                                            <div id='apart_icon'>
                                                <MdOutlineVilla size={40} className='solo_icon' />
                                            </div>
                                            <div id='apart_name'>
                                                Villa
                                                <div id='propertie_count'>22 Properties</div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide id="aprt-swiper-slider" >
                                <Card id='main_aprt_card'>
                                    <Card.Body>
                                        <div className='apart_card_content'>
                                            <div id='apart_icon'>
                                                <MdOutlineVilla size={40} className='solo_icon' />
                                            </div>
                                            <div id='apart_name'>
                                                Villa
                                                <div id='propertie_count'>22 Properties</div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className='apart_mobile_view'>
                        <Swiper
                            id='apart_mobile_swiper'
                            slidesPerView={2.5}
                            spaceBetween={30}
                            freeMode={true}
                            pagination={{
                                clickable: true,
                                renderBullet: renderBullet
                            }}
                            modules={[FreeMode, Pagination]}
                            // // className="mySwiper"
                            style={{
                                width: "1200px ", height: "330px"
                            }}
                        >
                            <SwiperSlide id="aprt-swiper-slider" >
                                <Card id='main_aprt_card'>
                                    <Card.Body>
                                        <div className='apart_card_content'>
                                            <div id='apart_icon'>
                                                <MdOutlineVilla size={40} className='solo_icon' />
                                            </div>
                                            <div id='apart_name'>
                                                Villa
                                                <div id='propertie_count'>22 Properties</div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide id="aprt-swiper-slider" >
                                <Card id='main_aprt_card'>
                                    <Card.Body>
                                        <div className='apart_card_content'>
                                            <div id='apart_icon'>
                                                <MdOutlineVilla size={40} className='solo_icon' />
                                            </div>
                                            <div id='apart_name'>
                                                Villa
                                                <div id='propertie_count'>22 Properties</div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide id="aprt-swiper-slider" >
                                <Card id='main_aprt_card'>
                                    <Card.Body>
                                        <div className='apart_card_content'>
                                            <div id='apart_icon'>
                                                <MdOutlineVilla size={40} className='solo_icon' />
                                            </div>
                                            <div id='apart_name'>
                                                Villa
                                                <div id='propertie_count'>22 Properties</div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide id="aprt-swiper-slider" >
                                <Card id='main_aprt_card'>
                                    <Card.Body>
                                        <div className='apart_card_content'>
                                            <div id='apart_icon'>
                                                <MdOutlineVilla size={40} className='solo_icon' />
                                            </div>
                                            <div id='apart_name'>
                                                Villa
                                                <div id='propertie_count'>22 Properties</div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide id="aprt-swiper-slider" >
                                <Card id='main_aprt_card'>
                                    <Card.Body>
                                        <div className='apart_card_content'>
                                            <div id='apart_icon'>
                                                <MdOutlineVilla size={40} className='solo_icon' />
                                            </div>
                                            <div id='apart_name'>
                                                Villa
                                                <div id='propertie_count'>22 Properties</div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide id="aprt-swiper-slider" >
                                <Card id='main_aprt_card'>
                                    <Card.Body>
                                        <div className='apart_card_content'>
                                            <div id='apart_icon'>
                                                <MdOutlineVilla size={40} className='solo_icon' />
                                            </div>
                                            <div id='apart_name'>
                                                Villa
                                                <div id='propertie_count'>22 Properties</div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>

            {/* ===== PROPERTIE SECTION ====== */}
            <section id='main_properties'>
                <div className='properties_sec'>
                    <div id='prop'>
                        <div className='prop_header'>
                            <div data-aos="fade-right" data-aos-duration="1000">
                                <h3>
                                    Most <span
                                    // className="hovertext2"
                                    >
                                        <span
                                            // className="text" data-text="Viewed"
                                            className='highlight'
                                            data-aos="fade-left" data-aos-duration="5000"
                                        > Viewed</span>
                                    </span> Properties
                                </h3>
                            </div>
                            <div className='rightside_prop_header'>
                                <button className="learn-more" id="viewall">
                                    <span aria-hidden="true" className="circle">
                                        <span className="icon arrow"></span>
                                    </span>
                                    <span className="button-text">See All Properties</span>
                                </button>
                            </div>

                        </div>
                        <div className='mobile_view_headline03'>
                            <div className='apart_headline'>
                                <span className='headline'>
                                    Most <span className="hovertext1">
                                        <span className="text" data-text="Viewed"> Viewed</span>
                                    </span> Properties
                                </span>
                            </div>
                            <div>
                                <button className='view_all_arrow'><BsArrowRight size={25} /></button>
                            </div>
                        </div>
                    </div>
                    <div id='prop_cards'>
                        <div className='cards_sec'>
                            <div id='prop_cards_left'>
                                <Card id='main_prop_card'>
                                    <div>
                                        <Card.Img variant="top" id='prop_card_img' src={cardImg.src} />
                                    </div>
                                    <div>
                                        <Card.Body id='main_card_body'>
                                            <span className='prop_feature'>
                                                Feature
                                            </span>
                                            <span className='prop_like'>
                                                <AiOutlineHeart size={25} />
                                            </span>
                                            <span className='prop_sell'>
                                                Sell
                                            </span>
                                            <span className='prop_price'>
                                                $1,999,000 / USD
                                            </span>

                                            <div>
                                                <div id='prop_card_mainbody'>
                                                    <BiHomeSmile size={23} />
                                                    <span className='body_title'> House </span>
                                                </div>
                                                <div id='prop_card_middletext'>
                                                    <span>
                                                        Luxury villa in Rego Park
                                                    </span>
                                                    <p>
                                                        California City, CA, USA
                                                    </p>
                                                </div>
                                            </div>
                                            <Card.Footer id='prop_card_footer'>
                                                <div className='footer_body'>
                                                    <div id='footer_content'>
                                                        <RiHotelBedLine size={25} />
                                                        <span className='text_footer'> 3 Bedrooms </span>
                                                    </div>
                                                    <div id='footer_content'>
                                                        <RiBuilding3Line size={25} />
                                                        <span className='text_footer'> 1200 Sqft </span>
                                                    </div>

                                                </div>
                                                <div className='footer_body'>
                                                    <div id='footer_content'>
                                                        <FiCloudDrizzle size={25} />
                                                        <span className='text_footer'> 4 Bathrooms </span>
                                                    </div>
                                                    <div id='footer_content'>
                                                        <RiParkingBoxLine size={25} />
                                                        <span className='text_footer'> 2 Parking </span>
                                                    </div>

                                                </div>
                                            </Card.Footer>
                                        </Card.Body>
                                    </div>
                                </Card>
                                <Card id='main_prop_card'>
                                    <div>
                                        <Card.Img variant="top" id='prop_card_img' src={cardImg.src} />
                                    </div>
                                    <div>
                                        <Card.Body id='main_card_body'>
                                            <span className='prop_feature'>
                                                Feature
                                            </span>
                                            <span className='prop_like'>
                                                <AiOutlineHeart size={25} />
                                            </span>
                                            <span className='prop_sell'>
                                                Sell
                                            </span>
                                            <span className='prop_price'>
                                                $1,999,000 / USD
                                            </span>

                                            <div>
                                                <div id='prop_card_mainbody'>
                                                    <BiHomeSmile size={23} />
                                                    <span className='body_title'> House </span>
                                                </div>
                                                <div id='prop_card_middletext'>
                                                    <span>
                                                        Luxury villa in Rego Park
                                                    </span>
                                                    <p>
                                                        California City, CA, USA
                                                    </p>
                                                </div>
                                            </div>
                                            <Card.Footer id='prop_card_footer'>
                                                <div className='footer_body'>
                                                    <div id='footer_content'>
                                                        <RiHotelBedLine size={25} />
                                                        <span className='text_footer'> 3 Bedrooms </span>
                                                    </div>
                                                    <div id='footer_content'>
                                                        <RiBuilding3Line size={25} />
                                                        <span className='text_footer'> 1200 Sqft </span>
                                                    </div>

                                                </div>
                                                <div className='footer_body'>
                                                    <div id='footer_content'>
                                                        <FiCloudDrizzle size={25} />
                                                        <span className='text_footer'> 4 Bathrooms </span>
                                                    </div>
                                                    <div id='footer_content'>
                                                        <RiParkingBoxLine size={25} />
                                                        <span className='text_footer'> 2 Parking </span>
                                                    </div>

                                                </div>
                                            </Card.Footer>
                                        </Card.Body>
                                    </div>
                                </Card>
                                <Card id='main_prop_card'>
                                    <div>
                                        <Card.Img variant="top" id='prop_card_img' src={cardImg.src} />
                                    </div>
                                    <div>
                                        <Card.Body id='main_card_body'>
                                            <span className='prop_feature'>
                                                Feature
                                            </span>
                                            <span className='prop_like'>
                                                <AiOutlineHeart size={25} />
                                            </span>
                                            <span className='prop_sell'>
                                                Sell
                                            </span>
                                            <span className='prop_price'>
                                                $1,999,000 / USD
                                            </span>

                                            <div>
                                                <div id='prop_card_mainbody'>
                                                    <BiHomeSmile size={23} />
                                                    <span className='body_title'> House </span>
                                                </div>
                                                <div id='prop_card_middletext'>
                                                    <span>
                                                        Luxury villa in Rego Park
                                                    </span>
                                                    <p>
                                                        California City, CA, USA
                                                    </p>
                                                </div>
                                            </div>
                                            <Card.Footer id='prop_card_footer'>
                                                <div className='footer_body'>
                                                    <div id='footer_content'>
                                                        <RiHotelBedLine size={25} />
                                                        <span className='text_footer'> 3 Bedrooms </span>
                                                    </div>
                                                    <div id='footer_content'>
                                                        <RiBuilding3Line size={25} />
                                                        <span className='text_footer'> 1200 Sqft </span>
                                                    </div>

                                                </div>
                                                <div className='footer_body'>
                                                    <div id='footer_content'>
                                                        <FiCloudDrizzle size={25} />
                                                        <span className='text_footer'> 4 Bathrooms </span>
                                                    </div>
                                                    <div id='footer_content'>
                                                        <RiParkingBoxLine size={25} />
                                                        <span className='text_footer'> 2 Parking </span>
                                                    </div>

                                                </div>
                                            </Card.Footer>
                                        </Card.Body>
                                    </div>
                                </Card>

                            </div>
                            <div id='prop_cards_right'>
                                <Card id='main_prop_card'>
                                    <div>
                                        <Card.Img variant="top" id='prop_card_img' src={cardImg.src} />
                                    </div>
                                    <div>
                                        <Card.Body id='main_card_body'>
                                            <span className='prop_feature'>
                                                Feature
                                            </span>
                                            <span className='prop_like'>
                                                <AiOutlineHeart size={25} />
                                            </span>
                                            <span className='prop_sell'>
                                                Sell
                                            </span>
                                            <span className='prop_price'>
                                                $1,999,000 / USD
                                            </span>

                                            <div>
                                                <div id='prop_card_mainbody'>
                                                    <BiHomeSmile size={23} />
                                                    <span className='body_title'> House </span>
                                                </div>
                                                <div id='prop_card_middletext'>
                                                    <span>
                                                        Luxury villa in Rego Park
                                                    </span>
                                                    <p>
                                                        California City, CA, USA
                                                    </p>
                                                </div>
                                            </div>
                                            <Card.Footer id='prop_card_footer'>
                                                <div className='footer_body'>
                                                    <div id='footer_content'>
                                                        <RiHotelBedLine size={25} />
                                                        <span className='text_footer'> 3 Bedrooms </span>
                                                    </div>
                                                    <div id='footer_content'>
                                                        <RiBuilding3Line size={25} />
                                                        <span className='text_footer'> 1200 Sqft </span>
                                                    </div>

                                                </div>
                                                <div className='footer_body'>
                                                    <div id='footer_content'>
                                                        <FiCloudDrizzle size={25} />
                                                        <span className='text_footer'> 4 Bathrooms </span>
                                                    </div>
                                                    <div id='footer_content'>
                                                        <RiParkingBoxLine size={25} />
                                                        <span className='text_footer'> 2 Parking </span>
                                                    </div>

                                                </div>
                                            </Card.Footer>
                                        </Card.Body>
                                    </div>
                                </Card>
                                <Card id='main_prop_card'>
                                    <div>
                                        <Card.Img variant="top" id='prop_card_img' src={cardImg.src} />
                                    </div>
                                    <div>
                                        <Card.Body id='main_card_body'>
                                            <span className='prop_feature'>
                                                Feature
                                            </span>
                                            <span className='prop_like'>
                                                <AiOutlineHeart size={25} />
                                            </span>
                                            <span className='prop_sell'>
                                                Sell
                                            </span>
                                            <span className='prop_price'>
                                                $1,999,000 / USD
                                            </span>

                                            <div>
                                                <div id='prop_card_mainbody'>
                                                    <BiHomeSmile size={23} />
                                                    <span className='body_title'> House </span>
                                                </div>
                                                <div id='prop_prop_card_middletext'>
                                                    <span>
                                                        Luxury villa in Rego Park
                                                    </span>
                                                    <p>
                                                        California City, CA, USA
                                                    </p>
                                                </div>
                                            </div>
                                            <Card.Footer id='prop_card_footer'>
                                                <div className='footer_body'>
                                                    <div id='footer_content'>
                                                        <RiHotelBedLine size={25} />
                                                        <span className='text_footer'> 3 Bedrooms </span>
                                                    </div>
                                                    <div id='footer_content'>
                                                        <RiBuilding3Line size={25} />
                                                        <span className='text_footer'> 1200 Sqft </span>
                                                    </div>

                                                </div>
                                                <div className='footer_body'>
                                                    <div id='footer_content'>
                                                        <FiCloudDrizzle size={25} />
                                                        <span className='text_footer'> 4 Bathrooms </span>
                                                    </div>
                                                    <div id='footer_content'>
                                                        <RiParkingBoxLine size={25} />
                                                        <span className='text_footer'> 2 Parking </span>
                                                    </div>

                                                </div>
                                            </Card.Footer>
                                        </Card.Body>
                                    </div>
                                </Card>
                                <Card id='main_prop_card'>
                                    <div>
                                        <Card.Img variant="top" id='prop_card_img' src={cardImg.src} />
                                    </div>
                                    <div>
                                        <Card.Body id='main_card_body'>
                                            <span className='prop_feature'>
                                                Feature
                                            </span>
                                            <span className='prop_like'>
                                                <AiOutlineHeart size={25} />
                                            </span>
                                            <span className='prop_sell'>
                                                Sell
                                            </span>
                                            <span className='prop_price'>
                                                $1,999,000 / USD
                                            </span>

                                            <div>
                                                <div id='prop_card_mainbody'>
                                                    <BiHomeSmile size={23} />
                                                    <span className='body_title'> House </span>
                                                </div>
                                                <div id='prop_card_middletext'>
                                                    <span>
                                                        Luxury villa in Rego Park
                                                    </span>
                                                    <p>
                                                        California City, CA, USA
                                                    </p>
                                                </div>
                                            </div>
                                            <Card.Footer id='prop_card_footer'>
                                                <div className='footer_body'>
                                                    <div id='footer_content'>
                                                        <RiHotelBedLine size={25} />
                                                        <span className='text_footer'> 3 Bedrooms </span>
                                                    </div>
                                                    <div id='footer_content'>
                                                        <RiBuilding3Line size={25} />
                                                        <span className='text_footer'> 1200 Sqft </span>
                                                    </div>

                                                </div>
                                                <div className='footer_body'>
                                                    <div id='footer_content'>
                                                        <FiCloudDrizzle size={25} />
                                                        <span className='text_footer'> 4 Bathrooms </span>
                                                    </div>
                                                    <div id='footer_content'>
                                                        <RiParkingBoxLine size={25} />
                                                        <span className='text_footer'> 2 Parking </span>
                                                    </div>

                                                </div>
                                            </Card.Footer>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                    <div className='tabletView'>
                        <Swiper
                            id='properties_tab_swiper'
                            slidesPerView={2}
                            spaceBetween={30}
                            freeMode={true}
                            pagination={{
                                clickable: true,
                                renderBullet: renderBullet
                            }}
                            modules={[FreeMode, Pagination]}
                        // // className="mySwiper"
                        >
                            <SwiperSlide id="properties-swiper-slider" >
                                <Card id='main_prop_card'>
                                    <div>
                                        <Card.Img variant="top" id='prop_card_img' src={cardImg.src} />
                                    </div>
                                    <div>
                                        <Card.Body id='main_card_body'>
                                            <span className='prop_feature'>
                                                Feature
                                            </span>
                                            <span className='prop_like'>
                                                <AiOutlineHeart size={25} />
                                            </span>
                                            <span className='prop_sell'>
                                                Sell
                                            </span>
                                            <span className='prop_price'>
                                                $1,999,000 / USD
                                            </span>

                                            <div>
                                                <div id='prop_card_mainbody'>
                                                    <BiHomeSmile size={23} />
                                                    <span className='body_title'> House </span>
                                                </div>
                                                <div id='prop_card_middletext'>
                                                    <span>
                                                        Luxury villa in Rego Park
                                                    </span>
                                                    <p>
                                                        California City, CA, USA
                                                    </p>
                                                </div>
                                            </div>
                                            <Card.Footer id='prop_card_footer'>
                                                <div className='footer_body'>
                                                    <div id='footer_content'>
                                                        <RiHotelBedLine size={25} />
                                                        <span className='text_footer'> 3 Bedrooms </span>
                                                    </div>
                                                    <div id='footer_content'>
                                                        <RiBuilding3Line size={25} />
                                                        <span className='text_footer'> 1200 Sqft </span>
                                                    </div>

                                                </div>
                                                <div className='footer_body'>
                                                    <div id='footer_content'>
                                                        <FiCloudDrizzle size={25} />
                                                        <span className='text_footer'> 4 Bathrooms </span>
                                                    </div>
                                                    <div id='footer_content'>
                                                        <RiParkingBoxLine size={25} />
                                                        <span className='text_footer'> 2 Parking </span>
                                                    </div>

                                                </div>
                                            </Card.Footer>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide id="properties-swiper-slider" >
                                <Card id='main_prop_card'>
                                    <div>
                                        <Card.Img variant="top" id='prop_card_img' src={cardImg.src} />
                                    </div>
                                    <div>
                                        <Card.Body id='main_card_body'>
                                            <span className='prop_feature'>
                                                Feature
                                            </span>
                                            <span className='prop_like'>
                                                <AiOutlineHeart size={25} />
                                            </span>
                                            <span className='prop_sell'>
                                                Sell
                                            </span>
                                            <span className='prop_price'>
                                                $1,999,000 / USD
                                            </span>

                                            <div>
                                                <div id='prop_card_mainbody'>
                                                    <BiHomeSmile size={23} />
                                                    <span className='body_title'> House </span>
                                                </div>
                                                <div id='prop_card_middletext'>
                                                    <span>
                                                        Luxury villa in Rego Park
                                                    </span>
                                                    <p>
                                                        California City, CA, USA
                                                    </p>
                                                </div>
                                            </div>
                                            <Card.Footer id='prop_card_footer'>
                                                <div className='footer_body'>
                                                    <div id='footer_content'>
                                                        <RiHotelBedLine size={25} />
                                                        <span className='text_footer'> 3 Bedrooms </span>
                                                    </div>
                                                    <div id='footer_content'>
                                                        <RiBuilding3Line size={25} />
                                                        <span className='text_footer'> 1200 Sqft </span>
                                                    </div>

                                                </div>
                                                <div className='footer_body'>
                                                    <div id='footer_content'>
                                                        <FiCloudDrizzle size={25} />
                                                        <span className='text_footer'> 4 Bathrooms </span>
                                                    </div>
                                                    <div id='footer_content'>
                                                        <RiParkingBoxLine size={25} />
                                                        <span className='text_footer'> 2 Parking </span>
                                                    </div>

                                                </div>
                                            </Card.Footer>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide id="properties-swiper-slider" >
                                <Card id='main_prop_card'>
                                    <div>
                                        <Card.Img variant="top" id='prop_card_img' src={cardImg.src} />
                                    </div>
                                    <div>
                                        <Card.Body id='main_card_body'>
                                            <span className='prop_feature'>
                                                Feature
                                            </span>
                                            <span className='prop_like'>
                                                <AiOutlineHeart size={25} />
                                            </span>
                                            <span className='prop_sell'>
                                                Sell
                                            </span>
                                            <span className='prop_price'>
                                                $1,999,000 / USD
                                            </span>

                                            <div>
                                                <div id='prop_card_mainbody'>
                                                    <BiHomeSmile size={23} />
                                                    <span className='body_title'> House </span>
                                                </div>
                                                <div id='prop_card_middletext'>
                                                    <span>
                                                        Luxury villa in Rego Park
                                                    </span>
                                                    <p>
                                                        California City, CA, USA
                                                    </p>
                                                </div>
                                            </div>
                                            <Card.Footer id='prop_card_footer'>
                                                <div className='footer_body'>
                                                    <div id='footer_content'>
                                                        <RiHotelBedLine size={25} />
                                                        <span className='text_footer'> 3 Bedrooms </span>
                                                    </div>
                                                    <div id='footer_content'>
                                                        <RiBuilding3Line size={25} />
                                                        <span className='text_footer'> 1200 Sqft </span>
                                                    </div>

                                                </div>
                                                <div className='footer_body'>
                                                    <div id='footer_content'>
                                                        <FiCloudDrizzle size={25} />
                                                        <span className='text_footer'> 4 Bathrooms </span>
                                                    </div>
                                                    <div id='footer_content'>
                                                        <RiParkingBoxLine size={25} />
                                                        <span className='text_footer'> 2 Parking </span>
                                                    </div>

                                                </div>
                                            </Card.Footer>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide id="properties-swiper-slider" >
                                <Card id='main_prop_card'>
                                    <div>
                                        <Card.Img variant="top" id='prop_card_img' src={cardImg.src} />
                                    </div>
                                    <div>
                                        <Card.Body id='main_card_body'>
                                            <span className='prop_feature'>
                                                Feature
                                            </span>
                                            <span className='prop_like'>
                                                <AiOutlineHeart size={25} />
                                            </span>
                                            <span className='prop_sell'>
                                                Sell
                                            </span>
                                            <span className='prop_price'>
                                                $1,999,000 / USD
                                            </span>

                                            <div>
                                                <div id='prop_card_mainbody'>
                                                    <BiHomeSmile size={23} />
                                                    <span className='body_title'> House </span>
                                                </div>
                                                <div id='prop_card_middletext'>
                                                    <span>
                                                        Luxury villa in Rego Park
                                                    </span>
                                                    <p>
                                                        California City, CA, USA
                                                    </p>
                                                </div>
                                            </div>
                                            <Card.Footer id='prop_card_footer'>
                                                <div className='footer_body'>
                                                    <div id='footer_content'>
                                                        <RiHotelBedLine size={25} />
                                                        <span className='text_footer'> 3 Bedrooms </span>
                                                    </div>
                                                    <div id='footer_content'>
                                                        <RiBuilding3Line size={25} />
                                                        <span className='text_footer'> 1200 Sqft </span>
                                                    </div>

                                                </div>
                                                <div className='footer_body'>
                                                    <div id='footer_content'>
                                                        <FiCloudDrizzle size={25} />
                                                        <span className='text_footer'> 4 Bathrooms </span>
                                                    </div>
                                                    <div id='footer_content'>
                                                        <RiParkingBoxLine size={25} />
                                                        <span className='text_footer'> 2 Parking </span>
                                                    </div>

                                                </div>
                                            </Card.Footer>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide id="properties-swiper-slider" >
                                <Card id='main_prop_card'>
                                    <div>
                                        <Card.Img variant="top" id='prop_card_img' src={cardImg.src} />
                                    </div>
                                    <div>
                                        <Card.Body id='main_card_body'>
                                            <span className='prop_feature'>
                                                Feature
                                            </span>
                                            <span className='prop_like'>
                                                <AiOutlineHeart size={25} />
                                            </span>
                                            <span className='prop_sell'>
                                                Sell
                                            </span>
                                            <span className='prop_price'>
                                                $1,999,000 / USD
                                            </span>

                                            <div>
                                                <div id='prop_card_mainbody'>
                                                    <BiHomeSmile size={23} />
                                                    <span className='body_title'> House </span>
                                                </div>
                                                <div id='prop_card_middletext'>
                                                    <span>
                                                        Luxury villa in Rego Park
                                                    </span>
                                                    <p>
                                                        California City, CA, USA
                                                    </p>
                                                </div>
                                            </div>
                                            <Card.Footer id='prop_card_footer'>
                                                <div className='footer_body'>
                                                    <div id='footer_content'>
                                                        <RiHotelBedLine size={25} />
                                                        <span className='text_footer'> 3 Bedrooms </span>
                                                    </div>
                                                    <div id='footer_content'>
                                                        <RiBuilding3Line size={25} />
                                                        <span className='text_footer'> 1200 Sqft </span>
                                                    </div>

                                                </div>
                                                <div className='footer_body'>
                                                    <div id='footer_content'>
                                                        <FiCloudDrizzle size={25} />
                                                        <span className='text_footer'> 4 Bathrooms </span>
                                                    </div>
                                                    <div id='footer_content'>
                                                        <RiParkingBoxLine size={25} />
                                                        <span className='text_footer'> 2 Parking </span>
                                                    </div>

                                                </div>
                                            </Card.Footer>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide id="properties-swiper-slider" >
                                <Card id='main_prop_card'>
                                    <div>
                                        <Card.Img variant="top" id='prop_card_img' src={cardImg.src} />
                                    </div>
                                    <div>
                                        <Card.Body id='main_card_body'>
                                            <span className='prop_feature'>
                                                Feature
                                            </span>
                                            <span className='prop_like'>
                                                <AiOutlineHeart size={25} />
                                            </span>
                                            <span className='prop_sell'>
                                                Sell
                                            </span>
                                            <span className='prop_price'>
                                                $1,999,000 / USD
                                            </span>

                                            <div>
                                                <div id='prop_card_mainbody'>
                                                    <BiHomeSmile size={23} />
                                                    <span className='body_title'> House </span>
                                                </div>
                                                <div id='prop_card_middletext'>
                                                    <span>
                                                        Luxury villa in Rego Park
                                                    </span>
                                                    <p>
                                                        California City, CA, USA
                                                    </p>
                                                </div>
                                            </div>
                                            <Card.Footer id='prop_card_footer'>
                                                <div className='footer_body'>
                                                    <div id='footer_content'>
                                                        <RiHotelBedLine size={25} />
                                                        <span className='text_footer'> 3 Bedrooms </span>
                                                    </div>
                                                    <div id='footer_content'>
                                                        <RiBuilding3Line size={25} />
                                                        <span className='text_footer'> 1200 Sqft </span>
                                                    </div>

                                                </div>
                                                <div className='footer_body'>
                                                    <div id='footer_content'>
                                                        <FiCloudDrizzle size={25} />
                                                        <span className='text_footer'> 4 Bathrooms </span>
                                                    </div>
                                                    <div id='footer_content'>
                                                        <RiParkingBoxLine size={25} />
                                                        <span className='text_footer'> 2 Parking </span>
                                                    </div>

                                                </div>
                                            </Card.Footer>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className='mobileView'>
                        <Swiper
                            slidesPerView={2}
                            spaceBetween={30}
                            freeMode={true}
                            pagination={{
                                clickable: true,
                                renderBullet: renderBullet
                            }}
                            modules={[FreeMode, Pagination]}
                            // className="mySwiper"
                            id='mobileSlider'
                        // style={{
                        //     width: "800px ", height: "550px !import"
                        // }}
                        >
                            <SwiperSlide id="prop-mobile-swiper-slider" >
                                <Card id='main_card'>
                                    <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                    <Card.Body>
                                        <span className='prop-mobile-feture_tag'>
                                            Feature
                                        </span>
                                        <span className='prop-mobile_like'>
                                            <AiOutlineHeart size={25} />
                                        </span>
                                        <span className='prop-mobile_sell_teg'>
                                            Sell
                                        </span>
                                        <span className='prop-mobile_price_teg'>
                                            $1,999,000 / USD
                                        </span>

                                        <div>
                                            <div id='feature_card_mainbody'>
                                                <BiHomeSmile size={23} />
                                                <span className='feture_body_title'> Home </span>
                                            </div>
                                            <div id='feature_card_middletext'>
                                                <span>
                                                    Luxury villa in Rego Park
                                                </span>
                                                <p>
                                                    California City, CA, USA
                                                </p>
                                            </div>
                                        </div>
                                    </Card.Body>

                                    <Card.Footer id='feature_card_footer'>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <RiHotelBedLine size={22} />
                                                <p className='text_footer'> 3 Bedrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiBuilding3Line size={22} />
                                                <p className='text_footer'> 1200 Sqft </p>
                                            </div>

                                        </div>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <FiCloudDrizzle size={22} />
                                                <p className='text_footer'> 4 Bathrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiParkingBoxLine size={22} />
                                                <p className='text_footer'> 2 Parking </p>
                                            </div>

                                        </div>
                                    </Card.Footer>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide id="prop-mobile-swiper-slider" >
                                <Card id='main_card'>
                                    <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                    <Card.Body>
                                        <span className='prop-mobile-feture_tag'>
                                            Feature
                                        </span>
                                        <span className='prop-mobile_like'>
                                            <AiOutlineHeart size={25} />
                                        </span>
                                        <span className='prop-mobile_sell_teg'>
                                            Sell
                                        </span>
                                        <span className='prop-mobile_price_teg'>
                                            $1,999,000 / USD
                                        </span>

                                        <div>
                                            <div id='feature_card_mainbody'>
                                                <BiHomeSmile size={23} />
                                                <span className='feture_body_title'> Home </span>
                                            </div>
                                            <div id='feature_card_middletext'>
                                                <span>
                                                    Luxury villa in Rego Park
                                                </span>
                                                <p>
                                                    California City, CA, USA
                                                </p>
                                            </div>
                                        </div>
                                    </Card.Body>

                                    <Card.Footer id='feature_card_footer'>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <RiHotelBedLine size={22} />
                                                <p className='text_footer'> 3 Bedrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiBuilding3Line size={22} />
                                                <p className='text_footer'> 1200 Sqft </p>
                                            </div>

                                        </div>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <FiCloudDrizzle size={22} />
                                                <p className='text_footer'> 4 Bathrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiParkingBoxLine size={22} />
                                                <p className='text_footer'> 2 Parking </p>
                                            </div>

                                        </div>
                                    </Card.Footer>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide id="prop-mobile-swiper-slider" >
                                <Card id='main_card'>
                                    <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                    <Card.Body>
                                        <span className='prop-mobile-feture_tag'>
                                            Feature
                                        </span>
                                        <span className='prop-mobile_like'>
                                            <AiOutlineHeart size={25} />
                                        </span>
                                        <span className='prop-mobile_sell_teg'>
                                            Sell
                                        </span>
                                        <span className='prop-mobile_price_teg'>
                                            $1,999,000 / USD
                                        </span>

                                        <div>
                                            <div id='feature_card_mainbody'>
                                                <BiHomeSmile size={23} />
                                                <span className='feture_body_title'> Home </span>
                                            </div>
                                            <div id='feature_card_middletext'>
                                                <span>
                                                    Luxury villa in Rego Park
                                                </span>
                                                <p>
                                                    California City, CA, USA
                                                </p>
                                            </div>
                                        </div>
                                    </Card.Body>

                                    <Card.Footer id='feature_card_footer'>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <RiHotelBedLine size={22} />
                                                <p className='text_footer'> 3 Bedrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiBuilding3Line size={22} />
                                                <p className='text_footer'> 1200 Sqft </p>
                                            </div>

                                        </div>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <FiCloudDrizzle size={22} />
                                                <p className='text_footer'> 4 Bathrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiParkingBoxLine size={22} />
                                                <p className='text_footer'> 2 Parking </p>
                                            </div>

                                        </div>
                                    </Card.Footer>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide id="prop-mobile-swiper-slider" >
                                <Card id='main_card'>
                                    <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                    <Card.Body>
                                        <span className='prop-mobile-feture_tag'>
                                            Feature
                                        </span>
                                        <span className='prop-mobile_like'>
                                            <AiOutlineHeart size={25} />
                                        </span>
                                        <span className='prop-mobile_sell_teg'>
                                            Sell
                                        </span>
                                        <span className='prop-mobile_price_teg'>
                                            $1,999,000 / USD
                                        </span>

                                        <div>
                                            <div id='feature_card_mainbody'>
                                                <BiHomeSmile size={23} />
                                                <span className='feture_body_title'> Home </span>
                                            </div>
                                            <div id='feature_card_middletext'>
                                                <span>
                                                    Luxury villa in Rego Park
                                                </span>
                                                <p>
                                                    California City, CA, USA
                                                </p>
                                            </div>
                                        </div>
                                    </Card.Body>

                                    <Card.Footer id='feature_card_footer'>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <RiHotelBedLine size={22} />
                                                <p className='text_footer'> 3 Bedrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiBuilding3Line size={22} />
                                                <p className='text_footer'> 1200 Sqft </p>
                                            </div>

                                        </div>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <FiCloudDrizzle size={22} />
                                                <p className='text_footer'> 4 Bathrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiParkingBoxLine size={22} />
                                                <p className='text_footer'> 2 Parking </p>
                                            </div>

                                        </div>
                                    </Card.Footer>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide id="prop-mobile-swiper-slider" >
                                <Card id='main_card'>
                                    <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                    <Card.Body>
                                        <span className='prop-mobile-feture_tag'>
                                            Feature
                                        </span>
                                        <span className='prop-mobile_like'>
                                            <AiOutlineHeart size={25} />
                                        </span>
                                        <span className='prop-mobile_sell_teg'>
                                            Sell
                                        </span>
                                        <span className='prop-mobile_price_teg'>
                                            $1,999,000 / USD
                                        </span>

                                        <div>
                                            <div id='feature_card_mainbody'>
                                                <BiHomeSmile size={23} />
                                                <span className='feture_body_title'> Home </span>
                                            </div>
                                            <div id='feature_card_middletext'>
                                                <span>
                                                    Luxury villa in Rego Park
                                                </span>
                                                <p>
                                                    California City, CA, USA
                                                </p>
                                            </div>
                                        </div>
                                    </Card.Body>

                                    <Card.Footer id='feature_card_footer'>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <RiHotelBedLine size={22} />
                                                <p className='text_footer'> 3 Bedrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiBuilding3Line size={22} />
                                                <p className='text_footer'> 1200 Sqft </p>
                                            </div>

                                        </div>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <FiCloudDrizzle size={22} />
                                                <p className='text_footer'> 4 Bathrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiParkingBoxLine size={22} />
                                                <p className='text_footer'> 2 Parking </p>
                                            </div>

                                        </div>
                                    </Card.Footer>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide id="prop-mobile-swiper-slider" >
                                <Card id='main_card'>
                                    <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                    <Card.Body>
                                        <span className='prop-mobile-feture_tag'>
                                            Feature
                                        </span>
                                        <span className='prop-mobile_like'>
                                            <AiOutlineHeart size={25} />
                                        </span>
                                        <span className='prop-mobile_sell_teg'>
                                            Sell
                                        </span>
                                        <span className='prop-mobile_price_teg'>
                                            $1,999,000 / USD
                                        </span>

                                        <div>
                                            <div id='feature_card_mainbody'>
                                                <BiHomeSmile size={23} />
                                                <span className='feture_body_title'> Home </span>
                                            </div>
                                            <div id='feature_card_middletext'>
                                                <span>
                                                    Luxury villa in Rego Park
                                                </span>
                                                <p>
                                                    California City, CA, USA
                                                </p>
                                            </div>
                                        </div>
                                    </Card.Body>

                                    <Card.Footer id='feature_card_footer'>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <RiHotelBedLine size={22} />
                                                <p className='text_footer'> 3 Bedrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiBuilding3Line size={22} />
                                                <p className='text_footer'> 1200 Sqft </p>
                                            </div>

                                        </div>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <FiCloudDrizzle size={22} />
                                                <p className='text_footer'> 4 Bathrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiParkingBoxLine size={22} />
                                                <p className='text_footer'> 2 Parking </p>
                                            </div>

                                        </div>
                                    </Card.Footer>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide id="prop-mobile-swiper-slider" >
                                <Card id='main_card'>
                                    <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                    <Card.Body>
                                        <span className='prop-mobile-feture_tag'>
                                            Feature
                                        </span>
                                        <span className='prop-mobile_like'>
                                            <AiOutlineHeart size={25} />
                                        </span>
                                        <span className='prop-mobile_sell_teg'>
                                            Sell
                                        </span>
                                        <span className='prop-mobile_price_teg'>
                                            $1,999,000 / USD
                                        </span>

                                        <div>
                                            <div id='feature_card_mainbody'>
                                                <BiHomeSmile size={23} />
                                                <span className='feture_body_title'> Home </span>
                                            </div>
                                            <div id='feature_card_middletext'>
                                                <span>
                                                    Luxury villa in Rego Park
                                                </span>
                                                <p>
                                                    California City, CA, USA
                                                </p>
                                            </div>
                                        </div>
                                    </Card.Body>

                                    <Card.Footer id='feature_card_footer'>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <RiHotelBedLine size={22} />
                                                <p className='text_footer'> 3 Bedrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiBuilding3Line size={22} />
                                                <p className='text_footer'> 1200 Sqft </p>
                                            </div>

                                        </div>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <FiCloudDrizzle size={22} />
                                                <p className='text_footer'> 4 Bathrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiParkingBoxLine size={22} />
                                                <p className='text_footer'> 2 Parking </p>
                                            </div>

                                        </div>
                                    </Card.Footer>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide id="prop-mobile-swiper-slider" >
                                <Card id='main_card'>
                                    <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                    <Card.Body>
                                        <span className='prop-mobile-feture_tag'>
                                            Feature
                                        </span>
                                        <span className='prop-mobile_like'>
                                            <AiOutlineHeart size={25} />
                                        </span>
                                        <span className='prop-mobile_sell_teg'>
                                            Sell
                                        </span>
                                        <span className='prop-mobile_price_teg'>
                                            $1,999,000 / USD
                                        </span>

                                        <div>
                                            <div id='feature_card_mainbody'>
                                                <BiHomeSmile size={23} />
                                                <span className='feture_body_title'> Home </span>
                                            </div>
                                            <div id='feature_card_middletext'>
                                                <span>
                                                    Luxury villa in Rego Park
                                                </span>
                                                <p>
                                                    California City, CA, USA
                                                </p>
                                            </div>
                                        </div>
                                    </Card.Body>

                                    <Card.Footer id='feature_card_footer'>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <RiHotelBedLine size={22} />
                                                <p className='text_footer'> 3 Bedrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiBuilding3Line size={22} />
                                                <p className='text_footer'> 1200 Sqft </p>
                                            </div>

                                        </div>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <FiCloudDrizzle size={22} />
                                                <p className='text_footer'> 4 Bathrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiParkingBoxLine size={22} />
                                                <p className='text_footer'> 2 Parking </p>
                                            </div>

                                        </div>
                                    </Card.Footer>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide id="prop-mobile-swiper-slider" >
                                <Card id='main_card'>
                                    <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                    <Card.Body>
                                        <span className='prop-mobile-feture_tag'>
                                            Feature
                                        </span>
                                        <span className='prop-mobile_like'>
                                            <AiOutlineHeart size={25} />
                                        </span>
                                        <span className='prop-mobile_sell_teg'>
                                            Sell
                                        </span>
                                        <span className='prop-mobile_price_teg'>
                                            $1,999,000 / USD
                                        </span>

                                        <div>
                                            <div id='feature_card_mainbody'>
                                                <BiHomeSmile size={23} />
                                                <span className='feture_body_title'> Home </span>
                                            </div>
                                            <div id='feature_card_middletext'>
                                                <span>
                                                    Luxury villa in Rego Park
                                                </span>
                                                <p>
                                                    California City, CA, USA
                                                </p>
                                            </div>
                                        </div>
                                    </Card.Body>

                                    <Card.Footer id='feature_card_footer'>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <RiHotelBedLine size={22} />
                                                <p className='text_footer'> 3 Bedrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiBuilding3Line size={22} />
                                                <p className='text_footer'> 1200 Sqft </p>
                                            </div>

                                        </div>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <FiCloudDrizzle size={22} />
                                                <p className='text_footer'> 4 Bathrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiParkingBoxLine size={22} />
                                                <p className='text_footer'> 2 Parking </p>
                                            </div>

                                        </div>
                                    </Card.Footer>
                                </Card>
                            </SwiperSlide>
                        </Swiper>
                    </div>

                </div>

            </section>

            {/* ===== PROPERTIES NEARBY CITY  SECTION ====== */}
            <section id='main_citySection'>
                <div
                    id='city_con'
                >
                    <div className='prop_city_header'>
                        <div data-aos="fade-right" data-aos-duration="1000">
                            <h3>
                                Properties <span
                                // className="hovertext3"
                                >
                                    <span
                                        // className="text" data-text="Nearby"
                                        className='highlight'
                                        data-aos="fade-left" data-aos-duration="5000"
                                    >Nearby</span>
                                </span> Cities
                            </h3>
                        </div>
                        <div className='rightside_prop_city_header'>
                            <button className="learn-more" id="viewall">
                                <span aria-hidden="true" className="circle">
                                    <span className="icon arrow"></span>
                                </span>
                                <span className="button-text">See All Properties</span>
                            </button>
                        </div>
                    </div>
                    <div className='mobile_view_headline04'>
                        <div className='apart_headline'>
                            <span className='headline'>
                                Properties <span className="hovertext1">
                                    <span className="text" data-text="Nearby"> Nearby</span>
                                </span> Cities
                            </span>
                        </div>
                        <div>
                            <button className='view_all_arrow'><BsArrowRight size={25} /></button>
                        </div>
                    </div>
                    <div className='row' id='nearBy-Citys'>
                        <div className='col-lg-6'>
                            <div className="card bg-dark text-white mb-3" id='cityImgTop'
                            // id='city_card_bottom'
                            >
                                <img src={cityImage03.src} className="card-img" alt="..." id='TopImg' />
                                <div className="card-img-overlay">
                                    <div id='city_img_headlines'>
                                        <h4 className="card-title">San Francisco</h4>
                                        <p className="card-text">13 Properties</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-3'>
                            <div className="card bg-dark text-white mb-3"
                                id='group_card'
                            >
                                <img src={cityImage01.src} className="card-img" alt="..." id='TopImg' />
                                <div className="card-img-overlay">
                                    <div id='city_img_headlines'>
                                        <h4 className="card-title">New York</h4>
                                        <p className="card-text">22 Properties</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-3'>
                            <div className="card bg-dark text-white mb-3"
                                id='group_card'
                            >
                                <img src={cityImage02.src} className="card-img" alt="..." id='TopImg' />
                                <div className="card-img-overlay">
                                    <div id='city_img_headlines'>
                                        <h4 className="card-title">California</h4>
                                        <p className="card-text">18 Properties</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-3'

                        >
                            <div className="card bg-dark text-white" id='group_card'
                            // id='city_card'
                            >
                                <img src={cityImage01.src} className="card-img" alt="..." id='TopImg' />
                                <div className="card-img-overlay">
                                    <div id='city_img_headlines'>
                                        <h4 className="card-title">Chicago</h4>
                                        <p className="card-text">20 Properties</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-3'

                        >
                            <div className="card bg-dark text-white " id='group_card'
                            >
                                <img src={cityImage02.src} className="card-img" alt="..." id='TopImg' />
                                <div className="card-img-overlay">
                                    <div id='city_img_headlines'>
                                        <h4 className="card-title">Los Angeles</h4>
                                        <p className="card-text">15 Properties</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className="card bg-dark text-white" id='cityImgTop'
                            >
                                <img src={cityImage03.src} className="card-img" alt="..." id='TopImg'
                                //  id='bottom_city_card_img' 
                                />
                                <div className="card-img-overlay">
                                    <div id='city_img_headlines'>
                                        <h4 className="card-title">Danver</h4>
                                        <p className="card-text">13 Properties</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* ===== MOST FAV SECTION =======  */}
            <section id='most_fav'>
                <div className='most_fav_con'>
                    <div className='most_fav_header'>
                        <div data-aos="fade-right" data-aos-duration="1000">

                            <h3>
                                Most <span
                                // className="hovertext3"
                                >
                                    <span className='highlight'
                                        data-aos="fade-left" data-aos-duration="5000"
                                    // className="text" data-text="Favorites"
                                    >Favorites</span>
                                </span> Properties
                            </h3>
                        </div>
                        <div className='rightside_most_fav_header'>
                            <button className="learn-more" id="viewall">
                                <span aria-hidden="true" className="circle">
                                    <span className="icon arrow"></span>
                                </span>
                                <span className="button-text">See All Properties</span>
                            </button>
                        </div>
                    </div>
                    <div className='mobile_view_headline05'>
                        <div className='apart_headline'>
                            <span className='headline'>
                                Most <span className="hovertext1">
                                    <span className="text" data-text="Favorites"> Favorites</span>
                                </span> Properties
                            </span>
                        </div>
                        <div>
                            <button className='view_all_arrow'><BsArrowRight size={25} /></button>
                        </div>
                    </div>
                    <div className='most_fav_slider'>
                        <Swiper
                            // height={"100vh"}
                            slidesPerView={4}
                            spaceBetween={30}
                            freeMode={true}
                            pagination={{
                                clickable: true,
                                renderBullet: renderBullet
                            }}
                            modules={[FreeMode, Pagination]}
                            // className="mySwiper"
                            style={{
                                width: "1600px ", height: "600px",
                                borderRadius: "10px"
                            }}
                        >
                            <SwiperSlide style={{ width: '450px', margin: '0' }}>
                                <Card id='main_card'>
                                    <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                    <Card.Body>
                                        <span className='feture_tag'>
                                            Feature
                                        </span>
                                        <span className='like_tag'>
                                            <AiOutlineHeart size={25} />
                                        </span>
                                        <span className='sell_teg'>
                                            Sell
                                        </span>
                                        <span className='price_teg'>
                                            $1,999,000 / USD
                                        </span>

                                        <div>
                                            <div id='feature_card_mainbody'>
                                                <BiHomeSmile size={23} />
                                                <span className='feture_body_title'> Home </span>
                                            </div>
                                            <div id='feature_card_middletext'>
                                                <span>
                                                    Luxury villa in Rego Park
                                                </span>
                                                <p>
                                                    California City, CA, USA
                                                </p>
                                            </div>
                                        </div>
                                    </Card.Body>

                                    <Card.Footer id='feature_card_footer'>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <RiHotelBedLine size={22} />
                                                <p className='text_footer'> 3 Bedrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiBuilding3Line size={22} />
                                                <p className='text_footer'> 1200 Sqft </p>
                                            </div>

                                        </div>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <FiCloudDrizzle size={22} />
                                                <p className='text_footer'> 4 Bathrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiParkingBoxLine size={22} />
                                                <p className='text_footer'> 2 Parking </p>
                                            </div>

                                        </div>
                                    </Card.Footer>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide style={{ width: '450px', margin: '0' }}>
                                <Card id='main_card'>
                                    <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                    <Card.Body>
                                        <span className='feture_tag'>
                                            Feature
                                        </span>
                                        <span className='like_tag'>
                                            <AiOutlineHeart size={25} />
                                        </span>
                                        <span className='sell_teg'>
                                            Sell
                                        </span>
                                        <span className='price_teg'>
                                            $1,999,000 / USD
                                        </span>

                                        <div>
                                            <div id='feature_card_mainbody'>
                                                <BiHomeSmile size={23} />
                                                <span className='feture_body_title'> Home </span>
                                            </div>
                                            <div id='feature_card_middletext'>
                                                <span>
                                                    Luxury villa in Rego Park
                                                </span>
                                                <p>
                                                    California City, CA, USA
                                                </p>
                                            </div>
                                        </div>
                                    </Card.Body>

                                    <Card.Footer id='feature_card_footer'>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <RiHotelBedLine size={22} />
                                                <p className='text_footer'> 3 Bedrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiBuilding3Line size={22} />
                                                <p className='text_footer'> 1200 Sqft </p>
                                            </div>

                                        </div>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <FiCloudDrizzle size={22} />
                                                <p className='text_footer'> 4 Bathrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiParkingBoxLine size={22} />
                                                <p className='text_footer'> 2 Parking </p>
                                            </div>

                                        </div>
                                    </Card.Footer>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide style={{ width: '450px', margin: '0' }}>
                                <Card id='main_card'>
                                    <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                    <Card.Body>
                                        <span className='feture_tag'>
                                            Feature
                                        </span>
                                        <span className='like_tag'>
                                            <AiOutlineHeart size={25} />
                                        </span>
                                        <span className='sell_teg'>
                                            Sell
                                        </span>
                                        <span className='price_teg'>
                                            $1,999,000 / USD
                                        </span>

                                        <div>
                                            <div id='feature_card_mainbody'>
                                                <BiHomeSmile size={23} />
                                                <span className='feture_body_title'> Home </span>
                                            </div>
                                            <div id='feature_card_middletext'>
                                                <span>
                                                    Luxury villa in Rego Park
                                                </span>
                                                <p>
                                                    California City, CA, USA
                                                </p>
                                            </div>
                                        </div>
                                    </Card.Body>

                                    <Card.Footer id='feature_card_footer'>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <RiHotelBedLine size={22} />
                                                <p className='text_footer'> 3 Bedrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiBuilding3Line size={22} />
                                                <p className='text_footer'> 1200 Sqft </p>
                                            </div>

                                        </div>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <FiCloudDrizzle size={22} />
                                                <p className='text_footer'> 4 Bathrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiParkingBoxLine size={22} />
                                                <p className='text_footer'> 2 Parking </p>
                                            </div>

                                        </div>
                                    </Card.Footer>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide style={{ width: '450px', margin: '0' }}>
                                <Card id='main_card'>
                                    <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                    <Card.Body>
                                        <span className='feture_tag'>
                                            Feature
                                        </span>
                                        <span className='like_tag'>
                                            <AiOutlineHeart size={25} />
                                        </span>
                                        <span className='sell_teg'>
                                            Sell
                                        </span>
                                        <span className='price_teg'>
                                            $1,999,000 / USD
                                        </span>

                                        <div>
                                            <div id='feature_card_mainbody'>
                                                <BiHomeSmile size={23} />
                                                <span className='feture_body_title'> Home </span>
                                            </div>
                                            <div id='feature_card_middletext'>
                                                <span>
                                                    Luxury villa in Rego Park
                                                </span>
                                                <p>
                                                    California City, CA, USA
                                                </p>
                                            </div>
                                        </div>
                                    </Card.Body>

                                    <Card.Footer id='feature_card_footer'>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <RiHotelBedLine size={22} />
                                                <p className='text_footer'> 3 Bedrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiBuilding3Line size={22} />
                                                <p className='text_footer'> 1200 Sqft </p>
                                            </div>

                                        </div>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <FiCloudDrizzle size={22} />
                                                <p className='text_footer'> 4 Bathrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiParkingBoxLine size={22} />
                                                <p className='text_footer'> 2 Parking </p>
                                            </div>

                                        </div>
                                    </Card.Footer>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide style={{ width: '450px', margin: '0' }}>
                                <Card id='main_card'>
                                    <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                    <Card.Body>
                                        <span className='feture_tag'>
                                            Feature
                                        </span>
                                        <span className='like_tag'>
                                            <AiOutlineHeart size={25} />
                                        </span>
                                        <span className='sell_teg'>
                                            Sell
                                        </span>
                                        <span className='price_teg'>
                                            $1,999,000 / USD
                                        </span>

                                        <div>
                                            <div id='feature_card_mainbody'>
                                                <BiHomeSmile size={23} />
                                                <span className='feture_body_title'> Home </span>
                                            </div>
                                            <div id='feature_card_middletext'>
                                                <span>
                                                    Luxury villa in Rego Park
                                                </span>
                                                <p>
                                                    California City, CA, USA
                                                </p>
                                            </div>
                                        </div>
                                    </Card.Body>

                                    <Card.Footer id='feature_card_footer'>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <RiHotelBedLine size={22} />
                                                <p className='text_footer'> 3 Bedrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiBuilding3Line size={22} />
                                                <p className='text_footer'> 1200 Sqft </p>
                                            </div>

                                        </div>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <FiCloudDrizzle size={22} />
                                                <p className='text_footer'> 4 Bathrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiParkingBoxLine size={22} />
                                                <p className='text_footer'> 2 Parking </p>
                                            </div>

                                        </div>
                                    </Card.Footer>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide style={{ width: '450px', margin: '0' }}>
                                <Card id='main_card'>
                                    <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                    <Card.Body>
                                        <span className='feture_tag'>
                                            Feature
                                        </span>
                                        <span className='like_tag'>
                                            <AiOutlineHeart size={25} />
                                        </span>
                                        <span className='sell_teg'>
                                            Sell
                                        </span>
                                        <span className='price_teg'>
                                            $1,999,000 / USD
                                        </span>

                                        <div>
                                            <div id='feature_card_mainbody'>
                                                <BiHomeSmile size={23} />
                                                <span className='feture_body_title'> Home </span>
                                            </div>
                                            <div id='feature_card_middletext'>
                                                <span>
                                                    Luxury villa in Rego Park
                                                </span>
                                                <p>
                                                    California City, CA, USA
                                                </p>
                                            </div>
                                        </div>
                                    </Card.Body>

                                    <Card.Footer id='feature_card_footer'>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <RiHotelBedLine size={22} />
                                                <p className='text_footer'> 3 Bedrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiBuilding3Line size={22} />
                                                <p className='text_footer'> 1200 Sqft </p>
                                            </div>

                                        </div>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <FiCloudDrizzle size={22} />
                                                <p className='text_footer'> 4 Bathrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiParkingBoxLine size={22} />
                                                <p className='text_footer'> 2 Parking </p>
                                            </div>

                                        </div>
                                    </Card.Footer>
                                </Card>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                    <div className='most_fav_tablat_view'>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            freeMode={true}
                            pagination={{
                                clickable: true,
                                renderBullet: renderBullet
                            }}
                            modules={[FreeMode, Pagination]}
                        // className="mySwiper"
                        // style={{
                        //     width: "1030px", height: "450px"
                        // }}
                        >
                            <SwiperSlide >
                                <Card id='fea_main_card'>
                                    <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                    <Card.Body>
                                        <span className='feture_tag'>
                                            Feature
                                        </span>
                                        <span className='like_tag'>
                                            <AiOutlineHeart size={25} />
                                        </span>
                                        <span className='sell_teg'>
                                            Sell
                                        </span>
                                        <span className='price_teg'>
                                            $1,999,000 / USD
                                        </span>

                                        <div>
                                            <div id='feature_card_mainbody'>
                                                <BiHomeSmile size={23} />
                                                <span className='feture_body_title'> Home </span>
                                            </div>
                                            <div id='feature_card_middletext'>
                                                <span>
                                                    Luxury villa in Rego Park
                                                </span>
                                                <p>
                                                    California City, CA, USA
                                                </p>
                                            </div>
                                        </div>
                                    </Card.Body>

                                    <Card.Footer id='feature_card_footer'>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <RiHotelBedLine size={22} />
                                                <p className='text_footer'> 3 Bedrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiBuilding3Line size={22} />
                                                <p className='text_footer'> 1200 Sqft </p>
                                            </div>

                                        </div>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <FiCloudDrizzle size={22} />
                                                <p className='text_footer'> 4 Bathrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiParkingBoxLine size={22} />
                                                <p className='text_footer'> 2 Parking </p>
                                            </div>

                                        </div>
                                    </Card.Footer>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide >
                                <Card id='fea_main_card'>
                                    <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                    <Card.Body>
                                        <span className='feture_tag'>
                                            Feature
                                        </span>
                                        <span className='like_tag'>
                                            <AiOutlineHeart size={25} />
                                        </span>
                                        <span className='sell_teg'>
                                            Sell
                                        </span>
                                        <span className='price_teg'>
                                            $1,999,000 / USD
                                        </span>

                                        <div>
                                            <div id='feature_card_mainbody'>
                                                <BiHomeSmile size={23} />
                                                <span className='feture_body_title'> Home </span>
                                            </div>
                                            <div id='feature_card_middletext'>
                                                <span>
                                                    Luxury villa in Rego Park
                                                </span>
                                                <p>
                                                    California City, CA, USA
                                                </p>
                                            </div>
                                        </div>
                                    </Card.Body>

                                    <Card.Footer id='feature_card_footer'>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <RiHotelBedLine size={22} />
                                                <p className='text_footer'> 3 Bedrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiBuilding3Line size={22} />
                                                <p className='text_footer'> 1200 Sqft </p>
                                            </div>

                                        </div>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <FiCloudDrizzle size={22} />
                                                <p className='text_footer'> 4 Bathrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiParkingBoxLine size={22} />
                                                <p className='text_footer'> 2 Parking </p>
                                            </div>

                                        </div>
                                    </Card.Footer>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide >
                                <Card id='fea_main_card'>
                                    <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                    <Card.Body>
                                        <span className='feture_tag'>
                                            Feature
                                        </span>
                                        <span className='like_tag'>
                                            <AiOutlineHeart size={25} />
                                        </span>
                                        <span className='sell_teg'>
                                            Sell
                                        </span>
                                        <span className='price_teg'>
                                            $1,999,000 / USD
                                        </span>

                                        <div>
                                            <div id='feature_card_mainbody'>
                                                <BiHomeSmile size={23} />
                                                <span className='feture_body_title'> Home </span>
                                            </div>
                                            <div id='feature_card_middletext'>
                                                <span>
                                                    Luxury villa in Rego Park
                                                </span>
                                                <p>
                                                    California City, CA, USA
                                                </p>
                                            </div>
                                        </div>
                                    </Card.Body>

                                    <Card.Footer id='feature_card_footer'>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <RiHotelBedLine size={22} />
                                                <p className='text_footer'> 3 Bedrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiBuilding3Line size={22} />
                                                <p className='text_footer'> 1200 Sqft </p>
                                            </div>

                                        </div>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <FiCloudDrizzle size={22} />
                                                <p className='text_footer'> 4 Bathrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiParkingBoxLine size={22} />
                                                <p className='text_footer'> 2 Parking </p>
                                            </div>

                                        </div>
                                    </Card.Footer>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide >
                                <Card id='fea_main_card'>
                                    <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                    <Card.Body>
                                        <span className='feture_tag'>
                                            Feature
                                        </span>
                                        <span className='like_tag'>
                                            <AiOutlineHeart size={25} />
                                        </span>
                                        <span className='sell_teg'>
                                            Sell
                                        </span>
                                        <span className='price_teg'>
                                            $1,999,000 / USD
                                        </span>

                                        <div>
                                            <div id='feature_card_mainbody'>
                                                <BiHomeSmile size={23} />
                                                <span className='feture_body_title'> Home </span>
                                            </div>
                                            <div id='feature_card_middletext'>
                                                <span>
                                                    Luxury villa in Rego Park
                                                </span>
                                                <p>
                                                    California City, CA, USA
                                                </p>
                                            </div>
                                        </div>
                                    </Card.Body>

                                    <Card.Footer id='feature_card_footer'>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <RiHotelBedLine size={22} />
                                                <p className='text_footer'> 3 Bedrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiBuilding3Line size={22} />
                                                <p className='text_footer'> 1200 Sqft </p>
                                            </div>

                                        </div>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <FiCloudDrizzle size={22} />
                                                <p className='text_footer'> 4 Bathrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiParkingBoxLine size={22} />
                                                <p className='text_footer'> 2 Parking </p>
                                            </div>

                                        </div>
                                    </Card.Footer>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide >
                                <Card id='fea_main_card'>
                                    <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                    <Card.Body>
                                        <span className='feture_tag'>
                                            Feature
                                        </span>
                                        <span className='like_tag'>
                                            <AiOutlineHeart size={25} />
                                        </span>
                                        <span className='sell_teg'>
                                            Sell
                                        </span>
                                        <span className='price_teg'>
                                            $1,999,000 / USD
                                        </span>

                                        <div>
                                            <div id='feature_card_mainbody'>
                                                <BiHomeSmile size={23} />
                                                <span className='feture_body_title'> Home </span>
                                            </div>
                                            <div id='feature_card_middletext'>
                                                <span>
                                                    Luxury villa in Rego Park
                                                </span>
                                                <p>
                                                    California City, CA, USA
                                                </p>
                                            </div>
                                        </div>
                                    </Card.Body>

                                    <Card.Footer id='feature_card_footer'>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <RiHotelBedLine size={22} />
                                                <p className='text_footer'> 3 Bedrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiBuilding3Line size={22} />
                                                <p className='text_footer'> 1200 Sqft </p>
                                            </div>

                                        </div>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <FiCloudDrizzle size={22} />
                                                <p className='text_footer'> 4 Bathrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiParkingBoxLine size={22} />
                                                <p className='text_footer'> 2 Parking </p>
                                            </div>

                                        </div>
                                    </Card.Footer>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide >
                                <Card id='fea_main_card'>
                                    <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                    <Card.Body>
                                        <span className='feture_tag'>
                                            Feature
                                        </span>
                                        <span className='like_tag'>
                                            <AiOutlineHeart size={25} />
                                        </span>
                                        <span className='sell_teg'>
                                            Sell
                                        </span>
                                        <span className='price_teg'>
                                            $1,999,000 / USD
                                        </span>

                                        <div>
                                            <div id='feature_card_mainbody'>
                                                <BiHomeSmile size={23} />
                                                <span className='feture_body_title'> Home </span>
                                            </div>
                                            <div id='feature_card_middletext'>
                                                <span>
                                                    Luxury villa in Rego Park
                                                </span>
                                                <p>
                                                    California City, CA, USA
                                                </p>
                                            </div>
                                        </div>
                                    </Card.Body>

                                    <Card.Footer id='feature_card_footer'>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <RiHotelBedLine size={22} />
                                                <p className='text_footer'> 3 Bedrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiBuilding3Line size={22} />
                                                <p className='text_footer'> 1200 Sqft </p>
                                            </div>

                                        </div>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <FiCloudDrizzle size={22} />
                                                <p className='text_footer'> 4 Bathrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiParkingBoxLine size={22} />
                                                <p className='text_footer'> 2 Parking </p>
                                            </div>

                                        </div>
                                    </Card.Footer>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide >
                                <Card id='fea_main_card'>
                                    <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                    <Card.Body>
                                        <span className='feture_tag'>
                                            Feature
                                        </span>
                                        <span className='like_tag'>
                                            <AiOutlineHeart size={25} />
                                        </span>
                                        <span className='sell_teg'>
                                            Sell
                                        </span>
                                        <span className='price_teg'>
                                            $1,999,000 / USD
                                        </span>

                                        <div>
                                            <div id='feature_card_mainbody'>
                                                <BiHomeSmile size={23} />
                                                <span className='feture_body_title'> Home </span>
                                            </div>
                                            <div id='feature_card_middletext'>
                                                <span>
                                                    Luxury villa in Rego Park
                                                </span>
                                                <p>
                                                    California City, CA, USA
                                                </p>
                                            </div>
                                        </div>
                                    </Card.Body>

                                    <Card.Footer id='feature_card_footer'>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <RiHotelBedLine size={22} />
                                                <p className='text_footer'> 3 Bedrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiBuilding3Line size={22} />
                                                <p className='text_footer'> 1200 Sqft </p>
                                            </div>

                                        </div>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <FiCloudDrizzle size={22} />
                                                <p className='text_footer'> 4 Bathrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiParkingBoxLine size={22} />
                                                <p className='text_footer'> 2 Parking </p>
                                            </div>

                                        </div>
                                    </Card.Footer>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide >
                                <Card id='fea_main_card'>
                                    <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                    <Card.Body>
                                        <span className='feture_tag'>
                                            Feature
                                        </span>
                                        <span className='like_tag'>
                                            <AiOutlineHeart size={25} />
                                        </span>
                                        <span className='sell_teg'>
                                            Sell
                                        </span>
                                        <span className='price_teg'>
                                            $1,999,000 / USD
                                        </span>

                                        <div>
                                            <div id='feature_card_mainbody'>
                                                <BiHomeSmile size={23} />
                                                <span className='feture_body_title'> Home </span>
                                            </div>
                                            <div id='feature_card_middletext'>
                                                <span>
                                                    Luxury villa in Rego Park
                                                </span>
                                                <p>
                                                    California City, CA, USA
                                                </p>
                                            </div>
                                        </div>
                                    </Card.Body>

                                    <Card.Footer id='feature_card_footer'>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <RiHotelBedLine size={22} />
                                                <p className='text_footer'> 3 Bedrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiBuilding3Line size={22} />
                                                <p className='text_footer'> 1200 Sqft </p>
                                            </div>

                                        </div>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <FiCloudDrizzle size={22} />
                                                <p className='text_footer'> 4 Bathrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiParkingBoxLine size={22} />
                                                <p className='text_footer'> 2 Parking </p>
                                            </div>

                                        </div>
                                    </Card.Footer>
                                </Card>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className='most_fav_mobile_view'>
                        <Swiper
                            slidesPerView={1.5}
                            spaceBetween={30}
                            freeMode={true}
                            pagination={{
                                clickable: true,
                                renderBullet: renderBullet
                            }}
                            modules={[FreeMode, Pagination]}
                        // className="mySwiper"
                        // style={{
                        //     width: "478px ", height: "450px"
                        // }}
                        >
                            <SwiperSlide id="prop-mobile-swiper-slider" >
                                <Card id='main_card'>
                                    <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                    <Card.Body>
                                        <span className='feture_tag'>
                                            Feature
                                        </span>
                                        <span className='like_tag'>
                                            <AiOutlineHeart size={25} />
                                        </span>
                                        <span className='sell_teg'>
                                            Sell
                                        </span>
                                        <span className='price_teg'>
                                            $1,999,000 / USD
                                        </span>

                                        <div>
                                            <div id='feature_card_mainbody'>
                                                <BiHomeSmile size={23} />
                                                <span className='feture_body_title'> Home </span>
                                            </div>
                                            <div id='feature_card_middletext'>
                                                <span>
                                                    Luxury villa in Rego Park
                                                </span>
                                                <p>
                                                    California City, CA, USA
                                                </p>
                                            </div>
                                        </div>
                                    </Card.Body>

                                    <Card.Footer id='feature_card_footer'>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <RiHotelBedLine size={22} />
                                                <p className='text_footer'> 3 Bedrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiBuilding3Line size={22} />
                                                <p className='text_footer'> 1200 Sqft </p>
                                            </div>

                                        </div>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <FiCloudDrizzle size={22} />
                                                <p className='text_footer'> 4 Bathrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiParkingBoxLine size={22} />
                                                <p className='text_footer'> 2 Parking </p>
                                            </div>

                                        </div>
                                    </Card.Footer>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide id="prop-mobile-swiper-slider" >
                                <Card id='main_card'>
                                    <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                    <Card.Body>
                                        <span className='feture_tag'>
                                            Feature
                                        </span>
                                        <span className='like_tag'>
                                            <AiOutlineHeart size={25} />
                                        </span>
                                        <span className='sell_teg'>
                                            Sell
                                        </span>
                                        <span className='price_teg'>
                                            $1,999,000 / USD
                                        </span>

                                        <div>
                                            <div id='feature_card_mainbody'>
                                                <BiHomeSmile size={23} />
                                                <span className='feture_body_title'> Home </span>
                                            </div>
                                            <div id='feature_card_middletext'>
                                                <span>
                                                    Luxury villa in Rego Park
                                                </span>
                                                <p>
                                                    California City, CA, USA
                                                </p>
                                            </div>
                                        </div>
                                    </Card.Body>

                                    <Card.Footer id='feature_card_footer'>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <RiHotelBedLine size={22} />
                                                <p className='text_footer'> 3 Bedrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiBuilding3Line size={22} />
                                                <p className='text_footer'> 1200 Sqft </p>
                                            </div>

                                        </div>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <FiCloudDrizzle size={22} />
                                                <p className='text_footer'> 4 Bathrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiParkingBoxLine size={22} />
                                                <p className='text_footer'> 2 Parking </p>
                                            </div>

                                        </div>
                                    </Card.Footer>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide id="prop-mobile-swiper-slider" >
                                <Card id='main_card'>
                                    <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                    <Card.Body>
                                        <span className='feture_tag'>
                                            Feature
                                        </span>
                                        <span className='like_tag'>
                                            <AiOutlineHeart size={25} />
                                        </span>
                                        <span className='sell_teg'>
                                            Sell
                                        </span>
                                        <span className='price_teg'>
                                            $1,999,000 / USD
                                        </span>

                                        <div>
                                            <div id='feature_card_mainbody'>
                                                <BiHomeSmile size={23} />
                                                <span className='feture_body_title'> Home </span>
                                            </div>
                                            <div id='feature_card_middletext'>
                                                <span>
                                                    Luxury villa in Rego Park
                                                </span>
                                                <p>
                                                    California City, CA, USA
                                                </p>
                                            </div>
                                        </div>
                                    </Card.Body>

                                    <Card.Footer id='feature_card_footer'>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <RiHotelBedLine size={22} />
                                                <p className='text_footer'> 3 Bedrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiBuilding3Line size={22} />
                                                <p className='text_footer'> 1200 Sqft </p>
                                            </div>

                                        </div>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <FiCloudDrizzle size={22} />
                                                <p className='text_footer'> 4 Bathrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiParkingBoxLine size={22} />
                                                <p className='text_footer'> 2 Parking </p>
                                            </div>

                                        </div>
                                    </Card.Footer>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide id="prop-mobile-swiper-slider" >
                                <Card id='main_card'>
                                    <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                    <Card.Body>
                                        <span className='feture_tag'>
                                            Feature
                                        </span>
                                        <span className='like_tag'>
                                            <AiOutlineHeart size={25} />
                                        </span>
                                        <span className='sell_teg'>
                                            Sell
                                        </span>
                                        <span className='price_teg'>
                                            $1,999,000 / USD
                                        </span>

                                        <div>
                                            <div id='feature_card_mainbody'>
                                                <BiHomeSmile size={23} />
                                                <span className='feture_body_title'> Home </span>
                                            </div>
                                            <div id='feature_card_middletext'>
                                                <span>
                                                    Luxury villa in Rego Park
                                                </span>
                                                <p>
                                                    California City, CA, USA
                                                </p>
                                            </div>
                                        </div>
                                    </Card.Body>

                                    <Card.Footer id='feature_card_footer'>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <RiHotelBedLine size={22} />
                                                <p className='text_footer'> 3 Bedrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiBuilding3Line size={22} />
                                                <p className='text_footer'> 1200 Sqft </p>
                                            </div>

                                        </div>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <FiCloudDrizzle size={22} />
                                                <p className='text_footer'> 4 Bathrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiParkingBoxLine size={22} />
                                                <p className='text_footer'> 2 Parking </p>
                                            </div>

                                        </div>
                                    </Card.Footer>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide id="prop-mobile-swiper-slider" >
                                <Card id='main_card'>
                                    <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                    <Card.Body>
                                        <span className='feture_tag'>
                                            Feature
                                        </span>
                                        <span className='like_tag'>
                                            <AiOutlineHeart size={25} />
                                        </span>
                                        <span className='sell_teg'>
                                            Sell
                                        </span>
                                        <span className='price_teg'>
                                            $1,999,000 / USD
                                        </span>

                                        <div>
                                            <div id='feature_card_mainbody'>
                                                <BiHomeSmile size={23} />
                                                <span className='feture_body_title'> Home </span>
                                            </div>
                                            <div id='feature_card_middletext'>
                                                <span>
                                                    Luxury villa in Rego Park
                                                </span>
                                                <p>
                                                    California City, CA, USA
                                                </p>
                                            </div>
                                        </div>
                                    </Card.Body>

                                    <Card.Footer id='feature_card_footer'>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <RiHotelBedLine size={22} />
                                                <p className='text_footer'> 3 Bedrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiBuilding3Line size={22} />
                                                <p className='text_footer'> 1200 Sqft </p>
                                            </div>

                                        </div>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <FiCloudDrizzle size={22} />
                                                <p className='text_footer'> 4 Bathrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiParkingBoxLine size={22} />
                                                <p className='text_footer'> 2 Parking </p>
                                            </div>

                                        </div>
                                    </Card.Footer>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide id="prop-mobile-swiper-slider" >
                                <Card id='main_card'>
                                    <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                    <Card.Body>
                                        <span className='feture_tag'>
                                            Feature
                                        </span>
                                        <span className='like_tag'>
                                            <AiOutlineHeart size={25} />
                                        </span>
                                        <span className='sell_teg'>
                                            Sell
                                        </span>
                                        <span className='price_teg'>
                                            $1,999,000 / USD
                                        </span>

                                        <div>
                                            <div id='feature_card_mainbody'>
                                                <BiHomeSmile size={23} />
                                                <span className='feture_body_title'> Home </span>
                                            </div>
                                            <div id='feature_card_middletext'>
                                                <span>
                                                    Luxury villa in Rego Park
                                                </span>
                                                <p>
                                                    California City, CA, USA
                                                </p>
                                            </div>
                                        </div>
                                    </Card.Body>

                                    <Card.Footer id='feature_card_footer'>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <RiHotelBedLine size={22} />
                                                <p className='text_footer'> 3 Bedrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiBuilding3Line size={22} />
                                                <p className='text_footer'> 1200 Sqft </p>
                                            </div>

                                        </div>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <FiCloudDrizzle size={22} />
                                                <p className='text_footer'> 4 Bathrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiParkingBoxLine size={22} />
                                                <p className='text_footer'> 2 Parking </p>
                                            </div>

                                        </div>
                                    </Card.Footer>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide id="prop-mobile-swiper-slider" >
                                <Card id='main_card'>
                                    <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                    <Card.Body>
                                        <span className='feture_tag'>
                                            Feature
                                        </span>
                                        <span className='like_tag'>
                                            <AiOutlineHeart size={25} />
                                        </span>
                                        <span className='sell_teg'>
                                            Sell
                                        </span>
                                        <span className='price_teg'>
                                            $1,999,000 / USD
                                        </span>

                                        <div>
                                            <div id='feature_card_mainbody'>
                                                <BiHomeSmile size={23} />
                                                <span className='feture_body_title'> Home </span>
                                            </div>
                                            <div id='feature_card_middletext'>
                                                <span>
                                                    Luxury villa in Rego Park
                                                </span>
                                                <p>
                                                    California City, CA, USA
                                                </p>
                                            </div>
                                        </div>
                                    </Card.Body>

                                    <Card.Footer id='feature_card_footer'>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <RiHotelBedLine size={22} />
                                                <p className='text_footer'> 3 Bedrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiBuilding3Line size={22} />
                                                <p className='text_footer'> 1200 Sqft </p>
                                            </div>

                                        </div>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <FiCloudDrizzle size={22} />
                                                <p className='text_footer'> 4 Bathrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiParkingBoxLine size={22} />
                                                <p className='text_footer'> 2 Parking </p>
                                            </div>

                                        </div>
                                    </Card.Footer>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide id="prop-mobile-swiper-slider" >
                                <Card id='main_card'>
                                    <Card.Img variant="top" id='card_img' src={cardImg.src} />
                                    <Card.Body>
                                        <span className='feture_tag'>
                                            Feature
                                        </span>
                                        <span className='like_tag'>
                                            <AiOutlineHeart size={25} />
                                        </span>
                                        <span className='sell_teg'>
                                            Sell
                                        </span>
                                        <span className='price_teg'>
                                            $1,999,000 / USD
                                        </span>

                                        <div>
                                            <div id='feature_card_mainbody'>
                                                <BiHomeSmile size={23} />
                                                <span className='feture_body_title'> Home </span>
                                            </div>
                                            <div id='feature_card_middletext'>
                                                <span>
                                                    Luxury villa in Rego Park
                                                </span>
                                                <p>
                                                    California City, CA, USA
                                                </p>
                                            </div>
                                        </div>
                                    </Card.Body>

                                    <Card.Footer id='feature_card_footer'>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <RiHotelBedLine size={22} />
                                                <p className='text_footer'> 3 Bedrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiBuilding3Line size={22} />
                                                <p className='text_footer'> 1200 Sqft </p>
                                            </div>

                                        </div>
                                        <div className='footer_body'>
                                            <div id='footer_content'>
                                                <FiCloudDrizzle size={22} />
                                                <p className='text_footer'> 4 Bathrooms </p>
                                            </div>
                                            <div id='footer_content'>
                                                <RiParkingBoxLine size={22} />
                                                <p className='text_footer'> 2 Parking </p>
                                            </div>

                                        </div>
                                    </Card.Footer>
                                </Card>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
            {/* ===== AGENT SECTION =======  */}
            <section id='agent_section'>
                <div className='main-agent-sec'>
                    <div className='browse-agent'>
                        <span>Browse By Agents
                        </span>
                        <button className='mt-3'> <FiEye className="mx-2" size={25} />
                            View all Agent
                        </button>
                    </div>
                    <div className='mobile_view_headline07'>
                        <div className='apart_headline'>
                            <span className='headline'>
                                Most <span className="hovertext1">
                                    <span className="text" data-text="Favorites"> Favorites</span>
                                </span> Properties
                            </span>
                        </div>
                        <div>
                            <button className='view_all_arrow'><BsArrowRight size={25} /></button>
                        </div>
                    </div>
                    <div className='agent-slider'>
                        <Swiper
                            id='agent_swiper'
                            slidesPerView={3}
                            spaceBetween={30}
                            freeMode={true}
                            pagination={{
                                clickable: true,
                                renderBullet: renderBullet
                            }}
                            modules={[FreeMode, Pagination]}
                            // // className="mySwiper"
                            style={{
                                width: "1200px ", height: "400px"
                            }}
                        >
                            <SwiperSlide id="agent-swiper-slider" >
                                <Card id='main_agent_card'>
                                    <Card.Body>
                                        <div className='agent_card_content'>
                                            <div>

                                                <img src={agentimg.src} className='agent-profile' width={100} height={100} />
                                            </div>
                                            <div className='mt-2'>
                                                <span className='agent-name'>
                                                    Divy Jani
                                                </span>
                                            </div>
                                            <div>
                                                <span className='agent-main'>
                                                    DivyJani95@hotmail.com
                                                </span>
                                            </div>
                                            <div className='view-all-agent mt-5'>
                                                <span>
                                                    16 Properties
                                                </span>
                                                <FiArrowRightCircle size={25} className='view-agent-deatils' />
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide id="agent-swiper-slider" >
                                <Card id='main_agent_card'>
                                    <Card.Body>
                                        <div className='agent_card_content'>
                                            <div>

                                                <img src={agentimg.src} className='agent-profile' width={100} height={100} />
                                            </div>
                                            <div className='mt-2'>
                                                <span className='agent-name'>
                                                    Divy Jani
                                                </span>
                                            </div>
                                            <div>
                                                <span className='agent-main'>
                                                    DivyJani95@hotmail.com
                                                </span>
                                            </div>
                                            <div className='view-all-agent mt-5'>
                                                <span>
                                                    16 Properties
                                                </span>
                                                <FiArrowRightCircle size={25} className='view-agent-deatils' />
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide id="agent-swiper-slider" >
                                <Card id='main_agent_card'>
                                    <Card.Body>
                                        <div className='agent_card_content'>
                                            <div>

                                                <img src={agentimg.src} className='agent-profile' width={100} height={100} />
                                            </div>
                                            <div className='mt-2'>
                                                <span className='agent-name'>
                                                    Divy Jani
                                                </span>
                                            </div>
                                            <div>
                                                <span className='agent-main'>
                                                    DivyJani95@hotmail.com
                                                </span>
                                            </div>
                                            <div className='view-all-agent mt-5'>
                                                <span>
                                                    16 Properties
                                                </span>
                                                <FiArrowRightCircle size={25} className='view-agent-deatils' />
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide id="agent-swiper-slider" >
                                <Card id='main_agent_card'>
                                    <Card.Body>
                                        <div className='agent_card_content'>
                                            <div>

                                                <img src={agentimg.src} className='agent-profile' width={100} height={100} />
                                            </div>
                                            <div className='mt-2'>
                                                <span className='agent-name'>
                                                    Divy Jani
                                                </span>
                                            </div>
                                            <div>
                                                <span className='agent-main'>
                                                    DivyJani95@hotmail.com
                                                </span>
                                            </div>
                                            <div className='view-all-agent mt-5'>
                                                <span>
                                                    16 Properties
                                                </span>
                                                <FiArrowRightCircle size={25} className='view-agent-deatils' />
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide id="agent-swiper-slider" >
                                <Card id='main_agent_card'>
                                    <Card.Body>
                                        <div className='agent_card_content'>
                                            <div>

                                                <img src={agentimg.src} className='agent-profile' width={100} height={100} />
                                            </div>
                                            <div className='mt-2'>
                                                <span className='agent-name'>
                                                    Divy Jani
                                                </span>
                                            </div>
                                            <div>
                                                <span className='agent-main'>
                                                    DivyJani95@hotmail.com
                                                </span>
                                            </div>
                                            <div className='view-all-agent mt-5'>
                                                <span>
                                                    16 Properties
                                                </span>
                                                <FiArrowRightCircle size={25} className='view-agent-deatils' />
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide id="agent-swiper-slider" >
                                <Card id='main_agent_card'>
                                    <Card.Body>
                                        <div className='agent_card_content'>
                                            <div>

                                                <img src={agentimg.src} className='agent-profile' width={100} height={100} />
                                            </div>
                                            <div className='mt-2'>
                                                <span className='agent-name'>
                                                    Divy Jani
                                                </span>
                                            </div>
                                            <div>
                                                <span className='agent-main'>
                                                    DivyJani95@hotmail.com
                                                </span>
                                            </div>
                                            <div className='view-all-agent mt-5'>
                                                <span>
                                                    16 Properties
                                                </span>
                                                <FiArrowRightCircle size={25} className='view-agent-deatils' />
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide id="agent-swiper-slider" >
                                <Card id='main_agent_card'>
                                    <Card.Body>
                                        <div className='agent_card_content'>
                                            <div>

                                                <img src={agentimg.src} className='agent-profile' width={100} height={100} />
                                            </div>
                                            <div className='mt-2'>
                                                <span className='agent-name'>
                                                    Divy Jani
                                                </span>
                                            </div>
                                            <div>
                                                <span className='agent-main'>
                                                    DivyJani95@hotmail.com
                                                </span>
                                            </div>
                                            <div className='view-all-agent mt-5'>
                                                <span>
                                                    16 Properties
                                                </span>
                                                <FiArrowRightCircle size={25} className='view-agent-deatils' />
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide id="agent-swiper-slider" >
                                <Card id='main_agent_card'>
                                    <Card.Body>
                                        <div className='agent_card_content'>
                                            <div>

                                                <img src={agentimg.src} className='agent-profile' width={100} height={100} />
                                            </div>
                                            <div className='mt-2'>
                                                <span className='agent-name'>
                                                    Divy Jani
                                                </span>
                                            </div>
                                            <div>
                                                <span className='agent-main'>
                                                    DivyJani95@hotmail.com
                                                </span>
                                            </div>
                                            <div className='view-all-agent mt-5'>
                                                <span>
                                                    16 Properties
                                                </span>
                                                <FiArrowRightCircle size={25} className='view-agent-deatils' />
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide id="agent-swiper-slider" >
                                <Card id='main_agent_card'>
                                    <Card.Body>
                                        <div className='agent_card_content'>
                                            <div>

                                                <img src={agentimg.src} className='agent-profile' width={100} height={100} />
                                            </div>
                                            <div className='mt-2'>
                                                <span className='agent-name'>
                                                    Divy Jani
                                                </span>
                                            </div>
                                            <div>
                                                <span className='agent-main'>
                                                    DivyJani95@hotmail.com
                                                </span>
                                            </div>
                                            <div className='view-all-agent mt-5'>
                                                <span>
                                                    16 Properties
                                                </span>
                                                <FiArrowRightCircle size={25} className='view-agent-deatils' />
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className='agent-slider-mobile-view'>
                        <Swiper
                            id='agent_swiper-mobile'
                            // slidesPerView={2}
                            spaceBetween={30}
                            freeMode={true}
                            pagination={{
                                clickable: true,
                                renderBullet: renderBullet

                            }}
                            modules={[FreeMode, Pagination]}
                            // // className="mySwiper"
                            style={{
                                width: "600px", height: "400px"
                            }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                300: {
                                    slidesPerView: 1,
                                },
                                576: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                992: {
                                    slidesPerView: 4,
                                },
                                1200: {
                                    slidesPerView: 5,
                                },
                            }}
                        >
                            <SwiperSlide id="agent-swiper-slider" >
                                <Card id='main_agent_card'>
                                    <Card.Body>
                                        <div className='agent_card_content'>
                                            <div>

                                                <img src={agentimg.src} className='agent-profile' width={100} height={100} />
                                            </div>
                                            <div className='mt-2'>
                                                <span className='agent-name'>
                                                    Divy Jani
                                                </span>
                                            </div>
                                            <div>
                                                <span className='agent-main'>
                                                    DivyJani95@hotmail.com
                                                </span>
                                            </div>
                                            <div className='view-all-agent mt-5'>
                                                <span>
                                                    16 Properties
                                                </span>
                                                <FiArrowRightCircle size={25} className='view-agent-deatils' />
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide id="agent-swiper-slider" >
                                <Card id='main_agent_card'>
                                    <Card.Body>
                                        <div className='agent_card_content'>
                                            <div>

                                                <img src={agentimg.src} className='agent-profile' width={100} height={100} />
                                            </div>
                                            <div className='mt-2'>
                                                <span className='agent-name'>
                                                    Divy Jani
                                                </span>
                                            </div>
                                            <div>
                                                <span className='agent-main'>
                                                    DivyJani95@hotmail.com
                                                </span>
                                            </div>
                                            <div className='view-all-agent mt-5'>
                                                <span>
                                                    16 Properties
                                                </span>
                                                <FiArrowRightCircle size={25} className='view-agent-deatils' />
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide id="agent-swiper-slider" >
                                <Card id='main_agent_card'>
                                    <Card.Body>
                                        <div className='agent_card_content'>
                                            <div>

                                                <img src={agentimg.src} className='agent-profile' width={100} height={100} />
                                            </div>
                                            <div className='mt-2'>
                                                <span className='agent-name'>
                                                    Divy Jani
                                                </span>
                                            </div>
                                            <div>
                                                <span className='agent-main'>
                                                    DivyJani95@hotmail.com
                                                </span>
                                            </div>
                                            <div className='view-all-agent mt-5'>
                                                <span>
                                                    16 Properties
                                                </span>
                                                <FiArrowRightCircle size={25} className='view-agent-deatils' />
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide id="agent-swiper-slider" >
                                <Card id='main_agent_card'>
                                    <Card.Body>
                                        <div className='agent_card_content'>
                                            <div>

                                                <img src={agentimg.src} className='agent-profile' width={100} height={100} />
                                            </div>
                                            <div className='mt-2'>
                                                <span className='agent-name'>
                                                    Divy Jani
                                                </span>
                                            </div>
                                            <div>
                                                <span className='agent-main'>
                                                    DivyJani95@hotmail.com
                                                </span>
                                            </div>
                                            <div className='view-all-agent mt-5'>
                                                <span>
                                                    16 Properties
                                                </span>
                                                <FiArrowRightCircle size={25} className='view-agent-deatils' />
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide id="agent-swiper-slider" >
                                <Card id='main_agent_card'>
                                    <Card.Body>
                                        <div className='agent_card_content'>
                                            <div>

                                                <img src={agentimg.src} className='agent-profile' width={100} height={100} />
                                            </div>
                                            <div className='mt-2'>
                                                <span className='agent-name'>
                                                    Divy Jani
                                                </span>
                                            </div>
                                            <div>
                                                <span className='agent-main'>
                                                    DivyJani95@hotmail.com
                                                </span>
                                            </div>
                                            <div className='view-all-agent mt-5'>
                                                <span>
                                                    16 Properties
                                                </span>
                                                <FiArrowRightCircle size={25} className='view-agent-deatils' />
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide id="agent-swiper-slider" >
                                <Card id='main_agent_card'>
                                    <Card.Body>
                                        <div className='agent_card_content'>
                                            <div>

                                                <img src={agentimg.src} className='agent-profile' width={100} height={100} />
                                            </div>
                                            <div className='mt-2'>
                                                <span className='agent-name'>
                                                    Divy Jani
                                                </span>
                                            </div>
                                            <div>
                                                <span className='agent-main'>
                                                    DivyJani95@hotmail.com
                                                </span>
                                            </div>
                                            <div className='view-all-agent mt-5'>
                                                <span>
                                                    16 Properties
                                                </span>
                                                <FiArrowRightCircle size={25} className='view-agent-deatils' />
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide id="agent-swiper-slider" >
                                <Card id='main_agent_card'>
                                    <Card.Body>
                                        <div className='agent_card_content'>
                                            <div>

                                                <img src={agentimg.src} className='agent-profile' width={100} height={100} />
                                            </div>
                                            <div className='mt-2'>
                                                <span className='agent-name'>
                                                    Divy Jani
                                                </span>
                                            </div>
                                            <div>
                                                <span className='agent-main'>
                                                    DivyJani95@hotmail.com
                                                </span>
                                            </div>
                                            <div className='view-all-agent mt-5'>
                                                <span>
                                                    16 Properties
                                                </span>
                                                <FiArrowRightCircle size={25} className='view-agent-deatils' />
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide id="agent-swiper-slider" >
                                <Card id='main_agent_card'>
                                    <Card.Body>
                                        <div className='agent_card_content'>
                                            <div>

                                                <img src={agentimg.src} className='agent-profile' width={100} height={100} />
                                            </div>
                                            <div className='mt-2'>
                                                <span className='agent-name'>
                                                    Divy Jani
                                                </span>
                                            </div>
                                            <div>
                                                <span className='agent-main'>
                                                    DivyJani95@hotmail.com
                                                </span>
                                            </div>
                                            <div className='view-all-agent mt-5'>
                                                <span>
                                                    16 Properties
                                                </span>
                                                <FiArrowRightCircle size={25} className='view-agent-deatils' />
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide id="agent-swiper-slider" >
                                <Card id='main_agent_card'>
                                    <Card.Body>
                                        <div className='agent_card_content'>
                                            <div>

                                                <img src={agentimg.src} className='agent-profile' width={100} height={100} />
                                            </div>
                                            <div className='mt-2'>
                                                <span className='agent-name'>
                                                    Divy Jani
                                                </span>
                                            </div>
                                            <div>
                                                <span className='agent-main'>
                                                    DivyJani95@hotmail.com
                                                </span>
                                            </div>
                                            <div className='view-all-agent mt-5'>
                                                <span>
                                                    16 Properties
                                                </span>
                                                <FiArrowRightCircle size={25} className='view-agent-deatils' />
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>

            </section>
            {/* ========== ARTICLE SECTION ========== */}
            <section id='articles'>
                <div id='main_articleSec'>
                    <div className='article_headline'>
                        <div data-aos="fade-right" data-aos-duration="1000">
                            <h3>
                                Our <span
                                // className="hovertext3"
                                >
                                    <span className='highlight'
                                        data-aos="fade-left" data-aos-duration="5000"
                                    // className="text" data-text="Articles"
                                    >Articles</span>
                                </span>
                            </h3>
                        </div>
                        <div className='rightside_article_headlin'>
                            <button className="learn-more" id="viewall">
                                <span aria-hidden="true" className="circle">
                                    <span className="icon arrow"></span>
                                </span>
                                <span className="button-text">See All Properties</span>
                            </button>
                        </div>
                    </div>
                    <div className='mobile_view_headline06'>
                        <div className='apart_headline'>
                            <span className='headline'>
                                Our <span className="hovertext1">
                                    <span className="text" data-text="Articles"> Articles</span>
                                </span>
                            </span>
                        </div>
                        <div>
                            <button className='view_all_arrow'><BsArrowRight size={25} /></button>
                        </div>
                    </div>
                    <div className='row' id='article_cards'>
                        <div className='col-12 col-md-6 col-lg-3'>
                            <Card id='article_main_card'>
                                <Card.Img variant="top" id='article_card_img' src={cardImg.src} />
                                <span id='apartment_tag'>aprtment</span>
                                <Card.Body id='article_card_body'>

                                    <div id='article_card_headline'>
                                        <span>
                                            Property Purchase Laws in USA
                                        </span>
                                        <p>
                                            The laws governing the purchase of property in the United States can vary by state, but there are some general principles that apply throughout the...
                                        </p>
                                    </div>
                                    <div id='readmore_article'>
                                        <button className='readmore'> Read More  <FiArrowRight size={20} /></button>

                                    </div>

                                </Card.Body>
                                <Card.Footer id='article_card_footer'>
                                    <div id='admin_pic'>
                                        <img src={adminlogo.src} alt="" className='admin' />
                                    </div>
                                    <div className='article_footer_text'>
                                        <span className='byadmin'> By Admin
                                        </span>
                                        <p>1 day ago</p>
                                    </div>
                                </Card.Footer>
                            </Card>
                        </div>
                        <div className='col-12 col-md-6 col-lg-3'>
                            <Card id='article_main_card'>
                                <Card.Img variant="top" id='article_card_img' src={cardImg.src} />
                                <span id='apartment_tag'>aprtment</span>
                                <Card.Body id='article_card_body'>

                                    <div id='article_card_headline'>
                                        <span>
                                            Property Purchase Laws in USA
                                        </span>
                                        <p>
                                            The laws governing the purchase of property in the United States can vary by state, but there are some general principles that apply throughout the...
                                        </p>
                                    </div>
                                    <div id='readmore_article'>
                                        <button className='readmore'> Read More  <FiArrowRight size={20} /></button>

                                    </div>

                                </Card.Body>
                                <Card.Footer id='article_card_footer'>
                                    <div id='admin_pic'>
                                        <img src={adminlogo.src} alt="" className='admin' />
                                    </div>
                                    <div className='article_footer_text'>
                                        <span className='byadmin'> By Admin
                                        </span>
                                        <p>1 day ago</p>
                                    </div>
                                </Card.Footer>
                            </Card>
                        </div>
                        <div className='col-12 col-md-6 col-lg-3'>
                            <Card id='article_main_card'>
                                <Card.Img variant="top" id='article_card_img' src={cardImg.src} />
                                <span id='apartment_tag'>aprtment</span>
                                <Card.Body id='article_card_body'>

                                    <div id='article_card_headline'>
                                        <span>
                                            Property Purchase Laws in USA
                                        </span>
                                        <p>
                                            The laws governing the purchase of property in the United States can vary by state, but there are some general principles that apply throughout the...
                                        </p>
                                    </div>
                                    <div id='readmore_article'>
                                        <button className='readmore'> Read More  <FiArrowRight size={20} /></button>

                                    </div>

                                </Card.Body>
                                <Card.Footer id='article_card_footer'>
                                    <div id='admin_pic'>
                                        <img src={adminlogo.src} alt="" className='admin' />
                                    </div>
                                    <div className='article_footer_text'>
                                        <span className='byadmin'> By Admin
                                        </span>
                                        <p>1 day ago</p>
                                    </div>
                                </Card.Footer>
                            </Card>
                        </div>
                        <div className='col-12 col-md-6 col-lg-3'>
                            <Card id='article_main_card'>
                                <Card.Img variant="top" id='article_card_img' src={cardImg.src} />
                                <span id='apartment_tag'>aprtment</span>
                                <Card.Body id='article_card_body'>

                                    <div id='article_card_headline'>
                                        <span>
                                            Property Purchase Laws in USA
                                        </span>
                                        <p>
                                            The laws governing the purchase of property in the United States can vary by state, but there are some general principles that apply throughout the...
                                        </p>
                                    </div>
                                    <div id='readmore_article'>
                                        <button className='readmore'> Read More  <FiArrowRight size={20} /></button>

                                    </div>

                                </Card.Body>
                                <Card.Footer id='article_card_footer'>
                                    <div id='admin_pic'>
                                        <img src={adminlogo.src} alt="" className='admin' />
                                    </div>
                                    <div className='article_footer_text'>
                                        <span className='byadmin'> By Admin
                                        </span>
                                        <p>1 day ago</p>
                                    </div>
                                </Card.Footer>
                            </Card>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default HomePage