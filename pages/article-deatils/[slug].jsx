
import React, { useEffect, useState } from 'react'
import cardImg from '@/assets/Images/Featured_List_1.jpg'
import adminlogo from "@/assets/Images/Superman.jpeg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { IoMdArrowDropright } from "react-icons/io"

import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb'
import { Card } from 'react-bootstrap';
import { FiArrowRight } from 'react-icons/fi';
import Loader from '@/Components/Loader/Loader';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import { translate } from '@/utils';
import { useSelector } from 'react-redux';
import { languageData } from '@/store/reducer/languageSlice';
import Layout from '@/Components/Layout/Layout';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { GetAllArticlesApi } from '@/store/actions/campaign';




const ArticleDeatils = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [articleData, setArticleData] = useState()
    const router = useRouter();
    const articleId = router.query

    useEffect(() => {
        setIsLoading(true);
        GetAllArticlesApi(articleId, (response) => {
            const AData = response.data[0]
            console.log(AData)
            setIsLoading(false);
            setArticleData(AData)

        },
            (error) => {
                console.log(error)
                setIsLoading(true)
            })
    }, [])

    const lang = useSelector(languageData)

    useEffect(() => {

    }, [lang]);


    const renderBullet = (index, className) => {
        return `<span class="${className}" style="background-color: #087c7c;
    outline: 1px solid #000;
    font-size: 20px;
    padding: 8px;
    border: 2px solid #fff;"></span>`;
    };

    let ArticleStaticData = [
        {
            id: 1,
            articleImg: cardImg.src,
            propType: "Apartment",
            propText: " Property Purchase Laws in USA",
            propDecs: " The laws governing the purchase of property in the United States can vary by state, but there are some general principles that apply throughout the...",
            profile: adminlogo.src,
            by: "By Admin",
            time: "1 day ago"
        },
        {
            id: 2,
            articleImg: cardImg.src,
            propType: "Apartment",
            propText: " Property Purchase Laws in USA",
            propDecs: " The laws governing the purchase of property in the United States can vary by state, but there are some general principles that apply throughout the...",
            profile: adminlogo.src,
            by: "By Admin",
            time: "1 day ago"
        },
        {
            id: 3,
            articleImg: cardImg.src,
            propType: "Apartment",
            propText: " Property Purchase Laws in USA",
            propDecs: " The laws governing the purchase of property in the United States can vary by state, but there are some general principles that apply throughout the...",
            profile: adminlogo.src,
            by: "By Admin",
            time: "1 day ago"
        },
        {
            id: 4,
            articleImg: cardImg.src,
            propType: "Apartment",
            propText: " Property Purchase Laws in USA",
            propDecs: " The laws governing the purchase of property in the United States can vary by state, but there are some general principles that apply throughout the...",
            profile: adminlogo.src,
            by: "By Admin",
            time: "1 day ago"
        },
        {
            id: 5,
            articleImg: cardImg.src,
            propType: "Apartment",
            propText: " Property Purchase Laws in USA",
            propDecs: " The laws governing the purchase of property in the United States can vary by state, but there are some general principles that apply throughout the...",
            profile: adminlogo.src,
            by: "By Admin",
            time: "1 day ago"
        },
        {
            id: 6,
            articleImg: cardImg.src,
            propType: "Apartment",
            propText: " Property Purchase Laws in USA",
            propDecs: " The laws governing the purchase of property in the United States can vary by state, but there are some general principles that apply throughout the...",
            profile: adminlogo.src,
            by: "By Admin",
            time: "1 day ago"
        },

    ]
    const breakpoints = {
        320: {
            slidesPerView: 1,
        },
        375: {
            slidesPerView: 1.5,
        },
        576: {
            slidesPerView: 1.5,

        },
        768: {
            slidesPerView: 2,

        },
        992: {
            slidesPerView: 2,

        },
        1200: {
            slidesPerView: 3
        },
        1400: {
            slidesPerView: 4
        }
    };
    return (
        <>
            {/* <Head >
                <title>
                    {propertySlugData && propertySlugData.propertySlugData[0].title}
                </title>
            </Head> */}
            <Layout>
                <Breadcrumb title={translate("articleDeatils")} />
                <div className='all-articles'>

                    <div id='all-articles-deatil-content'>
                        <div className="container">
                            <div className="row" id='main-content'>
                                <div className="col-12 col-md-6 col-lg-9">
                                    <div className='all-article-rightside'>
                                        <div className='article_all_deatil_card'>
                                            <div className="card">

                                                {isLoading ? (
                                                    // Show skeleton loading when data is being fetched
                                                    <div className="col-12 loading_data">
                                                        <Skeleton height={20} count={20} />
                                                    </div>
                                                    // <Loader />
                                                ) : (
                                                    <>
                                                        <div className="container">
                                                            <div className='article_img_div'>
                                                                <img src={articleData && articleData.image} alt="" className='article_title_img' />
                                                            </div>

                                                            <div className='article_title'>
                                                                {articleData && articleData.title}
                                                            </div>
                                                            {/* // Render the privacy policy data when not loading */}
                                                            <div className='article_deatils_description' dangerouslySetInnerHTML={{ __html: articleData && articleData.description || '' }} />
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div className="all-articles-leftside">
                                        <div className='cate-card'>
                                            <div className="card">
                                                <div className="card-header">
                                                    Categories
                                                </div>
                                                <div className="card-body">
                                                    <div className='cate-list'>
                                                        <span>Townhouse</span>
                                                        <IoMdArrowDropright size={25} style={{ cursor: "pointer" }} />
                                                    </div>
                                                    <div className='cate-list'>
                                                        <span>Codno</span>
                                                        <IoMdArrowDropright size={25} style={{ cursor: "pointer" }} />
                                                    </div>
                                                    <div className='cate-list'>
                                                        <span>Commercial</span>
                                                        <IoMdArrowDropright size={25} style={{ cursor: "pointer" }} />
                                                    </div>
                                                    <div className='cate-list'>
                                                        <span>Plote</span>
                                                        <IoMdArrowDropright size={25} style={{ cursor: "pointer" }} />
                                                    </div>
                                                    <div className='cate-list'>
                                                        <span>Land</span>
                                                        <IoMdArrowDropright size={25} style={{ cursor: "pointer" }} />
                                                    </div>
                                                    <div className='cate-list'>
                                                        <span>House</span>
                                                        <IoMdArrowDropright size={25} style={{ cursor: "pointer" }} />
                                                    </div>
                                                    <div className='cate-list'>
                                                        <span>Banglow</span>
                                                        <IoMdArrowDropright size={25} style={{ cursor: "pointer" }} />
                                                    </div>
                                                    <div className='cate-list'>
                                                        <span>Penthouse</span>
                                                        <IoMdArrowDropright size={25} style={{ cursor: "pointer" }} />
                                                    </div>
                                                    <div className='cate-list'>
                                                        <span>Villa</span>
                                                        <IoMdArrowDropright size={25} style={{ cursor: "pointer" }} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='popular-tag-card'>
                                            <div className="card">
                                                <div className="card-header">
                                                    Popular Tags
                                                </div>
                                                <div className="card-body">
                                                    <div className="pop-tags">
                                                        <span>apartment</span>
                                                        <span>modern</span>
                                                        <span>building</span>
                                                        <span>luxarious</span>
                                                        <span>real estate</span>
                                                        <span>Villa</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='recent-article-card'>
                                            <div className="card">
                                                <div className="card-header">
                                                    Recent Articles
                                                </div>
                                                <div className="card-body">
                                                    <div className='resent-article-deatils'>
                                                        <div className='resent-article-image'>
                                                            <img src={adminlogo.src} alt="" className='resent-article-image' />
                                                        </div>
                                                        <div className='resent-article-desc'>
                                                            <span>Average U.S. Rental Price Hits a Two-Year High</span>
                                                        </div>
                                                    </div>
                                                    <div className='resent-article-deatils'>
                                                        <div className='resent-article-image'>
                                                            <img src={adminlogo.src} alt="" className='resent-article-image' />
                                                        </div>
                                                        <div className='resent-article-desc'>
                                                            <span>Average U.S. Rental Price Hits a Two-Year High</span>
                                                        </div>
                                                    </div>
                                                    <div className='resent-article-deatils'>
                                                        <div className='resent-article-image'>
                                                            <img src={adminlogo.src} alt="" className='resent-article-image' />
                                                        </div>
                                                        <div className='resent-article-desc'>
                                                            <span>Average U.S. Rental Price Hits a Two-Year High</span>
                                                        </div>
                                                    </div>
                                                    <div className='resent-article-deatils'>
                                                        <div className='resent-article-image'>
                                                            <img src={adminlogo.src} alt="" className='resent-article-image' />
                                                        </div>
                                                        <div className='resent-article-desc'>
                                                            <span>Average U.S. Rental Price Hits a Two-Year High</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id='related_articles_section'>
                                <div className='related-headline'>
                                    <span className='headline'
                                        data-aos="fade-right" data-aos-duration="1000"
                                    >
                                        Related  <span
                                        >
                                            <span
                                                className='highlight'
                                            // data-aos="fade-left" data-aos-duration="5000"
                                            > Articles</span>
                                        </span>
                                    </span>
                                </div>
                                <div className="related_articles_slider">
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
                                        className='related-swiper'
                                        breakpoints={breakpoints}
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
                                            ArticleStaticData?.map((ele) => (
                                                <SwiperSlide id="related-swiper-slider" key={ele.id}>
                                                    <Card id='articles_main_card'>
                                                        <Card.Img variant="top" id='articles_card_img' src={ele.articleImg} />
                                                        <span id='apartment_tag'>{ele.propType}</span>
                                                        <Card.Body id='all-articles_card_body'>

                                                            <div id='all-articles_card_headline'>
                                                                <span>
                                                                    {ele.propText}
                                                                </span>
                                                                <p>
                                                                    {ele.propDecs}
                                                                </p>
                                                            </div>
                                                            <div id='readmore_article'>
                                                                <button className='readmore'> Read More  <FiArrowRight size={20} /></button>

                                                            </div>

                                                        </Card.Body>
                                                        <Card.Footer id='all-articles_card_footer'>
                                                            <div id='admin_pic'>
                                                                <img src={ele.profile} alt="" className='admin' />
                                                            </div>
                                                            <div className='all-articles_footer_text'>
                                                                <span className='byadmin'> {ele.by}
                                                                </span>
                                                                <p>{ele.time}</p>
                                                            </div>
                                                        </Card.Footer>
                                                    </Card>
                                                </SwiperSlide>
                                            ))}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}




export default ArticleDeatils