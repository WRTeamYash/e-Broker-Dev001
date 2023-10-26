import React, { useEffect, useState } from "react";
import HeroSlider, { Slide } from "hero-slider";
import Wrapper from "@/Components/Wrapper/Wrapper";
import { BsArrowRight } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { GoPlay } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import MobileHeadline from "../MobileHeadlines/MobileHeadline";
import Link from "next/link";
import Loader from "../Loader/Loader";
import { GetAllArticlesApi, GetCountByCitysCategorisApi, GetFeturedListingsApi, GetSliderApi } from "@/store/actions/campaign";
import VerticalCardSkeleton from "../Skeleton/VerticalCardSkeleton";
import VerticalCard from "../Cards/VerticleCard";
import HorizontalCard from "../Cards/HorizontalCard";
import CustomHorizontalSkeleton from "../Skeleton/CustomHorizontalSkeleton";
import CategoryCard from "../Cards/CategoryCard";
import CustomCategorySkeleton from "../Skeleton/CustomCategorySkeleton";
import AgentCardSkeleton from "../Skeleton/AgentCardSkeleton";
import AgentCard from "../Cards/AgentCard";
import ArticleCard from "../Cards/ArticleCard";
import ArticleCardSkeleton from "../Skeleton/ArticleCardSkeleton";
import NearByCitysSkeleton from "../Skeleton/NearByCitysSkeleton";
import { settingsData } from "@/store/reducer/settingsSlice";
import { useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import VideoPlayerModal from "../PlayerModal/VideoPlayerModal.jsx";
import "aos/dist/aos.css";
import { translate } from "@/utils";
import Layout from "../Layout/Layout";
import SearchTab from "../SearchTab/SearchTab.jsx";
import { store } from "@/store/store";
import { categoriesCacheData, silderCacheData } from "@/store/reducer/momentSlice";

const HomePage = () => {
    const priceSymbol = useSelector(settingsData);
    const CurrencySymbol = priceSymbol && priceSymbol.currency_symbol;

    const [isLoading, setIsLoading] = useState(true);
    const [showFilterModal, setShowFilterModal] = useState(false);
    const [showVideoModal, setShowVideoModal] = useState(false);
    const [expandedStates, setExpandedStates] = useState([]);

    const [getFeaturedListing, setGetFeaturedListing] = useState();
    const [getMostViewedProp, setGetMostViewedProp] = useState();
    const [getMostFavProperties, setGetMostFavProperties] = useState();
    const [getArticles, setGetArticles] = useState();
    const [getNearByCitysData, setGetNearByCitysData] = useState();

    const isLoggedIn = useSelector((state) => state.User_signup);
    const userCurrentId = isLoggedIn && isLoggedIn.data ? isLoggedIn.data.data.id : null;
    const language = store.getState().Language.languages;
    const sliderdata = useSelector(silderCacheData);
    const Categorydata = useSelector(categoriesCacheData);

    // SLIDER API
    const handleOpenFilterModal = () => {
        setShowFilterModal(true);
    };

    const handleCloseModal = () => {
        setShowFilterModal(false);
        setShowVideoModal(false);
    };

    const breakpoints = {
        0: {
            slidesPerView: 1,
        },
        375: {
            slidesPerView: 1.5,
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
            slidesPerView: 3,
        },
        1400: {
            slidesPerView: 4,
        },
    };

    const breakpointsMostFav = {
        0: {
            slidesPerView: 1,
        },
        375: {
            slidesPerView: 1.5,
        },
        576: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
        1400: {
            slidesPerView: 4,
        },
    };

    // GET FEATURED LISTINGS and

    useEffect(() => {
        setIsLoading(true);

        GetFeturedListingsApi(
            "1",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
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
                const FeaturedListingData = response.data;

                setIsLoading(false);
                setGetFeaturedListing(FeaturedListingData);
            },
            (error) => {
                console.log(error);
            }
        );
    }, [isLoggedIn]);

    // GET MOST VIEWED PROPERTIES

    useEffect(() => {
        setIsLoading(true);

        GetFeturedListingsApi(
            "",
            "2",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
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
                const MostViewed = response.data;

                setIsLoading(false);
                setGetMostViewedProp(MostViewed);
            },
            (error) => {
                console.log(error);
            }
        );
    }, [isLoggedIn]);

    // GET MOST Fav PROPERTIES

    useEffect(() => {
        setIsLoading(true);

        GetFeturedListingsApi(
            "",
            "",
            "",
            "",
            "1",
            "",
            "",
            "",
            "",
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
                const MostFav = response.data;

                setIsLoading(false);
                setGetMostFavProperties(MostFav);
            },
            (error) => {
                console.log(error);
            }
        );
    }, [isLoggedIn]);

    // GET ARTICLES

    useEffect(() => {
        setIsLoading(true);

        GetAllArticlesApi(
            "",
            "",
            "",
            (response) => {
                const Articles = response.data;
                setIsLoading(false);
                setGetArticles(Articles);
                setExpandedStates(new Array(Articles.length).fill(false));
            },
            (error) => {
                console.log(error);
            }
        );
    }, []);
    // GET_COUNT_BY_CITIES_CATEGORIS

    useEffect(() => {
        setIsLoading(true);

        GetCountByCitysCategorisApi(
            (response) => {
                const cityData = response.city_data;
                setIsLoading(false);
                setGetNearByCitysData(cityData);
            },
            (error) => {
                console.log(error);
            }
        );
    }, []);

    return (
        <>
            <Layout>
                {sliderdata && sliderdata.length > 0 ? (
                    <section id="mainheroImage">
                        <HeroSlider
                            height={"90vh"}
                            slidingAnimation="fade"
                            autoplay
                            orientation="horizontal"
                            initialSlide={1}
                            onBeforeChange={(previousSlide, nextSlide) => console.log("onBeforeChange", previousSlide, nextSlide)}
                            onChange={(nextSlide) => console.log("onChange", nextSlide)}
                            onAfterChange={(nextSlide) => console.log("onAfterChange", nextSlide)}
                            settings={{
                                slidingDuration: 400,
                                slidingDelay: 100,
                                shouldAutoplay: true,
                                shouldDisplayButtons: true,
                                autoplayDuration: 3000,
                                height: "100vh",
                            }}
                        >
                            {isLoading ? (
                                <Loader />
                            ) : (
                                sliderdata &&
                                sliderdata.map((single, index) => {
                                    return (
                                        <Slide
                                            background={{
                                                backgroundImageSrc: single.property_title_image,
                                            }}
                                            key={index}
                                        >
                                            <div className="container">
                                                <Wrapper>
                                                    <div id="herotexts">
                                                        <div>
                                                            <span id="priceteg">
                                                                {" "}
                                                                {CurrencySymbol} {single.property_price}
                                                            </span>
                                                            <h1 id="hero_headlines">{single.property_title}</h1>
                                                            <div className="hero_text_parameters">
                                                                {single.parameters &&
                                                                    single.parameters.slice(0, 4).map((elem, index) => (
                                                                        <span id="specifiaction">
                                                                            {" "}
                                                                            {elem.name}: {elem.value}{" "}
                                                                        </span>
                                                                    ))}
                                                            </div>
                                                        </div>

                                                        <div id="viewall_hero_prop">
                                                            <Link href="/properties-details/[slug]" as={`/properties-details/${single.propertys_id}`} passHref>
                                                                <button className="view_prop">
                                                                    <FaEye size={20} className="icon" />
                                                                    {translate("viewProperty")}
                                                                </button>
                                                            </Link>

                                                            {single && single.video_link ? (
                                                                <>
                                                                    <div>
                                                                        <GoPlay
                                                                            className="playbutton"
                                                                            size={50}
                                                                            onClick={() => {
                                                                                setShowVideoModal(true);
                                                                            }}
                                                                        />
                                                                    </div>

                                                                    <VideoPlayerModal isOpen={showVideoModal} onClose={handleCloseModal} data={single} />
                                                                </>
                                                            ) : null}
                                                        </div>
                                                    </div>
                                                </Wrapper>
                                            </div>
                                        </Slide>
                                    );
                                })
                            )}
                        </HeroSlider>

                        {/* Sell Rent  */}

                        <SearchTab getCategories={Categorydata} />
                    </section>
                ) : null}

                {/* Feature Section  */}
                {getFeaturedListing && getFeaturedListing.length > 0 ? (
                    <section id="feature">
                        <div className="container">
                            <div id="main_features">
                                <div>
                                    {isLoading ? (
                                        <Skeleton width="100%" height={20} />
                                    ) : (
                                        <>
                                            <div className="feature_header">
                                                <span className="headline">
                                                    {translate("discoverOur")} <span className="highlight">{translate("featured")}</span> {translate("listings")}
                                                </span>
                                                <div className="rightside_header">
                                                    <Link href="/featured-properties">
                                                        <button className="learn-more" id="viewall">
                                                            <span aria-hidden="true" className="circle">
                                                                <div className="icon_div">
                                                                    <span className="icon arrow">
                                                                        <BsArrowRight />
                                                                    </span>
                                                                </div>
                                                            </span>
                                                            <span className="button-text">{translate("seeAllProp")}</span>
                                                        </button>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="mobile-headline-view">
                                                <MobileHeadline
                                                    data={{
                                                        start: translate("discoverOur"),
                                                        center: translate("featured"),
                                                        end: translate("listings"),
                                                        link: "/featured-properties",
                                                    }}
                                                />
                                            </div>
                                        </>
                                    )}
                                </div>

                                <div className="feature-section-cards">
                                    <div id="feature_cards" className="row">
                                        {isLoading
                                            ? // Show skeleton loading when data is being fetched

                                              Array.from({ length: 8 }).map((_, index) => (
                                                  <div className="col-sm-12 col-md-6 col-lg-3 loading_data" key={index}>
                                                      <VerticalCardSkeleton />
                                                  </div>
                                              ))
                                            : getFeaturedListing?.slice(0, 8).map((ele, index) => (
                                                  <div className="col-sm-12 col-md-6 col-lg-3" key={index}>
                                                      <Link href="/properties-details/[slug]" as={`/properties-details/${ele.id}`} passHref>
                                                          <VerticalCard ele={ele} />
                                                      </Link>
                                                  </div>
                                              ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ) : null}

                {/* APARTMENT SECTION */}

                {Categorydata && Categorydata.length > 0 ? (
                    <section id="apartments">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 col-md-4 col-lg-3" id="browse-by-agents">
                                    <div className="browse-agent">
                                        <span>{translate("exploreApartment")}</span>
                                        <Link href="/all-categories">
                                            <button className="mt-3">
                                                {" "}
                                                <FiEye className="mx-2" size={25} />
                                                {translate("viewAllCategories")}
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="mobile-headline-view">
                                    <MobileHeadline
                                        data={{
                                            start: translate("explore"),
                                            center: translate("apart"),
                                            end: translate("types"),
                                            link: "/all-categories",
                                        }}
                                    />
                                </div>
                                <div className="col-sm-12 col-md-8 col-lg-9" id="all-apart-cards">
                                    <div className="aprt_cards">
                                        <Swiper
                                            dir={language.rtl === "1" ? "rtl" : "ltr"}
                                            spaceBetween={30}
                                            freeMode={true}
                                            pagination={{
                                                clickable: true,
                                            }}
                                            modules={[FreeMode, Pagination]}
                                            className="aprtment-swiper"
                                            breakpoints={breakpoints}
                                        >
                                            {isLoading ? (
                                                // Show skeleton loading when data is being fetched
                                                <div className="col-12 loading_data">
                                                    <Swiper
                                                        dir={language.rtl === "1" ? "rtl" : "ltr"}
                                                        spaceBetween={30}
                                                        freeMode={true}
                                                        pagination={{
                                                            clickable: true,
                                                        }}
                                                        modules={[FreeMode, Pagination]}
                                                        className="aprtment-swiper"
                                                        breakpoints={breakpoints}
                                                    >
                                                        {Array.from({ length: 6 }).map((_, index) => (
                                                            <SwiperSlide>
                                                                <CustomCategorySkeleton />
                                                            </SwiperSlide>
                                                        ))}
                                                    </Swiper>
                                                </div>
                                            ) : (
                                                Categorydata &&
                                                Categorydata?.map((ele, index) =>
                                                    ele.properties_count !== 0 && ele.properties_count !== "" ? (
                                                        <SwiperSlide id="aprt-swiper-slider" key={index}>
                                                            <Link href={`/properties/categories/${ele.id}`}>
                                                                <CategoryCard ele={ele} />
                                                            </Link>
                                                        </SwiperSlide>
                                                    ) : null
                                                )
                                            )}
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ) : null}
                {/* ===== PROPERTIE SECTION ====== */}

                {getMostViewedProp && getMostViewedProp.length > 0 ? (
                    <section id="main_properties">
                        <div className="properties_section">
                            <div className="container">
                                <div id="prop">
                                    <div className="prop_header">
                                        <div>
                                            <h3>
                                                {translate("most")}{" "}
                                                <span>
                                                    <span className="highlight"> {translate("viewed")}</span>
                                                </span>{" "}
                                                {translate("properties")}
                                            </h3>
                                        </div>
                                        <div className="rightside_prop_header">
                                            <Link href="/most-viewed-properties">
                                                <button className="learn-more" id="viewall">
                                                    <span aria-hidden="true" className="circle">
                                                        <div className="icon_div">
                                                            <span className="icon arrow">
                                                                <BsArrowRight />
                                                            </span>
                                                        </div>
                                                    </span>
                                                    <span className="button-text">{translate("seeAllProp")}</span>
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="mobile-headline-view">
                                        <MobileHeadline
                                            data={{
                                                start: translate("most"),
                                                center: translate("viewed"),
                                                end: translate("properties"),
                                                link: "/most-viewed-properties",
                                            }}
                                        />
                                    </div>
                                </div>
                                <div id="prop_cards">
                                    <div className="cards_sec">
                                        <div className="row">
                                            {isLoading
                                                ? // Show skeleton loading when data is being fetched
                                                  Array.from({ length: 8 }).map((_, index) => (
                                                      <div className="col-sm-12 col-md-6 col-lg-6 loading_data">
                                                          <CustomHorizontalSkeleton />
                                                      </div>
                                                  ))
                                                : getMostViewedProp?.slice(0, 6).map((ele, index) => (
                                                      <div className="col-sm-12 col-md-6 col-lg-6" key={index}>
                                                          <Link href="/properties-details/[slug]" as={`/properties-details/${ele.id}`} passHref>
                                                              <HorizontalCard ele={ele} />
                                                          </Link>
                                                      </div>
                                                  ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ) : null}
                {/* ===== PROPERTIES NEARBY CITY  SECTION ====== */}

                {getNearByCitysData && getNearByCitysData.length > 0 ? (
                    <section id="main_citySection">
                        <div className="container">
                            <div className="prop_city_header">
                                <div>
                                    <h3>
                                        {translate("properties")}{" "}
                                        <span>
                                            <span className="highlight"> {translate("nearby")}</span>
                                        </span>{" "}
                                        {translate("cities")}
                                    </h3>
                                </div>
                                <div className="rightside_prop_city_header">
                                    <Link href="/properties-nearby-city">
                                        <button className="learn-more" id="viewall">
                                            <span aria-hidden="true" className="circle">
                                                <div className="icon_div">
                                                    <span className="icon arrow">
                                                        <BsArrowRight />
                                                    </span>
                                                </div>
                                            </span>
                                            <span className="button-text">{translate("seeAllProp")}</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="mobile-headline-view">
                                <MobileHeadline
                                    data={{
                                        start: translate("properties"),
                                        center: translate("nearby"),
                                        end: translate("cities"),
                                        link: "/properties-nearby-city",
                                    }}
                                />
                            </div>
                            <div>
                                {isLoading ? (
                                    // Show skeleton UI
                                    <div className="skeleton-container">
                                        <NearByCitysSkeleton />
                                    </div>
                                ) : // Show actual data when loading is complete
                                getNearByCitysData?.length > 5 ? (
                                    <div className="row" id="nearBy-Citys">
                                        <div className="col-12 col-md-6 col-lg-3" id="city_img_div">
                                            <Link href={`/properties/city/${getNearByCitysData[1]?.City}`}>
                                                <div className="card bg-dark text-white mb-3" id="group_card">
                                                    <Image loading="lazy" src={getNearByCitysData && getNearByCitysData[1]?.image} className="card-img" alt="..." id="TopImg" width={200} height={200} />
                                                    <div className="card-img-overlay">
                                                        <div id="city_img_headlines">
                                                            <h4 className="card-title">{getNearByCitysData && getNearByCitysData[1]?.City}</h4>
                                                            <p className="card-text">
                                                                {getNearByCitysData && getNearByCitysData[1]?.Count} {translate("properties")}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-3" id="city_img_div">
                                            <Link href={`/properties/city/${getNearByCitysData[2]?.City}`}>
                                                <div className="card bg-dark text-white mb-3" id="group_card">
                                                    <Image loading="lazy" src={getNearByCitysData && getNearByCitysData[2]?.image} className="card-img" alt="..." id="TopImg" width={200} height={200} />
                                                    <div className="card-img-overlay">
                                                        <div id="city_img_headlines">
                                                            <h4 className="card-title">{getNearByCitysData && getNearByCitysData[2]?.City}</h4>
                                                            <p className="card-text">
                                                                {getNearByCitysData && getNearByCitysData[2]?.Count} {translate("properties")}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-lg-6" id="city_image_main_div">
                                            <Link href={`/properties/city/${getNearByCitysData[0]?.City}`}>
                                                <div className="card bg-dark text-white mb-3" id="cityImgTop">
                                                    <Image loading="lazy" src={getNearByCitysData && getNearByCitysData[0]?.image} className="card-img" alt="..." id="TopImg" width={200} height={200} />
                                                    <div className="card-img-overlay">
                                                        <div id="city_img_headlines">
                                                            <h4 className="card-title">{getNearByCitysData && getNearByCitysData[0]?.City} </h4>
                                                            <p className="card-text">
                                                                {getNearByCitysData && getNearByCitysData[0]?.Count} {translate("properties")}{" "}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-lg-6" id="city_image_main_div">
                                            <Link href={`/properties/city/${getNearByCitysData[5]?.City}`}>
                                                <div className="card bg-dark text-white" id="cityImgTop">
                                                    <Image
                                                        loading="lazy"
                                                        src={getNearByCitysData && getNearByCitysData[5]?.image}
                                                        className="card-img"
                                                        alt="..."
                                                        id="TopImg"
                                                        //  id='bottom_city_card_img'
                                                        width={200}
                                                        height={200}
                                                    />
                                                    <div className="card-img-overlay">
                                                        <div id="city_img_headlines">
                                                            <h4 className="card-title">{getNearByCitysData && getNearByCitysData[5]?.City} </h4>
                                                            <p className="card-text">
                                                                {getNearByCitysData && getNearByCitysData[5]?.Count} {translate("properties")}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-3" id="city_img_div01">
                                            <Link href={`/properties/city/${getNearByCitysData[3]?.City}`}>
                                                <div className="card bg-dark text-white" id="group_card">
                                                    <Image loading="lazy" src={getNearByCitysData && getNearByCitysData[3]?.image} className="card-img" alt="..." id="TopImg" width={200} height={200} />
                                                    <div className="card-img-overlay">
                                                        <div id="city_img_headlines">
                                                            <h4 className="card-title">{getNearByCitysData && getNearByCitysData[3]?.City}</h4>
                                                            <p className="card-text">
                                                                {getNearByCitysData && getNearByCitysData[3]?.Count} {translate("properties")}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-3" id="city_img_div01">
                                            <Link href={`/properties/city/${getNearByCitysData[4]?.City}`}>
                                                <div className="card bg-dark text-white " id="group_card">
                                                    <Image loading="lazy" src={getNearByCitysData && getNearByCitysData[4]?.image} className="card-img" alt="..." id="TopImg" width={200} height={200} />
                                                    <div className="card-img-overlay">
                                                        <div id="city_img_headlines">
                                                            <h4 className="card-title">{getNearByCitysData && getNearByCitysData[4]?.City}</h4>
                                                            <p className="card-text">
                                                                {getNearByCitysData && getNearByCitysData[4]?.Count} {translate("properties")}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="row" id="nearBy-Citys">
                                        {getNearByCitysData?.slice(0, 4).map((ele, index) => (
                                            <div className="col-12 col-md-6 col-lg-3" id="city_img_div" key={index}>
                                                <Link href={`/properties/city/${ele?.City}`}>
                                                    <div className="card bg-dark text-white mb-3" id="group_card">
                                                        <Image loading="lazy" src={ele?.image} className="card-img" alt="..." id="TopImg" width={200} height={200} />
                                                        <div className="card-img-overlay">
                                                            <div id="city_img_headlines">
                                                                <h4 className="card-title">{ele?.City}</h4>
                                                                <p className="card-text">
                                                                    {ele?.Count} {translate("properties")}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                ) : null}

                {/* ===== MOST FAV SECTION =======  */}
                {getMostFavProperties && getMostFavProperties.length > 0 ? (
                    <section id="most_fav">
                        <div className="container">
                            <div className="most_fav_header">
                                <div>
                                    <h3>
                                        {translate("most")}{" "}
                                        <span>
                                            <span className="highlight">{translate("fav")}</span>
                                        </span>{" "}
                                        {translate("properties")}
                                    </h3>
                                </div>
                                <div className="rightside_most_fav_header">
                                    <Link href="/mostfav-properties">
                                        <button className="learn-more" id="viewall">
                                            <span aria-hidden="true" className="circle">
                                                <div className="icon_div">
                                                    <span className="icon arrow">
                                                        <BsArrowRight />
                                                    </span>
                                                </div>
                                            </span>
                                            <span className="button-text">{translate("seeAllProp")}</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="mobile-headline-view">
                                <MobileHeadline
                                    data={{
                                        start: translate("most"),
                                        center: translate("fav"),
                                        end: translate("properties"),
                                        link: "/mostfav-properties",
                                    }}
                                />
                            </div>
                            <div id="most-view-properties" dir={language.rtl === "1" ? "rtl" : "ltr"}>
                                <Swiper
                                    slidesPerView={4}
                                    spaceBetween={30}
                                    freeMode={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[FreeMode, Pagination]}
                                    className="most-view-swiper"
                                    breakpoints={breakpointsMostFav}
                                >
                                    {isLoading ? (
                                        // Show skeleton loading when data is being fetched
                                        <Swiper
                                            dir={language.rtl === "1" ? "rtl" : "ltr"}
                                            slidesPerView={4}
                                            spaceBetween={30}
                                            freeMode={true}
                                            pagination={{
                                                clickable: true,
                                            }}
                                            modules={[FreeMode, Pagination]}
                                            className="most-view-swiper"
                                            breakpoints={breakpointsMostFav}
                                        >
                                            {Array.from({ length: 6 }).map((_, index) => (
                                                <SwiperSlide>
                                                    <div className="loading_data">
                                                        <VerticalCardSkeleton />
                                                    </div>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    ) : (
                                        getMostFavProperties?.map((ele, index) => (
                                            <SwiperSlide id="most-view-swiper-slider" key={index}>
                                                <Link href="/properties-details/[slug]" as={`/properties-details/${ele.id}`} passHref>
                                                    <VerticalCard ele={ele} />
                                                </Link>
                                            </SwiperSlide>
                                        ))
                                    )}
                                </Swiper>
                            </div>
                        </div>
                    </section>
                ) : null}
                {/* ===== AGENT SECTION =======  */}
                {/* <section id='agent_section' data-aos="fade-up" data-aos-duration="7000">
                    <div className="container">

                        <div className='row'>
                            <div className="col-sm-12 col-md-4 col-lg-3" id='browse-by-agents'>
                                <div className='browse-agent'>
                                    <span>{translate("browseByAgents")}
                                    </span>
                                    <Link href="/listby-agents">
                                        <button className='mt-3'> <FiEye className="mx-2" size={25} />
                                            {translate("viewAllAgents")}
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="mobile-headline-view"  >
                                <MobileHeadline data={{
                                    start: translate("browser"),
                                    center: translate("agents"),
                                    link: "/listby-agents"
                                }
                                } />
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-9" id='agent-slider-cards'>
                                <div className='agents-cards'>
                                    <Swiper
                                    dir="rtl"
                                        slidesPerView={4}
                                        // loop={true}
                                        spaceBetween={30}
                                        freeMode={true}
                                        pagination={{
                                            clickable: true,
                                            
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
                                            <Swiper
                                            dir="rtl"
                                                //  slidesPerView={4}
                                                // loop={true}
                                                spaceBetween={30}
                                                freeMode={true}
                                                pagination={{
                                                    clickable: true,
                                                    
                                                }}
                                                modules={[FreeMode, Pagination]}
                                                className='agent-swiper'
                                                breakpoints={breakpointAgents}
                                                style={{
                                                    // width: "1200px"
                                                }}


                                            >
                                                {Array.from({ length: 6 }).map((_, index) => (
                                                    <SwiperSlide>
                                                        <div className="loading_data">
                                                            <AgentCardSkeleton />
                                                        </div>
                                                    </SwiperSlide>
                                                ))}
                                            </Swiper>

                                            // <Loader />
                                        ) :
                                            agentsData?.map((ele) => (
                                                <SwiperSlide id="agent-swiper-slider" key={ele.id}>
                                                    <AgentCard ele={ele} />
                                                </SwiperSlide>
                                            ))}
                                    </Swiper>
                                </div>
                            </div>

                        </div>

                    </div>
                </section> */}
                {/* ========== ARTICLE SECTION ========== */}

                {getArticles && getArticles.length > 0 ? (
                    <section id="articles">
                        <div className="container">
                            <div className="article_headline">
                                <div>
                                    <h3>
                                        {translate("our")}{" "}
                                        <span>
                                            <span className="highlight">{translate("articles")}</span>
                                        </span>
                                    </h3>
                                </div>
                                <div className="rightside_article_headlin">
                                    <Link href="/articles">
                                        <button className="learn-more" id="viewall">
                                            <span aria-hidden="true" className="circle">
                                                <div className="icon_div">
                                                    <span className="icon arrow">
                                                        <BsArrowRight />
                                                    </span>
                                                </div>
                                            </span>
                                            <span className="button-text">{translate("seeAllProp")}</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="mobile-headline-view">
                                <MobileHeadline
                                    data={{
                                        start: translate("our"),
                                        center: translate("articles"),
                                        link: "/articles",
                                    }}
                                />
                            </div>
                            <div className="row" id="article_cards">
                                {isLoading
                                    ? // Show skeleton loading when data is being fetched
                                      Array.from({ length: 4 }).map((_, index) => (
                                          <div className="col-sm-12 col-md-6 col-lg-3 loading_data">
                                              <ArticleCardSkeleton />
                                          </div>
                                      ))
                                    : getArticles?.slice(0, 3).map((ele, index) => (
                                          <div className="col-12 col-md-6 col-lg-3" key={index}>
                                              <ArticleCard ele={ele} index={index} expandedStates={expandedStates} />
                                          </div>
                                      ))}
                            </div>
                        </div>
                    </section>
                ) : null}
            </Layout>
        </>
    );
};

export default HomePage;
