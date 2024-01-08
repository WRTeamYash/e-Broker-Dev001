import Image from 'next/image'
import React from 'react'
import { formatPriceAbbreviated, isThemeEnabled } from '@/utils'
import { ImageToSvg } from './ImageToSvg'

const MapCard = ({ data, CurrencySymbol, PlaceHolderImg }) => {

    const themeEnabled = isThemeEnabled();

    return (
        <>
            <div className="verticle_card">
                <div className="card verticle_main_card">
                    <div className="verticle_card_img_div">
                        <Image loading="lazy" className="card-img" id="verticle_card_img" src={data.title_image ? data.title_image : PlaceHolderImg} alt="no_img" width={200} height={200} />
                    </div>
                    <div className="card-img-overlay">
                      <span className="sell_teg">{data.propery_type}</span>
                    </div>

                    <div className="card-body">
                        <span className="sell_teg">{data.propery_type}</span>
                        <span className="price_teg">
                            {CurrencySymbol} {formatPriceAbbreviated(data.price)}
                        </span>
                        <div className="feature_card_mainbody">
                            <div className="cate_image">
                                {/* {themeEnabled ? ( */}

                                    {/* <ImageToSvg imageUrl={data.category && data.category.image} className="custom-svg" />
                                ) : ( */}
                                    <Image loading="lazy" src={data.category && data.category.image} alt="no_img" width={20} height={20} />
                                {/* )} */}

                            </div>
                            <span className="feature_body_title"> {data.category && data.category.category} </span>
                        </div>
                        <div className="feature_card_middletext">
                            <span>{data.title}</span>
                            <p>
                                {data.city} {data.city ? "," : null} {data.state} {data.state ? "," : null} {data.country}
                            </p>
                        </div>
                    </div>

              
                </div>
            </div>
        </>
    )
}

export default MapCard
