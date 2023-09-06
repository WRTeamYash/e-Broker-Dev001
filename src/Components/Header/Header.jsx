"use client"
import React from 'react'
import Nav from '../Navbar/Navbar.jsx'
import { useSelector } from 'react-redux'
import { languageLoaded } from '@/store/reducer/languageSlice.js'

const Header = () => {

  // useSelector(languageLoaded)
  return (
    <div>
      <Nav />
    </div>
  )
}

export default Header
