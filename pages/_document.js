import React from 'react';
// ** Next Import
import { Html, Head, Main, NextScript } from 'next/document';
const CustomDocument = () => {


    return (
        <Html>
            <Head>
                <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css" />
                <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js"></script>
                {/* <script
                    type="text/javascript"
                    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA0B2eTsnUMMG4SN6Agjz7JD3w_gCDj1lE&libraries=places"
                ></script> */}

            </Head>

            <body>
                <Main />
                <NextScript />
                <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
                <script>
                    AOS.init();
                </script>
             
            </body>
        </Html>
    );
};
export default CustomDocument;






