import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb'
import React, {useState} from 'react'
import cardImg from '@/assets/Images/Featured_List_1.jpg'
import { RiBuilding3Line, RiHotelBedLine, RiParkingBoxLine } from 'react-icons/ri'
import { FiCloudDrizzle } from 'react-icons/fi'
import { AiOutlineHeart } from 'react-icons/ai'
import { BiHomeSmile } from 'react-icons/bi'


const index = () => {
    const [isLoading, setIsLoading] = useState(false)

    let FeaturestaticData = [
        {
            id: 1,
            image: cardImg.src,
            feature: "Feature",
            sell: "Sell",
            price: "$1,999,000 / USD",
            prop_type: "Home",
            prop_loc: "Luxury villa in Rego Park",
            prop_city: "California City, CA, USA",
            bedroom: "5 Bedroom",
            bath: "2 Bath",
            sq_fit: "1200 sq fit",
            parking: "2 Parking"
        },
        {
            id: 2,
            image: cardImg.src,
            feature: "Feature",
            sell: "Sell",
            price: "$1,999,000 / USD",
            prop_type: "Home",
            prop_loc: "Luxury villa in Rego Park",
            prop_city: "California City, CA, USA",
            bedroom: "5 Bedroom",
            bath: "2 Bath",
            sq_fit: "1200 sq fit",
            parking: "2 Parking"
        },
        {
            id: 3,
            image: cardImg.src,
            feature: "Feature",
            sell: "Sell",
            price: "$1,999,000 / USD",
            prop_type: "Home",
            prop_loc: "Luxury villa in Rego Park",
            prop_city: "California City, CA, USA",
            bedroom: "5 Bedroom",
            bath: "2 Bath",
            sq_fit: "1200 sq fit",
            parking: "2 Parking"
        },
        {
            id: 4,
            image: cardImg.src,
            feature: "Feature",
            sell: "Sell",
            price: "$1,999,000 / USD",
            prop_type: "Home",
            prop_loc: "Luxury villa in Rego Park",
            prop_city: "California City, CA, USA",
            bedroom: "5 Bedroom",
            bath: "2 Bath",
            sq_fit: "1200 sq fit",
            parking: "2 Parking"
        },
        {
            id: 5,
            image: cardImg.src,
            feature: "Feature",
            sell: "Sell",
            price: "$1,999,000 / USD",
            prop_type: "Home",
            prop_loc: "Luxury villa in Rego Park",
            prop_city: "California City, CA, USA",
            bedroom: "5 Bedroom",
            bath: "2 Bath",
            sq_fit: "1200 sq fit",
            parking: "2 Parking"
        },
        {
            id: 6,
            image: cardImg.src,
            feature: "Feature",
            sell: "Sell",
            price: "$1,999,000 / USD",
            prop_type: "Home",
            prop_loc: "Luxury villa in Rego Park",
            prop_city: "California City, CA, USA",
            bedroom: "5 Bedroom",
            bath: "2 Bath",
            sq_fit: "1200 sq fit",
            parking: "2 Parking"
        },
        {
            id: 7,
            image: cardImg.src,
            feature: "Feature",
            sell: "Sell",
            price: "$1,999,000 / USD",
            prop_type: "Home",
            prop_loc: "Luxury villa in Rego Park",
            prop_city: "California City, CA, USA",
            bedroom: "5 Bedroom",
            bath: "2 Bath",
            sq_fit: "1200 sq fit",
            parking: "2 Parking"
        },
        {
            id: 8,
            image: cardImg.src,
            feature: "Feature",
            sell: "Sell",
            price: "$1,999,000 / USD",
            prop_type: "Home",
            prop_loc: "Luxury villa in Rego Park",
            prop_city: "California City, CA, USA",
            bedroom: "5 Bedroom",
            bath: "2 Bath",
            sq_fit: "1200 sq fit",
            parking: "2 Parking"
        },
    ]
    return (
        <>
            <Breadcrumb title="Featured All Properties" />
            <section id='featured_prop_section'>
                <div className='container'>
                <div id='feature_cards' className='row'>
                            {isLoading ? (
                                // Show skeleton loading when data is being fetched
                                <div className="col-12 loading_data">
                                    <Skeleton height={20} count={22} />
                                </div>
                            ) :
                                FeaturestaticData?.map((ele) => (
                                    <div className='col-sm-12 col-md-6 col-lg-3'>
                                        <div className='card' id='main_card'>
                                            <img className='card-img' id='card_img' src={ele.image} />
                                            <div className="card-img-overlay">
                                                <span className='feture_tag'>
                                                    {ele.feature}
                                                </span>
                                                <span className='like_tag'>
                                                    <AiOutlineHeart size={25} />
                                                </span>


                                            </div>



                                            <div className='card-body'>
                                                <span className='sell_teg'>
                                                    {ele.sell}
                                                </span>
                                                <span className='price_teg'>
                                                    {ele.price}
                                                </span>
                                                <div id='feature_card_mainbody'>

                                                    <BiHomeSmile size={23} />
                                                    <span className='feture_body_title'> {ele.prop_type} </span>
                                                </div>
                                                <div id='feature_card_middletext'>
                                                    <span>
                                                        {ele.prop_loc}
                                                    </span>
                                                    <p>
                                                        {ele.prop_city}
                                                    </p>
                                                </div>
                                            </div>


                                            <div className='card-footer' id='feature_card_footer'>
                                                <div className='footer_body'>
                                                    <div id='footer_content'>
                                                        <RiHotelBedLine size={22} />
                                                        <p className='text_footer'> {ele.bedroom} </p>
                                                    </div>
                                                    <div id='footer_content'>
                                                        <RiBuilding3Line size={22} />
                                                        <p className='text_footer'> {ele.sq_fit} </p>
                                                    </div>

                                                </div>
                                                <div className='footer_body'>
                                                    <div id='footer_content'>
                                                        <FiCloudDrizzle size={22} />
                                                        <p className='text_footer'> {ele.bath} </p>
                                                    </div>
                                                    <div id='footer_content'>
                                                        <RiParkingBoxLine size={22} />
                                                        <p className='text_footer'> {ele.parking} </p>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                </div>
            </section>
        </>
    )
}

export default index