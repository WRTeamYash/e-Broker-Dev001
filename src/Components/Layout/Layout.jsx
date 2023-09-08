"use client"
import React from 'react'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { useSelector } from 'react-redux';
import { languageData } from '@/store/reducer/languageSlice';
import HomePage from '../HomePage/Home';
import { useEffect } from 'react';


const Layout = ({ children }) => {

    const lang = useSelector(languageData)
    // console.log("languageData",lang)
      // useSelector(languageData)  
      useEffect(()=>{
        // console.log("render")
      },[lang]);
    return (
        <div>
            <Header />
           {children}
            <Footer />
        </div>
    )
}

export default Layout
