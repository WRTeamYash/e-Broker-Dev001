
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb'
import React, { useEffect, useState } from 'react'
import agentimg from "@/assets/Images/Superman.jpeg"
import { Card } from 'react-bootstrap'
import { FiArrowRightCircle } from 'react-icons/fi'
import Loader from '@/Components/Loader/Loader'
import AgentCard from '@/Components/Cards/AgentCard'
import AgentCardSkeleton from '@/Components/Skeleton/AgentCardSkeleton'
import { translate } from '@/utils'
import { useSelector } from 'react-redux'
import { languageData } from '@/store/reducer/languageSlice'
import Layout from '@/Components/Layout/Layout'



const index = () => {
    const [isLoading, setIsLoading] = useState(false)
    const lang = useSelector(languageData)
    // console.log("languageData",lang)
      // useSelector(languageData)  
      useEffect(()=>{
        // console.log("render")
      },[lang]);
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
        <Layout>
            <Breadcrumb title={translate("allAgents")} />
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
        </Layout>
    )
}

export default index