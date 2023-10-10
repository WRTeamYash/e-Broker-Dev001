import React, { useEffect, useState } from 'react'
import VerticleLayout from '@/Components/AdminLayout/VerticleLayout'
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import { Toolbar } from '@mui/material';
import { useSelector } from 'react-redux';
import { GetFeturedListingsApi } from '@/store/actions/campaign';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Menu, Dropdown, Button, Space } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { settingsData } from "@/store/reducer/settingsSlice";
import { useRouter } from "next/router";
import { BsThreeDotsVertical } from "react-icons/bs";
import ReactPagination from "../../../src/Components/Pagination/ReactPagination.jsx";
import { deletePropertyApi } from "@/store/actions/campaign";
import Loader from "../../../src/Components/Loader/Loader.jsx";
import toast from "react-hot-toast";
import { FaCrown } from 'react-icons/fa';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { RiCloseCircleLine } from 'react-icons/ri';
import FeatureModal from '@/Components/FeatureModal/FeatureModal.jsx';



const index = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [getFeaturedListing, setGetFeaturedListing] = useState([]);
    const [total, setTotal] = useState(0);
    const [view, setView] = useState(0);
    const [offsetdata, setOffsetdata] = useState(0);
    const [scroll, setScroll] = useState(0);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [propertyIdToDelete, setPropertyIdToDelete] = useState(null);
    const [propertyId, setPropertyId] = useState(null);
    const [isFeatureModalVisible, setIsFeatureModalVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const handleClickEdit = (propertyId) => {
        router.push(`/user/edit-property?id=${propertyId}`);
    };
    const handleClickDelete = (propertyId) => {

        setPropertyIdToDelete(propertyId)
        setIsLoading(true)
        deletePropertyApi(
            propertyId,
            (response) => {
                // console.log(response)
                setIsLoading(true)
                toast.success(response.message)

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
                
            },
            (error) => {
                setIsLoading(false)
                toast.error(error)
            })
        // router.push(`/user/edit-property?id=${propertyId}`);
    };

    const handleFeatureClick = (propertyId) => {
        setPropertyId(propertyId)
        setIsFeatureModalVisible(true);
    };
    // console.log("offset data", offsetdata)
    const limit = 8;

    const priceSymbol = useSelector(settingsData);
    const CurrencySymbol = priceSymbol && priceSymbol.currency_symbol;
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
    }, [offsetdata, isLoggedIn, propertyIdToDelete]);


    useEffect(() => {

    }, [propertyId])

    const handlePageChange = (selectedPage) => {

        const newOffset = selectedPage.selected * limit;
        setOffsetdata(newOffset);
        window.scrollTo(0, 0);
        // console.log("new offset", newOffset)
        // console.log("limit", limit)
    };



    const handleOptionChange = (option) => {
        setSelectedOption(option);
        console.log('Selected Option:', option); // Add this line
    };
    const handleFeature = () => {
        // Pass the selectedOption to your API or handle it as needed
        // For demonstration, we'll just log the selected option
        console.log('Selected Option:', selectedOption);

        // Close the modal
        onHide();
    };

    const optionStyles = {
        background: '#f5f5f5f',
        borderRadius: '8px',
        opacity: 1,
        cursor: 'pointer',
        transition: 'background 0.3s',
        padding: '10px',
        margin: '5px',
        textAlign: 'left',
        border: '1px solid #E1E1E1',
    };

    const selectedOptionStyles = {
        background: '#087c7c',
        color: '#FFFFFF',
        borderRadius: '8px',
        opacity: 1,
        cursor: 'pointer',
        transition: 'background 0.3s',
        padding: '10px',
        margin: '5px',
        textAlign: 'left',
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

                        <div className="table_content card bg-white">
                            <TableContainer
                                component={Paper}
                                sx={{
                                    background: "#fff",
                                    padding: "10px",
                                }}
                            >
                                <Table sx={{ minWidth: 650 }} aria-label="caption table">
                                    <TableHead
                                        sx={{
                                            background: "#f5f5f5",
                                        }}
                                    >
                                        <TableRow>
                                            <TableCell sx={{ fontWeight: "600" }}>Listing title</TableCell>
                                            <TableCell sx={{ fontWeight: "600" }} align="center">
                                                Category
                                            </TableCell>
                                            <TableCell sx={{ fontWeight: "600" }} align="center">
                                                Views
                                            </TableCell>
                                            <TableCell sx={{ fontWeight: "600" }} align="center">
                                                Posted On
                                            </TableCell>
                                            <TableCell sx={{ fontWeight: "600" }} align="center">
                                                Status
                                            </TableCell>
                                            <TableCell sx={{ fontWeight: "600" }} align="center">
                                                Action
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {isLoading ? (
                                            <TableRow>
                                                <TableCell colSpan={6} align="center">
                                                    {/* Centered loader */}
                                                    <div>
                                                        <Loader />
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        ) : (
                                            getFeaturedListing.length > 0 ? (
                                                getFeaturedListing.map((elem, index) => (
                                                    <TableRow key={index}>
                                                        <TableCell component="th" scope="row" sx={{ width: "40%" }}>
                                                            {/* {console.log(elem.id)} */}
                                                            <div className="card" id="listing_card">
                                                                <div className="listing_card_img">
                                                                    <img
                                                                        src={elem.title_image}
                                                                        alt=""
                                                                        id="main_listing_img"
                                                                    />
                                                                    <span className="listing_type_tag">
                                                                        {elem.propery_type}
                                                                    </span>
                                                                </div>
                                                                <div className="listing_card_body">
                                                                    <span className="listing_prop_title">{elem.title}</span>
                                                                    <span className="listing_prop_loc">
                                                                        {elem.city} {elem.state} {elem.country}
                                                                    </span>
                                                                    <span className="listing_prop_pirce">
                                                                        {CurrencySymbol} {elem.price}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </TableCell>
                                                        <TableCell align="center">{elem.category.category}</TableCell>
                                                        <TableCell align="center">{elem.total_view}</TableCell>
                                                        <TableCell align="center">{elem.post_created}</TableCell>
                                                        <TableCell align="center">
                                                            {elem.status === 1 ? (
                                                                <span className="active_status">Active</span>
                                                            ) : (
                                                                <span className="inactive_status">Inactive</span>
                                                            )}
                                                        </TableCell>
                                                        <TableCell align="center">

                                                            <Dropdown
                                                                visible={anchorEl === index}
                                                                onVisibleChange={(visible) => {
                                                                    if (visible) {
                                                                        setAnchorEl(index);
                                                                    } else {
                                                                        setAnchorEl(null);
                                                                    }
                                                                }}
                                                                overlay={(
                                                                    <Menu>
                                                                        <Menu.Item key="edit" onClick={() => handleClickEdit(elem.id)}>
                                                                            <Button
                                                                                type="text"
                                                                                icon={<EditOutlined />}
                                                                            >
                                                                                Edit
                                                                            </Button>
                                                                        </Menu.Item>
                                                                        {elem.status === 1 ? (
                                                                            <Menu.Item key="feature">
                                                                                <Button
                                                                                    type="text"
                                                                                    icon={<FaCrown />}
                                                                                    onClick={() => handleFeatureClick(elem.id)}
                                                                                >
                                                                                    Feature
                                                                                </Button>

                                                                            </Menu.Item>
                                                                        ) : null}
                                                                        <Menu.Item key="delete">
                                                                            <Button
                                                                                type="text"
                                                                                icon={<DeleteOutlined />}
                                                                                onClick={() => handleClickDelete(elem.id)}>
                                                                                Delete
                                                                            </Button>
                                                                        </Menu.Item>
                                                                    </Menu>
                                                                )}
                                                            >
                                                                <Button id="simple-menu"><BsThreeDotsVertical /></Button>
                                                            </Dropdown>

                                                        </TableCell>
                                                    </TableRow>
                                                ))
                                            ) : (
                                                <TableRow>
                                                    <TableCell colSpan={6} align="center">
                                                        <p>No Data Available</p>
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        )}
                                    </TableBody>
                                </Table>
                            </TableContainer>

                            <FeatureModal show={isFeatureModalVisible}
                                onHide={() => setIsFeatureModalVisible(false)}
                                propertyId={propertyId}
                            />

                            {/* <Modal
                                show={isFeatureModalVisible}
                                onHide={() => setIsFeatureModalVisible(false)}
                                centered
                                className="feature-modal"
                                backdrop="static"
                            >
                                <Modal.Header>
                                    <Modal.Title>Feature Property</Modal.Title>
                                    <RiCloseCircleLine
                                        className="close-icon"
                                        size={40}
                                        onClick={() => setIsFeatureModalVisible(false)}
                                    />
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <div className="row">
                                            <div className="col-sm-12 col-md-6 col-lg-4">
                                                <div
                                                    style={
                                                        selectedOption === 'HomeScreen'
                                                            ? selectedOptionStyles
                                                            : optionStyles
                                                    }
                                                    onClick={() => handleOptionChange('HomeScreen')}
                                                >
                                                    Home
                                                </div>

                                            </div>
                                            <div className="col-sm-12 col-md-6 col-lg-4">
                                                <div
                                                    style={
                                                        selectedOption === 'Slider'
                                                            ? selectedOptionStyles
                                                            : optionStyles
                                                    }
                                                    onClick={() => handleOptionChange('Slider')}
                                                >
                                                    Slider
                                                </div>

                                            </div>
                                            <div className="col-sm-12 col-md-6 col-lg-4">
                                                <div
                                                    style={
                                                        selectedOption === 'ProductListing'
                                                            ? selectedOptionStyles
                                                            : optionStyles
                                                    }
                                                    onClick={() => handleOptionChange('ProductListing')}
                                                >
                                                    List
                                                </div>

                                            </div>
                                        </div>
                                        {selectedOption === 'Slider' && (
                                            <div>
                                                
                                                <Form.File
                                                    id="custom-file"
                                                    label="Upload Slider Image"
                                                    custom
                                                />
                                            </div>
                                        )}
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                   <Button variant="secondary" onClick={onHide}>
                                        Cancel
                                    </Button>
                                    <Button variant="primary" onClick={handleFeature}>
                                        Feature
                                    </Button>
                                </Modal.Footer>
                            </Modal> */}
                            {getFeaturedListing.length > 0 ? (
                                <div className="col-12">
                                    <ReactPagination pageCount={Math.ceil(total / limit)} onPageChange={handlePageChange} />
                                </div>
                            ) : null}

                        </div>
                    </div>
                </div>
            </div>

        </VerticleLayout>
    )
}

export default index
