
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
import { GetAllArticlesApi, GetCategorieApi } from '@/store/actions/campaign';
import { store } from '@/store/store';
import ArticleCard from '@/Components/Cards/ArticleCard';




const ArticleDeatils = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [articleData, setArticleData] = useState()
    const [relatedArticleData, setRelatedArticleData] = useState()
    const [expandedStates, setExpandedStates] = useState([]);
    const [getCategories, setGetCategories] = useState([]);

    const router = useRouter();
    const articleId = router.query
    // console.log(articleId)

    useEffect(() => {
        setIsLoading(true);
        GetAllArticlesApi(
            articleId.slug,
            "",
            "",
            (response) => {
                const AData = response.data[0]
                // console.log(AData)
                setIsLoading(false);
                setArticleData(AData)

            },
            (error) => {
                console.log(error)
                setIsLoading(true)
            })
    }, [])
    useEffect(() => {
        setIsLoading(true);
        GetAllArticlesApi(
            articleId.slug,
            "",
            "1",
            (response) => {
                const Articles = response.data
                // console.log("related articles", Articles)
                setIsLoading(false);
                setRelatedArticleData(Articles)
                setExpandedStates(new Array(Articles.length).fill(false));

            },
            (error) => {
                console.log(error)
                setIsLoading(true)
            })
    }, [articleId])
    useEffect(() => {
        GetCategorieApi(
            (response) => {
                const categoryData = response && response.data;
                setIsLoading(false);
                setGetCategories(categoryData);
            },
            (error) => {
                console.log(error);
            }
        );
    }, []);
    const getArticlesByCategory = () => {
        router.push('/articles')
    }
    const lang = useSelector(languageData)

    useEffect(() => {

    }, [lang]);


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
    const language = store.getState().Language.languages
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
                                                    {getCategories && getCategories.map((elem, index) => (
                                                        <div className='cate-list' key={index}>
                                                            <span>{elem.category}</span>
                                                            <IoMdArrowDropright
                                                                size={25}
                                                                className='cate_list_arrow'
                                                                onClick={getArticlesByCategory} />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className='popular-tag-card'>
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
                                        </div> */}
                                        {/* <div className='recent-article-card'>
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
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            <div id='related_articles_section'>
                                <div className='related-headline' data-aos="fade-right" data-aos-duration="1000">
                                    <span className='headline'>
                                        {translate("related")}  <span
                                        >
                                            <span
                                                className='highlight'
                                            // data-aos="fade-left" data-aos-duration="5000"
                                            > {translate("articles")}</span>
                                        </span>
                                    </span>
                                </div>
                                <div className="related_articles_slider" >
                                    <Swiper
                                        dir={language.rtl === "1" ? "rtl" : "ltr"}
                                        slidesPerView={4}
                                        // loop={true}
                                        spaceBetween={30}
                                        freeMode={true}
                                        pagination={{
                                            clickable: true,

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
                                            relatedArticleData?.map((ele, index) => (
                                                <SwiperSlide id="related-swiper-slider" key={ele.id}>

                                                    <ArticleCard ele={ele} expandedStates={expandedStates} index={index} />
                                                    {/* <Card id='articles_main_card'>
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
                                                                <button className='readmore'> {translate("readMore")}  <FiArrowRight size={20} /></button>

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
                                                    </Card> */}
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