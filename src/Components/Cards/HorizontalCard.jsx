import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai';

const HorizontalCard = ({ ele }) => {
    return (
        <div className='horizontal_card'>
            <div className='card' id='main_prop_card' >
                <div className='image_div col-md-4'>
                    <img className='card-img' id='prop_card_img' src={ele.title_image} />
                </div>


                <div className="card-body" id='main_prop_card_body'>
                    {ele.promoted ? (
                        <span className='prop_feature'>
                            Feature
                        </span>
                    ) : null}
                    <span className='prop_like'>
                        <AiOutlineHeart size={25} />
                    </span>
                    <span className='prop_sell'>
                        {ele.propery_type}
                    </span>
                    <span className='prop_price'>
                        $ {ele.price}
                    </span>

                    <div>
                        <div className='prop_card_mainbody'>
                            {/* <BiHomeSmile size={23} /> */}
                            <div className="cate_image">
                                <img src={ele.category.image} alt="" />
                            </div>
                            <span className='body_title'> {ele.category.category} </span>
                        </div>
                        <div id='prop_card_middletext'>
                            <span>
                                {ele.title}
                            </span>
                            <p>
                                {ele.city} , {ele.state},  {ele.country}
                            </p>
                        </div>
                    </div>
                    <div className='card-footer' id='prop_card_footer'>

                        <div className="row">

                            {ele.parameters && ele.parameters.slice(0, 4).map((elem, index) => (
                                <div className="col-sm-12 col-md-6" key={index}>
                                    <div id='footer_content' key={index}>
                                        <div>
                                            <img src={elem.image} alt="" />
                                        </div>
                                        <p className='text_footer'> {elem.name}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HorizontalCard
