"use client"
import React from 'react'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { useSelector } from 'react-redux';
import { languageData } from '@/store/reducer/languageSlice';
import HomePage from '../HomePage/Home';


const Layout = ({ children }) => {

    useSelector(languageData)
    return (
        <div>
            <Header />
           {children}
            <Footer />
        </div>
    )
}

export default Layout
