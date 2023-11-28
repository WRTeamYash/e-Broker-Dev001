"use client"
import React from 'react'
import ChatApp from '../../src/Components/Messages/ChatApp'
import Breadcrumb from "@/Components/Breadcrumb/Breadcrumb";
import Layout from "@/Components/Layout/Layout";


const index = () => {
  return (
    <Layout>
     <Breadcrumb title="Messages" />
      <ChatApp />
    </Layout>
  )
}

export default index
