import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { BiCurrentLocation } from 'react-icons/bi';
import { RiCloseCircleLine } from 'react-icons/ri';


const RegisterModal = ({ isOpen, onClose }) => {
    return (
        <>

            <Modal show={isOpen} onHide={onClose}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='register_modal'
                backdrop="static"
                keyboard={false}

            >
                <Modal.Header>
                    <Modal.Title>Basic Deatils</Modal.Title>
                    <RiCloseCircleLine className='close-icon' size={40} onClick={onClose} />
                </Modal.Header>
                <Modal.Body>
                    <div className='modal-body-title'>
                        <span>

                        </span>
                    </div>
                    <div className='register_form'>
                        <form action="">
                            <div className='form_all_fields'>
                                <div className='user_fields'>
                                    <span>Username</span>
                                    <input type="text" name="uname" placeholder='Enter Your Name Please' />
                                </div>
                                <div className='user_fields'>
                                    <span>Email</span>
                                    <input type="email" name="email" placeholder='Enter Your Email Please' />
                                </div>
                                <div className='user_fields'>
                                    <span>Phone Number</span>
                                    <input type="" name="pnumber" placeholder='Enter Your Number Please' />
                                </div>
                                <div className='user_fields'>
                                    <span>Location</span>
                                    <div className='current_loc_div'>
                                        <BiCurrentLocation size={30} className='current_loc' />
                                        <span>Select Your Current Location</span>
                                    </div>
                                </div>
                                <div className='user_fields'>
                                    <span>Address</span>
                                    <textarea rows={4} className="current_address"
                                        placeholder='Enetr address' />
                                </div>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className='basic_submit'>
                        <button>
                            Submit
                        </button>
                    </div>
                </Modal.Footer>

            </Modal >
        </>
    )
}

export default RegisterModal
