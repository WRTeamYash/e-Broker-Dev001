"use client"
import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { ButtonGroup } from 'react-bootstrap'
import { RiSendPlane2Line } from 'react-icons/ri'
import { GrRefresh } from 'react-icons/gr'
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { translate } from '@/utils';
const FilterModal = ({ isOpen, onClose }) => {
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
                        {/* <div className='filter-button-box-modal'>
                            <ButtonGroup className='modal-btn-grup'>
                                <ul className="nav nav-tabs" id="props-tabs-modal">
                                    <li className="">
                                        <a className="nav-link active" aria-current="page" id="prop-sellbutton" onClick={(e) => {
                                            e.target.classList.add('active')
                                            document.getElementById('prop-rentbutton').classList.remove('active')
                                        }}>For Sell</a>
                                    </li>
                                    <li className="">
                                        <a className="nav-link" onClick={(e) => {
                                            e.target.classList.add('active')
                                            document.getElementById('prop-sellbutton').classList.remove('active')

                                        }} aria-current="page" id="prop-rentbutton">For Rent</a>
                                    </li>
                                </ul>
                            </ButtonGroup>
                        </div> */}
                        <div className='first-grup'>
                            <div className='prop-type-modal'>
                            <span>{translate("propTypes")}</span>
                                <select className="form-select" aria-label="Default select">
                                    <option value="" defaultValue>Select Type</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className='prop-location-modal'>
                            <span>{translate("selectYourLocation")}</span>
                                <select className="form-select" aria-label="Default select">
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
                                    <input className='price-input' placeholder='Min Price' />
                                    <input className='price-input' placeholder='Max Price' />
                                </div>
                            </div>
                        </div>
                        <div className="third-grup">
                            <div className='posted-since'>
                            <span>{translate("postedSince")}</span>
                                <div className='posted-duration-modal'>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                                        <span className="form-check-label" htmlFor="flexRadioDefault1">
                                        {translate("anytime")}
                                        </span>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                        <span className="form-check-label" htmlFor="flexRadioDefault2">
                                        {translate("lastWeek")}
                                        </span>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                        <span className="form-check-label" htmlFor="flexRadioDefault3">
                                        {translate("yesteraday")}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </form>
                </Modal.Body>
                <Modal.Footer className='filter-footer'>

                    <div className='clear-filter-modal'>
                        <GrRefresh size={25} />
                        <button id='clear-filter-button'>
                        {translate("clearFilter")}
                        </button>
                    </div>
                    <div className='apply-filter-modal'>
                        <RiSendPlane2Line size={25} />
                        <button id='apply-filter-button'>
                        {translate("applyFilter")}
                        </button>
                    </div>

                </Modal.Footer>
            </Modal >
        </>
    )
}

export default FilterModal