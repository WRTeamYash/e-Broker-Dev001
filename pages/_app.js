"use client"
import { Provider } from 'react-redux'
import { store, persistor } from '../src/store/store'
import { PersistGate } from 'redux-persist/integration/react'
import React, { useState } from 'react'
import { Children, Fragment, useEffect } from 'react'
import { Manrope } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import "../public/css/style.css"
import "../public/css/responsive.css"
import 'react-loading-skeleton/dist/skeleton.css'
// import "../public/css/responsiveStyle.css"

import Head from 'next/head'
import Header from '@/Components/Header/Header'
import Footer from '@/Components/Footer/Footer'
import { settingsLoaded } from '@/store/reducer/settingsSlice'
import Loader from '@/Components/Loader/Loader'
// import Document, { Html, Head, Main, NextScript } from 'next/document';
const manrope = Manrope({ subsets: ['latin'] })

function MyApp({ Component, pageProps, data }) {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        settingsLoaded(null, null, (res) => {
            setTimeout(() => {
                console.log(res)
                setIsLoading(false)

            }, 5000)
        },
            (err) => {
                console.log(err)
            })

    }, []);

    return (
        <Fragment>

            <Head>
                <title>eBroker- Material Design React Admin Template</title>
                <meta
                    name='description'
                    content="e-Broker – Material Design React Admin Dashboard Template – is the most developer friendly & highly customizable Admin Dashboard Template based on MUI v5."
                />
                <meta name='keywords' content='Material Design, MUI, Admin Template, React Admin Template' />
                <meta name='viewport' content='initial-scale=1, width=device-width' />
            </Head>

            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <Header />
                    {
                        isLoading ?
                            (
                                // <Loader />
                                <Loader />
                            ) :
                            (

                                <Component {...pageProps} data={data} />
                            )
                    }
                    <Footer />
                </PersistGate>
            </Provider>
        </Fragment>
    );
}

export default MyApp;
