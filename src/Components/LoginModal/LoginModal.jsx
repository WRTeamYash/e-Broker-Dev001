
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { RiCloseCircleLine } from 'react-icons/ri';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import OTPModal from '../OTPModal/OTPModal';
import validator from 'validator'
import { toast } from 'react-hot-toast';
import { translate } from '@/utils';

const LoginModal = ({ isOpen, onClose }) => {
    const [showOtpModal, setShowOtpModal] = useState(false);
    const [phonenum, setPhonenum] = useState('');
    const [value, setValue] = useState()
        const onSignUp = (e) => {
            e.preventDefault();
            if (value === undefined) {
                toast.error("Please enter phone number!");
            } else {
                setPhonenum(value);
                onClose();
                setShowOtpModal(true);
                e.target.form.reset();
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
                    <Modal.Title>{translate("login&Regiser")}</Modal.Title>
                    <RiCloseCircleLine className='close-icon' size={40} onClick={onClose} />
                </Modal.Header>
                <Modal.Body>
                    <form>

                        <div className='modal-body-heading'>
                            <h4>{translate("enterMobile")}</h4>
                            <span>
                                {translate("sendCode")}
                            </span>
                        </div>
                        <div className="mobile-number">
                            <label htmlFor="phone">{translate("phoneNumber")}</label>
                            <PhoneInput
                                defaultCountry='IN'
                                disabledCountryCode="true"
                                value={value}
                                onChange={setValue}
                                className="custom-phone-input"
                            />
                        </div>
                        <div className='continue'>
                            <button type='submit' className='continue-button' onClick={onSignUp}>{translate("continue")}</button>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <span>
                        {translate("byclick")} <a href='/terms&condition'>
                            {translate("terms&condition")}</a> <span className='mx-1'> {translate("and")} </span> <a href='/privacy-policy'> {translate("privacyPolicy")} </a>
                    </span>
                </Modal.Footer>

            </Modal >

            {showOtpModal && <OTPModal isOpen={true} onClose={handlOTPModalClose} phonenum={phonenum} />}
        </>
    );
};

export default LoginModal;
