import React, { useRef } from "react";
import { StandaloneSearchBox, useJsApiLoader } from "@react-google-maps/api";

const libraries = ['places'];
const LocationSearchBox = ({ onLocationSelected }) => {
  const inputRef = useRef();

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyA0B2eTsnUMMG4SN6Agjz7JD3w_gCDj1lE",
    libraries
  });

  const handlePlaceChanged = () => {
    const [place] = inputRef.current.getPlaces();
    if (place) {
      const locationData = {
        name: place.name,
        formatted_address: place.formatted_address,
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
        city: '',
        district: '',
        state: ''
      };

      // Split the formatted_address into components
      const addressComponents = place.formatted_address.split(', ');

      // Extract city, district, and state
      if (addressComponents.length >= 1) {
        locationData.city = addressComponents[0];
      }
      if (addressComponents.length >= 2) {
        locationData.district = addressComponents[1];
      }
      if (addressComponents.length >= 3) {
        locationData.state = addressComponents[2];
      }

      // console.log(locationData);
      onLocationSelected(locationData); // Pass the data to the parent component
    }
  }

  return (
    isLoaded
    &&
    <StandaloneSearchBox
      onLoad={ref => inputRef.current = ref}
      onPlacesChanged={handlePlaceChanged}
    >
      <input
        type="text"
        className="searchLocationInput"
        placeholder="Enter Location"
      />
    </StandaloneSearchBox>
  );
};

export default LocationSearchBox;