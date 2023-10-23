import HomePage from '@/Components/HomePage/Home'
import { languageData } from '@/store/reducer/languageSlice'
import { loadCategories, loadSlider } from '@/store/reducer/momentSlice'
import { settingsLoaded } from '@/store/reducer/settingsSlice'
import React from 'react'
import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { useSelector } from 'react-redux'

const Home = () => {

  const lang = useSelector(languageData)

  useEffect(() => {
  }, [lang]);


  useEffect(()=>{
    loadSlider()
    loadCategories()

  },[])

  return (
    <>
        <Toaster toastOptions={{ duration: 3000 }} position="top-center" />
        <HomePage />
    </>
  )
}

export default Home
