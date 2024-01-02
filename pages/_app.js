import React from "react";
import { Provider, useSelector } from "react-redux";
import { store, persistor } from "../src/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { Fragment } from "react";

import "../public/css/style.css";
import "../public/css/responsive.css";
import "bootstrap/dist/css/bootstrap.css";
import "react-loading-skeleton/dist/skeleton.css";

import Head from "next/head";
import { Toaster } from "react-hot-toast";
import PushNotificationLayout from "@/Components/firebaseNotification/PushNotificationLayout";


function MyApp({ Component, pageProps, data }) {

    return (
        <Fragment>
            <Head>
                <title>eBroker | Empower Your Real Estate Business</title>
                <meta name="description" content="Unlock your real estate potential with eBroker - the ultimate solution for your business. Streamline operations, boost efficiency, and succeed in style!" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />

                {/* <!-- Facebook Meta Tags --> */}
                <meta property="og:url" content="https://ebroker.wrteam.me/" />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="en_GB" />
                <meta property="og:title" content="eBroker |  Empower Your Real Estate Business" />
                <meta property="og:description" content="Unlock your real estate potential with eBroker - the ultimate solution for your business. Streamline operations, boost efficiency, and succeed in style!" />
                <link rel="shortcut icon" href="/favicon.ico" sizes="32x32" type="image/png" />
            </Head>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <PushNotificationLayout>
                        <Component {...pageProps} data={data} />
                    </PushNotificationLayout>

                    <Toaster />
                </PersistGate>
            </Provider>
        </Fragment>
    );
}

export default MyApp;
