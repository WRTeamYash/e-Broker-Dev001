
import { AddFavourite } from '@/store/actions/campaign';
import { settingsData } from '@/store/reducer/settingsSlice';
import { translate } from '@/utils';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useSelector } from 'react-redux';

function VerticalCard({ ele }) {
    // console.log(ele)
    // console.log("first time ",ele.is_favourite)
    // console.log(ele)
    const priceSymbol = useSelector(settingsData)
    const CurrencySymbol = priceSymbol && priceSymbol.currency_symbol

    const isLoggedIn = useSelector((state) => state.User_signup);
  
    // Initialize isLiked based on ele.is_favourite
    const [isLiked, setIsLiked] = useState(ele.is_favourite === 1);

    // Initialize isDisliked as false
    const [isDisliked, setIsDisliked] = useState(false);

    const handleLike = (e) => {
        e.preventDefault();
        e.stopPropagation();
        // console.log("isLoggedIn:", isLoggedIn);
        if (isLoggedIn && isLoggedIn.data && isLoggedIn.data.token) {
            // console.log("like", ele.id);
            AddFavourite(ele.id, "1", (response) => {
                setIsLiked(true);
                setIsDisliked(false);
                toast.success(response.message);
                // console.log("when i liked ", ele.is_favourite)
                // console.log("when i liked then data  ", ele)
            }, (error) => {
                console.log(error);
            });
        } else {
            toast.error("Please login first to add this property to favorites.");
        }

    };

    const handleDislike = (e) => {
        e.preventDefault();
        e.stopPropagation();
        AddFavourite(ele.id, "0", (response) => {
            setIsLiked(false);
            setIsDisliked(true);
            toast.success(response.message);
            // console.log("when i disliked ", ele.is_favourite)
            // console.log("when i disliked then data  ", ele)
        }, (error) => {
            console.log(error);
        });
    };

    useEffect(() => {
        // Update the state based on ele.is_favourite when the component mounts
        setIsLiked(ele.is_favourite === 1);
        setIsDisliked(false);
    }, [ele.is_favourite]);





    return (
        <div className='verticle_card'>
            <div className='card verticle_main_card'>
                <div className='verticle_card_img_div'>
                    <img className='card-img' id='verticle_card_img' src={ele.title_image} alt="" />
                </div>
                <div className="card-img-overlay">
                    {ele.promoted ? (
                        <span className='feature_tag'>
                          {translate("feature")}
                        </span>
                    ) : null}

                    <span className='like_tag'>
                        {isLiked ? (
                            <AiFillHeart size={25} className='liked_property' onClick={handleDislike} />
                        ) : (
                            isDisliked ? (
                                <AiOutlineHeart size={25} className='disliked_property' onClick={handleLike} />
                            ) : (
                                <AiOutlineHeart size={25} onClick={handleLike} />
                            )
                        )}
                    </span>
                </div>

                <div className='card-body'>
                    <span className='sell_teg'>
                        {ele.propery_type}
                    </span>
                    <span className='price_teg'>
                        {CurrencySymbol} {ele.price}
                    </span>
                    <div className='feature_card_mainbody'>
                        <div className="cate_image">
                            <img src={ele.category && ele.category.image} alt="" />
                        </div>
                        <span className='feature_body_title'> {ele.category && ele.category.category}  </span>
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
                                    <div>
                                        <img src={elem.image} alt="" width={20} height={16} />
                                    </div>
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
