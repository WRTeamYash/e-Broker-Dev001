import HomePage from '@/Components/HomePage/Home'
import React from 'react'
import { Toaster } from 'react-hot-toast'

const Home = () => {
  return (
    <div>
      <Toaster toastOptions={{duration:3000}}  position="top-center"/>
      <HomePage />
    </div>
  )
}

export default Home
