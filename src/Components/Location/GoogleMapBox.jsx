import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { settingsData } from '@/store/reducer/settingsSlice';
import { useSelector } from 'react-redux';

const GoogleMapBox = ({ initialLocation, onSelectLocation }) => {

    const GoogleMapData = useSelector(settingsData);
  const GoogleMapApi = GoogleMapData.place_api_key;
  const libraries = ['places'];

    const [location, setLocation] = useState(initialLocation);

    const onMarkerDragStart = () => {
        console.log("Marker drag started"); // Log when marker drag starts
    };

    const onMarkerDragEnd = async (e) => {
        console.log("Marker drag end"); // Log when marker drag ends

        // Perform reverse geocoding and update the location state
        // You can use the same logic from your original component
        // ...

        // After reverse geocoding, update the location state
        setLocation({
            lat: e.latLng.lat(),
            lng: e.latLng.lng(),
            formatted_address: formattedAddress, // Your formatted address logic
            city: city, // Your city logic
        });
        onSelectLocation(location); // Notify the parent component
    };

    return (
        <LoadScript googleMapsApiKey="AIzaSyCwIJO3sTsgLVEE4bpHJty0osx_PT9cVS8" libraries={libraries}>
            <GoogleMap zoom={11} center={location} mapContainerStyle={{ height: "400px" }}>
                <Marker position={location} draggable={true} onDragStart={onMarkerDragStart} onDragEnd={onMarkerDragEnd} />
            </GoogleMap>
        </LoadScript>
    );
};

export default GoogleMapBox;
