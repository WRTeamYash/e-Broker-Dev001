import React from 'react'
import VerticleLayout from '@/Components/AdminLayout/VerticleLayout'
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import { Table } from 'antd';
import { AppBar, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar } from '@mui/material';
import PropertyListingTable from '@/Components/PropertieListingTable/PropertyListingTable';
import AdminFooter from '@/Components/AdminLayout/AdminFooter';


const index = () => {

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }
    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
    ];

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
                                            <h1 className="card-title">hy, yash</h1>
                                            <p className="card-text">Manage your profile and view property</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-4">
                                <div className="card" id='dashboard_total_prop_card'>
                                    <div className="totalprop">
                                        <span>Total Properties</span>
                                        <h4>355</h4>
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
                                        <span>Total Reviews</span>
                                        <h4>355</h4>
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
                      <PropertyListingTable />
                    </div>
                </div>
            </div>

        </VerticleLayout>
    )
}

export default index
