"use client"
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { RiCloseCircleLine } from 'react-icons/ri';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import OTPModal from '../OTPModal/OTPModal';
import validator from 'validator'
import {  toast } from 'react-hot-toast';

const LoginModal = ({ isOpen, onClose }) => {
    const [showOtpModal, setShowOtpModal] = useState(false);
    const [phonenum, setPhonenum] = useState('');
    const [value, setValue] = useState()

    const onSignUp = () => {
        if (value === undefined) {
            toast.error("Please enter phone number!")
        }
        else if (validator.isMobilePhone(value)) {
            setPhonenum(value)
            onClose()
            setShowOtpModal(true)
        }
        else {
            toast.error("Enter a valid phone number")
        }


    }
    const handlOTPModalClose = () => {
        setShowOtpModal(false);
    };
    return (
        <>

            
            <Modal show={isOpen} onHide={onClose}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='login-modal'
            >
                <Modal.Header>
                    <Modal.Title>Login</Modal.Title>
                    <RiCloseCircleLine className='close-icon' size={40} onClick={onClose} />
                </Modal.Header>
                <Modal.Body>
                    <div className='modal-body-heading'>
                        <h4>Enter Your Mobile Number</h4>
                        <span>
                            We will send you a confirmation code
                        </span>
                    </div>
                    <div className="mobile-number">
                        <label htmlFor="phone">Phone Number</label>
                        <PhoneInput
                            defaultCountry='IN'
                            disabledCountryCode="true"
                            value={value}
                            onChange={setValue}
                            className="custom-phone-input"
                        />
                    </div>
                    <div className='continue'>
                        <button className='continue-button' onClick={onSignUp}>Continue</button>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <span>
                        By clicking continue you agree to our <a href=''>
                            Terms & Conditions </a> <span className='mx-1'> and </span> <a href=''> Privacy Policy </a>
                    </span>
                </Modal.Footer>

            </Modal >

            {showOtpModal && <OTPModal isOpen={true} onClose={handlOTPModalClose} phonenum={phonenum} />}
        </>
    );
};

export default LoginModal;
