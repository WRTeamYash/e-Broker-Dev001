"use client"
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb'
import React, { useState } from 'react'
import agentimg from "@/assets/Images/Superman.jpeg"
import { Card } from 'react-bootstrap'
import { FiArrowRightCircle } from 'react-icons/fi'
import Loader from '@/Components/Loader/Loader'



const index = () => {
    const [isLoading, setIsLoading] = useState(false)

    let agentsData = [
        {
            id: 1,
            agentimg: agentimg.src,
            agentName: "Divy Jani",
            agentEmail: " DivyJani95@hotmail.com",
            agentProp: "16 Properties"
        },
        {
            id: 2,
            agentimg: agentimg.src,
            agentName: "Divy Jani",
            agentEmail: " DivyJani95@hotmail.com",
            agentProp: "16 Properties"
        },
        {
            id: 3,
            agentimg: agentimg.src,
            agentName: "Divy Jani",
            agentEmail: " DivyJani95@hotmail.com",
            agentProp: "16 Properties"
        },
        {
            id: 4,
            agentimg: agentimg.src,
            agentName: "Divy Jani",
            agentEmail: " DivyJani95@hotmail.com",
            agentProp: "16 Properties"
        },
        {
            id: 5,
            agentimg: agentimg.src,
            agentName: "Divy Jani",
            agentEmail: " DivyJani95@hotmail.com",
            agentProp: "16 Properties"
        },
        {
            id: 6,
            agentimg: agentimg.src,
            agentName: "Divy Jani",
            agentEmail: " DivyJani95@hotmail.com",
            agentProp: "16 Properties"
        },
        {
            id: 7,
            agentimg: agentimg.src,
            agentName: "Divy Jani",
            agentEmail: " DivyJani95@hotmail.com",
            agentProp: "16 Properties"
        },
        {
            id: 8,
            agentimg: agentimg.src,
            agentName: "Divy Jani",
            agentEmail: " DivyJani95@hotmail.com",
            agentProp: "16 Properties"
        }
    ]
    return (
        <>
            <Breadcrumb title="All Agents" />
            <section id='all_agents_section'>
                <div className='container'>
                    <div id='feature_cards' className='row'>
                        {isLoading ? (
                            // Show skeleton loading when data is being fetched
                            // <div className="col-12 loading_data">
                            //     <Skeleton height={20} count={22} />
                            // </div>
                            <Loader />
                        ) :
                            agentsData?.map((ele) => (
                                <div className='col-sm-12 col-md-6 col-lg-3' key={ele.id}>
                                         <Card id='main_agent_card'>
                                                <Card.Body>
                                                    <div className='agent_card_content'>
                                                        <div>

                                                            <img src={ele.agentimg} className='agent-profile' width={100} height={100} />
                                                        </div>
                                                        <div className='mt-2'>
                                                            <span className='agent-name'>
                                                                {ele.agentName}
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className='agent-main'>
                                                                {ele.agentEmail}
                                                            </span>
                                                        </div>
                                                        <div className='view-all-agent mt-5'>
                                                            <span>
                                                                {ele.agentProp}
                                                            </span>
                                                            <FiArrowRightCircle size={25} className='view-agent-deatils' />
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                </div>
                            ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default index