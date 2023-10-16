
import React, { useEffect, useState } from 'react'
import ViewPageImg from "@/assets/Images/Breadcrumbs_BG.jpg"
import cardImg from '@/assets/Images/Featured_List_1.jpg'
import adminlogo from "@/assets/Images/Superman.jpeg"
import { FiArrowRight, FiCloudDrizzle, FiEye } from 'react-icons/fi'
import { AiOutlineUnorderedList, AiOutlineHeart, AiOutlineArrowRight } from 'react-icons/ai'
import { RiGridFill } from 'react-icons/ri'
import { IoMdArrowDropright } from "react-icons/io"
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb'
import { GetAllArticlesApi, GetCategorieApi } from '@/store/actions/campaign'
import ArticleCard from '@/Components/Cards/ArticleCard'
import Skeleton from 'react-loading-skeleton'
import ArticleCardSkeleton from '@/Components/Skeleton/ArticleCardSkeleton'
import HorizontalCard from '@/Components/Cards/HorizontalCard'
import ArticleHorizonatalCard from '@/Components/Cards/ArticleHorizonatalCard'
import { translate } from '@/utils'
import { useSelector } from 'react-redux'
import { languageData } from '@/store/reducer/languageSlice'
import Layout from '@/Components/Layout/Layout'
import Link from 'next/link'
import { settingsData } from '@/store/reducer/settingsSlice'
import NoData from '@/Components/NoDataFound/NoData'




const Articles = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [expandedStates, setExpandedStates] = useState([]);
    const [grid, setGrid] = useState(false);
    const [getCategories, setGetCategories] = useState([]);

    // GET ARTICLES
    const [getArticles, setGetArticles] = useState()
    const [total, setTotal] = useState()

    const lang = useSelector(languageData)
    // console.log("languageData",lang)
    // useSelector(languageData)  
    useEffect(() => {
        // console.log("render")
    }, [lang]);
    useEffect(() => {
        setIsLoading(true)
        GetAllArticlesApi(
            "",
            "",
            "",
            (response) => {
                const Articles = response.data;
                setTotal(response.total)
                // console.log("article data ============", Articles)
                setIsLoading(false)
                setGetArticles(Articles);
                setExpandedStates(new Array(Articles.length).fill(false));
            }, (error) => {
                console.log(error)
            })
    }, [])
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
    const stripHtmlTags = (htmlString) => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = htmlString;
        return tempDiv.textContent || tempDiv.innerText || '';
    };
    const DummyImgData = useSelector(settingsData)
    const PlaceHolderImg = DummyImgData?.img_placeholder

    const getArticleByCategory = (cateId) => {
        // console.log(cateId)
        setIsLoading(true)
        GetAllArticlesApi(
            "",
            cateId,
            "",
            (response) => {
                const Articles = response.data;
                // console.log(response)

                if (response.total) {
                    setTotal(response.total);
                } else {
                    setTotal("0");
                }

                setIsLoading(false)
                setGetArticles(Articles);
                setExpandedStates(new Array(Articles.length).fill(false));
            }, (error) => {
                console.log(error)
            })
    }
    const getGeneralArticles = () => {
        setIsLoading(true)
        GetAllArticlesApi(
            "",
            "",
            "",
            (response) => {
                const Articles = response.data;
                setTotal(response.total)
                // console.log(total)
                setIsLoading(false)
                setGetArticles(Articles);
                setExpandedStates(new Array(Articles.length).fill(false));
            }, (error) => {
                console.log(error)
            })
    }

    return (
        <Layout>
            <Breadcrumb title={translate("articles")} />
            <div className='all-articles'>

                <div id='all-articles-content'>
                    <div className="container">
                        <div className="row" id='main-content'>
                            <div className="col-12 col-md-6 col-lg-9">
                                <div className='all-article-rightside'>
                                    {total ? (
                                        <div className="card">
                                            <div className="card-body" id='all-article-headline-card'>
                                                <div>
                                                    <span>{total > 0 ? total : 0} {translate("articleFound")}</span>

                                                </div>
                                                <div className='grid-buttons'>
                                                    <button className='mx-3' id='layout-buttons' onClick={() => setGrid(true)}>
                                                        <AiOutlineUnorderedList size={25} />
                                                    </button>
                                                    <button id='layout-buttons' onClick={() => setGrid(false)}>
                                                        <RiGridFill size={25} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className='col-12 loading_data' >
                                            <Skeleton height={50} count={1} />
                                        </div>
                                    )}
                                    {getArticles && getArticles.length > 0 ? (


                                        !grid ?
                                            // Row cards

                                            <div className='all-prop-cards' id='rowCards'>
                                                <div className='row' id='all-articles-cards'>
                                                    {isLoading ? (
                                                        // Show skeleton loading when data is being fetched
                                                        Array.from({ length: getArticles ? getArticles.length : 6 }).map((_, index) => (
                                                            <div className='col-sm-12 col-md-6 col-lg-4 loading_data' key={index}>
                                                                <ArticleCardSkeleton />
                                                            </div>
                                                        ))
                                                        // <Loader />
                                                    ) :
                                                        getArticles?.map((ele, index) => (
                                                            <div className='col-12 col-md-6 col-lg-4' key={index}>
                                                                {/* <Link href="/article-deatils"> */}
                                                                <ArticleCard ele={ele} expandedStates={expandedStates} index={index} />
                                                                {/* </Link> */}
                                                            </div>
                                                        ))}
                                                </div>
                                            </div>
                                            : <div id='columnCards'>
                                                <div className="row">

                                                    {isLoading ? (
                                                        // Show skeleton loading when data is being fetched
                                                        Array.from({ length: getArticles ? getArticles.length : 6 }).map((_, index) => (
                                                            <div className='col-sm-12 col-md-6 col-lg-4 loading_data' key={index}>
                                                                <ArticleCardSkeleton />
                                                            </div>
                                                        ))
                                                        // <Loader />
                                                    ) :
                                                        getArticles?.map((ele, index) => (
                                                            <div className='col-12 ' id='horizonatal_articles' key={index}>
                                                                {/* <Link href="/article-deatils"> */}
                                                                <ArticleHorizonatalCard ele={ele} expandedStates={expandedStates} index={index} PlaceHolderImg={PlaceHolderImg} />
                                                                {/* </Link> */}
                                                            </div>
                                                        ))}
                                                </div>
                                            </div>
                                    ) : (
                                        <div className="noDataFoundDiv">
                                            <NoData />
                                        </div>
                                    )
                                    }
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="all-articles-leftside">
                                    <div className='cate-card'>
                                        <div className="card">
                                            <div className="card-header">
                                                {translate("categories")}
                                            </div>
                                            <div className="card-body">
                                                <div className='cate-list'>
                                                    <span>General</span>
                                                    <IoMdArrowDropright size={25} className='cate_list_arrow'
                                                        onClick={getGeneralArticles} />
                                                </div>
                                                {getCategories && getCategories.map((elem, index) => (
                                                    <div className='cate-list' key={index}>
                                                        <span>{elem.category}</span>
                                                        <IoMdArrowDropright
                                                            size={25}
                                                            className='cate_list_arrow'
                                                            onClick={() => { getArticleByCategory(elem.id) }} />
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Articles