
import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { ButtonGroup } from 'react-bootstrap'
import { RiSendPlane2Line } from 'react-icons/ri'
import { GrRefresh } from 'react-icons/gr'
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { translate } from '@/utils';
import toast from 'react-hot-toast';



const FilterModal = ({ isOpen, onClose, onApplyFilter }) => {
    const [formState, setFormState] = useState({
        propType: '',
        propLocation: '',
        minPrice: '',
        maxPrice: '',
        postedSince: '',
    });
    const validateForm = () => {
        if (!formState.propType || !formState.propLocation || !formState.minPrice || !formState.maxPrice || !formState.postedSince) {
            toast.error('Please fill all fields', {
                position: 'top-center',
            });
            return false;
        }

        // Additional validation logic as needed

        return true;
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState((prevFormState) => ({
            ...prevFormState,
            [name]: value,
        }));
    };
    const handlePostedSinceChange = (e) => {
        setFormState({
            ...formState,
            postedSince: e.target.value,
        });
    };
    const handleApplyFilter = () => {
        if (validateForm()) {
            // Pass the form data to the parent component
            onApplyFilter(formState);
            handleClearFilter()
            onClose
        }
    };

    const handleClearFilter = () => {
        // Clear each form input individually
        setFormState({
            propType: '',
            propLocation: '',
            minPrice: '',
            maxPrice: '',
            postedSince: '',
        });
    };
   
    return (
        <>
            <Modal show={isOpen} onHide={onClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='filter-modal'
            >
                <Modal.Header>
                    <Modal.Title>{translate("filterProp")}</Modal.Title>
                    <RiCloseCircleLine className='close-icon' size={40} onClick={onClose} />
                </Modal.Header>
                <Modal.Body>
                    <form action="">
                        <div className='first-grup'>
                            <div className='prop-type-modal'>
                                <span>{translate("propTypes")}</span>
                                <select className="form-select" aria-label="Default select" name="propType" value={formState.propType} onChange={handleInputChange}>
                                    <option value="" defaultValue>Select Type</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className='prop-location-modal'>
                                <span>{translate("selectYourLocation")}</span>
                                <select className="form-select" aria-label="Default select" name="propLocation" value={formState.propLocation} onChange={handleInputChange}>
                                    <option defaultValue >Select Location (Optional)</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                        <div className="second-grup">
                            <div className='budget-price-modal'>
                                <span>{translate("budget")}</span>
                                <div className='budget-inputs'>
                                    <input className='price-input' placeholder='Min Price' name="minPrice" value={formState.minPrice} onChange={handleInputChange} />
                                    <input className='price-input' placeholder='Max Price' name="maxPrice" value={formState.maxPrice} onChange={handleInputChange} />
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
                                            checked={formState.postedSince === 'anytime'}
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
                                            checked={formState.postedSince === 'lastWeek'}
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
                                            checked={formState.postedSince === 'yesterday'}
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
            </Modal >
        </>
    )
}

export default FilterModal