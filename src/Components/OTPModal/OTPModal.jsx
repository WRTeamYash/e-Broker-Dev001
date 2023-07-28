import React, { useState, useRef, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { RiCloseCircleLine } from 'react-icons/ri';
import OtpInput from 'react-otp-input';
import { parsePhoneNumber } from 'react-phone-number-input';
//firebase
import { authentication } from '../../utils/FirebaseConfig';
import { toast } from 'react-hot-toast';

import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { axios } from 'axios';



const OTPModal = ({ isOpen, onClose, phonenum }) => {
    const [otp, setOTP] = useState('');
    const inputRefs = useRef([]);
    const [showTimer, setShowTimer] = useState(false);
    const [resendTimer, setResendTimer] = useState(60);

    const generateRecaptcha = () => {
        if (!window.recaptchaVerifier) {
            console.log('recaptcha');
            window.recaptchaVerifier = new RecaptchaVerifier(authentication, 'recaptcha-container', {
                'size': 'invisible'

            });
        }
        // console.log(window.recaptchaVerifier)

    }
    useEffect(() => {
        generateRecaptcha();

        return () => {
            if (window.recaptchaVerifier) {
                window.recaptchaVerifier.clear();
            }
        };
    }, [])

    const generateOTP = (phonenum) => {
        console.log(phonenum)
        //OTP Generation
        // generateRecaptcha();
        let appVerifier = window.recaptchaVerifier;
        console.log(appVerifier);
        const formatPh = phonenum;

        signInWithPhoneNumber(authentication, formatPh, appVerifier)
            .then(confirmationResult => {
                window.confirmationResult = confirmationResult;
                toast.success("OTP SENT SUCCESFULLY")
            }).catch((error) => {

                console.log(error)
            })
    }
    useEffect(() => {

        if (phonenum !== null) {
            generateOTP(phonenum)
        }

    }, [phonenum])


    const handleConfirm = (e) => {
        e.preventDefault()
        let confirmationResult = window.confirmationResult;
        confirmationResult.confirm(otp).then(async (result) => {
            // User verified successfully.

            // Show a success toast notification
            console.log(result)
            console.log(result.user.phoneNumber)
            console.log(result.user.uid)

            const axios = require('axios');
            const FormData = require('form-data');
            let data = new FormData();
            data.append('mobile', result.user.phoneNumber);
            data.append('type', '1');
            data.append('firebase_id', result.user.uid);
            data.append('logintype', "phone");

            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'https://testbrokerhub.wrteam.in/api/user_signup',
                //   headers: { 
                //     ...data .getHeaders()
                //   },
                data: data
            };

            axios.request(config)
                .then((response) => {
                    console.log(JSON.stringify(response.data));
                    toast.success('Login confirmed successfully!');
                    onClose()

                })
                .catch((error) => {
                    console.log(error);
                    toast.error(error);
                });

        }).catch((error) => {
            // Show an error toast notification
            console.log(error)
        });

    }

    const handleChange = (event, index) => {
        const value = event.target.value;
        if (!isNaN(value) && value !== '') {
            setOTP((prevOTP) => {
                const newOTP = [...prevOTP];
                newOTP[index] = value;
                return newOTP.join('');
            });

            // Move focus to the next input
            if (index < 5) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleKeyDown = (event, index) => {
        if (event.key === 'Backspace' && index > 0) {
            setOTP((prevOTP) => {
                const newOTP = [...prevOTP];
                newOTP[index - 1] = '';
                return newOTP.join('');
            });

            // Move focus to the previous input
            inputRefs.current[index - 1].focus();
        } else if (event.key === 'Backspace' && index === 0) {
            // Clear the first input if backspace is pressed on the first input
            setOTP((prevOTP) => {
                const newOTP = [...prevOTP];
                newOTP[0] = '';
                return newOTP.join('');
            });
        }
    };

    useEffect(() => {
        let intervalId;

        if (resendTimer > 0) {
            intervalId = setInterval(() => {
                setResendTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [resendTimer]);
    const handleResendOTP = () => {
        // Reset the resendTimer to 60 seconds
        setResendTimer(60);
        generateOTP(phonenum)
        toast.success("OTP Resend Successfully")
    };

    return (
        <>

            <Modal show={isOpen} onHide={onClose}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='otp-modal'
            >
                <Modal.Header>
                    <Modal.Title>Login</Modal.Title>
                    <RiCloseCircleLine className='close-icon' size={40} onClick={onClose} />
                </Modal.Header>
                <Modal.Body>
                    <div className='modal-body-heading'>
                        <h4>OTP Verification Code</h4>
                        <span>
                            Enter OTP code sent to {phonenum}
                        </span>
                    </div>
                    <div className='userInput'>
                        {Array.from({ length: 6 }).map((_, index) => (
                            <input
                                key={index}
                                className='otp-field'
                                type='text'
                                maxLength={1}
                                value={otp[index] || ''}
                                onChange={(e) => handleChange(e, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                ref={(inputRef) => (inputRefs.current[index] = inputRef)}
                            />
                        ))}
                    </div>



                    <div className='resend-code'>
                        {resendTimer > 0 ? (
                            <div>
                                <span className='resend-text'> Resend Code in

                                </span>
                                <span className='resend-time'> {resendTimer} seconds
                                </span>
                            </div>
                        ) : (
                            <span id='re-text' onClick={handleResendOTP}>Resend OTP</span>
                        )}
                    </div>
                    {/* ) : (
                            <div>
                                <span onClick={() => setShowTimer(true)}>Resend OTP</span>
                            </div>
                        )} */}

                    <div className='continue'>
                        <button className='continue-button' onClick={handleConfirm}>
                            Confirm
                        </button>
                    </div>

                </Modal.Body>

            </Modal >


            <div id="recaptcha-container"></div>
        </>
    );
};

export default OTPModal;
