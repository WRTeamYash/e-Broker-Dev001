'use client'
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb'
import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import { BsInstagram, BsPinterest } from 'react-icons/bs'
import { FiMail, FiPhoneCall } from 'react-icons/fi'

import { MdLocationPin } from 'react-icons/md'
import { PiFacebookLogoBold } from 'react-icons/pi'


const ContactUs = () => {
    return (
        <>
            <Breadcrumb title="Contact Us" />
            <section id='contact-us'>
                <div className='main-contactus'>
                    <div className="row" id='main-rows-cols'>
                        <div className='col-12 col-md-6 col-lg-8'>
                            <div className="card contactus-card">
                                <div className="card-header">
                                    <h3>Have questions?</h3>
                                    <span>get in touch!</span>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="row">
                                            <div className="col-12 col-md-12 col-lg-6">
                                                <div className='form-inputs'>
                                                    <label htmlFor="first_name">First Name</label>
                                                    <input type="text" className="form-custom-input"
                                                        placeholder='Enetr your first name' />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-12 col-lg-6">
                                                <div className='form-inputs'>
                                                    <label htmlFor="last_name">Last Name</label>
                                                    <input type="text" className="form-custom-input"
                                                        placeholder='Enetr your last name' />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-12 col-lg-6">
                                                <div className='form-inputs'>
                                                    <label htmlFor="email">Email </label>
                                                    <input type="text" className="form-custom-input"
                                                        placeholder='Enetr your email' />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-12 col-lg-6">
                                                <div className='form-inputs'>
                                                    <label htmlFor="subject">Subject </label>
                                                    <input type="text" className="form-custom-input"
                                                        placeholder='Enetr subject' />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-12 col-lg-12">
                                                <div className='form-inputs'>
                                                    <label htmlFor="subject">Subject </label>
                                                    <textarea rows={8} className="form-custom-input-textarea"
                                                        placeholder='Enetr subject' />
                                                </div>
                                            </div>
                                            <div className='contact-submit'>
                                                <button className='contact-submit-button'>
                                                    Submit
                                                </button>
                                            </div>
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
                                                    <FiPhoneCall size={30} className='contact-solo-icons'  />
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
                                        <div className='col-12'>
                                            <h3>Folow Us</h3>
                                            <div className=' online-platforms'>
                                                <button className="social-platforms-icons"><PiFacebookLogoBold size={30} /></button>
                                                <button className="social-platforms-icons"><BsInstagram size={30} /></button>
                                                <button className="social-platforms-icons"><BsPinterest size={30} /></button>
                                                <button className="social-platforms-icons"><AiFillLinkedin size={30} /></button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className='conatctus-location-map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.2756631211932!2d69.64143297622796!3d23.233053779026758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3950e1e328911c2f%3A0xd3fbdee849719bee!2sShree%20Softech!5e0!3m2!1sen!2sin!4v1689831653200!5m2!1sen!2sin"
                    style={{
                        width: "100%", height: "400px", style: "border:0", allowFullScreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade",
                        borderRadius: "12px"

                    }}
                >
                </iframe>
            </div>
        </>
    )
}

export default ContactUs