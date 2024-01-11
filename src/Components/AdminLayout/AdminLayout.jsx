"use client"
import "../../../public/css/style.css";
import "../../../public/css/responsive.css";
import React from 'react'
import Layout from './Layout'
const AdminLayout = (props) => {


  const { children } = props
  return (


    <Layout>
      {children}
    </Layout>
  )
}

export default AdminLayout
