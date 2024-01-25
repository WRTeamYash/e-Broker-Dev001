"use client"
import "../../../public/css/style.css";
import "../../../public/css/responsive.css";
import React from 'react'
import VerticleLayout from "./VerticleLayout";


const AdminLayout = (props) => {


  const { children } = props
  return (


    <VerticleLayout>
      {children}
    </VerticleLayout>
  )
}

export default AdminLayout
