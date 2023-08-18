"use client"
import React, { useEffect, useState, useMemo } from 'react';
import { Modal } from 'react-bootstrap';
import { RiCloseCircleLine } from 'react-icons/ri';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Loader from '../Loader/Loader';

const Location = ({ isOpen, onClose, onSelectLocation }) => {
  const libraries = ['places'];
  const [isAddressLoading, setisAddressLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const [localLocation, setLocalLocation] = useState({
    city: "",
    formatted_address: "",
    lat: parseFloat(0),
    lng: parseFloat(0),
  });

  const center = useMemo(() => ({
    lat: localLocation.lat,
    lng: localLocation.lng,
  }), [localLocation.lat, localLocation.lng]);

  const onMarkerDragStart = () => {
    setisAddressLoading(true);
  };

  const onMarkerDragEnd = async (e) => {
    const geocoder = new window.google.maps.Geocoder();
    try {
      const results = await new Promise((resolve, reject) => {
        geocoder.geocode({ location: { lat: e.latLng.lat(), lng: e.latLng.lng() } }, (results, status) => {
          if (status === 'OK') {
            resolve(results);
          } else {
            reject(status);
          }
        });
      });

      if (results.length > 0) {
        const addressComponents = results[0].address_components;
        let formattedAddress = "";
        let city = "";

        for (const component of addressComponents) {
          if (component.types.includes("locality")) {
            city = component.long_name;
          }
        }

        if (results[0].formatted_address) {
          formattedAddress = results[0].formatted_address;
        } else {
          formattedAddress = city;
        }

        setLocalLocation((prevLocation) => ({
          ...prevLocation,
          formatted_address: formattedAddress,
          city: city,
          lat: e.latLng.lat(),
          lng: e.latLng.lng(),
        }));

        setisAddressLoading(false);
      }
    } catch (error) {
      console.error("Error during reverse geocoding:", error);
    }
  };

  useEffect(() => {
    if (isOpen) {
      // Create a script element to load the Google Maps API
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA0B2eTsnUMMG4SN6Agjz7JD3w_gCDj1lE&libraries=${libraries.join(',')}`;
      script.async = true;
      script.onload = () => {
        // The script has loaded, you can now safely access window.google
        const geolocation = navigator.geolocation;
        if (geolocation) {
          geolocation.getCurrentPosition(
            async (position) => {
              const { latitude, longitude } = position.coords;
              // Perform reverse geocoding and update localLocation
              const geocoder = new window.google.maps.Geocoder();
              try {
                const results = await new Promise((resolve, reject) => {
                  geocoder.geocode({ location: { lat: latitude, lng: longitude } }, (results, status) => {
                    if (status === 'OK') {
                      resolve(results);
                    } else {
                      reject(status);
                    }
                  });
                });

                if (results.length > 0) {
                  const addressComponents = results[0].address_components;
                  let formattedAddress = "";
                  let city = "";

                  for (const component of addressComponents) {
                    if (component.types.includes("locality")) {
                      city = component.long_name;
                    }
                  }

                  if (results[0].formatted_address) {
                    formattedAddress = results[0].formatted_address;
                  } else {
                    formattedAddress = city;
                  }

                  setLocalLocation((prevLocation) => ({
                    ...prevLocation,
                    formatted_address: formattedAddress,
                    city: city,
                    lat: latitude,
                    lng: longitude,
                  }));

                  setisAddressLoading(false);
                }
              } catch (error) {
                console.error("Error during reverse geocoding:", error);
              }
            },
            (error) => {
              console.error("Error getting geolocation:", error);
            }
          );
        }
      };
      document.head.appendChild(script);
    }
  }, [isOpen]);

  const handleConfirmLocation = () => {
    // Assuming that `localLocation` holds the selected location
    onSelectLocation(localLocation);
    onClose();
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      )
        : (
          <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY} libraries={libraries}>
            <Modal show={isOpen} onHide={onClose} size="md" centered className='current_loction_modal' backdrop="static" keyboard={false}>
              <Modal.Header>
                <Modal.Title>Select Your Current Location</Modal.Title>
                <RiCloseCircleLine className='close-icon' size={40} onClick={onClose} />
              </Modal.Header>
              <Modal.Body>
                <div className='w-100'>
                  {isOpen && (
                    <GoogleMap zoom={11} center={center} mapContainerStyle={{ height: "400px" }}>
                      <Marker position={center} draggable={true} onDragStart={onMarkerDragStart} onDragEnd={onMarkerDragEnd} />
                    </GoogleMap>
                  )}
                </div>
              </Modal.Body>
              <Modal.Footer>
                <div className='confirm_loc'>
                  <button onClick={handleConfirmLocation}>Confirm</button>
                </div>
              </Modal.Footer>
            </Modal>
          </LoadScript >
        )}
    </>
  );
};

export default Location;


