'use client'
import React, { useEffect, useState } from 'react'
import ViewPageImg from "@/assets/Images/Breadcrumbs_BG.jpg"
import cardImg from '@/assets/Images/Featured_List_1.jpg'
import adminlogo from "@/assets/Images/Superman.jpeg"
import { FiArrowRight, FiCloudDrizzle, FiEye } from 'react-icons/fi'
import { AiOutlineUnorderedList, AiOutlineHeart, AiOutlineArrowRight } from 'react-icons/ai'
import { RiGridFill } from 'react-icons/ri'
import { IoMdArrowDropright } from "react-icons/io"
import Card from 'react-bootstrap/Card';
import Image from 'next/image'
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb'
import Link from 'next/link'
import Loader from '@/Components/Loader/Loader'
import { GetAllArticlesApi } from '@/store/actions/campaign'




const Articles = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [expandedStates, setExpandedStates] = useState([]);

    // GET ARTICLES
    const [getArticles, setGetArticles] = useState()

    useEffect(() => {
        GetAllArticlesApi((response) => {
            const Articles = response.data;
            console.log("article data ============", Articles)
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
    return (
        <>
            <Breadcrumb title='Article' />
            <div className='all-articles'>

                <div id='all-articles-content'>
                    <div className="container">
                        <div className="row" id='main-content'>
                            <div className="col-12 col-md-6 col-lg-9">
                                <div className='all-article-rightside'>
                                    <div className="card">
                                        <div className="card-body" id='all-article-headline-card'>
                                            <div>
                                                <span>{getArticles ? ` ${getArticles.length} Articles Found` : 'Loading...'}</span>
                                            </div>
                                            <div className='grid-buttons'>
                                                <button className='mx-3' id='layout-buttons'>
                                                    <AiOutlineUnorderedList size={25} />
                                                </button>
                                                <button id='layout-buttons'>
                                                    <RiGridFill size={25} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row' id='all-articles-cards'>
                                        {isLoading ? (
                                            // Show skeleton loading when data is being fetched
                                            <div className="col-12 loading_data">
                                                <Skeleton height={20} count={22} />
                                            </div>
                                            // <Loader />
                                        ) :
                                            getArticles?.map((ele, index) => (
                                                <div className='col-12 col-md-6 col-lg-4' key={index}>
                                                    {/* <Link href="/article-deatils"> */}
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
                                                    {/* </Link> */}
                                                </div>
                                            ))}
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Articles