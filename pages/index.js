import HomePage from '@/Components/HomePage/Home'
import {  languageLoaded } from '@/store/reducer/languageSlice'
import React from 'react'
import { Toaster } from 'react-hot-toast'
import { useSelector } from 'react-redux'

const Home = () => {

  // useSelector(languageLoaded)
  return (
    <div>
      <Toaster toastOptions={{duration:3000}}  position="top-center"/>
      <HomePage />
    </div>
  )
}

export default Home
