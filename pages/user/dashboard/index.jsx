import React, { useEffect, useState } from 'react'
import VerticleLayout from '@/Components/AdminLayout/VerticleLayout'
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import { Table } from 'antd';
import { AppBar, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar } from '@mui/material';
import PropertyListingTable from '@/Components/PropertieListingTable/PropertyListingTable';
import AdminFooter from '@/Components/AdminLayout/AdminFooter';
import { useSelector } from 'react-redux';
import { GetFeturedListingsApi } from '@/store/actions/campaign';


const index = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [getFeaturedListing, setGetFeaturedListing] = useState([]);
    const [total, setTotal] = useState(0);
    const [view, setView] = useState(0);
    const [offsetdata, setOffsetdata] = useState(0);
    const [scroll, setScroll] = useState(0);

    // console.log("offset data", offsetdata)
    const limit = 8;

    const isLoggedIn = useSelector((state) => state.User_signup);
    const userCurrentId = isLoggedIn && isLoggedIn.data ? isLoggedIn.data.data.id : null;
    const userData = isLoggedIn && isLoggedIn?.data?.data?.name
    // console.log(userData)

    // const pageCount = Math.ceil(total / limit); // Calculate the page count

    useEffect(() => {
        setIsLoading(true);
        GetFeturedListingsApi(
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            offsetdata.toString(),
            limit.toString(),
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            isLoggedIn ? userCurrentId : "",
            (response) => {
                setTotal(response.total);
                setView(response.total_clicks);
                const FeaturedListingData = response.data;
                // console.log(FeaturedListingData)
                setIsLoading(false);
                setGetFeaturedListing(FeaturedListingData);
            },
            (error) => {
                setIsLoading(false);
                console.log(error);
            }
        );
    }, [offsetdata, isLoggedIn]);
    const handlePageChange = (selectedPage) => {

        const newOffset = selectedPage.selected * limit;
        setOffsetdata(newOffset);
        window.scrollTo(0, 0);
        // console.log("new offset", newOffset)
        // console.log("limit", limit)
    };

    return (


        <VerticleLayout>
            <div className="container">
                <div className="row" id='dashboard_top_card'>
                    <div className="col-12">
                        <div className="row" id='dashboard_top_card'>
                            <div className="col-12 col-md-12 col-lg-4">
                                <div className="card" id='dashboard_card'>
                                    {/* <img src={DashBoardImg.src} className="card-img" alt="..." id='dashboard_img' /> */}

                                    <div id='dashboard_user'>
                                        <div>
                                            <span className="dashboard_user_title">hy, {userData}</span>
                                            <p className="card-text">Manage your profile and view property</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-4">
                                <div className="card" id='dashboard_total_prop_card'>
                                    <div className="totalprop">
                                        <span>Total Properties</span>
                                        {total > 0 ? (
                                            <h4>{total}</h4>
                                        ) :
                                            <h4>0</h4>}
                                    </div>
                                    <div className="total_prop_icon">
                                        <span>
                                            <HomeIcon sx={{ fontSize: "35px" }} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-4">
                                <div className="card" id='dashboard_total_prop_card'>
                                    <div className="totalprop">
                                        <span>Total Views</span>
                                        {view > 0 ? (
                                            <h4>{view}</h4>
                                        ) : <h4>0</h4>}
                                    </div>
                                    <div className="total_prop_icon">
                                        <span>
                                            <StarIcon sx={{ fontSize: "35px" }} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">

                        <PropertyListingTable data={getFeaturedListing} 
                        handlePageChange={handlePageChange} 
                        total={total} 
                        limit={limit}/>

                    </div>
                </div>
            </div>

        </VerticleLayout>
    )
}

export default index
