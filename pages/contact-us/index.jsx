
import React, { useRef, useState } from 'react';
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsInstagram, BsPinterest } from 'react-icons/bs';
import { FiMail, FiPhoneCall } from 'react-icons/fi';
import { MdLocationPin } from 'react-icons/md';
import { PiFacebookLogoBold } from 'react-icons/pi';
import { Toaster, toast } from 'react-hot-toast';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
    });
    const formRef = useRef(null); // Create a ref for the form
    const validateForm = () => {
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
            // If any field is empty, show "Please fill all fields" error
            toast.error('Please fill all fields', {
                position: 'top-center',
            });
            // alert("Please fill all fields")
            return false;
        }

        if (!isValidEmail(formData.email)) {
            // If email is invalid, show "Invalid email format" error
            toast.error('Invalid email format', {
                position: 'top-center',
            });
            // alert("Invalid email format")
            return false;
        }

        return true;
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleContactUsSubmit = (e) => {
        e.preventDefault();


        if (validateForm()) {
            // Submit the form data or perform other actions
            toast.success("We are respond you very soon, Thanks for Contact")
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                subject: '',
                message: '',
            });
        }
    };

    return (
        <>
            <Breadcrumb title="Contact Us" />
            <section id='contact-us'>
                <div className='container'>
                    <div className="row" id='main-rows-cols'>
                        <div className='col-12 col-md-6 col-lg-8' id='left-side-contact-form'>
                            <div className="card contactus-card">
                                <div className="card-header">
                                    <h3>Have questions?</h3>
                                    <span>get in touch!</span>
                                </div>
                                <div className="card-body">
                                    <form ref={formRef} onSubmit={handleContactUsSubmit}>
                                        <div className="row">
                                            <div className="col-sm-12 col-md-6">
                                                {/* First Name */}
                                                <div className="form-inputs">
                                                    <label htmlFor="firstName">First Name</label>
                                                    <input
                                                        type="text"
                                                        className="form-custom-input"
                                                        name="firstName"
                                                        placeholder="Enter your first name"
                                                        value={formData.firstName}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-6">
                                                {/* Last Name */}
                                                <div className="form-inputs">
                                                    <label htmlFor="lastName">Last Name</label>
                                                    <input
                                                        type="text"
                                                        className="form-custom-input"
                                                        name="lastName"
                                                        placeholder="Enter your last name"
                                                        value={formData.lastName}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-6">
                                                {/* Email */}
                                                <div className="form-inputs">
                                                    <label htmlFor="email">Email</label>
                                                    <input
                                                        type="text"
                                                        className="form-custom-input"
                                                        name="email"
                                                        placeholder="Enter your email"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-6">
                                                {/* Subject */}
                                                <div className="form-inputs">
                                                    <label htmlFor="subject">Subject</label>
                                                    <input
                                                        type="text"
                                                        className="form-custom-input"
                                                        name="subject"
                                                        placeholder="Enter subject"
                                                        value={formData.subject}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                {/* Message */}
                                                <div className="form-inputs">
                                                    <label htmlFor="message">Message</label>
                                                    <textarea
                                                        rows={8}
                                                        className="form-custom-input-textarea"
                                                        name="message"
                                                        placeholder="Enter message"
                                                        value={formData.message}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='contact-submit'>
                                            <button className='contact-submit-button' type='submit'>
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-4' id='right-side-contact-info'>
                            <div className="card contact-info">
                                <div className="card-header">
                                    <h3>
                                        Contact Info
                                    </h3>
                                </div>
                                <div className="card-body">
                                    <div className='row'>
                                        <div className="col-12">
                                            <div className='contact-info-deatils'>
                                                <div className='contact-icons'>
                                                    <MdLocationPin size={30} className='contact-solo-icons' />
                                                </div>
                                                <div className='contact-deatils'>
                                                    <p>Office Address</p>
                                                    <span>127 Double Street, Dublin, United Kingdom.</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className='contact-info-deatils'>
                                                <div className='contact-icons'>
                                                    <FiPhoneCall size={30} className='contact-solo-icons' />
                                                </div>
                                                <div className='contact-deatils'>
                                                    <p>Telephone</p>
                                                    <span>P: (+123) 555 8888</span>
                                                    <span>P: (+123) 555 8888</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className='contact-info-deatils'>
                                                <div className='contact-icons'>
                                                    <FiMail size={30}
                                                        className='contact-solo-icons' />
                                                </div>
                                                <div className='contact-deatils'>
                                                    <p>Email Us</p>
                                                    <span>support@eBroker.com</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12' id='contactus-socialPlatforms'>
                                            <h3>Folow Us</h3>
                                            <div className="row">
                                                <div className="col-sm-12 col-md-6 col-lg-3" id='social-platforms'>
                                                    <button className="social-platforms-icons"><PiFacebookLogoBold size={30} /></button>
                                                </div>
                                                <div className="col-sm-12 col-md-6 col-lg-3" id='social-platforms'>
                                                    <button className="social-platforms-icons"><BsInstagram size={30} /></button>
                                                </div>
                                                <div className="col-sm-12 col-md-6 col-lg-3" id='social-platforms'>
                                                    <button className="social-platforms-icons"><BsPinterest size={30} /></button>
                                                </div>
                                                <div className="col-sm-12 col-md-6 col-lg-3" id='social-platforms'>
                                                    <button className="social-platforms-icons"><AiFillLinkedin size={30} /></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='card conatctus-location-map'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.2756631211932!2d69.64143297622796!3d23.233053779026758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3950e1e328911c2f%3A0xd3fbdee849719bee!2sShree%20Softech!5e0!3m2!1sen!2sin!4v1689831653200!5m2!1sen!2sin"
                            style={{
                                width: "100%", height: "400px", style: "border:0", allowFullScreen: "true", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade", borderRadius: "8px"
                            }}
                        >
                        </iframe>
                    </div>
                </div>
                <div><Toaster /></div>
            </section >

        </>
    )
}

export default ContactUs