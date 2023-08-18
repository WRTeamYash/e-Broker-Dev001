"use client"
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
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
import Skeleton from 'react-loading-skeleton';
import MobileHeadline from '../MobileHeadlines/MobileHeadline';
import Link from 'next/link';
import Loader from '../Loader/Loader';
import { GetAllArticlesApi, GetCategorieApi, GetFeturedListingsApi, GetSliderApi } from '@/store/actions/campaign';








const HomePage = () => {

    const renderBullet = (index, className) => {
        return `<span class="${className}" style="background-color: #087c7c;
    outline: 1px solid #000;
    font-size: 20px;
    padding: 8px;
    border: 2px solid #fff;"></span>`;
    };
    const [isLoading, setIsLoading] = useState(true)
    const [showFilterModal, setShowFilterModal] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [expandedStates, setExpandedStates] = useState([]);







    const handleOpenFilterModal = () => {
        setShowFilterModal(true);
    };

    const handleCloseModal = () => {
        setShowFilterModal(false);
    };

    let FeaturestaticData = [
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
            parking: "2 Parking"
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
            parking: "2 Parking"
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
            parking: "2 Parking"
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
            parking: "2 Parking"
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
            parking: "2 Parking"
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
            parking: "2 Parking"
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
            parking: "2 Parking"
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
            parking: "2 Parking"
        },
    ]

    let agentsData = [
        {
            id: 1,
            agentimg: agentimg.src,
            agentName: "Divy Jani",
            agentEmail: " DivyJani95@hotmail.com",
            agentProp: "16 Properties"
        },
        {
            id: 2,
            agentimg: agentimg.src,
            agentName: "Divy Jani",
            agentEmail: " DivyJani95@hotmail.com",
            agentProp: "16 Properties"
        },
        {
            id: 3,
            agentimg: agentimg.src,
            agentName: "Divy Jani",
            agentEmail: " DivyJani95@hotmail.com",
            agentProp: "16 Properties"
        },
        {
            id: 4,
            agentimg: agentimg.src,
            agentName: "Divy Jani",
            agentEmail: " DivyJani95@hotmail.com",
            agentProp: "16 Properties"
        },
        {
            id: 5,
            agentimg: agentimg.src,
            agentName: "Divy Jani",
            agentEmail: " DivyJani95@hotmail.com",
            agentProp: "16 Properties"
        },
        {
            id: 6,
            agentimg: agentimg.src,
            agentName: "Divy Jani",
            agentEmail: " DivyJani95@hotmail.com",
            agentProp: "16 Properties"
        }
    ]
    const breakpoints = {
        375: {
            slidesPerView: 1.5,
            // spaceBetween: 40
        },
        576: {
            slidesPerView: 1.5,
            // spaceBetween: 40
        },
        768: {
            slidesPerView: 2,

        },
        992: {
            slidesPerView: 3,

        },
        1200: {
            slidesPerView: 3,
        },
        1400: {
            slidesPerView: 4,

        }
    };
    const breakpointsMostFav = {
        320: {
            slidesPerView: 1,
            // spaceBetween: 40
        },
        375: {
            slidesPerView: 1,
            // spaceBetween: 40
        },
        576: {
            slidesPerView: 1,
            // spaceBetween: 40
        },
        768: {
            slidesPerView: 2,

        },
        992: {
            slidesPerView: 3,

        },
        1200: {
            slidesPerView: 3,
        },
        1400: {
            slidesPerView: 4,

        }
    };
    const breakpointAgents = {
        320: {
            slidesPerView: 1,
            // spaceBetween: 40
        },
        375: {
            slidesPerView: 1.5,
            // spaceBetween: 40
        },
        576: {
            slidesPerView: 1.5,
            // spaceBetween: 40
        },
        768: {
            slidesPerView: 2,

        },
        992: {
            slidesPerView: 3,

        },
        1200: {
            slidesPerView: 3,
        },
        1400: {
            slidesPerView: 3,

        }
    };



    // API IMPLEMENT
    // SLIDER API 
    const [slider, setSlider] = useState()
    useEffect(() => {
        GetSliderApi((response) => {
            const sliderData = response.data;
            // console.log("slider data ================", sliderData)
            // console.log("slider data ================", sliderData[0].propertys_id)
            setIsLoading(false)
            setSlider(sliderData);
            // console.log("slider data ================", slider[0].propertys_id)
        }, (error) => {
            console.log(error)
        })
    }, [])

    // GET CATEGORIES
    const [getCategories, setGetCategories] = useState()
    useEffect(() => {
        GetCategorieApi((response) => {
            const categoryData = response.data;
            console.log("category data ================",categoryData)
            setIsLoading(false)
            setGetCategories(categoryData);
        }, (error) => {
            console.log(error)
        })
    }, [])


    // GET FEATURED LISTINGS and 
    const [getFeaturedListing, setGetFeaturedListing] = useState()
    useEffect(() => {
        GetFeturedListingsApi("1", "", "", "", "", (response) => {
            const FeaturedListingData = response.data;
            // console.log("featured data ============", FeaturedListingData)
            setIsLoading(false)
            setGetFeaturedListing(FeaturedListingData);
        }, (error) => {
            console.log(error)
        })
    }, [])


    // GET MOST VIEWED PROPERTIES
    const [getMostViewedProp, setGetMostViewedProp] = useState()
    useEffect(() => {
        GetFeturedListingsApi("", "1", "", "", "", (response) => {
            const MostViewed = response.data;
            // console.log("most viewed data ============", MostViewed)
            setIsLoading(false)
            setGetMostViewedProp(MostViewed);
        }, (error) => {
            console.log(error)
        })
    }, [])
    // GET MOST Fav PROPERTIES

    const [getMostFavProperties, setGetMostFavProperties] = useState()
    useEffect(() => {
        GetFeturedListingsApi("", "", "", "", "1", (response) => {
            const MostFav = response.data;
            // console.log("most fav data ============", MostFav)
            setIsLoading(false)
            setGetMostFavProperties(MostFav);
        }, (error) => {
            console.log(error)
        })
    }, [])

    // GET ARTICLES
    const [getArticles, setGetArticles] = useState()

    useEffect(() => {
        GetAllArticlesApi("", (response) => {
            const Articles = response.data;
            // console.log("article data ============", Articles)
            setIsLoading(false)
            setGetArticles(Articles);
            setExpandedStates(new Array(Articles.length).fill(false));
        }, (error) => {
            console.log(error)
        })
    }, [])

    const stripHtmlTags = (htmlString) => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = htmlString;
        return tempDiv.textContent || tempDiv.innerText || '';
    };


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
                        autoplayDuration: 3000,
                        height: "100vh"
                    }}

                >

                    {
                        isLoading ?
                            (
                                // <Loader />
                                // <div className="col-12 loading_data">
                                //     <Skeleton height={20} count={20} />
                                // </div>
                                <Loader />
                            ) :
                            slider &&
                            slider.map((single, index) => {
                                return (
                                    <Slide
                                        background={{
                                            // backgroundImageSrc: SlideImage01.src,
                                            backgroundImageSrc: single.property_title_image,
                                        }}
                                        key={index}

                                    >
                                        <div className='container'>
                                            <Wrapper>
                                                <div id='herotexts'>
                                                    <div>
                                                        <span className='btn' id='priceteg'> $ {single.property_price}</span>
                                                        <h1 id="hero_headlines">{single.property_title}</h1>
                                                        {single.parameters && single.parameters.slice(0, 4).map((elem, index) => (

                                                            <span id='specifiaction'> {elem.name}: {elem.value} </span>
                                                        ))

                                                        }
                                                    </div>

                                                    <div id='viewall_hero_prop'>
                                                        <Link href="/properties-deatils/[slug]" as={`/properties-deatils/${single.propertys_id}`} passHref>
                                                        <button className='view_prop'>
                                                            <FaEye size={20} className='icon' />
                                                            view Properties
                                                        </button>
                                                        </Link>
                                                        <div>
                                                            <GoPlay className='playbutton' size={50} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Wrapper>
                                        </div>
                                    </Slide>

                                )
                            }
                            )}
                    {/* <ButtonsNav /> */}

                </HeroSlider>

                {/* Sell Rent  */}
                <div id='searchbox' className='container'>
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
                            <button className='filter' onClick={() => {
                                console.log("showFilterModal")
                                setShowFilterModal(true)

                            }}> <BiFilter size={25} /> Filter</button>
                            <button className='find'>Search</button>

                        </div>
                    </div>
                </div>
                <FilterModal isOpen={showFilterModal} onClose={handleCloseModal} />
            </section>



            {/* Feature Section  */}
            <section id='feature'>
                <div className='container'>

                    <div id='main_features'>
                        <div className='feature_header'>
                            <span className='headline' data-aos="fade-right" data-aos-duration="1000">
                                Discover Our <span
                                // className="hovertext1" 
                                >
                                    <span
                                        // className="text" data-text="Featured"
                                        className='highlight'
                                    > Featured</span>
                                </span> Listings
                            </span>
                            <div className='rightside_header'>
                                <Link href="/featured-properties">
                                    <button className="learn-more" id="viewall">
                                        <span aria-hidden="true" className="circle">
                                            <span className="icon arrow"></span>
                                        </span>

                                        <span className="button-text">See All Properties</span>
                                    </button>
                                </Link>
                            </div>

                        </div>
                        <div className="mobile-headline-view">
                            <MobileHeadline data={{
                                start: " Discover Our",
                                center: "Featured",
                                end: "Listings",
                                link: "/featured-properties"
                            }
                            } />
                        </div>
                    </div>
                    <div className='feature-section-cards'>
                        <div id='feature_cards' className='row'>
                            {isLoading ? (
                                // Show skeleton loading when data is being fetched
                                <div className="col-12 loading_data">
                                    <Skeleton height={20} count={20} />
                                </div>
                                // <Loader />

                            ) :
                                getFeaturedListing?.slice(0, 8).map((ele, index) => (
                                    <div className='col-sm-12 col-md-6 col-lg-3' key={index}>
                                        <Link href="/properties-deatils/[slug]" as={`/properties-deatils/${ele.id}`} passHref>
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
                                                        <span className='feture_body_title'> {ele.category.category} </span>
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
                                        </Link>
                                    </div>
                                ))}
                        </div>
                    </div>

                </div>
            </section >



            {/* APARTMENT SECTION */}
            <section id='apartments'>
                <div id='apartment_all_content'>
                    <div className="row">
                        <div className="col-sm-12 col-md-4 col-lg-4" id='view-all-apartment'>
                            <div id='view_appartment'
                                style={{
                                    backgroundImage: `url(${Catagory.src})`,
                                }}
                            >
                                <div className='container' id='appartment_text'>
                                    <h1>
                                        Explore Apartment Types
                                    </h1>
                                    <Link href="/all-categories">
                                        <button className='view_apart'>
                                            <FaEye size={20} className='icon' />
                                            See all categories
                                        </button>
                                    </Link>
                                </div>

                            </div>
                        </div>
                        <div className="mobile-headline-view">
                            <MobileHeadline data={{
                                start: "Explore",
                                center: "Apartment",
                                end: "Types",
                                link: "/all-categories"

                            }
                            } />
                        </div>
                        <div className="col-sm-12 col-md-8 col-lg-8" id='all-apart-cards'>

                            <div className='aprt_cards'>
                                <Swiper
                                    //  slidesPerView={4}
                                    // loop={true}
                                    spaceBetween={30}
                                    freeMode={true}
                                    pagination={{
                                        clickable: true,
                                        renderBullet: renderBullet
                                    }}
                                    modules={[FreeMode, Pagination]}
                                    className='aprtment-swiper'
                                    breakpoints={breakpoints}
                                    style={{
                                        // width: "1200px"
                                    }}


                                >
                                    {isLoading ? (
                                        // Show skeleton loading when data is being fetched
                                        // <div className="col-12 loading_data">
                                        //     <Skeleton height={20} count={22} />
                                        // </div>
                                        <Loader />
                                    ) :
                                    getCategories && getCategories?.map((ele, index) => (
                                        (ele.properties_count !== 0 && ele.properties_count !== "") ? (
                                            <SwiperSlide id="aprt-swiper-slider" key={index}>
                                                <Link href="/all-properties/[slug]" as={`/all-properties/${ele.id}`} passHref>
                                                    <Card id='main_aprt_card'>
                                                        <Card.Body>
                                                            <div className='apart_card_content'>
                                                                <div id='apart_icon'>
                                                                    <img src={ele.image} alt="" className='solo_icon' />
                                                                </div>
                                                                <div id='apart_name'>
                                                                    {ele.category}
                                                                    <div id='propertie_count'>{ele.properties_count} Propertis</div>
                                                                </div>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                  
                                                </Link>
                                            </SwiperSlide>
                                        ) : null
                                    ))}
                                    
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== PROPERTIE SECTION ====== */}
            <section id='main_properties'>
                <div className='properties_section'>
                    <div className='container'>
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
                                    <Link href="most-viewed-properties">
                                        <button className="learn-more" id="viewall">
                                            <span aria-hidden="true" className="circle">
                                                <span className="icon arrow"></span>
                                            </span>
                                            <span className="button-text">See All Properties</span>
                                        </button>
                                    </Link>

                                </div>

                            </div>
                            <div className="mobile-headline-view">
                                <MobileHeadline data={{
                                    start: "Most",
                                    center: "Viewed",
                                    end: "Properties",
                                    link: "/most-viewed-properties"

                                }
                                } />
                            </div>
                        </div>
                        <div id='prop_cards'>
                            <div className='cards_sec'>
                                <div className='row'>
                                    {isLoading ? (
                                        // Show skeleton loading when data is being fetched
                                        // <div className="col-12 loading_data">
                                        //     <Skeleton height={20} count={22} />
                                        // </div>
                                        <Loader />
                                    ) :
                                        getMostViewedProp?.slice(0, 6).map((ele, index) => (
                                            <div className="col-sm-12 col-md-6 col-lg-6" key={index}>
                                                <Link href="/properties-deatils/[slug]" as={`/properties-deatils/${ele.id}`} passHref>
                                                    <div className='card' id='main_prop_card'>
                                                        <div className='image_div col-md-4'>
                                                            <img className='card-img' id='prop_card_img' src={ele.title_image} />
                                                        </div>


                                                        <div className="card-body" id='main_card_body'>
                                                            {ele.promoted ? (
                                                                <span className='prop_feature'>
                                                                    Feature
                                                                </span>
                                                            ) : null}
                                                            <span className='prop_like'>
                                                                <AiOutlineHeart size={25} />
                                                            </span>
                                                            <span className='prop_sell'>
                                                                {ele.propery_type}
                                                            </span>
                                                            <span className='prop_price'>
                                                                $ {ele.price}
                                                            </span>

                                                            <div>
                                                                <div id='prop_card_mainbody'>
                                                                    {/* <BiHomeSmile size={23} /> */}
                                                                    <div className="cate_image">
                                                                        <img src={ele.category.image} alt="" />
                                                                    </div>
                                                                    <span className='body_title'> {ele.category.category} </span>
                                                                </div>
                                                                <div id='prop_card_middletext'>
                                                                    <span>
                                                                        {ele.title}
                                                                    </span>
                                                                    <p>
                                                                        {ele.city} , {ele.state},  {ele.country}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <Card.Footer id='prop_card_footer'>

                                                                <div className="row">

                                                                    {ele.parameters && ele.parameters.slice(0, 4).map((elem, index) => (
                                                                        <div className="col-sm-12 col-md-6" key={index}>
                                                                            <div id='footer_content' key={index}>
                                                                                <img src={elem.image} alt="" />
                                                                                <p className='text_footer'> {elem.name}</p>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>

                                                            </Card.Footer>
                                                        </div>

                                                    </div>
                                                </Link>

                                            </div>
                                        ))}
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ===== PROPERTIES NEARBY CITY  SECTION ====== */}
            <section id='main_citySection'>
                <div
                    className='container'
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
                            <Link href="/properties-nearby-city">
                                <button className="learn-more" id="viewall">
                                    <span aria-hidden="true" className="circle">
                                        <span className="icon arrow"></span>
                                    </span>
                                    <span className="button-text">See All Properties</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="mobile-headline-view">
                        <MobileHeadline data={{
                            start: " Properties",
                            center: "Nearby",
                            end: "Cities",
                            link: "/properties-nearby-city"

                        }
                        } />
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
                <div className='container'>
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
                            <Link href="/mostfav-properties">
                                <button className="learn-more" id="viewall">
                                    <span aria-hidden="true" className="circle">
                                        <span className="icon arrow"></span>
                                    </span>
                                    <span className="button-text">See All Properties</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="mobile-headline-view">
                        <MobileHeadline data={{
                            start: " Most",
                            center: "Favorites",
                            end: "Properties",
                            link: "/mostfav-properties"
                        }
                        } />
                    </div>
                    <div id="most-view-properties">
                        <Swiper
                            slidesPerView={4}
                            // loop={true}
                            spaceBetween={30}
                            freeMode={true}
                            pagination={{
                                clickable: true,
                                renderBullet: renderBullet
                            }}
                            modules={[FreeMode, Pagination]}
                            className='most-view-swiper'
                            breakpoints={breakpointsMostFav}
                            style={{
                                // width: "auto"
                            }}


                        >
                            {isLoading ? (
                                // Show skeleton loading when data is being fetched
                                // <div className="col-12 loading_data">
                                //     <Skeleton height={20} count={22} />
                                // </div>
                                <Loader />
                            ) :
                                getMostFavProperties?.map((ele, index) => (
                                    <SwiperSlide id="most-view-swiper-slider" key={index}>
                                        <Link href="/properties-deatils/[slug]" as={`/properties-deatils/${ele.id}`} passHref>
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
                                                        <span className='feture_body_title'> {ele.category.category} </span>
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
                                        </Link>

                                    </SwiperSlide>
                                ))}
                        </Swiper>
                    </div>
                </div>
            </section>
            {/* ===== AGENT SECTION =======  */}
            <section id='agent_section'>
                <div className='row'>
                    <div className="col-sm-12 col-md-4 col-lg-3" id='browse-by-agents'>
                        <div className='browse-agent'>
                            <span>Browse By Agents
                            </span>
                            <Link href="/listby-agents">
                                <button className='mt-3'> <FiEye className="mx-2" size={25} />
                                    View all Agent
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="mobile-headline-view">
                        <MobileHeadline data={{
                            start: " Browse By",
                            center: "Agents",
                            link: "/listby-agents"
                        }
                        } />
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-9" id='agent-slider-cards'>
                        <div className='agents-cards'>
                            <Swiper
                                //  slidesPerView={4}
                                // loop={true}
                                spaceBetween={30}
                                freeMode={true}
                                pagination={{
                                    clickable: true,
                                    renderBullet: renderBullet
                                }}
                                modules={[FreeMode, Pagination]}
                                className='agent-swiper'
                                breakpoints={breakpointAgents}
                                style={{
                                    // width: "1200px"
                                }}


                            >
                                {isLoading ? (
                                    // Show skeleton loading when data is being fetched
                                    // <div className="col-12 loading_data">
                                    //     <Skeleton height={20} count={22} />
                                    // </div>
                                    <Loader />
                                ) :
                                    agentsData?.map((ele) => (
                                        <SwiperSlide id="agent-swiper-slider" key={ele.id}>
                                            <Card id='main_agent_card'>
                                                <Card.Body>
                                                    <div className='agent_card_content'>
                                                        <div>

                                                            <img src={ele.agentimg} className='agent-profile' width={100} height={100} />
                                                        </div>
                                                        <div className='mt-2'>
                                                            <span className='agent-name'>
                                                                {ele.agentName}
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className='agent-main'>
                                                                {ele.agentEmail}
                                                            </span>
                                                        </div>
                                                        <div className='view-all-agent mt-5'>
                                                            <span>
                                                                {ele.agentProp}
                                                            </span>
                                                            <FiArrowRightCircle size={25} className='view-agent-deatils' />
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </SwiperSlide>
                                    ))}
                            </Swiper>
                        </div>
                    </div>

                </div>

            </section>
            {/* ========== ARTICLE SECTION ========== */}
            <section id='articles'>
                <div className='container'>
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
                            <Link href="/articles">
                                <button className="learn-more" id="viewall">
                                    <span aria-hidden="true" className="circle">
                                        <span className="icon arrow"></span>
                                    </span>
                                    <span className="button-text">See All Properties</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="mobile-headline-view">
                        <MobileHeadline data={{
                            start: " Our",
                            center: "Articles",
                            link: "/articles"
                        }
                        } />
                    </div>
                    <div className='row' id='article_cards'>
                        {isLoading ? (
                            // Show skeleton loading when data is being fetched
                            <div className="col-12 loading_data">
                                <Skeleton height={20} count={22} />
                            </div>
                            // <Loader />
                        ) :
                            getArticles?.slice(0, 3).map((ele, index) => (

                                <div className='col-12 col-md-6 col-lg-3' key={index}>
                                    <Card id='article_main_card'>
                                        <Card.Img variant="top" id='article_card_img' src={ele.image} />
                                        <span id='apartment_tag'>aprtment</span>
                                        <Card.Body id='article_card_body'>

                                            <div id='article_card_headline'>
                                                <span>
                                                    Property Purchase Laws in USA
                                                </span>
                                                {ele && ele.description && (
                                                    <>
                                                        <p>
                                                            {expandedStates[index]
                                                                ? stripHtmlTags(ele.description)
                                                                : stripHtmlTags(ele.description).substring(0, 100) + '...'}
                                                        </p>
                                                        {ele.description.length > 100 && (
                                                            <div id='readmore_article'>

                                                                <Link href="/article-deatils/[slug]" as={`/article-deatils/${ele.id}`} passHref>
                                                                    <button
                                                                        className='readmore'
                                                                    >
                                                                        Show More
                                                                        <AiOutlineArrowRight className="mx-2" size={18} />
                                                                    </button>
                                                                </Link>
                                                            </div>
                                                        )}
                                                    </>
                                                )}
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
                            ))}

                    </div>
                </div>

            </section>
        </>
    )
}

export default HomePage