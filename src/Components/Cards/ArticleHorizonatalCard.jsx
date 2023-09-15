import Link from 'next/link';
import React from 'react'
import { Card } from 'react-bootstrap'
import { AiOutlineArrowRight } from 'react-icons/ai';
import adminlogo from "@/assets/Images/Superman.jpeg"
import { translate } from '@/utils';


const ArticleHorizonatalCard = ({ ele, expandedStates, index, PlaceHolderImg }) => {


    const stripHtmlTags = (htmlString) => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = htmlString;
        return tempDiv.textContent || tempDiv.innerText || '';
    };


    return (
        <div>
            <div className="card" id='article_horizontal_card'>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="article_card_image">
                            <img variant="top" className="article_Img" src={ele.image ? ele.image : PlaceHolderImg} />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-9">

                        <div className="article-card-content">
                            <span className="article-apartment-tag">apartment</span>
                            <div className="article-card-headline">
                                <span>Property Purchase Laws in USA</span>
                                {ele && ele.description && (
                                    <>
                                        <p>
                                            {expandedStates[index]
                                                ? stripHtmlTags(ele.description)
                                                : stripHtmlTags(ele.description).substring(0, 100) + "..."}
                                        </p>
                                        {ele.description.length > 100 && (
                                            <div className="article-readmore">
                                                <Link href="/article-deatils/[slug]" as={`/article-deatils/${ele.id}`} passHref>
                                                    <button className="article-readmore-button">
                                                        {translate("showMore")} <AiOutlineArrowRight className="article-arrow-icon" size={18} />
                                                    </button>
                                                </Link>
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                            <div className="article-card-footer">
                                <div className="article-admin-pic">
                                    <img src={adminlogo.src} alt="" className="article-admin" />
                                </div>
                                <div className="article-footer-text">
                                    <span className="article-byadmin">{translate("byAdmin")}</span>
                                    <p>1 day ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleHorizonatalCard
