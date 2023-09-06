"use client"
import React from 'react'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { useSelector } from 'react-redux';
import { languageLoaded } from '@/store/reducer/languageSlice';


const Layout = ({ children }) => {

    // useSelector(languageLoaded)
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
