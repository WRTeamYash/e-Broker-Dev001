import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { RiCloseCircleLine } from 'react-icons/ri';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const LoginModal = ({ isOpen, onClose }) => {
    return (
        <Modal show={isOpen} onHide={onClose}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
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
                        country={'in'}
                        enableAreaCodes={true}
                        // onlyCountries={['in']}
                        inputClass="form-control custom-phone-input"
                    />
                </div>
                <div className='continue'>
                    <button className='continue-button'>Continue</button>
                </div>
            </Modal.Body>
            <Modal.Footer>
                
            </Modal.Footer>

        </Modal >
    );
};

export default LoginModal;
