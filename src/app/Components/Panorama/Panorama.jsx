import React from 'react'
import './panoramaStyle.css'
import { Pannellum } from 'pannellum-react';
const Panorama = () => {

    Pannellum.viewer('panorama', {
        "type": "equirectangular",
        "panorama": "../../../assets/Images/Featured_List_4.jpg"
    });

    return (
        <>
            <div id="panorama"></div>



        </>
    )
}

export default Panorama
