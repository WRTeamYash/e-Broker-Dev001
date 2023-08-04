import { Provider } from 'react-redux'
import { store } from '../src/store/store'
import React, {useState} from 'react'
import { Children, Fragment, useEffect } from 'react'
import './globals.css'
import { Manrope } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import "../public/css/style.css"
import "../public/css/responsive.css"
// import "../public/css/responsiveStyle.css"

import Head from 'next/head'
import Header from '@/Components/Header/Header'
import Footer from '@/Components/Footer/Footer'
import { settingsLoaded } from '@/store/reducer/settingsSlice'
// import Document, { Html, Head, Main, NextScript } from 'next/document';
const manrope = Manrope({ subsets: ['latin'] })

function MyApp({ Component, pageProps, data }) {

    useEffect(() => {
        settingsLoaded(null, null, (res)=>{
            console.log(res)
        },
        (err)=>{
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
                <Header />
                <Component {...pageProps} data={data} />
                <Footer />
            </Provider>
        </Fragment>
    );
}

export default MyApp;
