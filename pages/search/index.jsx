import React, { useEffect, useState } from 'react'
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb';
import Layout from '@/Components/Layout/Layout'
import { useSelector } from 'react-redux';
import { GetCategorieApi, GetFeturedListingsApi } from '@/store/actions/campaign.js';
import { RiCloseCircleLine, RiSendPlane2Line } from 'react-icons/ri';
import { GrRefresh } from 'react-icons/gr';
import { ButtonGroup, Modal, Pagination } from 'react-bootstrap';
import LocationSearchBox from '@/Components/Location/LocationSearchBox.jsx';
import { BiFilter } from 'react-icons/bi';
import { FiSearch } from 'react-icons/fi';
import { translate } from '@/utils/index.js';
import { useRouter } from 'next/router.js';
import VerticalCardSkeleton from '@/Components/Skeleton/VerticalCardSkeleton.jsx';
import Link from 'next/link.js';
import VerticalCard from '@/Components/Cards/VerticleCard.jsx';
import NoData from '@/Components/NoDataFound/NoData.jsx';
import { categoriesCacheData } from '@/store/reducer/momentSlice';




const SearchPage = () => {
    const searchedData = JSON.parse(localStorage.getItem('searchData'));
    // console.log("searcheddata", searchedData)
    // console.log("city", searchedData.filterData.selectedLocation?.city)
    // console.log("searcheddata", searchedData.activeTab)
    const [searchData, setSearchData] = useState()
    const [filterData, setFilterData] = useState("")

    const isLoggedIn = useSelector((state) => state.User_signup);
    const userCurrentId = isLoggedIn && isLoggedIn.data ? isLoggedIn.data.data.id : null;
    const router = useRouter();

    const [total, setTotal] = useState(0);
    const [offsetdata, setOffsetdata] = useState(0);
    const [scroll, setScroll] = useState(0);

    // console.log("offset data", offsetdata)
    const limit = 8;
    const [showFilterModal, setShowFilterModal] = useState(false);
    const [formData, setFormData] = useState({
        propType: '',
        minPrice: '',
        maxPrice: '',
        postedSince: '',
        selectedLocation: null,
    });
    const [activeTab, setActiveTab] = useState(0);
    const [searchInput, setSearchInput] = useState(searchedData.searchInput);

    
    const [isLoading, setIsLoading] = useState(true);

  const Categorydata = useSelector(categoriesCacheData)


    // const searchedData = filterData && filterData ? JSON.parse(decodeURIComponent(filterData)) : null;
    useEffect(() => {

        GetFeturedListingsApi(
            "",
            "",
            "",
            searchedData.filterData?.propType ? searchedData.filterData.propType : "",
            "",
            searchedData && searchedData.filterData && searchedData.filterData.selectedLocation && searchedData.filterData.selectedLocation?.city ? searchedData.filterData.selectedLocation.city : "",
            "",
            "",
            "",
            isLoggedIn ? userCurrentId : "",
            searchedData && searchedData.activeTab,
            searchedData.filterData?.maxPrice ? searchedData.filterData.maxPrice : "",
            searchedData.filterData?.minPrice ? searchedData.filterData.minPrice : "0",
            searchedData.filterData?.postedSince ? searchedData.filterData.postedSince : "",
            searchedData && searchedData.filterData && searchedData.filterData.selectedLocation && searchedData.filterData.selectedLocation?.state ? searchedData.filterData.selectedLocation.state : "",
            searchedData && searchedData.filterData && searchedData.filterData.selectedLocation && searchedData.filterData.selectedLocation?.country ? searchedData.filterData.selectedLocation.country : "",
            searchedData && searchedData.searchInput,
            "",
            "",
            (response) => {
                setTotal(response.total);
                const SearchD = response.data;
                // console.log("searchData data ============", SearchD)
                setIsLoading(false)
                setSearchData(SearchD);
            }, (error) => {
                console.log(error)
            })
    }, [isLoggedIn])


    const handleHideFilterModal = () => {
        setShowFilterModal(false)
    }

    // useEffect(() => {
    //     GetCategorieApi(
    //         (response) => {
    //             const categoryData = response && response.data;
    //             setIsLoading(false);
    //             setGetCategories(categoryData);
    //         },
    //         (error) => {
    //             console.log(error);
    //         }
    //     );
    // }, []);

    const handleInputChange = (e) => {
        const { name, value, type } = e.target;
        // Ensure that the input value is a positive number
        if (type === 'number') {
          const sanitizedValue = Math.max(0, parseInt(value));
          setFormData({
            ...formData,
            [name]: sanitizedValue,
          });
        } else {
          setFormData({
            ...formData,
            [name]: value,
          });
        }
      };

    const handlePostedSinceChange = (e) => {
        setFormData({
            ...formData,
            postedSince: e.target.value,
        });
    };

    const handleLocationSelected = (locationData) => {
        setFormData({
            ...formData,
            selectedLocation: locationData,
        });
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab === 'sell' ? 0 : 1);
    };
    const handleApplyFilter = () => {
        let postedSinceValue = '';
        if (formData.postedSince === 'yesterday') {
            postedSinceValue = '0';
        } else if (formData.postedSince === 'lastWeek') {
            postedSinceValue = '1';
        }

        // Include the postedSince value in the filterData object
        const newFilterData = {
            propType: formData.propType,
            minPrice: formData.minPrice,
            maxPrice: formData.maxPrice,
            postedSince: postedSinceValue,
            selectedLocation: formData.selectedLocation,
        };

        // Set the filter data in state
        setFilterData(newFilterData);

        // Close the modal
        setShowFilterModal(false);
    };

    useEffect(() => {
        // You can access the updated filterData value here
        // console.log(filterData);
    }, [filterData]);

    const handleSearch = () => {
        setIsLoading(true)
        const searchData = {
            filterData: formData,
            activeTab: activeTab,
            searchInput: searchInput,
        };
        console.log(searchData)
        localStorage.setItem('searchData', JSON.stringify(searchData));
        // console.log(searchData);
        GetFeturedListingsApi(
            "",
            "",
            "",
            searchData.filterData?.propType ? searchData.filterData.propType : "",
            "",
            searchData && searchData.filterData && searchData.filterData.selectedLocation && searchData.filterData.selectedLocation?.city ? searchData.filterData.selectedLocation.city : "",
            "",
            "",
            "",
            isLoggedIn ? userCurrentId : "",
            searchData && searchData.activeTab,
            searchData.filterData?.maxPrice ? searchData.filterData.maxPrice : "",
            searchData.filterData?.minPrice ? searchData.filterData.minPrice : "0",
            searchData.filterData?.postedSince ? searchData.filterData.postedSince : "",
            searchData && searchData.filterData && searchData.filterData.selectedLocation && searchData.filterData.selectedLocation?.state ? searchData.filterData.selectedLocation.state : "",
            searchData && searchData.filterData && searchData.filterData.selectedLocation && searchData.filterData.selectedLocation?.country ? searchData.filterData.selectedLocation.country : "",
            searchData && searchData.searchInput,
            "",
            "",
            (response) => {
                setTotal(response.total);
                const SearchD = response.data;
                // console.log("searchData data ============", SearchD)
                setIsLoading(false)
                setSearchData(SearchD);
            }, (error) => {
                console.log(error)
            })
        setShowFilterModal(false); // Close the modal

    };

    const handleClearFilter = () => {
        setFormData({
            propType: '',
            minPrice: '',
            maxPrice: '',
            postedSince: '',
        });
        selectedLocation: ""
    };
    const handlePageChange = (selectedPage) => {

        const newOffset = selectedPage.selected * limit;
        setOffsetdata(newOffset);
        window.scrollTo(0, 0);
        // console.log("new offset", newOffset)
        // console.log("limit", limit)
    };


    return (
        <Layout>
            <Breadcrumb title="" />
            <div className='serach_page_tab'>

                <div id="searchbox" className="container">
                    <ButtonGroup>
                        <ul className="nav nav-tabs" id="tabs">
                            <li className="">
                                <a
                                    className={`nav-link ${activeTab === 0 ? 'tab-0' : ''}`}
                                    aria-current="page"
                                    id="sellbutton"
                                    onClick={() => handleTabClick('sell')}
                                >
                                    {translate('sell')}
                                </a>
                            </li>
                            <li className="">
                                <a
                                    className={`nav-link ${activeTab === 1 ? 'tab-1' : ''}`}
                                    onClick={() => handleTabClick('rent')}
                                    aria-current="page"
                                    id="rentbutton"
                                >
                                    {translate('rent')}
                                </a>
                            </li>
                        </ul>
                    </ButtonGroup>
                    <div id="searchcard">
                        <div id="searchbuttoon">
                            <FiSearch size={20} />
                            <input
                                className="searchinput"
                                placeholder="Search your property"
                                name="propertySearch"
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') {
                                        // Prevent the default form submission behavior
                                        e.preventDefault();
                                        // Trigger the click event on the submit button
                                        handleSearch();
                                    }
                                }}
                            />
                        </div>
                        <div id="leftside-buttons">
                            <button className="filter" onClick={() => setShowFilterModal(true)}>
                                <BiFilter size={25} />
                                {translate('filter')}
                            </button>
                            <button className="find" onClick={handleSearch}>
                                {translate('search')}
                            </button>
                        </div>

                    </div>
                </div>

                <Modal
                    show={showFilterModal}
                    onHide={handleHideFilterModal}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    backdrop="static"
                    className="filter-modal"
                >
                    <Modal.Header>
                        <Modal.Title>{translate("filterProp")}</Modal.Title>
                        <RiCloseCircleLine className='close-icon' size={40} onClick={handleHideFilterModal} />
                    </Modal.Header>
                    <Modal.Body>
                        <form action="">
                            <div className='first-grup'>
                                <div className='prop-type-modal'>
                                    <span>{translate("propTypes")}</span>
                                    <select className="form-select" aria-label="Default select" name="propType" value={formData.propType} onChange={handleInputChange}>
                                        <option value="">{translate("selectPropType")}</option>
                                        {/* Add more options as needed */}
                                        {Categorydata && Categorydata?.map((ele, index) => (
                                            <option key={index} value={ele.id}>{ele.category}</option>
                                        ))}
                                    </select>
                                </div>


                                <div className='prop-location-modal'>
                                    <span>{translate("selectYourLocation")}</span>
                                    <LocationSearchBox onLocationSelected={handleLocationSelected} />
                                </div>
                            </div>
                            <div className="second-grup">
                                <div className='budget-price-modal'>
                                    <span>{translate("budget")}</span>
                                    <div className='budget-inputs'>
                                        <input className='price-input' type='number' placeholder='Min Price' name="minPrice" value={formData.minPrice} onChange={handleInputChange} />
                                        <input className='price-input' type='number' placeholder='Max Price' name="maxPrice" value={formData.maxPrice} onChange={handleInputChange} />
                                    </div>
                                </div>
                            </div>
                            <div className="third-grup">
                                <div className='posted-since'>
                                    <span>{translate("postedSince")}</span>
                                    <div className='posted-duration-modal'>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id="flexRadioDefault1"
                                                value="anytime"
                                                checked={formData.postedSince === 'anytime'}
                                                onChange={handlePostedSinceChange}
                                            />
                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                {translate("anytime")}
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id="flexRadioDefault2"
                                                value="lastWeek"
                                                checked={formData.postedSince === 'lastWeek'}
                                                onChange={handlePostedSinceChange}
                                            />
                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                {translate("lastWeek")}
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id="flexRadioDefault3"
                                                value="yesterday"
                                                checked={formData.postedSince === 'yesterday'}
                                                onChange={handlePostedSinceChange}
                                            />
                                            <label className="form-check-label" htmlFor="flexRadioDefault3">
                                                {translate("yesterday")}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer className='filter-footer'>

                        <div className='clear-filter-modal'>
                            <GrRefresh size={25} />
                            <button id='clear-filter-button' type='submit' onClick={handleClearFilter}>
                                {translate("clearFilter")}
                            </button>
                        </div>
                        <div className='apply-filter-modal'>
                            <RiSendPlane2Line size={25} />
                            <button id='apply-filter-button' type='submit' onClick={handleApplyFilter}>
                                {translate("applyFilter")}
                            </button>
                        </div>

                    </Modal.Footer>
                </Modal>
            </div>

            <div className="search_content container">
                <div id='feature_cards' className='row'>
                    {isLoading ? (
                        Array.from({ length: 8 }).map((_, index) => (
                            <div className='col-sm-12 col-md-6 col-lg-3 loading_data' key={index}>
                                <VerticalCardSkeleton />
                            </div>
                        ))
                    ) : searchData && searchData.length > 0 ? (
                        searchData.map((ele, index) => (
                            <div className='col-sm-12 col-md-6 col-lg-3' key={index}>
                                <Link href="/properties-details/[slug]" as={`/properties-details/${ele.id}`} passHref>
                                    <VerticalCard ele={ele} />
                                </Link>
                            </div>
                        ))
                    ) : (
                        <NoData />
                    )}
                </div>
            </div>
        </Layout>

    )
}

export default SearchPage
