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
// import "../public/css/responsiveStyle.css"

import Head from 'next/head'
import { Toaster } from 'react-hot-toast'
import PushNotificationLayout from '@/Components/PushNotificationLayout/PushNotificationLayout'


// import Document, { Html, Head, Main, NextScript } from 'next/document';
const manrope = Manrope({ subsets: ['latin'] })

function MyApp({ Component, pageProps, data }) {
    // console.log(Component)

    return (
        <Fragment>

            <Head>
            <title>eBroker- Material Design Next js Template</title>
                <meta name='description' content="e-Broker – Material Design Next js Admin Dashboard Template – is the most developer friendly & highly customizable Admin Dashboard Template based on MUI v5." />
                <meta name='keywords' content='Material Design, MUI, Admin Template, Next js Admin Template' />
                <meta name='viewport' content='initial-scale=1, width=device-width' />
                <link rel='icon' href='/favicon.ico' />
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
