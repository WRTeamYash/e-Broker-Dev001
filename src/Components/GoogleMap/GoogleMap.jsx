
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import React from 'react';

const GoogleMap = (props) => {
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

export default GoogleApiWrapper({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
})(GoogleMap);
