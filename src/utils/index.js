

import { store } from '@/store/store';
import localeTranslations from './locale/en.json';
import { useJsApiLoader } from '@react-google-maps/api';

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
