import { AddFavourite } from '@/store/actions/campaign'
import { settingsData } from '@/store/reducer/settingsSlice'
import { translate } from '@/utils'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { toast } from 'react-hot-toast'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { useSelector } from 'react-redux'

const AllPropertieCard = ({ ele }) => {

    const priceSymbol = useSelector(settingsData)
    const CurrencySymbol = priceSymbol && priceSymbol.currency_symbol

    const isLoggedIn = useSelector((state) => state.User_signup);
    // console.log(isLoggedIn)
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
        }, (error) => {
            console.log(error);
        });
    };

    useEffect(() => {
        // Update the state based on ele.is_favourite when the component mounts
        setIsLiked(ele.is_favourite === 1);
        setIsDisliked(false);
    }, [ele.is_favourite]);
    // console.log(CurrencySymbol)

    return (
        <Card id='all_prop_main_card' className="row" key={ele.id}>
            <div className='col-md-4 img_div' id='all_prop_main_card_rows_cols'>
                <img className='card-img' id='all_prop_card_img' src={ele.title_image} />
            </div>
            <div className='col-md-8' id='all_prop_main_card_rows_cols'>
                <Card.Body id='all_prop_card_body'>

                    {ele.promoted ? (
                        <span className='all_prop_feature'>
                           {translate("feature")}
                        </span>
                    ) : null}

                    <span className='all_prop_like'>
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
