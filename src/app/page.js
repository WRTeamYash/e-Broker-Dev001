"use client"

import React, { Fragment } from 'react'
import Home from './Components/HomePage/Home'
import { Toaster } from 'react-hot-toast'

const page = () => {

  return (
    <Fragment>
      <Toaster toastOptions={{ duration: 3000 }} />
      <Home />
    </Fragment>
  )
}

export default page
