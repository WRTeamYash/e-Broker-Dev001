import HomePage from '@/Components/HomePage/Home'
import PushNotificationLayout from '@/Components/PushNotificationLayout/PushNotificationLayout'
import { languageData } from '@/store/reducer/languageSlice'
import { loadSlider } from '@/store/reducer/momentSlice'
import React from 'react'
import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { useSelector } from 'react-redux'

const Home = () => {

  const lang = useSelector(languageData)
  // console.log("languageData",lang)
  // useSelector(languageData)  
  useEffect(() => {
    // console.log("render")
  }, [lang]);

  useEffect(()=>{
    loadSlider()
  },[])

  return (
    <>
      {/* <PushNotificationLayout> */}
        <Toaster toastOptions={{ duration: 3000 }} position="top-center" />
        <HomePage />
      {/* </PushNotificationLayout> */}
    </>
  )
}

export default Home
