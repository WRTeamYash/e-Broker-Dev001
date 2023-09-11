"use client"
import React, { useState, useRef, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { RiCloseCircleLine } from 'react-icons/ri';
//firebase
import { authentication } from '../../utils/Firebase';
import { toast } from 'react-hot-toast';

import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

import { signupLoaded } from '../../store/reducer/authSlice'; // Update the import path as needed

import { useRouter } from 'next/router';
import { GetFeturedListingsApi } from '@/store/actions/campaign';
import { translate } from '@/utils';

const OTPModal = ({ isOpen, onClose, phonenum }) => {

    const [otp, setOTP] = useState('');
    const inputRefs = useRef([]);
    const [showTimer, setShowTimer] = useState(false);
    const [resendTimer, setResendTimer] = useState(60);
    const [showLoader, setShowLoader] = useState(false);
    const navigate = useRouter()
    const generateRecaptcha = () => {
        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier(authentication, 'recaptcha-container', {
                'size': 'invisible'

            });
        }

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

        //OTP Generation
        // generateRecaptcha();
        let appVerifier = window.recaptchaVerifier;

        const formatPh = phonenum;

        signInWithPhoneNumber(authentication, formatPh, appVerifier)
            .then(confirmationResult => {
                window.confirmationResult = confirmationResult;
                toast.success(translate("otpSentsuccess"))
            }).catch((error) => {

                console.log(error)
            })
    }
    useEffect(() => {

        if (phonenum !== null) {
            generateOTP(phonenum)
        }
        // console.log(phonenum)
    }, [phonenum])

    const handleConfirm = (e) => {
        e.preventDefault()
        setShowLoader(true)
        let confirmationResult = window.confirmationResult;
        confirmationResult.confirm(otp).then(async (result) => {
            // User verified successfully.

            signupLoaded("", "", result.user.phoneNumber.replace("+", ""), "1", "", result.user.uid, "", "",
                (res) => {
                    // console.log(res)
                    let signupData = res.data
                    // Show a success toast notification
                    setShowLoader(false);
                    // toast.success("please fill your personal deatils")
                    // Check if any of the required fields is empty
                    if (!res.error) {

                        if (
                            signupData.name === "" ||
                            signupData.email === "" ||
                            signupData.address === "" ||
                            signupData.logintype === ""
                        ) {
                            // If any field is empty, execute this block
                            // console.log("open register");  // Log a message
                            navigate.push("/user_register");  // Redirect to "/user_register"
                            onClose();  // Close the modal
                        } else {
                            // If all fields have values, execute this block
                            toast.success(res.message);  // Show a success toast
                            onClose();  // Close the modal
                        }
                    }

                },
                (err) => {
                    setShowLoader(false);
                    console.log(err)
                    toast.error(err)
                })


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
                backdrop="static"
            >
                <Modal.Header>
                    <Modal.Title>{translate("verification")}</Modal.Title>
                    <RiCloseCircleLine className='close-icon' size={40} onClick={onClose} />
                </Modal.Header>
                <Modal.Body>
                    <form>

                        <div className='modal-body-heading'>
                            <h4>{translate("otpVerification")}</h4>
                            <span>
                                {translate("enterOtp")} {phonenum}
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
                                    <span className='resend-text'> {translate("resendCodeIn")}

                                    </span>
                                    <span className='resend-time'> {resendTimer} {translate("seconds")}
                                    </span>
                                </div>
                            ) : (
                                <span id='re-text' onClick={handleResendOTP}>{translate("resendOtp")}</span>
                            )}
                        </div>
                        <div className='continue'>
                            <button type='submit' className='continue-button' onClick={handleConfirm}>
                                {showLoader ? (
                                    <div className="loader-container-otp">
                                        <div className="loader-otp"></div>
                                    </div>
                                ) : (
                                    // <button type='submit' className='continue-button' onClick={handleConfirm}>
                                    <span>
                                        {translate("confirm")}
                                    </span>
                                    // </button>
                                )}
                            </button>
                        </div>

                    </form>
                </Modal.Body>

            </Modal >

            <div id="recaptcha-container"></div>

        </>
    );
};

export default OTPModal;
