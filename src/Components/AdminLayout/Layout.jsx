import React, { useEffect, useState } from 'react'
import VerticleLayout from './VerticleLayout.jsx';
import { settingsLoaded } from '@/store/reducer/settingsSlice.js';
import { useSelector } from 'react-redux';
import { languageData } from '@/store/reducer/languageSlice.js';

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
        <>
            <VerticleLayout>
                {children}
            </VerticleLayout>
        </>
    )
}

export default Layout
