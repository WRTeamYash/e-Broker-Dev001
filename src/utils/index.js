

import { store } from '@/store/store';
import localeTranslations from './locale/en.json';
import { useJsApiLoader } from '@react-google-maps/api';
import { useSelector } from 'react-redux';
import { settingsData } from '@/store/reducer/settingsSlice';

// transalte strings 

export const translate = (label) => {
  const langLabel = store.getState().Language.languages.file_name &&
    store.getState().Language.languages.file_name[label];

  const enTranslation = localeTranslations;

  if (langLabel) {
    return langLabel;
  } else {
    return enTranslation[label];
  }
};

// is login user check
export const isLogin = () => {
  let user = store.getState()?.User_signup
  if (user) {
    try {
      if (user?.data?.token) {
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }
  return false;
}


// Load Google Maps
export const loadGoogleMaps = () => {
  return useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API,
    libraries: ['geometry', 'drawing', 'places'], // Include 'places' library
  });
};

//  LOAD STRIPE API KEY 
export const loadStripeApiKey = () => {
  const STRIPEData = store.getState()?.Settings;
  const StripeKey = STRIPEData?.data?.stripe_publishable_key
  if (StripeKey) {``
    return StripeKey
  }
  return false;
}


export const isDemoMode = (store) => {
  const systemSettingsData = settingsData(store);
  return systemSettingsData?.demo_mode || false;
};



// Function to format large numbers as strings with K, M, and B abbreviations
export const formatPriceAbbreviated = (price) => {
  if (price >= 1000000000) {
      return (price / 1000000000).toFixed(1) + 'B';
  } else if (price >= 1000000) {
      return (price / 1000000).toFixed(1) + 'M';
  } else if (price >= 1000) {
      return (price / 1000).toFixed(1) + 'K';
  } else {
      return price.toString();
  }
};


// Function to convert an image URL to inline SVG
export const convertImageToSvg = async (imageUrl) => {
  try {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);
    return `<img src="${objectUrl}" alt="converted-svg" />`;
  } catch (error) {
    console.error('Error converting image to SVG:', error);
    return null;
  }
};