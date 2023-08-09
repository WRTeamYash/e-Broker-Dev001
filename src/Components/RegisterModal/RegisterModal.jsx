"use client"
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { BiCurrentLocation } from 'react-icons/bi';
import { RiCloseCircleLine } from 'react-icons/ri';
import Location from '../Location/Location';


const RegisterModal = ({ isOpen, onClose }) => {
    const [showCurrentLoc, setShowCurrentLoc] = useState(false);

    console.log("isOpen:", isOpen);
    console.log("showCurrentLoc:", showCurrentLoc);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');

    const handleOpenLocModal = () => {
        // onClose()
        setShowCurrentLoc(true)
    }
    const handleCloseLocModal = () => {
        setShowCurrentLoc(false)
    }
    const handleSelectLocation = (location) => {
        // console.log('Selected Location:', location);
        setSelectedLocation(location);
    };
    const modalStyle = {
        display: showCurrentLoc ? 'none' : 'block',
    };
    const handleSubmitInfo =(e)=>{
        // e.preventDefault()
        onClose()
    }
    return (
        <>
            <Modal
                show={isOpen && !showCurrentLoc} // Show only if isOpen is true and showCurrentLoc is false
                onHide={onClose}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='register_modal'
                backdrop="static"
                keyboard={false}
                // style={modalStyle}

            >
                <Modal.Header>
                    <Modal.Title>Basic Deatils</Modal.Title>
                    {/* <RiCloseCircleLine className='close-icon' size={40} onClick={onClose} /> */}
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
                                    <input type="text" name="uname" placeholder='Enter Your Name Please' value={username} onChange={(e) => setUsername(e.target.value)} />
                                </div>
                                <div className='user_fields'>
                                    <span>Email</span>
                                    <input type="email" name="email" placeholder='Enter Your Email Please' value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className='user_fields'>
                                    <span>Phone Number</span>
                                    <input type="" name="pnumber" placeholder='Enter Your Number Please' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                                </div>
                                <div className='user_fields'>
                                    <span>Location</span>
                                    <div className='current_loc_div' onClick={handleOpenLocModal}>
                                        <BiCurrentLocation size={30} className='current_loc' />
                                        <span>Select Your Current Location</span>
                                    </div>
                                    {selectedLocation && (
                                        <input
                                            type='text'
                                            value={selectedLocation.formatted_address}
                                            readOnly
                                        />
                                    )}
                                </div>
                                <div className='user_fields'>
                                    <span>Address</span>
                                    <textarea rows={4} className="current_address"
                                        placeholder='Enetr address' value={address} onChange={(e) => setAddress(e.target.value)}  />
                                </div>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className='basic_submit'>
                        <button onClick={handleSubmitInfo}>
                            Submit
                        </button>
                    </div>
                </Modal.Footer>

            </Modal >
            {showCurrentLoc && <Location isOpen={true} onClose={handleCloseLocModal} onSelectLocation={handleSelectLocation}
            />}
        </>
    )
}

export default RegisterModal
