"use client"
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb'
import React, { useState } from 'react'
import agentimg from "@/assets/Images/Superman.jpeg"
import { Card } from 'react-bootstrap'
import { FiArrowRightCircle } from 'react-icons/fi'
import Loader from '@/Components/Loader/Loader'
import AgentCard from '@/Components/Cards/AgentCard'
import AgentCardSkeleton from '@/Components/Skeleton/AgentCardSkeleton'



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

                            Array.from({ length: agentsData ? agentsData.length : 12 }).map((_, index) => (
                                <div className='col-sm-12 col-md-6 col-lg-3 loading_data' key={index}>
                                    <AgentCardSkeleton />
                                </div>
                            ))

                        ) :
                            agentsData?.map((ele) => (
                                <div className='col-sm-12 col-md-6 col-lg-3' key={ele.id}>
                                    <AgentCard ele={ele} />
                                </div>
                            ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default index