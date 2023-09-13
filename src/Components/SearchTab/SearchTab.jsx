import React, { useEffect, useState } from 'react';
import { ButtonGroup, Modal } from 'react-bootstrap';
import { FiSearch } from 'react-icons/fi';
import { BiFilter } from 'react-icons/bi';
import { translate } from '@/utils';
import { GetCategorieApi } from '@/store/actions/campaign';
import LocationSearchBox from '../Location/LocationSearchBox';
import toast from 'react-hot-toast';
import { connect } from 'react-redux';
import { GrRefresh } from 'react-icons/gr';
import { RiCloseCircleLine, RiSendPlane2Line } from 'react-icons/ri';

const SearchTab = () => {
    const [showFilterModal, setShowFilterModal] = useState(false);
    const [formData, setFormData] = useState({
        propType: '',
        minPrice: '',
        maxPrice: '',
        postedSince: '',
        selectedLocation: null,
    });
    const [activeTab, setActiveTab] = useState('sell');
    const [searchInput, setSearchInput] = useState('');

    const [getCategories, setGetCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const handleHideFilterModal = () => {
        setShowFilterModal(false)
    }

    useEffect(() => {
        GetCategorieApi(
            (response) => {
                const categoryData = response && response.data;
                setIsLoading(false);
                setGetCategories(categoryData);
            },
            (error) => {
                console.log(error);
            }
        );
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
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
        setActiveTab(tab);
    };

    const handleApplyFilter = () => {
        // Validate form data here
        // if (!formData.propType || !formData.minPrice || !formData.maxPrice || !formData.postedSince) {
        //     toast.error('Please fill all fields', {
        //         position: 'top-center',
        //     });
        //     return;
        // }

        // Collect the data you want to pass to the search function
        const searchData = {
            filterData: formData,
            activeTab: activeTab,
            searchInput: searchInput,
        };

        // Now you can perform your search action, passing searchData as needed.
        // Example: performSearch(searchData);

        console.log(searchData);

        setShowFilterModal(false); // Close the modal
    };

    const handleClearFilter = () => {
        setFormData({
            propType: '',
            minPrice: '',
            maxPrice: '',
            postedSince: '',
        });
        selectedLocation:""
    };

    return (
        <div>
            <div id="searchbox" className="container">
                <ButtonGroup>
                    <ul className="nav nav-tabs" id="tabs">
                        <li className="">
                            <a
                                className={`nav-link ${activeTab === 'sell' ? 'tab-active' : ''}`}
                                aria-current="page"
                                id="sellbutton"
                                onClick={() => handleTabClick('sell')}
                            >
                                {translate('sell')}
                            </a>
                        </li>
                        <li className="">
                            <a
                                className={`nav-link ${activeTab === 'rent' ? 'tab-active' : ''}`}
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
                        />
                    </div>
                    <div id="leftside-buttons">
                        <button className="filter" onClick={() => setShowFilterModal(true)}>
                            <BiFilter size={25} />
                            {translate('filter')}
                        </button>
                        <button className="find" onClick={handleApplyFilter}>
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
                                    {getCategories && getCategories?.map((ele, index) => (
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
                                    <input className='price-input' placeholder='Min Price' name="minPrice" value={formData.minPrice} onChange={handleInputChange} />
                                    <input className='price-input' placeholder='Max Price' name="maxPrice" value={formData.maxPrice} onChange={handleInputChange} />
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
                        <button id='clear-filter-button' onClick={handleClearFilter}>
                            {translate("clearFilter")}
                        </button>
                    </div>
                    <div className='apply-filter-modal'>
                        <RiSendPlane2Line size={25} />
                        <button id='apply-filter-button' onClick={handleApplyFilter}>
                            {translate("applyFilter")}
                        </button>
                    </div>

                </Modal.Footer>
            </Modal>

        </div>
    );
};

export default SearchTab;
