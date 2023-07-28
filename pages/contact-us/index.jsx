import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb'
import React from 'react'

const ContactUs = () => {
    return (
        <>
            <Breadcrumb title="Contact Us" />
            <section id='contact-us'>
                <div className='main-contactus'>
                    <div className="row">
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
                                                    placeholder='Enetr your first name'/>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-12 col-lg-6">
                                                <div className='form-inputs'>
                                                    <label htmlFor="last_name">Last Name</label>
                                                    <input type="text" className="form-custom-input"
                                                    placeholder='Enetr your last name'/>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-12 col-lg-6">
                                                <div className='form-inputs'>
                                                    <label htmlFor="email">Email </label>
                                                    <input type="text" className="form-custom-input"
                                                    placeholder='Enetr your email'/>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-12 col-lg-6">
                                                <div className='form-inputs'>
                                                    <label htmlFor="subject">Subject </label>
                                                    <input type="text" className="form-custom-input"
                                                    placeholder='Enetr subject'/>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-12 col-lg-12">
                                            <div className='form-inputs'>
                                                    <label htmlFor="subject">Subject </label>
                                                    <textarea rows={8} className="form-custom-input"
                                                    placeholder='Enetr subject'/>
                                                </div>  
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-4'>
                            <div className="card">

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactUs