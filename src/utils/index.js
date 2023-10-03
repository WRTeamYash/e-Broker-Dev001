

import { store } from '@/store/store';
import localeTranslations from './locale/en.json';

export const translate = (label) => {
  const langLabel = store.getState().Language.languages.file_name &&
    store.getState().Language.languages.file_name[label];

  // const langLabel = useSelector((state) => state.Language.languages.file_name[label]);
  const enTranslation = localeTranslations;

  if (langLabel) {
    // console.log("server side", langLabel);
    return langLabel;
  } else {
    // console.log("local side", enTranslation);
    return enTranslation[label];
  }
};

// is login user check
export const isLogin = () => {
  let user = store.getState()?.User_signup
  if (user) {
      try {
          // user = JSON.parse(user);
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
