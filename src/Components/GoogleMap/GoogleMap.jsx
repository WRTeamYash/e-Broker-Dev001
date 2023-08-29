'use client'
import {  Map, Marker } from 'google-maps-react';
import React from 'react';


const GoogleMap = (props) => {
    if (!window.google) {
        // Google Maps API is not loaded yet, you can display a loading message or handle it as needed.
        return <div>Loading Google Maps...</div>;
    }

    return (
        <Map
            google={props.google}
            zoom={14}
            initialCenter={{ lat: props.latitude, lng: props.longitude }}
        >
            <Marker position={{ lat: props.latitude, lng: props.longitude }} />
        </Map>
    );
};

export default GoogleMap;
