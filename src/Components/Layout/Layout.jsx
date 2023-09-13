
import React, { useState } from 'react'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { useSelector } from 'react-redux';
import { languageData } from '@/store/reducer/languageSlice';
import HomePage from '../HomePage/Home';
import { useEffect } from 'react';
import Loader from '../Loader/Loader';
import { settingsLoaded } from '@/store/reducer/settingsSlice';


const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    settingsLoaded(null, null, (res) => {
      setTimeout(() => {
        // console.log(res)
        setIsLoading(false)

      }, 1000)
    },
      (err) => {
        console.log(err)
      })

  }, []);
  const lang = useSelector(languageData)
  useEffect(() => {

  }, [lang]);
  return (
    <div>
      {
        isLoading ?
          (<Loader />
          ) :
          (
            <>
              <Header />
              {children}
              <Footer />
            </>
          )}
    </div>
  )
}

export default Layout
