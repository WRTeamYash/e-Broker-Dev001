import React, { useRef, useState, useEffect } from "react";
import { StandaloneSearchBox } from "@react-google-maps/api";
import { loadGoogleMaps } from "@/utils";

const LocationSearchBox = ({ onLocationSelected, initialLatitude, initialLongitude, selectedLocation }) => {
    const inputRef = useRef();
    const { isLoaded } = loadGoogleMaps();
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        if (selectedLocation) {
            setInputValue(selectedLocation.formatted_address);
        } else {
            setInputValue("");
        }
    }, [selectedLocation]);

    const handlePlaceChanged = () => {
        const [place] = inputRef.current.getPlaces();
        if (place) {
            const locationData = {
                name: place.name,
                formatted_address: place.formatted_address,
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng(),
                city: "",
                district: "",
                state: "",
                country: "",
            };

            const addressComponents = place.address_components;

            addressComponents.forEach((component) => {
                if (component.types.includes("locality")) {
                    locationData.city = component.long_name;
                } else if (component.types.includes("sublocality")) {
                    locationData.district = component.long_name;
                } else if (component.types.includes("administrative_area_level_1")) {
                    locationData.state = component.long_name;
                } else if (component.types.includes("country")) {
                    locationData.country = component.long_name;
                }
            });

            onLocationSelected(locationData);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
        }
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        isLoaded && (
            <div>
                <StandaloneSearchBox onLoad={(ref) => (inputRef.current = ref)} onPlacesChanged={handlePlaceChanged}>
                    <input
                        type="text"
                        className="searchLocationInput"
                        placeholder="Enter Location"
                        onKeyPress={handleKeyPress}
                        onChange={handleInputChange}
                        value={inputValue}
                    />
                </StandaloneSearchBox>
            </div>
        )
    );
};

export default LocationSearchBox;
