import React from 'react'
import VerticleLayout from "@/Components/AdminLayout/VerticleLayout";



const index = () => {
    return (
        <VerticleLayout>
            <div className="container">
                <div className="dashboard_titles">
                    <h3>My Subscription

                    </h3>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="card" id='subscription_card'>
                            <div className="card-header" id='subscription_card_header'>
                                <span className='subscription_current_package'>Current Package</span>
                                <span className='subscription_current_package_type'>Ultimate</span>
                            </div>
                            <div className="card-body">
                                <div id="subscription_validity">
                                    <div className="pacakge_validity">
                                        <span className='pacakge_details_title'>Package Validity</span>
                                        <span className='pacakge_details_value'>400 Days</span>
                                    </div>
                                    <div className="pacakge_price">
                                        <span className='pacakge_details_title'>Price</span>
                                        <span className='pacakge_details_value'>$500.00</span>
                                    </div>
                                </div>
                                <hr />
                                <div id="subscription_details">

                                </div>
                                <div id="subscription_duration">

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </VerticleLayout>
    )
}

export default index
