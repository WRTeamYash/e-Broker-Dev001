"use client"

import React from 'react'
import ViewPageImg from "@/assets/Images/Breadcrumbs_BG.jpg"
import cardImg from '@/assets/Images/Featured_List_1.jpg'
import adminlogo from "@/assets/Images/Superman.jpeg"
import { FiArrowRight, FiCloudDrizzle, FiEye } from 'react-icons/fi'
import { AiOutlineUnorderedList, AiOutlineHeart } from 'react-icons/ai'
import { RiGridFill } from 'react-icons/ri'
import { IoMdArrowDropright } from "react-icons/io"
import Card from 'react-bootstrap/Card';
import Image from 'next/image'
import Breadcrumb from '@/app/Components/Breadcrumb/Breadcrumb'




const Articles = () => {
    return (
        <>
            <Breadcrumb title='Article' />
            <div className='all-articles'>

                <div id='all-articles-content'>
                    <div className="row" id='main-content'>
                        <div className="col-12 col-md-6 col-lg-9">
                            <div className='all-article-rightside'>
                                <div className="card">
                                    <div className="card-body" id='all-article-headline-card'>
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
                                <div className='row' id='all-articles-cards'>
                                    <div className='col-12 col-md-6 col-lg-4'>
                                        <Card id='articles_main_card'>
                                            <Card.Img variant="top" id='articles_card_img' src={cardImg.src} />
                                            <span id='apartment_tag'>aprtment</span>
                                            <Card.Body id='all-articles_card_body'>

                                                <div id='all-articles_card_headline'>
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
                                            <Card.Footer id='all-articles_card_footer'>
                                                <div id='admin_pic'>
                                                    <Image src={adminlogo} alt="" className='admin' />
                                                </div>
                                                <div className='all-articles_footer_text'>
                                                    <span className='byadmin'> By Admin
                                                    </span>
                                                    <p>1 day ago</p>
                                                </div>
                                            </Card.Footer>
                                        </Card>
                                    </div>
                                    <div className='col-12 col-md-6 col-lg-4'>
                                        <Card id='articles_main_card'>
                                            <Card.Img variant="top" id='articles_card_img' src={cardImg.src} />
                                            <span id='apartment_tag'>aprtment</span>
                                            <Card.Body id='all-articles_card_body'>

                                                <div id='all-articles_card_headline'>
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
                                            <Card.Footer id='all-articles_card_footer'>
                                                <div id='admin_pic'>
                                                    <Image src={adminlogo} alt="" className='admin' />
                                                </div>
                                                <div className='all-articles_footer_text'>
                                                    <span className='byadmin'> By Admin
                                                    </span>
                                                    <p>1 day ago</p>
                                                </div>
                                            </Card.Footer>
                                        </Card>
                                    </div>
                                    <div className='col-12 col-md-6 col-lg-4'>
                                        <Card id='articles_main_card'>
                                            <Card.Img variant="top" id='articles_card_img' src={cardImg.src} />
                                            <span id='apartment_tag'>aprtment</span>
                                            <Card.Body id='all-articles_card_body'>

                                                <div id='all-articles_card_headline'>
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
                                            <Card.Footer id='all-articles_card_footer'>
                                                <div id='admin_pic'>
                                                    <Image src={adminlogo} alt="" className='admin' />
                                                </div>
                                                <div className='all-articles_footer_text'>
                                                    <span className='byadmin'> By Admin
                                                    </span>
                                                    <p>1 day ago</p>
                                                </div>
                                            </Card.Footer>
                                        </Card>
                                    </div>
                                    <div className='col-12 col-md-6 col-lg-4'>
                                        <Card id='articles_main_card'>
                                            <Card.Img variant="top" id='articles_card_img' src={cardImg.src} />
                                            <span id='apartment_tag'>aprtment</span>
                                            <Card.Body id='all-articles_card_body'>

                                                <div id='all-articles_card_headline'>
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
                                            <Card.Footer id='all-articles_card_footer'>
                                                <div id='admin_pic'>
                                                    <Image src={adminlogo} alt="" className='admin' />
                                                </div>
                                                <div className='all-articles_footer_text'>
                                                    <span className='byadmin'> By Admin
                                                    </span>
                                                    <p>1 day ago</p>
                                                </div>
                                            </Card.Footer>
                                        </Card>
                                    </div>
                                    <div className='col-12 col-md-6 col-lg-4'>
                                        <Card id='articles_main_card'>
                                            <Card.Img variant="top" id='articles_card_img' src={cardImg.src} />
                                            <span id='apartment_tag'>aprtment</span>
                                            <Card.Body id='all-articles_card_body'>

                                                <div id='all-articles_card_headline'>
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
                                            <Card.Footer id='all-articles_card_footer'>
                                                <div id='admin_pic'>
                                                    <Image src={adminlogo} alt="" className='admin' />
                                                </div>
                                                <div className='all-articles_footer_text'>
                                                    <span className='byadmin'> By Admin
                                                    </span>
                                                    <p>1 day ago</p>
                                                </div>
                                            </Card.Footer>
                                        </Card>
                                    </div>
                                    <div className='col-12 col-md-6 col-lg-4'>
                                        <Card id='articles_main_card'>
                                            <Card.Img variant="top" id='articles_card_img' src={cardImg.src} />
                                            <span id='apartment_tag'>aprtment</span>
                                            <Card.Body id='all-articles_card_body'>

                                                <div id='all-articles_card_headline'>
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
                                            <Card.Footer id='all-articles_card_footer'>
                                                <div id='admin_pic'>
                                                    <Image src={adminlogo} alt="" className='admin' />
                                                </div>
                                                <div className='all-articles_footer_text'>
                                                    <span className='byadmin'> By Admin
                                                    </span>
                                                    <p>1 day ago</p>
                                                </div>
                                            </Card.Footer>
                                        </Card>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Articles