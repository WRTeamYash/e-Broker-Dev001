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
        state: '',
        country: ''
      };

      // Split the formatted_address into components
      const addressComponents = place.address_components;

      // Extract city, district, state, and country
      addressComponents.forEach(component => {
        if (component.types.includes('locality')) {
          locationData.city = component.long_name;
        } else if (component.types.includes('sublocality')) {
          locationData.district = component.long_name;
        } else if (component.types.includes('administrative_area_level_1')) {
          locationData.state = component.long_name;
        } else if (component.types.includes('country')) {
          locationData.country = component.long_name;
        }
      });

      onLocationSelected(locationData); // Pass the data to the parent component
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent form submission on Enter key press
    }
  };

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
        onKeyPress={handleKeyPress} // Prevent form submission on Enter key press
      />
    </StandaloneSearchBox>
  );
};

export default LocationSearchBox;