import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from "next/image";

import { IoMdArrowDropright } from "react-icons/io";

import Breadcrumb from "@/Components/Breadcrumb/Breadcrumb";

import Loader from "@/Components/Loader/Loader";
import Skeleton from "react-loading-skeleton";
import { translate } from "@/utils";
import { useSelector } from "react-redux";
import { languageData } from "@/store/reducer/languageSlice";
import Layout from "@/Components/Layout/Layout";

import { useRouter } from "next/router";
import { GetAllArticlesApi } from "@/store/actions/campaign";
import { store } from "@/store/store";
import ArticleCard from "@/Components/Cards/ArticleCard";
import { categoriesCacheData } from "@/store/reducer/momentSlice";

const ArticleDeatils = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [articleData, setArticleData] = useState();
    const [relatedArticleData, setRelatedArticleData] = useState();
    const [expandedStates, setExpandedStates] = useState([]);

    const router = useRouter();
    const articleId = router.query;
    const Categorydata = useSelector(categoriesCacheData);

    useEffect(() => {
        setIsLoading(true);
        GetAllArticlesApi(
            articleId.slug,
            "",
            "",
            (response) => {
                const AData = response.data[0];
                setIsLoading(false);
                setArticleData(AData);
            },
            (error) => {
                console.log(error);
                setIsLoading(true);
            }
        );
    }, [articleId]);
    useEffect(() => {
        setIsLoading(true);
        GetAllArticlesApi(
            articleId.slug,
            "",
            "1",
            (response) => {
                const Articles = response.data;
                setIsLoading(false);
                setRelatedArticleData(Articles);
                setExpandedStates(new Array(Articles.length).fill(false));
            },
            (error) => {
                console.log(error);
                setIsLoading(true);
            }
        );
    }, [articleId]);

    const getArticlesByCategory = () => {
        router.push("/articles");
    };
    const lang = useSelector(languageData);

    useEffect(() => {}, [lang]);

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
            slidesPerView: 3,
        },
        1400: {
            slidesPerView: 4,
        },
    };
    const language = store.getState().Language.languages;
    return (
        <>
            <Layout>
                <Breadcrumb title={translate("articleDeatils")} />
                <div className="all-articles">
                    <div id="all-articles-deatil-content">
                        <div className="container">
                            <div className="row" id="main-content">
                                <div className="col-12 col-md-6 col-lg-9">
                                    <div className="all-article-rightside">
                                        <div className="article_all_deatil_card">
                                            <div className="card">
                                                {isLoading ? (
                                                    // Show skeleton loading when data is being fetched
                                                    <div className="col-12 loading_data">
                                                        <Skeleton height={20} count={20} />
                                                    </div>
                                                ) : (
                                                    <>
                                                        <div className="container">
                                                            <div className="article_img_div">
                                                                <Image loading="lazy" src={articleData && articleData.image} alt="no_img" className="article_title_img" width={200} height={200} />
                                                            </div>

                                                            <div className="article_title">{articleData && articleData.title}</div>
                                                            {/* // Render the privacy policy data when not loading */}
                                                            <div className="article_deatils_description" dangerouslySetInnerHTML={{ __html: (articleData && articleData.description) || "" }} />
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div className="all-articles-leftside">
                                        <div className="cate-card">
                                            <div className="card">
                                                <div className="card-header">Categories</div>
                                                <div className="card-body">
                                                    {Categorydata &&
                                                        Categorydata.map((elem, index) => (
                                                            <div className="cate-list" key={index}>
                                                                <span>{elem.category}</span>
                                                                <IoMdArrowDropright size={25} className="cate_list_arrow" onClick={getArticlesByCategory} />
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
                                                            <Image loading="lazy" src={adminlogo.src} alt="no_img" className='resent-article-image' />
                                                        </div>
                                                        <div className='resent-article-desc'>
                                                            <span>Average U.S. Rental Price Hits a Two-Year High</span>
                                                        </div>
                                                    </div>
                                                    <div className='resent-article-deatils'>
                                                        <div className='resent-article-image'>
                                                            <Image loading="lazy" src={adminlogo.src} alt="no_img" className='resent-article-image' />
                                                        </div>
                                                        <div className='resent-article-desc'>
                                                            <span>Average U.S. Rental Price Hits a Two-Year High</span>
                                                        </div>
                                                    </div>
                                                    <div className='resent-article-deatils'>
                                                        <div className='resent-article-image'>
                                                            <Image loading="lazy" src={adminlogo.src} alt="no_img" className='resent-article-image' />
                                                        </div>
                                                        <div className='resent-article-desc'>
                                                            <span>Average U.S. Rental Price Hits a Two-Year High</span>
                                                        </div>
                                                    </div>
                                                    <div className='resent-article-deatils'>
                                                        <div className='resent-article-image'>
                                                            <Image loading="lazy" src={adminlogo.src} alt="no_img" className='resent-article-image' />
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
                            <div id="related_articles_section">
                                <div className="related-headline">
                                    <span className="headline">
                                        {translate("related")}{" "}
                                        <span>
                                            <span className="highlight"> {translate("articles")}</span>
                                        </span>
                                    </span>
                                </div>
                                <div className="related_articles_slider">
                                    <Swiper
                                        dir={language.rtl === "1" ? "rtl" : "ltr"}
                                        slidesPerView={4}
                                        spaceBetween={30}
                                        freeMode={true}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        modules={[FreeMode, Pagination]}
                                        className="related-swiper"
                                        breakpoints={breakpoints}
                                    >
                                        {isLoading ? (
                                            // Show skeleton loading when data is being fetched

                                            <Loader />
                                        ) : (
                                            relatedArticleData?.map((ele, index) => (
                                                <SwiperSlide id="related-swiper-slider" key={ele.id}>
                                                    <ArticleCard ele={ele} expandedStates={expandedStates} index={index} />
                                                </SwiperSlide>
                                            ))
                                        )}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default ArticleDeatils;
