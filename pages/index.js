import HomePage from '@/Components/HomePage/Home'
import {  languageData } from '@/store/reducer/languageSlice'
import React from 'react'
import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { useSelector } from 'react-redux'

const Home = () => {

const lang = useSelector(languageData)
console.log("languageData",lang)
  // useSelector(languageData)
  useEffect(()=>{
    console.log("render")
  },[lang]);

  return (
    <div>
      <Toaster toastOptions={{duration:3000}}  position="top-center"/>
      <HomePage />
    </div>
  )
}

export default Home
