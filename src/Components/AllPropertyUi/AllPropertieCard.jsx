import { settingsData } from '@/store/reducer/settingsSlice'
import Image from 'next/image'
import React from 'react'
import { Card } from 'react-bootstrap'
import { AiOutlineHeart } from 'react-icons/ai'
import { useSelector } from 'react-redux'

const AllPropertieCard = ({ ele }) => {

const priceSymbol = useSelector(settingsData)
const CurrencySymbol = priceSymbol.currency_symbol
// console.log(CurrencySymbol)

    return (
        <Card id='all_prop_main_card' className="row" key={ele.id}>
            <div className='col-md-4' style={{ padding: "0" }} id='all_prop_main_card_rows_cols'>
                <img className='card-img' id='all_prop_card_img' src={ele.title_image} />
            </div>
            <div className='col-md-8' style={{ padding: "0" }} id='all_prop_main_card_rows_cols'>
                <Card.Body id='all_prop_card_body'>

                    {ele.promoted ? (
                        <span className='all_prop_feature'>
                            Feature
                        </span>
                    ) : null}

                    <span className='all_prop_like'>
                        <AiOutlineHeart size={25} />
                    </span>
                    <span className='all_prop_sell'>
                        {ele.propery_type}
                    </span>
                    <span className='all_prop_price'>
                       {CurrencySymbol} {ele.price}
                    </span>

                    <div>
                        <div id='all_prop_sub_body'>
                            <div className="cate_image">
                                <img src={ele.category.image} alt="" />
                            </div>
                            <span className='sub_body_title'> {ele.category.category}</span>
                        </div>
                        <div id='sub_body_middletext'>
                            <span>
                                {ele.title}
                            </span>
                            <p>
                                {ele.city} , {ele.state},  {ele.country}
                            </p>
                        </div>
                    </div>
                    <Card.Footer id='all_prop_card_footer'>

                        <div className="row">

                            {ele.parameters && ele.parameters.slice(0, 6).map((elem, index) => (
                                <div className="col-sm-12 col-md-4" key={index}>
                                    <div id='all_footer_content' key={index}>
                                        <div>
                                        <Image src={elem.image} alt="" width={20} height={20} />
                                        </div>
                                        <p className='text_footer'> {elem.name}</p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </Card.Footer>
                </Card.Body>
            </div>
        </Card>
    )
}

export default AllPropertieCard
