import React, { useEffect, useState } from "react";
import ViewPageImg from "@/assets/Images/Breadcrumbs.jpg";

import { CiLocationOn } from "react-icons/ci";
import { BiTime } from "react-icons/bi";
import { useSelector } from "react-redux";
import { settingsData } from "@/store/reducer/settingsSlice";
import { toast } from "react-hot-toast";
import { AddFavourite } from "@/store/actions/campaign";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { GrCopy } from "react-icons/gr";
import { Tooltip } from "antd";
import { useRouter } from "next/router";


const Breadcrumb = (props) => {

    const router = useRouter()
    let { data, title } = props;
    const priceSymbol = useSelector(settingsData);
    const CurrencySymbol = priceSymbol && priceSymbol.currency_symbol;

    const isLoggedIn = useSelector((state) => state.User_signup);
    const userCurrentId = isLoggedIn && isLoggedIn.data ? isLoggedIn.data.data.id : null;
    const [isLiked, setIsLiked] = useState(props.data && props.data.is_favourite);

    // Initialize isDisliked as false
    const [isDisliked, setIsDisliked] = useState(false);

    const handleLike = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (isLoggedIn && isLoggedIn.data && isLoggedIn.data.token) {
            AddFavourite(
                props.data.propId,
                "1",
                (response) => {
                    setIsLiked(true);
                    setIsDisliked(false);
                    toast.success(response.message);
                },
                (error) => {
                    console.log(error);
                }
            );
        } else {
            toast.error("Please login first to add this property to favorites.");
        }
    };

    const handleDislike = (e) => {
        e.preventDefault();
        e.stopPropagation();
        AddFavourite(
            props.data.propId,
            "0",
            (response) => {
                setIsLiked(false);
                setIsDisliked(true);
                toast.success(response.message);
            },
            (error) => {
                console.log(error);
            }
        );
    };
    const handleCopyUrl = async (e) => {
        e.preventDefault();

        // Get the current URL from the router
        const currentUrl = process.env.NEXT_PUBLIC_BASE_URL + router.asPath;

        try {
            // Use the Clipboard API to copy the URL to the clipboard
            await navigator.clipboard.writeText(currentUrl);
            toast.success("URL copied to clipboard!");
        } catch (error) {
            console.error("Error copying to clipboard:", error);
            toast.error("Failed to copy URL to clipboard.");
        }
    };

    useEffect(() => {
        // Update the state based on props.data.is_favourite  when the component mounts
        setIsLiked(props.data && props.data.is_favourite === 1);
        setIsDisliked(false);
    }, [props.data && props.data.is_favourite]);

    return (
        <div
            id="breadcrumb"
            style={{
                backgroundImage: `url(${ViewPageImg.src})`,
            }}
        >
            {!props.data ? (
                <div className="container" id="breadcrumb-headline">
                    <h2>{props.title}</h2>
                </div>
            ) : (
                <>
                    <div id="breadcrumb-content" className="container">
                        <div className="row" id="breadcrumb_row">
                            <div className="col-12 col-md-6 col-lg-6">
                                <div className="left-side-content">
                                    <span className="prop-types">{data.type}</span>
                                    <span className="prop-name">{data.title}</span>
                                    <span className="prop-Location">
                                        <CiLocationOn size={25} /> {data.loc}
                                    </span>
                                    <div className="prop-sell-time">
                                        <span className="propertie-sell-tag">{data.propertyType}</span>
                                        <span>
                                            {" "}
                                            <BiTime size={20} /> {data.time}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-6">
                                <div className="right-side-content">
                                    <span>
                                        {" "}
                                        {CurrencySymbol} {data.price}{" "}
                                    </span>

                                    <div className="rightside_buttons">

                                        <div>
                                            {isLiked ? (
                                                <button onClick={handleDislike}>
                                                    <AiFillHeart size={25} className="liked_property" />
                                                </button>
                                            ) : isDisliked ? (
                                                <button onClick={handleLike}>
                                                    <AiOutlineHeart size={25} className="disliked_property" />
                                                </button>
                                            ) : (
                                                <button onClick={handleLike}>
                                                    <AiOutlineHeart size={25} />
                                                </button>
                                            )}
                                        </div>
                                        <div>
                                            <Tooltip title="Copy URL" placement="bottom">
                                                <button onClick={handleCopyUrl}>
                                                    <GrCopy size={25} className="disliked_property" />
                                                </button>
                                            </Tooltip>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Breadcrumb;
