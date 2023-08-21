import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

function VerticalCard({ ele }) {
    return (
        <div className='verticle_card'>
            <div className='card verticle_main_card' >
                <img className='card-img' id='verticle_card_img' src={ele.title_image} alt="" />
                <div className="card-img-overlay">
                    {ele.promoted ? (
                        <span className='feature_tag'>
                            Feature
                        </span>
                    ) : null}
                    <span className='like_tag'>
                        <AiOutlineHeart size={25} />
                    </span>
                </div>

                <div className='card-body'>
                    <span className='sell_teg'>
                    {ele.propery_type}
                    </span>
                    <span className='price_teg'>
                        $ {ele.price}
                    </span>
                    <div className='feature_card_mainbody'>
                        <div className="cate_image">
                            <img src={ele.category.image} alt="" />
                        </div>
                        <span className='feature_body_title'> {ele.category.category} </span>
                    </div>
                    <div className='feature_card_middletext'>
                        <span>
                            {ele.title}
                        </span>
                        <p>
                            {ele.city} , {ele.state}, {ele.country}
                        </p>
                    </div>
                </div>

                <div className='card-footer' id='feature_card_footer'>
                    <div className="row">
                        {ele.parameters && ele.parameters.slice(0, 4).map((elem, index) => (
                            <div className="col-sm-12 col-md-6 " key={index}>
                                <div className='footer_content' key={index}>
                                    <img src={elem.image} alt="" width={20} height={16} />
                                    <p className='text_footer'> {elem.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VerticalCard;
