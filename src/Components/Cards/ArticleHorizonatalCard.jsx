import Link from "next/link";
import React from "react";
import { Card } from "react-bootstrap";
import { AiOutlineArrowRight } from "react-icons/ai";
import adminlogo from "@/assets/Images/Superman.jpeg";
import { translate } from "@/utils";

import Image from "next/image";

const ArticleHorizonatalCard = ({ ele, expandedStates, index, PlaceHolderImg }) => {
    const stripHtmlTags = (htmlString) => {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = htmlString;
        return tempDiv.textContent || tempDiv.innerText || "";
    };

    return (
        <div>
            <div className="card" id="article_horizontal_card">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="article_card_image">
                            <Image loading="lazy" variant="top" className="article_Img" src={ele.image ? ele.image : PlaceHolderImg} width={200} height={200} />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-9">
                        <div className="article-card-content">
                            {ele.category?.category && ele.category?.category ? <span className="article-apartment-tag">{ele.category?.category}</span> : <span className="article-apartment-tag">General</span>}
                            <div className="article-card-headline">
                                <span> {stripHtmlTags(ele.title).substring(0, 30)}</span>
                                {ele && ele.description && (
                                    <>
                                        <p>{expandedStates[index] ? stripHtmlTags(ele.description) : stripHtmlTags(ele.description).substring(0, 100) + "..."}</p>
                                        {ele.description.length > 100 && (
                                            <div className="article-readmore">
                                                <Link href="/article-details/[slug]" as={`/article-details/${ele.id}`} passHref>
                                                    <button className="article-readmore-button">
                                                        {translate("showMore")} <AiOutlineArrowRight className="article-arrow-icon" size={18} />
                                                    </button>
                                                </Link>
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                            <div className="card-footer" id="article-card-footer">
                                <div id="admin_pic">
                                    <Image loading="lazy" src={adminlogo.src} alt="no_img" className="admin" width={200} height={200} />
                                </div>
                                <div className="article_footer_text">
                                    <span className="byadmin"> {translate("byAdmin")}</span>
                                    <p>1 day ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleHorizonatalCard;
