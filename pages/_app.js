import { Provider, useSelector } from 'react-redux'
import { store, persistor } from '../src/store/store'
import { PersistGate } from 'redux-persist/integration/react'
import React, { useState } from 'react'
import { Fragment } from 'react'
import { Manrope } from 'next/font/google'
import "../public/css/style.css"
import "../public/css/responsive.css"
import 'bootstrap/dist/css/bootstrap.css'
import 'react-loading-skeleton/dist/skeleton.css'

import Head from 'next/head'
import { Toaster } from 'react-hot-toast'



function MyApp({ Component, pageProps, data }) {


    return (
        <Fragment>

            <Head>
                <title>eBroker |  Empower Your Real Estate Business</title>
                <meta name="description" content="Unlock your real estate potential with eBroker - the ultimate solution for your business. Streamline operations, boost efficiency, and succeed in style!" />
                {/* <meta name="keywords" content="Breaking news,Top stories,Headlines,Current events,Latest news,World news,National news,Local news,Politics,Business,Technology,Entertainment,Sports,Health,Science,Environment,Education,Crime,Immigration,Weather."> */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />

                {/* <!-- Facebook Meta Tags --> */}
                <meta property="og:url" content="https://newsweb.wrteam.me/" />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="en_GB" />
                <meta property="og:title" content="eBroker |  Empower Your Real Estate Business" />
                <meta property="og:description" content="Unlock your real estate potential with eBroker - the ultimate solution for your business. Streamline operations, boost efficiency, and succeed in style!" />
                <link rel='icon' href='./favicon.ico' />
            </Head>
            <Provider store={store}>
                <PersistGate persistor={persistor}>

                    <Component {...pageProps} data={data} />

                    <Toaster />
                </PersistGate>
            </Provider>
        </Fragment>
    );
}

export default MyApp;
